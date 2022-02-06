const data = [{
  name:"Aman",
  class:"tybcs"
},
{
  name:"Thokale",
  class:"tybcs"
}
]

// const getdata=()=>{
//   setTimeout(function () {
//     data.forEach((item, i) => {
//       console.log(item.name)
//     });
//
//   }, 1000);
// }
//                                                                                 //  CALLBACK
//
//
// const setdata = (callback)=>{
//   setTimeout(function () {
//     data.push({name:"ZEE",class:"CINEMA"});
//   //  callback();
//   }, 2000);
// }

// setdata(getdata);





const getdata=()=>{
  setTimeout(function () {
    data.forEach((item, i) => {
      console.log(item.name)
    });

  }, 1000);
}
                                                                                //    PROMISES


const setdata=() =>{
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (!error) {
                data.push({name:"ZEE",class:"CINEMA"});
                console.log('Function: Your promise has been resolved')
                resolve();
            }
            else {
                console.log('Function: Your promise has not been resolved')
                reject('Sorry not fulfilled');
            }
        }, 2000);
    })
}
//
// setdata().then((getdata)=>{
//   console.log(data)
// }).catch((error)=>{
//   console.log(error);
// })



async function a (){
   await setdata();
    getdata();

}

a();


                                                                              //  CALLBACK
