var fs = require('fs');

module.exports = {
	renderFile: function(file, data) {
		let str = fs.readFileSync(file, 'utf8');
		if (data) {
			Object.keys(data).forEach(function(key) {
				str = str.replace(`{{ ${key} }}`, () => data[key]);
			});
		}
		return str;
	},
	
	render: function(str, data) {
		if (data) {
			Object.keys(data).forEach(function(key) {
				str = str.replace(`{{ ${key} }}`, () => data[key]);
			});
		}
		return str;
	}
}
