@echo off
title Mahran Hadj Salah - Portfolio Server
cd /d "%~dp0"

echo ====================================================
echo   Mahran Hadj Salah - Portfolio Launch System
echo ====================================================
echo.

:: Check if node is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH.
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

:: Check if node_modules exists; if not, run npm install
if not exist "node_modules\" (
    echo [INFO] node_modules not found. Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] npm install failed.
        pause
        exit /b 1
    )
    echo [SUCCESS] Dependencies installed!
    echo.
)

echo [INFO] Starting Vite development server...
echo [INFO] Your portfolio will be available at: http://localhost:3000/
echo.

:: Open browser automatically after 2 seconds in background
start "" cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:3000"

:: Start the development server
call npm run dev
pause
