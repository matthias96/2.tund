  (function(){
    "use strict";

    var Moosipurk = function(){
      // SINGELTON PATTERN(4 rida)
      if(Moosipurk.instance){
        return Moosipurk.instance;
      }
      Moosipurk.instance = this; // this viitab moosipurgile
      //console.log(this);
      //panen rakenduse tööle
      this.init();
    };
    Moosipurk.prototype = {
      //kõik moosipurgi funktsioonid tulevad siia sisse
      init: function(){
        console.log('rakendus käivitus');
        // siia tuleb esialgne loogika
        // hakka kuulama hiireklõpse
        this.bindMouseEvents();
      },
      bindMouseEvents:function(){
        document.querySelector('.add-new-jar').addEventListener('click', this.addNewClick.bind(this));
      },
      addNewClick: function(event){
        console.log(event);
      }
    };
    window.onload=function (){
      var app= new Moosipurk();
      var app2= new Moosipurk();
    };
   })();
