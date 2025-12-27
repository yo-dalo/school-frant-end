#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if model name is provided
if [ -z "$1" ] ; then
    echo -e "${RED}Error: Model name path  required!${NC}"
   echo "Usage: ./generate-routes.sh <model_name> <folder_path>"
    echo "Example: ./generate-routes.sh admission ../api/client"
    exit 1
fi


BASE_PATH=$1

MODEL_NAME_LOWER=$(echo "$MODEL_NAME" | tr '[:upper:]' '[:lower:]')
MODEL_NAME_CAMEL=$(echo "$MODEL_NAME_LOWER" | sed 's/_\(.\)/\U\1/g' | sed 's/^\(.\)/\U\1/')


ROUTE_VAR="import Yo from './utils/Yo';"
ROUTE_IMPORT="const ${ROUTE_VAR} = require('./${MODEL_NAME_LOWER}Routes');"
ROUTE_USE="router.use('/${MODEL_NAME_LOWER}', ${ROUTE_VAR});"

INDEX_FILE=$BASE_PATH
echo $INDEX_FILE

 if grep -q "$ROUTE_VAR" "$INDEX_FILE"; then
        echo -e "${YELLOW}⚠ Route already exists in index.js${NC}"
    else
        sed -i "/import');$/a $ROUTE_IMPORT" "$INDEX_FILE"
      
        echo -e "${GREEN}✓ Updated index.js with new route${NC}"
    fi