
# 3S- STUDENT SCHOLARSHIP SCHEME #

This is a DApp example on a private ethereum network that creates a decentralized platform for distribution of scholarship.

The platform connects students, educators, and service providers where, together, they develop and engage in personal and group, in-person educational programs and various businesses.

This DApp helps to determine the scholarship awarded for each student in kerala who has attended the SSLC and Plus Two Exams.
Accordingly students will be awarded Scholarship and token "SCHOLAR" which they can use it for various purposes like buying uniforms,books and various other educational goods.

The persons accepting the token "SCHOLAR" from students can go to the exchange created by the ministry of Education Kerala and can exchange it with fiat currency(Indian Rupee).

There are several advantages for this DApp ie the students comes to know about the technology and one of the great advantage is immutable ledger and transparency.   

## Instructions for Installation of Application: ##

1. Download the folder "Dapp"
2. Open Terminal from the Dapp folder and give command,
```
npm install 
```
3. Open another terminal and Run the local blockchain simulator ganache by giving commands below
```
npm install -g ganache-cli            //(to install ganache)
ganache-cli
 ```
3. go to remix IDE and deploy the contract "Scholarship" to Local-blockchain simulator ie.. ganache. (Note that all the four smart contracts should be available in remix IDE browser.
4. Note that to set the web3 provider to ganache port (8545) in remix IDE.
5. copy the ABI of "Scholarship" contract and also copy the deployed contract address and paste it in the index.js file in the Dapp/routes folder
6.  Now go back to the Dapp-folder terminal and give command,
```
npm start
```
7. Go to..... http://localhost:3000/home.  Now you can access the UI part of the D-app.
9. Note that you can use the accounts available in ganache.
10. Now you can do the Transactions.
11. If required,Account can be imported to metaMask by using private key available in ganache.
12. And you can use signing transaction via metamask if required.
13. Note: Check the UI flow chart to follow the steps to be taken while using UI


### Alternate Method for Installation and using Dapp using truffle ###

1. Download the folder "Dapp"
2. Open Terminal from the dapp folder and give command,
```
npm install
```
3. Now Download the folder "Project-truffle".
4. Open another terminal and Run the local blockchain simulator ie ganache  
```
ganache-cli
```
5. Go to terminal of Project-truffle and give commands,
```
truffle migrate
```
6. copy and paste the contract address from ganache to index.js file in Dapp/routes folder.
7. Now go back to the Dapp-folder terminal and give command,
```
npm start
```
8. Go to..... http://localhost:3000/home
9. Now you can access the UI part of the D-app.
10. Note that you can use the accounts available in ganache.
11. Now you can do the Transactions.
12. If required,Account can be imported to metaMask by using private key available in ganache.
13. And you can use signing transaction via metamask if required.
14. Note: Check the UI flow chart to follow the steps to be taken while using UI.

#### Method for Testing the smart Contract with truffle. ####

1. Download the folder "project-truffle" and go to terminal from that folder and give command
```
npm run test 
```

Note: The RED buttons in the d-app UI is accessible by the owner only ie...The contact deployed address.
      The BLUE buttons are accessible by every user.
      The "User Ethereum Address" is the address from which gas is consumed for transaction.
      The "student Ethereum Address" is the student ID which is also an Ethereum address in which the details are stored.








