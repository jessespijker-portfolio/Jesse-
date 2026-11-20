# Eenvoudige lokale webserver voor deze map (geen Python/Node nodig).
# Gebruik: powershell -ExecutionPolicy Bypass -File serve.ps1 [-Port 8080]
param([int]$Port = 8080)

$root = $PSScriptRoot
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "Serving $root on http://localhost:$Port/"

$types = @{
  '.html' = 'text/html; charset=utf-8'; '.htm' = 'text/html; charset=utf-8'
  '.css' = 'text/css; charset=utf-8'; '.js' = 'text/javascript; charset=utf-8'
  '.jsx' = 'text/babel; charset=utf-8'; '.json' = 'application/json; charset=utf-8'
  '.md' = 'text/markdown; charset=utf-8'; '.svg' = 'image/svg+xml'
  '.png' = 'image/png'; '.jpg' = 'image/jpeg'; '.jpeg' = 'image/jpeg'
  '.gif' = 'image/gif'; '.webp' = 'image/webp'; '.ico' = 'image/x-icon'
  '.woff' = 'font/woff'; '.woff2' = 'font/woff2'; '.ts' = 'text/plain; charset=utf-8'
  '.mp4' = 'video/mp4'; '.webm' = 'video/webm'
}

try {
  while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $res = $ctx.Response
    try {
      $rel = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart('/')
      $path = [IO.Path]::GetFullPath((Join-Path $root $rel))
      if (-not $path.StartsWith($root, [StringComparison]::OrdinalIgnoreCase)) {
        $res.StatusCode = 403
      } else {
        if (Test-Path -LiteralPath $path -PathType Container) { $path = Join-Path $path 'index.html' }
        if (Test-Path -LiteralPath $path -PathType Leaf) {
          $ext = [IO.Path]::GetExtension($path).ToLower()
          $res.ContentType = if ($types.ContainsKey($ext)) { $types[$ext] } else { 'application/octet-stream' }
          $res.Headers.Add('Cache-Control', 'no-store')
          $res.Headers.Add('Accept-Ranges', 'bytes')
          $fs = [IO.File]::OpenRead($path)
          try {
            $len = $fs.Length; $start = 0L; $end = $len - 1
            $range = $ctx.Request.Headers['Range']
            if ($range -match '^bytes=(\d*)-(\d*)$') {
              if ($Matches[1] -ne '') { $start = [long]$Matches[1] }
              if ($Matches[2] -ne '') { $end = [math]::Min([long]$Matches[2], $len - 1) }
              elseif ($Matches[1] -eq '') { $start = 0 }
              $res.StatusCode = 206
              $res.Headers.Add('Content-Range', "bytes $start-$end/$len")
            }
            $count = $end - $start + 1
            $res.ContentLength64 = $count
            if ($ctx.Request.HttpMethod -eq 'HEAD') { $count = 0 }
            $fs.Position = $start
            $buf = New-Object byte[] 65536
            while ($count -gt 0) {
              $n = $fs.Read($buf, 0, [int][math]::Min($buf.Length, $count))
              if ($n -le 0) { break }
              $res.OutputStream.Write($buf, 0, $n); $count -= $n
            }
          } finally { $fs.Close() }
        } else {
          $res.StatusCode = 404
        }
      }
      Write-Host "$($res.StatusCode) $($ctx.Request.Url.AbsolutePath)"
    } catch {
      # Bijv. de browser breekt een videostream af; headers kunnen dan al verstuurd zijn
      try { $res.StatusCode = 500 } catch {}
      Write-Host "ERR $($_.Exception.Message)"
    } finally {
      try { $res.Close() } catch {}
    }
  }
} finally {
  $listener.Stop()
}
