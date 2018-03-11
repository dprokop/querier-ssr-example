// This file is used on deployment environments only as a server entry point
// to avoid problems with cwd in iisnode.
// Ref: https://github.com/tjanczuk/iisnode/issues/338

require(__dirname + '/server/index.js');
