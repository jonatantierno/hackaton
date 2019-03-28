var platformABI = [
	{
	  "constant": false,
	  "inputs": [
		{
		  "name": "appName",
		  "type": "string"
		},
		{
		  "name": "vote",
		  "type": "uint256"
		}
	  ],
	  "name": "downVote",
	  "outputs": [
		{
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [],
	  "name": "registerIdentity",
	  "outputs": [
		{
		  "name": "",
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
		  "name": "appName",
		  "type": "string"
		},
		{
		  "name": "dirIPFS",
		  "type": "string"
		}
	  ],
	  "name": "uploadSite",
	  "outputs": [
		{
		  "name": "",
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
		  "name": "appName",
		  "type": "string"
		},
		{
		  "name": "vote",
		  "type": "uint256"
		}
	  ],
	  "name": "upVote",
	  "outputs": [
		{
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "constructor"
	},
	{
	  "constant": true,
	  "inputs": [
		{
		  "name": "appName",
		  "type": "string"
		}
	  ],
	  "name": "getApp",
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
	  "inputs": [
		{
		  "name": "",
		  "type": "address"
		}
	  ],
	  "name": "identities",
	  "outputs": [
		{
		  "name": "lastUpdate",
		  "type": "uint256"
		},
		{
		  "name": "balance",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	}
  ]

export default platformABI