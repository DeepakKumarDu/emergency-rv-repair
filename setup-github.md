# Quick Setup Instructions

## Step 1: Create GitHub Repository

1. **Go to**: https://github.com/new
2. **Repository name**: `emergency-rv-repair`
3. **Description**: Emergency RV Repair Landing Page
4. **Visibility**: Choose Public or Private
5. **IMPORTANT**: Do NOT check "Add a README file", "Add .gitignore", or "Choose a license" (we already have these)
6. Click **"Create repository"**

## Step 2: Push Your Code

After creating the repository, run these commands:

```bash
git push -u origin main
```

**When prompted for credentials:**
- **Username**: `DeepakKumarDu`
- **Password**: You need to use a **Personal Access Token** (NOT your GitHub password)

### How to Create Personal Access Token:

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** > **"Generate new token (classic)"**
3. **Note**: "Emergency RV Repair Deployment"
4. **Expiration**: Choose 90 days or No expiration
5. **Select scopes**: Check `repo` (this gives full control of private repositories)
6. Click **"Generate token"**
7. **COPY THE TOKEN** (you won't see it again!)
8. Use this token as your password when pushing

## Step 3: Deploy to Vercel

### Method 1: Via Vercel Dashboard (Easiest)

1. Go to: https://vercel.com
2. Sign in with your **GitHub account**
3. Click **"Add New..."** > **"Project"**
4. Find and select `emergency-rv-repair` repository
5. Vercel will auto-detect settings (Vite framework)
6. Click **"Deploy"**
7. Wait 2-3 minutes for deployment
8. Your site will be live at: `https://emergency-rv-repair.vercel.app`

### Method 2: Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts.

## That's It! 🎉

Your site will be live on Vercel with automatic deployments whenever you push to GitHub.
