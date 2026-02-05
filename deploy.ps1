# deploy.ps1 - Script SIMPLE y FUNCIONAL

Write-Host "=== DEPLOY ANGULAR A GITHUB PAGES ===" -ForegroundColor Cyan
Write-Host ""

# 1. Limpiar
Write-Host "[1/6] Limpiando..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Remove-Item -Recurse -Force dist
}
Write-Host "OK" -ForegroundColor Green

# 2. Build
Write-Host "[2/6] Haciendo build..." -ForegroundColor Yellow
ng build --configuration production --base-href "/landing-angular/"
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR en build!" -ForegroundColor Red
    exit 1
}
Write-Host "OK" -ForegroundColor Green

# 3. Entrar a dist
Write-Host "[3/6] Preparando archivos..." -ForegroundColor Yellow
cd dist/landing-angular

# Crear archivos necesarios
New-Item .nojekyll -ItemType File -Force
Copy-Item browser/index.html -Destination browser/404.html -Force

Write-Host "OK" -ForegroundColor Green

# 4. Git init
Write-Host "[4/6] Inicializando git..." -ForegroundColor Yellow
git init
git add .
git commit -m "Deploy $(Get-Date -Format 'yyyy-MM-dd')"
Write-Host "OK" -ForegroundColor Green

# 5. Push
Write-Host "[5/6] Subiendo a GitHub..." -ForegroundColor Yellow
git push -f https://github.com/AznarWolfpelt/landing-angular.git HEAD:gh-pages
Write-Host "OK" -ForegroundColor Green

# 6. Mensaje final
Write-Host "[6/6] COMPLETADO!" -ForegroundColor Green
Write-Host ""
Write-Host "URL: https://aznarwolfpelt.github.io/landing-angular/" -ForegroundColor Cyan
Write-Host "Espera 2-3 minutos..." -ForegroundColor Yellow