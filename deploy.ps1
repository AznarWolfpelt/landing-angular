# DEPLOY ANGULAR A GITHUB PAGES - SCRIPT SIMPLE

Write-Host "INICIANDO DEPLOY..." -ForegroundColor Cyan

# Paso 1: Limpiar
Write-Host "1. Limpiando build anterior..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Remove-Item -Recurse -Force dist
}

# Paso 2: Build
Write-Host "2. Construyendo proyecto..." -ForegroundColor Yellow
ng build --configuration production --base-href "/landing-angular/"
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR en el build!" -ForegroundColor Red
    exit 1
}

# Paso 3: Entrar a dist
Write-Host "3. Preparando archivos..." -ForegroundColor Yellow
cd dist/landing-angular

# Verificar estructura
Write-Host "   Estructura actual:" -ForegroundColor Gray
dir

# Paso 4: Mover archivos si hay carpeta browser
if (Test-Path "browser") {
    Write-Host "   Moviendo archivos desde browser..." -ForegroundColor Gray
    # Copiar todo de browser a la raiz
    Copy-Item browser\* -Destination . -Recurse -Force
    # Eliminar carpeta browser
    Remove-Item browser -Recurse -Force
}

# Paso 5: Crear archivos necesarios
New-Item .nojekyll -ItemType File -Force
Copy-Item index.html -Destination 404.html -Force

Write-Host "4. Archivos listos:" -ForegroundColor Yellow
dir

# Paso 6: Git
Write-Host "5. Subiendo a GitHub..." -ForegroundColor Green
git init
git add .
git commit -m "Deploy $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push -f https://github.com/AznarWolfpelt/landing-angular.git HEAD:gh-pages

# Paso 7: Final
Write-Host "6. DEPLOY COMPLETADO!" -ForegroundColor Green
Write-Host ""
Write-Host "URL: https://aznarwolfpelt.github.io/landing-angular/" -ForegroundColor Cyan
Write-Host "Espera 2-3 minutos y recarga la pagina." -ForegroundColor Yellow