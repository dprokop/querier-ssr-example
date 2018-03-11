# Querier-SSR-Example web
_As little bulshit as possible to get you up and running_

## Architecture
Querier-SSR-Example web is implemented as a SPA with Server Side Rendering(SSR). SSR is based on express.js server. Bundling the app and development server is based on webpack.

## Development
### Dev server
To run dev server simply run:
```
npm run start
```

**This script will install node modules for you, don't worry:)**

### Running production build
To run production build you first need to prepare the package. To do so run:
```
. scripts/build.sh
```
This will create a `build` folder for you. Then, simply navigate to that folder an run
```
node server.js
```

### Testing
We use Jest and Enzyme for front-end tests. All tests should reside next to the tested module and follow the `<module_name>.test.js` naming convention.

To run tests use following command:
```
npm run test
```

All tests are run on pre-push git hook, so if there are any tests that are not passing, it will stop the push. Sometimes though, especially during early development, you may want to push code, that makes some tests fail. To do so, you can skip the pre-push hook by executing the command with `--no-verify` flag.

### Code conventions and quality
Querier-SSR-Example code uses `tslint`. Please take a look ar `tslint.json` config for detailed rules used. ***Also, enable `tslint` in your editor!***

To ensure code quality linter is executed on all staged files on pre-commit hook. If there are any autofixable lint issues, `tslint` will try to fix them and the changes will be automatically staged.
