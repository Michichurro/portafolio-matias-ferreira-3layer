$desktopPath = [Environment]::GetFolderPath("Desktop")
$shortcutPath = Join-Path -Path $desktopPath -ChildPath "Portafolio Matias.lnk"

# Crear el objeto WScript.Shell
$WshShell = New-Object -comObject WScript.Shell

# Crear el acceso directo
$Shortcut = $WshShell.CreateShortcut($shortcutPath)
$Shortcut.TargetPath = "c:\Users\mymot\OneDrive\Documentos\portafolio-matias-ferreira\launch-portfolio.bat"
$Shortcut.WorkingDirectory = "c:\Users\mymot\OneDrive\Documentos\portafolio-matias-ferreira"
$Shortcut.Description = "Lanzador del Portafolio de Matias Ferreira"
# Icono de una estrella o un globo, algo generico pero lindo
$Shortcut.IconLocation = "shell32.dll, 3"
$Shortcut.Save()

Write-Host "Acceso directo creado en: $shortcutPath"
