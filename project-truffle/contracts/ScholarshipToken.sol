pragma solidity >=0.4.0<0.6.0;


contract ERC20Interface {
    function totalSupply() public view returns (uint);
    function balanceOf(address tokenOwner) public view returns (uint balance);
    function allowance(address tokenOwner, address spender) public view returns (uint remaining);
    function transfer(address to, uint tokens) public returns (bool success);
    function approve(address spender, uint tokens) public returns (bool success);
    function transferFrom(address from, address to, uint tokens) public returns (bool success);

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}

/**
 *@title ScholarshipToken
 *@dev ERC20Interface contract is inherited to ScholarshipToken contract 
 */ 

contract ScholarshipToken is ERC20Interface {
    string public symbol;
    string public  name;
    uint8 public decimals;
    uint _totalSupply;
    address public owner;
    
    /**
     *@dev mapping with address as key and uint value as balances
     */ 
    mapping(address => uint) balances;
    mapping(address => mapping(address => uint)) allowed;

    /**
     *@notice owner is assigned to the contract deploying address
     */ 
    constructor() public {
        owner = msg.sender;
        symbol = "A";
        name = "SCHOLAR";
        decimals = 2;
        _totalSupply = 100000000 * 10**uint(decimals);
        balances[owner] = _totalSupply;
        emit Transfer(address(0), owner, _totalSupply);
    }
    
    /**
     *@dev defining a modifier onlyOwner to restrict entry in certain function
     */ 
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    
    /**
     *@notice function to view the total no of tokens
     */ 
    function totalSupply() public view returns (uint) {
        return _totalSupply - balances[address(0)];
    }
    
    /**
     *@notice function to view the balance of tokenOwner with key
     */
    function balanceOf(address tokenOwner) public view returns (uint balance) {
        return balances[tokenOwner];
    }
    
    /**
     *@notice function to supply tokens to specific address and can be called by onlyOwner 
     */ 
    function transfer(address to, uint tokens) public onlyOwner  returns (bool success) {
        balances[msg.sender] = balances[msg.sender]-tokens;
        balances[to] = balances[to]+tokens;
        /**
         *@dev emitting event Transfer
         */ 
        emit Transfer(msg.sender, to, tokens);
        return true;
    }
    
    function approve(address spender, uint tokens) public returns (bool success) {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }
    
    
    /**
     *@notice function to transfer tokens peer to peer 
     */ 
    function transferFrom(address from, address to, uint tokens) public returns (bool success) {
        require(from!=owner,"Cannot Transfer from Owner Account");
	    require(from!=to,"Cannot transfer to same account");
	    require(tokens<balances[from],"Fraud not possible");
        balances[from] = balances[from]-tokens;
        allowed[from][msg.sender] = allowed[from][msg.sender]-tokens;
        balances[to] = balances[to]+tokens;
        
        /**
         *@dev emitting event Transfer
         */ 
        emit Transfer(from, to, tokens);
        return true;
    }

    function allowance(address tokenOwner, address spender) public view returns (uint remaining) {
        return allowed[tokenOwner][spender];
    }
}

