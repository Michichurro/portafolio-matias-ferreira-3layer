@echo off
title Portafolio Matias Ferreira Server
cd /d "%~dp0"

echo ==============================================
echo Iniciando Portafolio de Matias Ferreira...
echo ==============================================
echo.

:: Abrir el navegador despues de 2 segundos para dar tiempo al servidor
start "" "http://localhost:5173"

:: Iniciar el servidor de desarrollo
npm run dev
