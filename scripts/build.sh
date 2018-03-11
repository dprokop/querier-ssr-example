  #!/bin/bash

function parse_git_hash() {
  git rev-parse --short HEAD
}

function get_build_id() {
  $PATH
}

BUILD_DIR=build
NODE_MODULES_DIR=node_modules
SHA=$(parse_git_hash)
DATE=`date '+%Y.%m.%d.%H.%M'`


if [ -n "$BUILD_BUILDID" ]; then
  BUILD_NAME="storefront_$BUILD_BUILDID"
else
  BUILD_NAME="local.$SHA.$DATE"
fi


if [ -d "$BUILD_DIR" ]; then
  printf '%s\n' "Removing build directory"
  rm -rf "$BUILD_DIR"
fi

node --version

printf '%s\n' "Creating build $BUILD_NAME"
mkdir build
printf '%s\n' "Building client"

# # TODO: check node version

# Install dependencies
if [ ! -d "$NODE_MODULES_DIR" ]; then
  echo "Installing deps..."
  npm install
fi

# Run client build
npm run "build:client"
# Run server build
npm run "build:server"

# Copy config, package.json and server entry
cp -R config/ build/config
cp package.json build
cp server/index.js build/server
cp server/server.js build

# Inslall prod dependencies build
pushd "$BUILD_DIR"
npm install --prod
popd
