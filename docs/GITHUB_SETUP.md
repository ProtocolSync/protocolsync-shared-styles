# GitHub Setup Instructions

## Step 1: Create GitHub Repository

1. Go to GitHub and create a new **private** repository:
   - Repository name: `protocolsync-shared-styles`
   - Description: "Shared SCSS design system for ProtocolSync applications"
   - Visibility: **Private**
   - Do NOT initialize with README (we already have one)

2. Note the repository URL. It should be something like:
   - HTTPS: `https://github.com/YOUR_ORG/protocolsync-shared-styles.git`
   - SSH: `git@github.com:YOUR_ORG/protocolsync-shared-styles.git`

## Step 2: Push to GitHub

Run these commands in the `protocolsync-shared-styles` directory:

```bash
cd /Users/davidtay/Documents/Projects/protocolsync-shared-styles

# Add the remote (replace YOUR_ORG with your GitHub organization/username)
git remote add origin git@github.com:YOUR_ORG/protocolsync-shared-styles.git

# Push to main branch
git push -u origin main

# Push the version tag
git push origin v1.0.0
```

## Step 3: Verify

After pushing, verify:
- Repository shows all files on GitHub
- Tag `v1.0.0` appears in the "Releases" section

## Step 4: Update Applications

Once pushed to GitHub, the portal and admin apps can reference it with:

```json
{
  "dependencies": {
    "@protocolsync/shared-styles": "github:YOUR_ORG/protocolsync-shared-styles#v1.0.0"
  }
}
```

## CI/CD Configuration

For GitHub Actions, add this to your workflow file:

```yaml
- name: Configure Git for private dependencies
  run: |
    git config --global url."https://${{ secrets.GITHUB_TOKEN }}@github.com/".insteadOf "https://github.com/"
```

For other CI/CD systems, you may need to set up deploy keys or access tokens.

## Future Updates

To release a new version:

1. Make changes to the SCSS files
2. Commit the changes
3. Tag with a new version:
   ```bash
   git tag v1.1.0
   git push origin v1.1.0
   ```
4. Update apps to use the new version in package.json
