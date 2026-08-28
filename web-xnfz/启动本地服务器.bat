@echo off
chcp 65001 >nul
title 外伤失血性休克患者抢救护理 - 本地服务器
echo ============================================
echo   外伤失血性休克患者抢救护理 - 本地服务器
echo ============================================
echo.
echo 正在启动本地Web服务器...
echo.

cd /d "%~dp0"

echo 请在浏览器中访问以下地址：
echo.
echo   http://localhost:8080/a001index.html
echo.
echo 按Ctrl+C关闭服务器
echo.

start http://localhost:8080/a001index.html

python -m http.server 8080

pause
