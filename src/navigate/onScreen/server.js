const http = require('http');
const port = 3001;

const server = http.createServer(function(req, res){

})

server.listen(port, function(error) {
    if(error)
    {
        console.log('something was wrong')

    }
    else
    {
        console.log(`server is listening to port ${port} `)
    }
})