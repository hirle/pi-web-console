const exec = require('child_process').exec;

module.exports = class SystemConnector {
	
  constructor( config ) {
		
  }
	
  shutdown() {
   return execCommand('/usr/bin/sudo /sbin/shutdown -h now');
  }
	
  reboot() {
   return execCommand('/usr/bin/sudo /sbin/shutdown -r now');
  }
}


function execCommand( command ) {
	return new Promise( ( resolve, reject ) => 
		exec(command, (err, stdout, stderr) => {
		  if (err) {
        	console.log(stderr);
		    reject(err);
		  } else {
			resolve(stdout);
		  }  
		})
	);
}