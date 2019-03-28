/* Token ERC20 - Smart Contract  */
    
pragma solidity ^0.5.2;
    
import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Arpanet {
    using SafeMath for uint256;
    
    // App directory
    struct app {
        address owner;
        string dirIPFS;
        uint256 upVotes;
        uint256 downVotes;
    }
    mapping(bytes32 => app) appDNS;
    
    // Karmas
    struct karmaStruct {
        uint256 lastUpdate;
        uint256 balance;
    }
    mapping(address => karmaStruct) public identities;
    
    uint256 constant BLOCK_MINTING = 50;

    
    /* ---  Metodo Constructor ---  */  
    constructor() public{}
    
    function registerIdentity() public returns (bool){
        identities[msg.sender].lastUpdate = block.number;
        identities[msg.sender].balance = 0;
        return true;
    }
    
    function stringToHash(string memory key) internal pure returns (bytes32){
        bytes memory tempEmptyStringTest = bytes(key);
        return keccak256(tempEmptyStringTest);
        
    }
    
    function uploadFile(string memory appName, string memory dirIPFS) public returns (bool) {
        bytes32 index = stringToHash(appName);
        require(appDNS[index].owner != address(0));
        appDNS[index].owner = msg.sender;
        appDNS[index].dirIPFS = dirIPFS;
        return true;
    }
    
    function minting(address user) internal {
        identities[user].balance += ((block.number - identities[user].lastUpdate) / BLOCK_MINTING);
        identities[user].lastUpdate = block.number;
    }
    
 
    function upVote(string memory appName, uint256 vote) public returns (bool) {
        bytes32 index = stringToHash(appName);
        minting(msg.sender);
        require(identities[msg.sender].balance >= vote); 
        identities[msg.sender].balance -= vote;
        appDNS[index].upVotes += vote;
        return true;
    }
    
    function downVote(string memory appName, uint256 vote) public returns (bool) {
        bytes32 index = stringToHash(appName);
        minting(msg.sender);
        require(identities[msg.sender].balance >= vote);
        identities[msg.sender].balance -= vote;
        appDNS[index].downVotes += vote;
        return true;
    }
    
    
    function getApp (string memory appName) public view returns (address, string memory, uint256, uint256){
        bytes32 index = stringToHash(appName);
        return (appDNS[index].owner, appDNS[index].dirIPFS, appDNS[index].upVotes, appDNS[index].downVotes);
    }
    

    
}