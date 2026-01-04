#!/bin/bash
# Link shared-styles for local development

set -e

echo "🔗 Setting up local development links for @protocolsync/shared-styles..."
echo ""

# Step 1: Create global link in shared-styles
echo "1️⃣  Creating global npm link in shared-styles..."
cd /Users/davidtay/Documents/Projects/protocolsync-shared-styles
npm link
echo "✅ Global link created"
echo ""

# Step 2: Link in portal
echo "2️⃣  Linking shared-styles in portal..."
cd /Users/davidtay/Documents/Projects/protocolsync-portal
npm link @protocolsync/shared-styles
echo "✅ Portal linked"
echo ""

# Step 3: Link in admin
echo "3️⃣  Linking shared-styles in admin..."
cd /Users/davidtay/Documents/Projects/protocolsync-admin
npm link @protocolsync/shared-styles
echo "✅ Admin linked"
echo ""

echo "✨ Done! You can now edit SCSS files in shared-styles and see real-time changes."
echo ""
echo "To unlink and restore GitHub version, run: ./unlink-local.sh"
