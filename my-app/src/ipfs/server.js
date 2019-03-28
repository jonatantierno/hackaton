var ipfsClient = require('ipfs-http-client')
var ipfs = ipfsClient('localhost', '5001', { protocol: 'http' })


var addIPFS = function (data) {
    return new Promise((resolve, reject) => {
        ipfs.add(Buffer.from(data), (err, files) => {
            if (err) reject(err)
            // 'hash', known as CID, is a string uniquely addressing the data
            // and can be used to get it again. 'files' is an array because
            // 'add' supports multiple additions, but we only added one entry
            console.log(files[0].hash)
            resolve(files[0].hash)
        })
    })
}

var getIPFS = function (address) {
    return new Promise((resolve, reject) => {
        ipfs.cat(address, (err, data) => {
            if (err) reject(err)

            // convert Buffer back to string
            if (data != undefined) {
                console.log(data.toString())
                resolve(data.toString())
            }
        })
    })
}



var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'start.html');

var readFile = function () {
    filePath = path.join(__dirname, 'start.html');
    console.log(filePath)
    fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
        if (!err) {
            console.log('received data: ' + data);
            return data
        } else {
            console.log(err);
        }
    });
}

// data = "<h1>Nsdfoasdfopk</h1>"
// console.log(data)
// addr = addIPFS(data)
// console.log(getIPFS(addr))
// addIPFS("<h1>fdsaajjsdf</hd2>").then(console.log)
getIPFS("QmbxLxCG4TqFKRwJisDrez4UXoRD1FBsQcZSAczT23ZRmc").then(console.log)