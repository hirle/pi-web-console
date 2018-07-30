module.exports = class Controller {
	constructor( config, systemConnector, webConnector ) {

		this.config = config;
		this.systemConnector = systemConnector;
		this.webConnector = webConnector;
	}

	startOn (){
	  console.log('web starting');
	  this.webConnector.startOn(this);
	  console.log('web started on');
	} 
	
	shutdown(){
	  return this.systemConnector.shutdown();
	}  

	reboot(){
	  return this.systemConnector.reboot();	
	}  
}