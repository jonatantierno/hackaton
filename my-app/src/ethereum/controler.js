
/**
 * @function registerIdentity
 * @description
 * @returns
 */
export var registerIdentity = async function(){
    let thePromise = new Promise((resolve, reject) => {
        contract.methods.registerIdentity().send({ from: web3.eth.defaultAccount, gas:300000 })  
            .then(res => {
                resolve(res)
                console.log(res)
            })
            .catch(err => {
                console.log(err.message)
                reject(err.message)
            })
    })
    return thePromise
}

/**
 * @function uploadFile
 * @description
 * @returns
 */
export var uploadFile = async function (appName, dirIPFS) {
    let thePromise = new Promise((resolve, reject) => {
        contract.methods.uploadFile(appName,dirIPFS).send({ from: web3.eth.defaultAccount, gas:300000 })  
            .then(res => {
                resolve(res)
                console.log(res)
            })
            .catch(err => {
                console.log(err.message)
                reject(err.message)
            })
    })
    return thePromise
}

/**
 * @function upVote
 * @description
 * @returns
 */
export var upVote = async function (appName, vote) {
    let thePromise = new Promise((resolve, reject) => {
        contract.methods.upVote(appName, vote).send({ from: web3.eth.defaultAccount, gas:300000 })  
            .then(res => {
                resolve(res)
                console.log(res)
            })
            .catch(err => {
                console.log(err.message)
                reject(err.message)
            })
    })
    return thePromise
}

/**
 * @function downVote
 * @description
 * @returns
 */
export var upVote = async function (appName, vote) {
    let thePromise = new Promise((resolve, reject) => {
        contract.methods.downVote(appName, vote).send({ from: web3.eth.defaultAccount, gas:300000 })  
            .then(res => {
                resolve(res)
                console.log(res)
            })
            .catch(err => {
                console.log(err.message)
                reject(err.message)
            })
    })
    return thePromise
}

/**
 * @function getApp
 * @description
 * @returns
 */
export var getApp = async function (appName) {
    var solicitud = await contract.methods.getApp(appName).call()
    return solicitud
}