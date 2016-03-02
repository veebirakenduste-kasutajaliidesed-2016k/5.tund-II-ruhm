(function(){
  "use strict";

  var PassGen = function(){
    // SINGLETON PATTERN (4 rida)
    if(PassGen.instance){
      return PassGen.instance;
    }
    PassGen.instance = this;
	
	this.passwords = []; //massiiv paroolide jaoks
	this.password_length = null;


    //panen rakenduse tööle
    this.init();
  };
  
  //teeme muutuja avalikuks
  window.PassGen = PassGen;

  //kõik  funktsioonid tulevad siia sisse
  PassGen.prototype = {
    init: function(){
      console.log('rakendus käivitus');
	  
	  //kuulan nupuvajutust
	  document.querySelector('#generate').addEventListener('click', this.generatePasswords.bind(this));

    },
	generatePasswords: function(){
		
		this.password_length = document.querySelector('#pass-length').value;
		
		console.log('genereerin ' + this.password_length);
		
	}
	

  };

  window.onload = function(){
    var app = new PassGen();
  };

})();
