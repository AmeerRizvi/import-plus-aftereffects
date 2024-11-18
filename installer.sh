
SCRIPT_NAME="Import+.jsx"

SOURCE_DIR="$(dirname "$0")"

if [ "$(id -u)" -ne 0 ]; then
    echo "❌ Please run this script with sudo:"
    echo "   sudo ./installer.sh"
    exit 1
fi

echo "Enter your Adobe After Effects version (e.g., 2024, 2025):"
read AE_VERSION

TARGET_DIR="/Applications/Adobe After Effects $AE_VERSION/Scripts/ScriptUI Panels/"

if [ ! -d "$TARGET_DIR" ]; then
    echo "❌ Target directory does not exist: $TARGET_DIR"
    echo "Please ensure Adobe After Effects $AE_VERSION is installed and try again."
    exit 1
fi

echo "Copying $SCRIPT_NAME to $TARGET_DIR..."
cp "$SOURCE_DIR/$SCRIPT_NAME" "$TARGET_DIR"

if [ $? -eq 0 ]; then
    echo "✅ Script installed successfully to $TARGET_DIR"
    echo "You can now find 'Import+' in After Effects under the Window menu."
    exit 0
else
    echo "❌ Failed to copy the script to $TARGET_DIR"
    exit 1
fi
