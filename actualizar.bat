@echo off
setlocal

:: Carpeta origen y destino
set ORIGEN=C:\Users\Administrator\Downloads\pagina ahora si
set DESTINO=C:\Users\Administrator\Downloads\pagina ahora si\Jesux011.github.io

:: Archivos a copiar
set ARCHIVOS=index.html script.js style.css data.js

echo ---------------------------------------------
echo Copiando archivos desde: %ORIGEN%
echo Hacia: %DESTINO%
echo ---------------------------------------------

for %%F in (%ARCHIVOS%) do (
    copy /Y "%ORIGEN%\%%F" "%DESTINO%\%%F"
)

echo ---------------------------------------------
echo Archivos copiados correctamente.
echo Subiendo a GitHub...
echo ---------------------------------------------

:: Cambiar a carpeta destino
cd /d "%DESTINO%"

:: Git commit y push
git add .
git commit -m "Actualización automática con nuevos juegos"
git push origin main

echo ---------------------------------------------
echo ¡Subido con éxito a GitHub Pages!
echo Revisa: https://jesux011.github.io/
pause
