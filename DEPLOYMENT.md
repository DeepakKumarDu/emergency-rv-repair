# Deployment Guide

## GitHub Setup

1. Go to https://github.com/new
2. Create a new repository named: `emergency-rv-repair`
3. Make it **Public** (or Private if you prefer)
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)

Then run:
```bash
git push -u origin main
```

You'll be prompted for your GitHub credentials:
- Username: `DeepakKumarDu`
- Password: Use a **Personal Access Token** (not your password)

To create a Personal Access Token:
1. Go to GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Generate new token
3. Select scopes: `repo` (full control of private repositories)
4. Copy the token and use it as your password when pushing

## Vercel Deployment

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com and sign in with GitHub
2. Click "New Project"
3. Import your `emergency-rv-repair` repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts to deploy.

## Environment Variables

No environment variables needed for this project.

## Custom Domain (Optional)

After deployment, you can add a custom domain in Vercel dashboard:
1. Go to your project settings
2. Click "Domains"
3. Add your domain

## Build Settings

Vercel will automatically detect:
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

All settings are configured in `vercel.json`.
