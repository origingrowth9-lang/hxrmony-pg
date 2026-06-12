# 🚀 Deployment Guide - Harmony Platform

## Paso 1: Crear repositorio en GitHub

1. Ve a [GitHub.com](https://github.com/new)
2. Crea un nuevo repositorio:
   - **Repository name**: `harmony` (o el que prefieras)
   - **Description**: "Advanced DeepTech Platform"
   - **Visibility**: Public
   - **NO** inicialices README, .gitignore o license (ya los tenemos)
3. Haz clic en "Create repository"

## Paso 2: Conectar repositorio local con GitHub

Después de crear el repositorio, GitHub te mostrará comandos. Ejecuta:

```bash
cd harmony
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/harmony.git
git push -u origin main
```

**Reemplaza `YOUR_USERNAME` con tu usuario de GitHub**

## Paso 3: Verificar push

```bash
git remote -v
# Deberías ver:
# origin  https://github.com/YOUR_USERNAME/harmony.git (fetch)
# origin  https://github.com/YOUR_USERNAME/harmony.git (push)
```

## Paso 4: Deploy en Vercel

### Opción A: Via Dashboard (Recomendado)

1. Ve a [Vercel.com](https://vercel.com)
2. Haz clic en "New Project"
3. Selecciona "Import Git Repository"
4. Conecta tu cuenta GitHub y selecciona repositorio `harmony`
5. Vercel detectará automáticamente que es un proyecto Next.js
6. Haz clic en "Deploy"
7. ¡Listo! Tu proyecto estará disponible en `harmony-*.vercel.app`

### Opción B: Via Vercel CLI

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Desplegar
vercel

# Sigue las instrucciones interactivas
# - Confirm project setup
# - Link to existing project (si ya desplegaste una vez)
# - Deploy to production
```

## Paso 5: Configuración de dominios (Opcional)

En el dashboard de Vercel:
1. Ve a "Settings" → "Domains"
2. Agrega tu dominio personalizado
3. Sigue las instrucciones de DNS

## Paso 6: Variables de entorno (Si las necesitas)

En Vercel Dashboard:
1. Ve a "Settings" → "Environment Variables"
2. Agrega cualquier variable necesaria
3. Los cambios se aplican automáticamente

## Auto-Deploy

Una vez conectado Vercel con GitHub:
- **Cada push a `main`** = Deploy automático a producción
- **Cada Pull Request** = Deploy preview automático
- **Rollbacks instantáneos** disponibles en el dashboard

## Verificación Post-Deploy

```bash
# Ver historial de deployments
vercel list

# Ver logs en tiempo real
vercel logs
```

## Troubleshooting

### Build Failed
- Verifica que `npm run build` funciona localmente
- Revisa logs en Vercel dashboard
- Asegúrate de que todas las variables de entorno están configuradas

### Slow Performance
- Usa `npm run build` para un production build local
- Verifica tamaño de bundle: `npm install -g next-bundle-analyzer`
- Optimiza imágenes con Next.js Image component

## URLs Útiles

- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Repository**: https://github.com/YOUR_USERNAME/harmony
- **Production URL**: https://harmony-*.vercel.app
- **Analytics**: Disponible en Vercel dashboard

---

**¿Necesitas ayuda?**
- Documentación Vercel: https://vercel.com/docs
- Documentación Next.js: https://nextjs.org/docs
- GitHub Support: https://support.github.com
