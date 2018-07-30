const Web = require('./Web');
const Controller = require('./Controller');
const SystemConnector = require('./SystemConnector');


const config = {
  port: 3030	
};

const webConnector = new Web( config );
const systemConnector = new SystemConnector( config );

const controller = new Controller(
  config,
  systemConnector,
  webConnector);

controller.startOn();