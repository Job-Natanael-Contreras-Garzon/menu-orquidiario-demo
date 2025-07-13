# Script para descargar imágenes específicas del menú de El Orquideario
# Ejecutar con: .\scripts\download-menu-items.ps1

Write-Host "🍰 Descargando imágenes específicas del menú..." -ForegroundColor Green
Write-Host ""

# Crear directorios
$directories = @(
    "public\images\menu\pastries",
    "public\images\menu\salty"
)

foreach ($dir in $directories) {
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "📁 Directorio creado: $dir" -ForegroundColor Yellow
    }
}

# IMÁGENES DE REPOSTERÍA - basadas en tu menú actual
$pastryItems = @(
    @{ Id = "PAS-01"; Name = "apple-crumble.jpg"; Url = "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Torta Apple Crumble" },
    @{ Id = "PAS-02"; Name = "red-velvet.jpg"; Url = "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Torta Red Velvet" },
    @{ Id = "PAS-03"; Name = "carrot-cake.jpg"; Url = "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Torta de Zanahoria" },
    @{ Id = "PAS-04"; Name = "chocolate-cake.jpg"; Url = "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Torta de Chocolate" },
    @{ Id = "PAS-05"; Name = "cheesecake.jpg"; Url = "https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Cheesecake" },
    @{ Id = "PAS-06"; Name = "brownie.jpg"; Url = "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Brownie" },
    @{ Id = "PAS-07"; Name = "tiramisu.jpg"; Url = "https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Postre Tiramisú" },
    @{ Id = "PAS-08"; Name = "creme-brulee.jpg"; Url = "https://images.pexels.com/photos/3026802/pexels-photo-3026802.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Crème Brûlée" },
    @{ Id = "PAS-09"; Name = "yogurt-bowl.jpg"; Url = "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Yogurt Bowl" },
    @{ Id = "PAS-10"; Name = "orange-cake.jpg"; Url = "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Queque de Naranja" }
)

# IMÁGENES DE SALADOS - basadas en tu menú actual
$saltyItems = @(
    @{ Id = "SAL-01"; Name = "bruschetta-capri.jpg"; Url = "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Bruschetta Capri" },
    @{ Id = "SAL-02"; Name = "croissant-blt.jpg"; Url = "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Croissant BLT" },
    @{ Id = "SAL-03"; Name = "croissant-hawaiano.jpg"; Url = "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Croissant Hawaiano" },
    @{ Id = "SAL-04"; Name = "croissant-jamon-huevo.jpg"; Url = "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Croissant Jamón & Huevo" },
    @{ Id = "SAL-05"; Name = "bruschetta-caprese.jpg"; Url = "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Bruschetta Caprese" },
    @{ Id = "SAL-06"; Name = "bruschetta-atun.jpg"; Url = "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Bruschetta de Atún" },
    @{ Id = "SAL-07"; Name = "french-toast.jpg"; Url = "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "French Toast" },
    @{ Id = "SAL-08"; Name = "sandwich-lomito.jpg"; Url = "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Sandwich de Lomito" },
    @{ Id = "SAL-09"; Name = "croque-madame.jpg"; Url = "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Croque Madame" },
    @{ Id = "SAL-10"; Name = "crostini-pernil.jpg"; Url = "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Crostini de Pernil" },
    @{ Id = "SAL-11"; Name = "berry-tostada.jpg"; Url = "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Berry Tostada" },
    @{ Id = "SAL-12"; Name = "classic-pancakes.jpg"; Url = "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Classic Pancakes" },
    @{ Id = "SAL-13"; Name = "desayuno-americano.jpg"; Url = "https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Desayuno Americano" },
    @{ Id = "SAL-14"; Name = "omelette-confit.jpg"; Url = "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Omelette Confit" },
    @{ Id = "SAL-15"; Name = "la-portobello.jpg"; Url = "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "La Portobello" },
    @{ Id = "SAL-16"; Name = "holy-guac.jpg"; Url = "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800"; Description = "Holy Guac" }
)

# Función para descargar imagen
function Download-MenuItem {
    param($Item, $Category)
    
    $outputPath = "public\images\menu\$Category\$($Item.Name)"
    
    try {
        Write-Host "⬇️  [$($Item.Id)] $($Item.Description)..." -ForegroundColor Cyan
        Invoke-WebRequest -Uri $Item.Url -OutFile $outputPath -UseBasicParsing
        Write-Host "✅ Guardado: $outputPath" -ForegroundColor Green
        Start-Sleep -Milliseconds 800  # Pausa para evitar sobrecarga
        return $true
    }
    catch {
        Write-Host "❌ Error descargando [$($Item.Id)] $($Item.Description): $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

# Contadores
$successCount = 0
$totalCount = 0

# Descargar imágenes de repostería
Write-Host "🧁 DESCARGANDO REPOSTERÍA..." -ForegroundColor Magenta
foreach ($item in $pastryItems) {
    if (Download-MenuItem -Item $item -Category "pastries") {
        $successCount++
    }
    $totalCount++
}

# Descargar imágenes de salados
Write-Host "`n🥪 DESCARGANDO SALADOS..." -ForegroundColor Magenta
foreach ($item in $saltyItems) {
    if (Download-MenuItem -Item $item -Category "salty") {
        $successCount++
    }
    $totalCount++
}

# Resumen final
Write-Host "`n🎉 ¡Descarga completada!" -ForegroundColor Green
Write-Host "📊 Éxito: $successCount/$totalCount imágenes" -ForegroundColor Yellow
Write-Host "`n📁 Ubicaciones:" -ForegroundColor White
Write-Host "   🧁 Repostería: public\images\menu\pastries\" -ForegroundColor Yellow
Write-Host "   🥪 Salados: public\images\menu\salty\" -ForegroundColor Yellow
Write-Host "`n🔧 Próximo paso: Actualizar menu-data.ts con las nuevas rutas" -ForegroundColor Cyan
