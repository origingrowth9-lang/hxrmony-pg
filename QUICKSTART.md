# 🚀 Quick Start - Deploy en 3 pasos

## Paso 1: Crear repositorio en GitHub

1. Ve a **[github.com/new](https://github.com/new)**
2. Llena los campos:
   - **Repository name**: `harmony`
   - **Description**: Advanced DeepTech Platform
   - **Visibility**: Public
   - **NO marques** "Initialize this repository with..."
3. Haz clic en **"Create repository"**

---

## Paso 2: Subir código a GitHub

Abre **PowerShell** en la carpeta del proyecto:

```powershell
cd "C:\Users\Usuario\OneDrive\Escritorio\harmony"
.\deploy.ps1 -GitHubUsername "TU_USUARIO_GITHUB"
```

**Reemplaza `TU_USUARIO_GITHUB` con tu usuario de GitHub** (ej: `juan-perez`)

El script hará automáticamente:
- ✅ Configurar rama main
- ✅ Conectar GitHub remote
- ✅ Hacer push de todo el código

---

## Paso 3: Desplegar en Vercel

1. Ve a **[vercel.com/new](https://vercel.com/new)**
2. Haz clic en **"Import Git Repository"**
3. Selecciona tu repositorio `harmony`
4. Vercel detectará Next.js automáticamente
5. Haz clic en **"Deploy"**

**¡Tu sitio estará livo en ~3 minutos!** 🎉

---

## URLs después del Deploy

- **Production**: `https://harmony-xxxxx.vercel.app`
- **GitHub**: `https://github.com/TU_USUARIO/harmony`
- **Vercel Dashboard**: `https://vercel.com/dashboard`

---

## Auto-Deploy futuro

Ahora cada vez que hagas cambios:

```bash
git add .
git commit -m "Tu mensaje"
git push origin main
```

**¡Vercel desplegará automáticamente en segundos!**

---

## Troubleshooting

### "fatal: not a git repository"
```powershell
cd "C:\Users\Usuario\OneDrive\Escritorio\harmony"
# Asegúrate de estar en la carpeta correcta
```

### "Authentication failed"
GitHub necesita que autentiques. Sigue los prompts en PowerShell:
- Opción 1: GitHub CLI token
- Opción 2: Personal Access Token
- Opción 3: SSH key

### Build failed en Vercel
Verifica que compilé localmente:
```bash
npm run build
npm start
```

---

**¿Necesitas ayuda?** Revisa [DEPLOYMENT.md](./DEPLOYMENT.md) para más detalles.
