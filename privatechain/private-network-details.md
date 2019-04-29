

private network account address: "0x41983ce3f032dbb21b54454f7fa92365728f6ab1"

private network deployed contract address:"0xc53b2969611949f9608e6d2e5b6b97ec1fdae963"

transaction hash : "0x30c357297941521f1a2685657461f29c0fb730e48b8185f543978188d21848c0"



1. Folder Name "geth" contains the private blockchain.Go to that folder and open it in terminal and give command below to make the chain live

(-)geth --identity "miner" --networkid 4002 --datadir data --nodiscover --mine --rpc --rpcport "8545" --port "8191" --unlock 0 --password password.txt --ipcpath "~/.ethereum/geth.ipc" --rpccorsdomain "*" --rpcapi "db,eth,net,web3,personal"

2. Folder Name "backup" contains the backup of the private blockchain .Go to that folder and open it in terminal and give command below to make the chain live

(-)geth --identity "miner" --networkid 4002 --datadir data --nodiscover --mine --rpc --rpcport "8545" --port "8191" --unlock 0 --password password.txt --ipcpath "~/.ethereum/geth.ipc" --rpccorsdomain "*" --rpcapi "db,eth,net,web3,personal"


3. Inside folder "geth" we have the genesis.json file
