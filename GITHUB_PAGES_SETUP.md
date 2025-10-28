# GitHub Pages Deployment Setup Guide

## ✅ Completed Steps

1. ✅ Configured Next.js for static export (`output: "export"`)
2. ✅ Updated contact form to use Google Forms (no server-side API needed)
3. ✅ Created GitHub Actions workflow for automatic deployment
4. ✅ Added CNAME file for custom domain (kwest-ai.com)
5. ✅ Added .nojekyll file to prevent Jekyll processing
6. ✅ Pushed all changes to GitHub

## 📋 Next Steps - Do These in Order

### Step 1: Add GitHub Secrets

Go to your repository settings and add these environment variables as secrets:

**Repository:** https://github.com/KaushikKwestAI/LandingPage

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add each of these secrets:

| Secret Name | Value (from your .env file) |
|---|---|
| `NEXT_PUBLIC_GOOGLE_FORM_ACTION` | `https://docs.google.com/forms/d/e/1FAIpQLSfza_epELBi4V87fw0ygOL_0_mm_f7mDLYisQJzxC98Rt9M8w/formResponse` |
| `NEXT_PUBLIC_GOOGLE_ENTRY_NAME` | `entry.2087058166` |
| `NEXT_PUBLIC_GOOGLE_ENTRY_EMAIL` | `entry.1371429100` |
| `NEXT_PUBLIC_GOOGLE_ENTRY_COMPANY` | `entry.833693761` |
| `NEXT_PUBLIC_GOOGLE_ENTRY_PHONE` | `entry.1797913493` |
| `NEXT_PUBLIC_GOOGLE_ENTRY_MESSAGE` | `entry.1540050008` |

**Important:** Copy these values exactly from your `.env` file!

### Step 2: Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. Under **Source**, select: **GitHub Actions**
3. Click **Save**

### Step 3: Configure Custom Domain

1. Still in **Settings** → **Pages**
2. Under **Custom domain**, enter: `kwest-ai.com`
3. Click **Save**
4. Wait for DNS check (may take a few minutes)
5. Once DNS check passes, enable **Enforce HTTPS**

### Step 4: Configure DNS (at your domain registrar)

Add these DNS records at your domain registrar (where you bought kwest-ai.com):

**For apex domain (kwest-ai.com):**
```
Type: A
Name: @
Value: 185.199.108.153
```
```
Type: A
Name: @
Value: 185.199.109.153
```
```
Type: A
Name: @
Value: 185.199.110.153
```
```
Type: A
Name: @
Value: 185.199.111.153
```

**For www subdomain (www.kwest-ai.com):**
```
Type: CNAME
Name: www
Value: kaushikkwestai.github.io
```

### Step 5: Trigger First Deployment

The GitHub Actions workflow will automatically run when you:
- Push to the `main` branch
- Or manually trigger it from the Actions tab

To manually trigger:
1. Go to **Actions** tab
2. Click on **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

### Step 6: Monitor Deployment

1. Go to **Actions** tab
2. Watch the workflow run (should take 2-3 minutes)
3. Once complete, your site will be live at:
   - `https://kaushikkwestai.github.io/LandingPage/` (GitHub Pages URL)
   - `https://kwest-ai.com` (once DNS propagates - can take 24-48 hours)

## 🔍 Verification Checklist

After deployment, verify:

- [ ] Site loads at GitHub Pages URL
- [ ] All pages render correctly
- [ ] Images and assets load
- [ ] Contact form opens when clicking "Talk to us"
- [ ] Contact form submits successfully (check your Google Form responses)
- [ ] Custom domain works (after DNS propagation)
- [ ] HTTPS is enabled

## 🐛 Troubleshooting

### If deployment fails:
1. Check the Actions tab for error logs
2. Verify all secrets are added correctly
3. Ensure the secrets match exactly what's in `.env`

### If contact form doesn't work:
1. Verify all Google Form entry IDs are correct
2. Check browser console for errors
3. Test submitting directly to your Google Form to ensure it's accepting responses

### If custom domain doesn't work:
1. Wait 24-48 hours for DNS propagation
2. Verify DNS records are correct using: https://dnschecker.org
3. Make sure CNAME file contains only `kwest-ai.com` (no http://, no trailing slash)

## 📝 Important Notes

- **No API routes:** GitHub Pages only supports static files, so we use Google Forms for contact submissions
- **Environment variables:** Must be prefixed with `NEXT_PUBLIC_` to be available in the browser
- **Build time:** Variables are embedded at build time, so you must re-deploy if you change them
- **HTTPS:** Always use HTTPS for production (automatically enabled by GitHub Pages)

## 🎉 You're Done!

Once you complete these steps, your KwestAI landing page will be:
- ✅ Live on your custom domain
- ✅ Automatically deployed on every push to main
- ✅ Using Google Forms for contact submissions
- ✅ Served over HTTPS
- ✅ Fast and reliable (GitHub's CDN)

For any issues, check the GitHub Actions logs or the troubleshooting section above.
