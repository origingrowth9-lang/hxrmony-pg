#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Deploy Harmony platform to GitHub and Vercel
.DESCRIPTION
    This script automates the process of pushing your project to GitHub
    and deploying it to Vercel with auto-deployment enabled.
.PARAMETER GitHubUsername
    Your GitHub username (required)
.PARAMETER RepositoryName
    Repository name on GitHub (default: harmony)
.EXAMPLE
    .\deploy.ps1 -GitHubUsername "your-username"
    .\deploy.ps1 -GitHubUsername "your-username" -RepositoryName "my-platform"
#>

param(
    [Parameter(Mandatory = $true)]
    [string]$GitHubUsername,
    
    [Parameter(Mandatory = $false)]
    [string]$RepositoryName = "harmony"
)

# Colors for output
$Colors = @{
    Success = 'Green'
    Error   = 'Red'
    Info    = 'Cyan'
    Warning = 'Yellow'
}

function Write-Section {
    param([string]$Message)
    Write-Host "`n" + ("=" * 60) -ForegroundColor $Colors.Info
    Write-Host "  $Message" -ForegroundColor $Colors.Info
    Write-Host ("=" * 60) -ForegroundColor $Colors.Info
}

function Write-Success {
    param([string]$Message)
    Write-Host "✓ $Message" -ForegroundColor $Colors.Success
}

function Write-Error-Custom {
    param([string]$Message)
    Write-Host "✗ $Message" -ForegroundColor $Colors.Error
}

function Write-Info {
    param([string]$Message)
    Write-Host "→ $Message" -ForegroundColor $Colors.Info
}

# Check if git is installed
Write-Section "Checking prerequisites"
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Error-Custom "Git is not installed or not in PATH"
    exit 1
}
Write-Success "Git is installed"

# Check if we're in a git repository
if (-not (Test-Path .git)) {
    Write-Error-Custom "Not in a git repository"
    exit 1
}
Write-Success "Git repository found"

# Rename branch to main if needed
Write-Section "Configuring git branch"
$currentBranch = git rev-parse --abbrev-ref HEAD
Write-Info "Current branch: $currentBranch"

if ($currentBranch -ne "main") {
    Write-Info "Renaming branch to 'main'..."
    git branch -M main
    Write-Success "Branch renamed to 'main'"
}
else {
    Write-Success "Already on 'main' branch"
}

# Check if remote exists
Write-Section "Configuring git remote"
$remoteUrl = "https://github.com/$GitHubUsername/$RepositoryName.git"
$existingRemote = git remote get-url origin 2>$null

if ($existingRemote -and $existingRemote -ne $remoteUrl) {
    Write-Info "Updating existing remote..."
    git remote set-url origin $remoteUrl
    Write-Success "Remote updated: $remoteUrl"
}
elseif (-not $existingRemote) {
    Write-Info "Adding remote origin..."
    git remote add origin $remoteUrl
    Write-Success "Remote added: $remoteUrl"
}
else {
    Write-Success "Remote already configured: $remoteUrl"
}

# Push to GitHub
Write-Section "Pushing to GitHub"
Write-Info "This will push your code to: $remoteUrl"
Write-Host "Note: You may need to authenticate with GitHub" -ForegroundColor $Colors.Warning

try {
    git push -u origin main
    Write-Success "Code pushed to GitHub successfully!"
}
catch {
    Write-Error-Custom "Failed to push to GitHub"
    Write-Host $_.Exception.Message -ForegroundColor $Colors.Error
    Write-Info "Please check that:"
    Write-Info "  - Your GitHub username is correct"
    Write-Info "  - The repository '$RepositoryName' exists on GitHub"
    Write-Info "  - You have push access to the repository"
    exit 1
}

# Display next steps
Write-Section "Next Steps - Deploy to Vercel"
Write-Host @"

Your code is now on GitHub! 🎉

To deploy to Vercel:

1. Visit: https://vercel.com/new
2. Click "Import Git Repository"
3. Connect your GitHub account (if not already connected)
4. Select repository: $GitHubUsername/$RepositoryName
5. Vercel will auto-detect it's a Next.js project
6. Click "Deploy" and wait for the magic ✨

Once deployed, your site will be available at:
  https://$($RepositoryName.ToLower())-xxxxx.vercel.app

Future deployments will be automatic:
  - Push to 'main' → Production deployment
  - Create PR → Automatic preview deployment
  - Merge PR → Auto-deploy to production

"@ -ForegroundColor $Colors.Info

Write-Success "Setup complete! 🚀"
Write-Host ""
