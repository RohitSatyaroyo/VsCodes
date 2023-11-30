console.log('start')

const intervalid=setInterval(()=>{
    console.log('heloo')
},1000)

setTimeout(()=>{
    clearInterval(intervalid)//to stop
    console.log('setinterval callback function is stopped after 4 seconds')
},4000)
console.log('end')