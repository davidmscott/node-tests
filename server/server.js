const express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.status(200).send({
		error: 'Page not found.',
		name: 'Todo app V1.0'
	});
});

app.get('/users', (req, res) => {
	res.send([{
			name: 'Dave',
			age: 35
		}, {
			name: 'Leah',
			age: 37
		}, {
			name: 'Mike',
			age: 33
		}
	]);
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

module.exports.app = app;