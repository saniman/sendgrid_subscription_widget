const path = require('path');
const ContactList = require('./controllers/contact_list_controller');

module.exports = function(app) {
	app.get('/', function(req, res) { res.sendFile(path.join(__dirname, '/static/index.html')) });
	app.get('/success', function(req, res) { res.sendFile(path.join(__dirname, '/static/success.html')) });
	app.post('/confirmEmail', ContactList.sendConfirmation, function(req,res){
		res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*.ampproject.org');
    res.setHeader('AMP-Access-Control-Allow-Source-Origin', 'http://' + req.headers.host);
    res.setHeader('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin');
	});
	app.post('/signup', ContactList.addUser);
}