@echo off
setlocal
title Louis Vuitton - Local Server
where node >nul 2>nul
if errorlevel 1 (
    echo Node.js is missing. Install Node.js and try again.
    pause
    exit /b 1
)
set "FRONTEND_DIR=%~dp0"
if not exist "%~dp0..\louisvuitton-api\src\index.js" (
    echo Cannot find the louisvuitton-api folder beside this project.
    pause
    exit /b 1
)
pushd "%~dp0..\louisvuitton-api"
if not exist ".env" (
    echo Missing louisvuitton-api\.env. Configure the database using .env.example.
    popd
    pause
    exit /b 1
)
if not exist "node_modules\express\package.json" (
    call npm.cmd ci
    if errorlevel 1 (
        popd
        pause
        exit /b 1
    )
)
set "PORT=3001"
echo Starting website and API at http://localhost:3001
echo Keep this window open. Press Ctrl+C to stop.
echo Product and cart features require the MySQL database configured in .env.
node src/index.js --open
popd
pause
