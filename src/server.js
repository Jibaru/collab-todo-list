const express = require('express');
const app = express();

require('./config/config.js');

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT , () => {
	console.log(`Server enabled, ${process.env.PORT }`)
})