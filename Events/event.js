const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();


myEmitter.on('water',()=>{
  console.log("Wake up to fill the water bottles")
})

const hui = () =>{

      for (var i = 1; i < 5; i++) {

        if(i<4){
        console.log("Water will come at 4'o clock the time is - " + i +"pm");
      }

      if(i===4){
        myEmitter.emit('water');
      }
    }

}


hui();
