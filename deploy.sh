#!/bin/bash
# Deploy Harmony platform to GitHub and Vercel
# Usage: ./deploy.sh <github-username> [repository-name]

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Functions
write_section() {
    echo -e "\n${CYAN}$(printf '=%.0s' {1..60})${NC}"
    echo -e "${CYAN}  $1${NC}"
    echo -e "${CYAN}$(printf '=%.0s' {1..60})${NC}"
}

write_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

write_error() {
    echo -e "${RED}✗ $1${NC}"
}

write_info() {
    echo -e "${CYAN}→ $1${NC}"
}

# Check arguments
if [ -z "$1" ]; then
    write_error "GitHub username is required"
    echo "Usage: $0 <github-username> [repository-name]"
    echo "Example: $0 your-username"
    exit 1
fi

GITHUB_USERNAME=$1
REPOSITORY_NAME=${2:-harmony}

# Check if git is installed
write_section "Checking prerequisites"
if ! command -v git &> /dev/null; then
    write_error "Git is not installed"
    exit 1
fi
write_success "Git is installed"

# Check if we're in a git repository
if [ ! -d .git ]; then
    write_error "Not in a git repository"
    exit 1
fi
write_success "Git repository found"

# Rename branch to main if needed
write_section "Configuring git branch"
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
write_info "Current branch: $CURRENT_BRANCH"

if [ "$CURRENT_BRANCH" != "main" ]; then
    write_info "Renaming branch to 'main'..."
    git branch -M main
    write_success "Branch renamed to 'main'"
else
    write_success "Already on 'main' branch"
fi

# Configure git remote
write_section "Configuring git remote"
REMOTE_URL="https://github.com/$GITHUB_USERNAME/$REPOSITORY_NAME.git"
EXISTING_REMOTE=$(git remote get-url origin 2>/dev/null || echo "")

if [ -n "$EXISTING_REMOTE" ] && [ "$EXISTING_REMOTE" != "$REMOTE_URL" ]; then
    write_info "Updating existing remote..."
    git remote set-url origin "$REMOTE_URL"
    write_success "Remote updated: $REMOTE_URL"
elif [ -z "$EXISTING_REMOTE" ]; then
    write_info "Adding remote origin..."
    git remote add origin "$REMOTE_URL"
    write_success "Remote added: $REMOTE_URL"
else
    write_success "Remote already configured: $REMOTE_URL"
fi

# Push to GitHub
write_section "Pushing to GitHub"
write_info "This will push your code to: $REMOTE_URL"
echo -e "${YELLOW}Note: You may need to authenticate with GitHub${NC}"

if ! git push -u origin main; then
    write_error "Failed to push to GitHub"
    write_info "Please check that:"
    write_info "  - Your GitHub username is correct"
    write_info "  - The repository '$REPOSITORY_NAME' exists on GitHub"
    write_info "  - You have push access to the repository"
    exit 1
fi

write_success "Code pushed to GitHub successfully!"

# Display next steps
write_section "Next Steps - Deploy to Vercel"
cat << EOF

Your code is now on GitHub! 🎉

To deploy to Vercel:

1. Visit: https://vercel.com/new
2. Click "Import Git Repository"
3. Connect your GitHub account (if not already connected)
4. Select repository: $GITHUB_USERNAME/$REPOSITORY_NAME
5. Vercel will auto-detect it's a Next.js project
6. Click "Deploy" and wait for the magic ✨

Once deployed, your site will be available at:
  https://${REPOSITORY_NAME,,}-xxxxx.vercel.app

Future deployments will be automatic:
  - Push to 'main' → Production deployment
  - Create PR → Automatic preview deployment
  - Merge PR → Auto-deploy to production

EOF

write_success "Setup complete! 🚀"
echo ""
