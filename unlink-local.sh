#!/bin/bash
# Unlink local shared-styles and restore GitHub version

set -e

echo "🔓 Unlinking local development and restoring GitHub version..."
echo ""

# Step 1: Unlink in portal
echo "1️⃣  Unlinking shared-styles in portal..."
cd /Users/davidtay/Documents/Projects/protocolsync-portal
npm unlink @protocolsync/shared-styles
npm install
echo "✅ Portal restored to GitHub version"
echo ""

# Step 2: Unlink in admin
echo "2️⃣  Unlinking shared-styles in admin..."
cd /Users/davidtay/Documents/Projects/protocolsync-admin
npm unlink @protocolsync/shared-styles
npm install
echo "✅ Admin restored to GitHub version"
echo ""

# Step 3: Remove global link
echo "3️⃣  Removing global npm link..."
cd /Users/davidtay/Documents/Projects/protocolsync-shared-styles
npm unlink -g @protocolsync/shared-styles 2>/dev/null || true
echo "✅ Global link removed"
echo ""

echo "✨ Done! Apps now use @protocolsync/shared-styles from GitHub."
echo ""
echo "To re-enable local development, run: ./link-local.sh"
