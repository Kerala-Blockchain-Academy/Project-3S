var express = require('express');
var router = express.Router();

// web3 is obtained
Web3 = require('web3');

// Defining the web3, if it is defined, the provider is injected from metamask or the provider is the local test network 
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

// place your contract address and abi below
const contractAddress = "0x11EdA2123c685faEdD085325454C183F92034262";
const abi =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "studentId",
				"type": "address"
			},
			{
				"name": "income",
				"type": "uint256"
			}
		],
		"name": "enterIncome",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "studentId",
				"type": "address"
			},
			{
				"name": "mark1",
				"type": "uint160"
			},
			{
				"name": "mark2",
				"type": "uint160"
			},
			{
				"name": "mark3",
				"type": "uint160"
			}
		],
		"name": "enterMarks",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "studentId",
				"type": "address"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "caste",
				"type": "string"
			}
		],
		"name": "register",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_studentId",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_name",
				"type": "string"
			}
		],
		"name": "registration",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "tokenOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "from",
				"type": "address"
			},
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "tokenOwner",
				"type": "address"
			},
			{
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "remaining",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "tokenOwner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "studentId",
				"type": "address"
			}
		],
		"name": "getDetails",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint160"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

// Creating the contract instance scholarshipContract
var scholarshipContract = new web3.eth.Contract(abi, contractAddress);
console.log('all set......');

// rendering the home page
router.get('/home', function (req, res, next) {
  res.render('index');

});

router.post('/home', function (req, res, next) {

	// obtaining the values inputed in html page and storing it in variables
	var coinbaseAddress1 = req.body.coin1
  var address = req.body.name1
	var name = req.body.name2
	var caste= req.body.name3
	var income = req.body.name4
	var mark1 = req.body.name5
	var mark2= req.body.name6
	var mark3= req.body.name7

	
// Calling methods in smart contract using contract instance scholarshipContract
// calling enterIncome function and writting data to blockchain
// inserting variables as parameters for function which is obtained from User Interface
	scholarshipContract.methods.enterIncome(address,income).send({ from: coinbaseAddress1, gas: 150000 }).then(function (value12) {
    console.log(value12);
    res.send(value12);
  });
	
	// calling enterMarks function in smart contract and writting data to blockchain 
  scholarshipContract.methods.enterMarks(address,mark1,mark2,mark3).send({ from: coinbaseAddress1, gas: 150000 }).then(function (value13) {
    console.log(value13);
    res.send(value13);
	});
	// calling register function in smart contract and writting data to blockchain
  scholarshipContract.methods.register(address,name,caste).send({ from: coinbaseAddress1, gas: 150000 }).then(function (value11) {
    console.log(value11);
    res.send(value11);
	});

});

	router.post('/supply', function (req, res, next) {
	var coinbaseAddress2 = req.body.coin2
	var toAddress1 = req.body.name8
	var tokens1 = req.body.name9

	// calling transfer function in smart contract and writting data to blockchain
  scholarshipContract.methods.transfer(toAddress1,tokens1).send({ from: coinbaseAddress2, gas: 150000 }).then(function (value14) {
    console.log(value14);
    res.send(value14);
	});

});

router.post('/transfer', function (req, res, next) {
  var coinbaseAddress3 = req.body.coin3
	var fromAddress2 = req.body.name10
	var toAddress2 = req.body.name11
	var tokens2 = req.body.name12
	
	// calling transferFrom function in smart contract and writting data to blockchain
  scholarshipContract.methods.transferFrom(fromAddress2,toAddress2,tokens2).send({ from: coinbaseAddress3, gas: 150000 }).then(function (value15) {
    console.log(value15);
    res.send(value15);
	});

	
});



router.post('/details', function (req, res, next) {
	
	
	var address4= req.body.name13
	// calling getDetails function in smart contract and viewing details of student from blockchain
  scholarshipContract.methods.getDetails(address4).call().then(function (value1) {
    console.log(value1);
    res.send(value1);
	});
	
});

router.post('/balance', function (req, res, next) {
	var address5= req.body.name14
	// calling balanceOf function in smart contract and viewing balance of student from blockchain
  scholarshipContract.methods.balanceOf(address5).call().then(function (value2) {
    console.log(value2);
    res.send(value2);
	});

	
	
});

module.exports = router;
