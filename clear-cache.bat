@echo off
echo ========================================
echo Clearing Next.js Cache and Rebuilding
echo ========================================
echo.

echo [1/4] Stopping any running Node processes...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul

echo [2/4] Removing .next folder...
if exist .next rmdir /s /q .next
echo .next folder removed

echo [3/4] Removing node_modules/.cache...
if exist node_modules\.cache rmdir /s /q node_modules\.cache
echo Cache folder removed

echo [4/4] Starting development server...
echo.
echo ========================================
echo Cache cleared! Starting fresh server...
echo ========================================
echo.
echo IMPORTANT: Clear your browser cache too!
echo Press Ctrl+Shift+R in your browser
echo ========================================
echo.

npm run dev
