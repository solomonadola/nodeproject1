const config = require('config');

module.exports = function () {
	if (!config.get('jwtPrivateKey')) {
		console.error('Fatal error: jwtprivatekey is not defined');
		process.exit(1);
	}
};
