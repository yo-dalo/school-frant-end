#!/bin/bash

# Colors for pretty output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if at least one file path is provided
if [ $# -eq 0 ]; then
  echo -e "${RED}❌ Error: Kam se kam ek file path do bhai!${NC}"
  echo "Usage: $0 file1.jsx [file2.jsx ...]"
  exit 1
fi

# Cross-platform sed in-place editing
SED_I="sed -i"
if [[ "$(uname)" == "Darwin" ]]; then
  SED_I="sed -i ''"
fi

# Loop through all provided files
for filePath in "$@"; do
  # Check if file exists
  if [ ! -f "$filePath" ]; then
    echo -e "${RED}❌ File nahi mili: $filePath${NC}"
    continue
  fi

  echo -e "${YELLOW}🔄 Processing: $filePath${NC}"

  # Temporary file
  tempFile=$(mktemp)

  # 1️⃣ React import: ensure useState & useEffect are imported
  if ! grep -q "useEffect" "$filePath" || ! grep -q "useState" "$filePath"; then
    if grep -q '^import React' "$filePath"; then
      # Replace any existing React import with full hooks
      grep -v '^import React' "$filePath" > "$tempFile"
      echo 'import React, { useEffect, useState } from "react";' | cat - "$tempFile" > "${tempFile}.tmp" && mv "${tempFile}.tmp" "$tempFile"
      cat "$tempFile" > "$filePath"  # sync back for next steps
    else
      # Add at the very top
      echo 'import React, { useEffect, useState } from "react";' > "$tempFile"
      cat "$filePath" >> "$tempFile"
    fi
  else
    cp "$filePath" "$tempFile"
  fi

  # 2️⃣ Yo import add if missing (path: ./utils/Yo)
  if ! grep -q '^import Yo from "./utils/Yo";$' "$tempFile"; then
    $SED_I '1s/^/import Yo from ".\/utils\/Yo";\n/' "$tempFile"
  fi

  # 3️⃣ Add useEffect with data fetching if not present
  if ! grep -q "useEffect(() =>" "$tempFile"; then
    awk '
    BEGIN { found = 0 }
    /^function [A-Za-z][A-Za-z0-9_]*\s*\([^)]*\)\s*{/ && !found {
      print $0
      print "  const [data, setData] = useState(null);"
      print ""
      print "  useEffect(() => {"
      print "    Yo.get(\"https://api.example.com/data\")"
      print "      .then((res) => setData(res.data))"
      print "      .catch((err) => console.error(err));"
      print "  }, []);"
      print ""
      found = 1
      next
    }
    { print }
    ' "$tempFile" > "${tempFile}.new" && mv "${tempFile}.new" "$tempFile"
  fi

  # Final: Overwrite original file
  mv "$tempFile" "$filePath"

  echo -e "${GREEN}✅ $filePath update ho gayi!${NC}"
done

echo -e "${GREEN}🎉 Sab files successfully process ho gayi!${NC}"