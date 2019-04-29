
1. Folder Name "Backup" is the backup of private blockchain.

2. Folder Name "geth" is the private blockchain.

3. File name "private-network-details" contains the details of the contract address deployed on private blockchain, transaction hash and the from account address.

4. Inside folder "geth" we have the genesis.json file


Notes:

1. Folder Name "geth" contains the private blockchain.Go to that folder and open it in terminal and give command below to make the chain live

(-)geth --identity "miner" --networkid 4002 --datadir data --nodiscover --mine --rpc --rpcport "8545" --port "8191" --unlock 0 --password password.txt --ipcpath "~/.ethereum/geth.ipc" --rpccorsdomain "*" --rpcapi "db,eth,net,web3,personal"

2. Folder Name "backup" contains the backup of the private blockchain .Go to that folder and open it in terminal and give command below to make the chain live

(-)geth --identity "miner" --networkid 4002 --datadir data --nodiscover --mine --rpc --rpcport "8545" --port "8191" --unlock 0 --password password.txt --ipcpath "~/.ethereum/geth.ipc" --rpccorsdomain "*" --rpcapi "db,eth,net,web3,personal"

3. Inside folder "geth" we have the genesis.json file 
