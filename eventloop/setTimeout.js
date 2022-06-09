console.log('first'); // Started Os Process
setTimeout(() => {
    console.log("Calling after 2 seconds");
    // do something after 2 seconds
    console.log('second'); 
},2000);

console.log('third');


// Just experimenting
// A countdown timer for 60 seconds 
for (let i = 0; i < 60; i++){
    setTimeout(()=>{
        console.log(i);
    },i*1000);
};
