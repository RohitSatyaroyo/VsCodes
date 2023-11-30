const{readFileSync,writeFileSync}=require('fs')//getting selected methods from 'fs'
const fs=require('fs')//getting all methods from 'fs'
console.log('Reading data from file')
const data1=readFileSync('data1.js','utf-8')
const data2=readFileSync('data2.js','utf-8')
console.log('read operation completed')
writeFileSync('data.txt',`user details ${data1} ${data2}`)
console.log('done writing')