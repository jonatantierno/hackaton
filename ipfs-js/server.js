var ipfsClient = require('ipfs-http-client')
var ipfs = ipfsClient('localhost', '5001', { protocol: 'http' })


function addIPFS(data) {
    ipfs.add(Buffer.from(data), (err, files) => {
        if (err) return console.error(err)
        // 'hash', known as CID, is a string uniquely addressing the data
        // and can be used to get it again. 'files' is an array because
        // 'add' supports multiple additions, but we only added one entry
        console.log(files[0].hash)
        return files[0].hash
    })
}

function getIPFS(address) {
    ipfs.cat('QmPChd2hVbrJ6bfo3WBcTW4iZnpHm8TEzWkLHmLpXhF68A', (err, data) => {
        if (err) return console.error(err)
        
        // convert Buffer back to string
        console.log(data.toString())
        return data.toString()
        })
}



  var fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, 'start.html');

function readFile(){
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            console.log('received data: ' + data);
        } else {
            console.log(err);
        }
    });
}