var ipfsClient = require('ipfs-http-client')
var ipfs = ipfsClient('localhost', '5001', { protocol: 'http' })


var addIPFS = function(data) {
    ipfs.add(Buffer.from(data), (err, files) => {
        if (err) return console.error(err)
        // 'hash', known as CID, is a string uniquely addressing the data
        // and can be used to get it again. 'files' is an array because
        // 'add' supports multiple additions, but we only added one entry
        console.log(files[0].hash)
        return files[0].hash
    })
}

var getIPFS = function(address) {
    ipfs.cat(address, (err, data) => {
        if (err) return console.error(err)
        
        // convert Buffer back to string
        console.log(data.toString())
        return data.toString()
        })
}



  var fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, 'start.html');

var readFile = function(){
    filePath = path.join(__dirname, 'start.html');
    console.log(filePath)
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            console.log('received data: ' + data);
            return data
        } else {
            console.log(err);
        }
    });
}

data = "<h1>Nsdfoasdfopk</h1>"
console.log(data)
addr = addIPFS(data)
console.log(getIPFS(addr))