# Local Development Workflow

This guide explains how to develop shared styles locally with real-time updates.

## Current Status

✅ **Local development is ACTIVE**
- Portal and Admin are currently linked to the local shared-styles repo
- Changes to SCSS files will be instantly reflected in both apps

## Quick Commands

### Enable Local Development
```bash
cd /Users/davidtay/Documents/Projects/protocolsync-shared-styles
./link-local.sh
```

This creates symlinks so that portal and admin use your local shared-styles files.

### Restore GitHub Version
```bash
cd /Users/davidtay/Documents/Projects/protocolsync-shared-styles
./unlink-local.sh
```

This removes symlinks and restores the GitHub version from package.json.

## Development Workflow

### 1. Start Local Development

```bash
# Link shared-styles to portal and admin
cd /Users/davidtay/Documents/Projects/protocolsync-shared-styles
./link-local.sh

# Start portal dev server (in a new terminal)
cd /Users/davidtay/Documents/Projects/protocolsync-portal
npm run dev

# Start admin dev server (in another terminal)
cd /Users/davidtay/Documents/Projects/protocolsync-admin
npm run dev
```

### 2. Make Style Changes

Edit any SCSS file in `protocolsync-shared-styles/scss/`:
- `_variables.scss` - Design tokens
- `_base.scss` - Base styles
- `_utilities.scss` - Utility classes
- `_components.scss` - Component styles
- `_layout.scss` - Layout patterns

**Changes are reflected instantly** in both portal and admin! 🚀

### 3. Publish Changes

When you're happy with your changes:

```bash
cd /Users/davidtay/Documents/Projects/protocolsync-shared-styles

# Commit your changes
git add .
git commit -m "Update: description of changes"

# Tag new version (increment appropriately)
git tag v1.1.0

# Push to GitHub
git push origin main
git push origin v1.1.0
```

### 4. Update Portal and Admin

```bash
# First, restore GitHub version
./unlink-local.sh

# Update portal
cd /Users/davidtay/Documents/Projects/protocolsync-portal
# Edit package.json: change v1.0.0 to v1.1.0
npm install
git add package.json package-lock.json
git commit -m "Update shared-styles to v1.1.0"

# Update admin
cd /Users/davidtay/Documents/Projects/protocolsync-admin
# Edit package.json: change v1.0.0 to v1.1.0
npm install
git add package.json package-lock.json
git commit -m "Update shared-styles to v1.1.0"
```

## Important Notes

### ✅ DO:
- Use `./link-local.sh` for local development
- Test changes in both portal and admin before publishing
- Use `./unlink-local.sh` before committing portal/admin changes
- Increment version numbers properly (v1.0.0 → v1.1.0)

### ❌ DON'T:
- Don't commit while links are active (package-lock.json will have file paths)
- Don't forget to tag new versions in shared-styles
- Don't edit styles directly in portal/admin (use shared-styles repo)
- Don't use `file:../protocolsync-shared-styles` in package.json

## Checking Link Status

```bash
# In portal or admin, check if linked:
cd /Users/davidtay/Documents/Projects/protocolsync-portal
ls -la node_modules/@protocolsync/shared-styles

# If it shows a symlink (->), you're in local dev mode
# If it shows a regular directory, you're using GitHub version
```

## Troubleshooting

### Changes not appearing?
1. Make sure vite dev server is running
2. Check that you ran `./link-local.sh` successfully
3. Try restarting the vite dev server

### npm install fails?
1. Run `./unlink-local.sh` first
2. Then run `npm install`

### Want to switch back to GitHub version?
```bash
./unlink-local.sh
```

## Version History

- v1.0.0 - Initial release with portal styles as baseline
