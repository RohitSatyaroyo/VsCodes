const EventEmitter=require('events')

const event=new EventEmitter()

event.on('click',()=>{
    console.log('event is triggered')
})
event.emit('click')
