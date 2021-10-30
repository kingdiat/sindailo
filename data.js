datas = [
   { name: 'cjer',
      age: 56
   },
   { name: 'efun',
      age: 50
   }
];

console.log( datas.map(item => { return item.age > 50; }).length);
//var bool = true;
var isBuy = true;
var promise = new Promise(function(resolve, reject) {
   setTimeout(function() {
   //resolve('foo');
      if (isBuy) resolve('buy');
      else reject(new Error('bad'));
      //resolve('girl');
   }, 300);
});

promise.then(function(val){
      console.log(val); },
   function(value) {
   //bool = !bool;
      console.log(value.message);
  // expected output: "foo"
}).catch(function(error) { console.log('error!'); });

//promise.then(function(val) { console.log(val)});
// expected output: [object Promise]
//console.log(new Error('bad student!').message);
