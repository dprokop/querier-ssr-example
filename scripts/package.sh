#!/bin/bash
BUILD_DIR=build

if [ ! -d "$BUILD_DIR" ]; then
  printf '%s\n' "Nothing to package"
fi

if [ -n "$BUILD_BUILDID" ]; then
  BUILD_NAME="flokk-storefront-$BUILD_BUILDID"
else
  BUILD_NAME="local.$SHA.$DATE"
fi

zip -r "$BUILD_ARTIFACTSTAGINGDIRECTORY/storefront/$BUILD_NAME.zip" build

