/* Token ERC20 - Smart Contract  */
    
pragma solidity ^0.5.2;
    
//import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Arpanet {
    //using SafeMath for uint256;
    
    // App directory
    struct app {
        address owner;
        string dirIPFS;
        uint256 upVotes;
        uint256 downVotes;
    }
    mapping(string => app) appDNS;
    
    // Karmas
    struct karmaStruct {
        uint256 lastUpdate;
        uint256 balance;
    }
    mapping(address => karmaStruct) public identities;
    
    uint256 constant BLOCK_MINTING = 1;

    
    /* ---  Metodo Constructor ---  */  
    constructor() public{}
    
    function minting(address user) internal {
        identities[user].balance += ((block.number - identities[user].lastUpdate) / BLOCK_MINTING);
        identities[user].lastUpdate = block.number;
    }
    
    function headshot(string memory appName) internal {
        uint256 up = appDNS[appName].upVotes;
        uint256 down = appDNS[appName].downVotes;
        address owner = appDNS[appName].owner;
        
        if((up+down > 10) && down*100/(up+down) > 85){
            identities[owner].balance = 0;
        }
    }
    
    function registerIdentity() public returns (bool){
        identities[msg.sender].lastUpdate = block.number;
        identities[msg.sender].balance = 0;
        return true;
    }
    
    function uploadFile(string memory appName, string memory dirIPFS) public returns (bool) {
        appDNS[appName].owner = msg.sender;
        appDNS[appName].dirIPFS = dirIPFS;
        return true;
    }
    
    function upVote(string memory appName, uint256 vote) public returns (bool) {
        minting(msg.sender);
        if (identities[msg.sender].balance < vote){return false;}
        identities[msg.sender].balance -= vote;
        appDNS[appName].upVotes += vote;
        //headshot(index);
        return true;
    }
    
    function downVote(string memory appName, uint256 vote) public returns (bool) {
        minting(msg.sender);
        if (identities[msg.sender].balance < vote){return false;}
        identities[msg.sender].balance -= vote;
        appDNS[appName].downVotes += vote;
        //headshot(index);
        return true;
    }
    
    function getApp (string memory appName) public view returns (address, string memory, uint256, uint256){
        return (appDNS[appName].owner, appDNS[appName].dirIPFS, appDNS[appName].upVotes, appDNS[appName].downVotes);
    }
    

    
}