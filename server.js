const express = require('express')
const app = express()

const rappers = {

    '21savage':{age : 29,
        birthname : "Sheyya bin abraham joseph",
        location : "London, England"},
    'chance':{age : 29,
        birthname : "chanceller",
        location : "London, England"},
    'Dylon':{age : 29,
        birthname : "Dylan",
        location : "Dylan"},

}

app.get('/', (request,response) => {
    response.sendFile(__dirname+'/index.html')
})

app.get('/api/:rappername', (request, response) => {
    rappername=request.params.rappername.toLocaleLowerCase()
    if(rappers[rappername]){
        response.json(rappers[rappername])
    }
    else{
        response.json(rappers['Dylon'])
    }
    //response.json(rappers[request.params.rappername])
})
const PORT = 8000
app.listen(PORT, () => {
    console.log(`The server is runnig on port ${PORT}`)
})