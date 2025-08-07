@echo off
setlocal enabledelayedexpansion

:: CONFIGURA TUS RUTAS AQUÍ:
set ORIGEN=C:\Users\Administrator\Downloads\pagina ahora si
set DESTINO=C:\Users\Administrator\Downloads\pagina ahora si\Jesux011.github.io

:: Archivos a copiar (puedes agregar más si quieres)
set ARCHIVOS=index.html script.js style.css data.js

echo -----------------------------------------------
echo 🚀 Copiando archivos desde: %ORIGEN%
echo      hacia: %DESTINO%
echo -----------------------------------------------

for %%F in (%ARCHIVOS%) do (
    copy /Y "%ORIGEN%\%%F" "%DESTINO%\%%F" >nul
    echo Copiado: %%F
)

echo -----------------------------------------------
echo 🔁 Haciendo pull de GitHub (por si hubo cambios)
echo -----------------------------------------------
cd /d "%DESTINO%"
git pull origin main --allow-unrelated-histories

echo -----------------------------------------------
echo ✅ Subiendo tus cambios a GitHub Pages
echo -----------------------------------------------
git add .
git commit -m "Actualización automática con nuevos juegos"
git push origin main

echo -----------------------------------------------
echo 🎉 ¡Subido con éxito!
echo 🌐 Ver en: https://jesux011.github.io/
pause
