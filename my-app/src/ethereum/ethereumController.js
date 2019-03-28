import Web3 from 'web3';
import config from '../config';

/* ABI + ADDRESS */
export var ABI = require('./ABI.js').default
export var address = config.smartcontractaddress

/* WEB3 CREATION */
var web3 = window.web3

console.log(window.ethereum)
console.log(web3.currentProvider)

//console.log(window.ethereum.enable())
//window.ethereum.enable().then(console.log) //Aparece cuadro de permitir conectar a metamask

/* WEB3 PROVIDER */
if (typeof web3 != 'undefined') {
    web3 = new Web3(web3.currentProvider)
    console.log("Metamask provider")
} else {
    alert("Please, install Metamask plugin.")
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"))
    console.log("Local provider")
}
export var web3 = web3
console.log(web3)

/* CONTRACT IMPLEMENTATION */
export var contract = new web3.eth.Contract(ABI, address);
console.log("Contract integrated! *_*")

/* HANDLING BLOCKCHAIN EVENTS */
export var getEvent = async function () {
    var thePromise = new Promise((resolve, reject) => {
        contract.events.allEvents({}, function (error, event) {
            console.log("EVENTO-----------")
            if (event !== undefined) {
                console.log(event.returnValues)
                resolve(event.returnValues)
            }
        })
    })
    return thePromise
}

/* HANDLING METAMASK EVENTS */
export var getMetamaskEvent = async function () {
    var thePromise = new Promise((resolve, reject) => {
        window.ethereum.on('accountsChanged', function (accounts) {
            console.log("EVENTO METAMASK ------- Cambio de cuenta" + accounts[0])
            resolve(accounts[0])
        })
    })
    return thePromise
}


//TODO: Hacer comprobación con metamask para que si cambia la cuenta en uso se actualice todo
// Default account settings
export var getDefaultAccount = async function () {
    const accounts = await window.ethereum.enable()     // Cuadro de login MetaMask
    const account = accounts[0]
    web3.eth.defaultAccount = account
    console.log("Default account: " + account)

    const balance = await web3.eth.getBalance(account)
    console.log("Balance:", web3.utils.fromWei(balance, "ether"), "eth")
    return await account
}




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
export var downVote = async function (appName, vote) {
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

