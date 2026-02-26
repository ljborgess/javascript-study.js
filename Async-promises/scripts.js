let p = new Promise((resolve,reject)=>{
    let a = 1 + 1
    if(a == 2){
        resolve("sucess")
    }else{
        reject('failed')
    }
})

//resolve é chamado
p.then((message)=>{
    console.log('this is in the then' + message)

//reject é chamado
}).catch((err)=>{
    console.log('this is the catch' + err)
})