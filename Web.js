const express = require('express');
const expressJson = require('express-json');
const http = require('http');

module.exports = class Web {

	  constructor(config, controller) {
	    this.app = express();
	    this.config = config;
	    this.server = http.Server(this.app);

	    this.controller = null;
	  }

	  startOn(controller) {
	    this.controller = controller;

	    this.app.use('/static', express.static('static'))
	    this.app.use(expressJson());

	    this.app.get('/', (req, res) => {
	      res.redirect('/static/homepage.html');
	    });

	    this.app.get('/api/shutdown', (req, res) => {
	      this.controller.shutdown()
	        .then( (ret) => {
	          res.send(ret);
	        })
	        .catch((err) => {
	          throw err;
	        })
	    });

	    this.app.post('/api/reboot', (req, res) => {
		      this.controller.reboot()
		        .then( (ret) => {
		          res.send(ret);
		        })
		        .catch((err) => {
		          throw err;
		        })
	    });

	    this.setupBonjourAdverstisment();

	    this.server.listen(this.config.port, () => {
	      console.log('Listening on %d', this.server.address().port);
	    });
	  }

	  setupBonjourAdverstisment (){
	  }
	}