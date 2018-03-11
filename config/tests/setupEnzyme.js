var configure =  require('enzyme').configure;
var Adapter = require('enzyme-adapter-react-16');

// Configure enzyme
configure({ adapter: new Adapter() });
