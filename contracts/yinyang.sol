/* Token ERC20 - Smart Contract  */
    
pragma solidity ^0.5.2;
    
import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract Token is IERC20 {
    using SafeMath for uint256;
    
    /* --- Atributos del TOKEN --- */ 
    address public owner; // token owner
    string public name;        // token name
    string public symbol;          // token symbol
    uint256 public decimals;            // token digit
    uint256 private _totalSupply;           // token total supply

    mapping (address => uint256) private _balances;
    mapping (address => mapping (address => uint256)) private _allowed;
    
    /* ---  Metodo Constructor ---  */  
    constructor(string memory _name, string memory _symbol, uint8 _decimals, uint128 _initialTotalSupply) public{
        owner = msg.sender;
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        _totalSupply = _initialTotalSupply;
        _balances[owner] = _totalSupply;
        emit Transfer(address(0), owner, _totalSupply);
    }

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }
}