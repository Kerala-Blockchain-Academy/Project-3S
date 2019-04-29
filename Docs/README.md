

						   3S- STUDENT SCHOLARSHIP SCHEME


Description: 


This is a D-app example on a private ethereum network that creates a decentralized platform for distribution of scholarship.

The platform connects students, educators, and service providers where, together, they develop and engage in personal and group, in-person educational programs and various businesses.

Currently the D-app is designed for kerala state Educational Ministry. 

This D-app helps to determine the scholarship awarded for each student in kerala who has attended the SSLC and Plus Two Exams.
Accordingly students will be awarded Scholarship and token "SCHOLAR" which they can use it for various purposes like buying uniforms,books and various other educational goods.

The persons accepting the token "SCHOLAR" from students can go to the exchange created by the ministry of Education Kerala and can exchange it with fiat currency(Indian Rupee).

There are several advantages for this dapp ie the students comes to know about the technology and one of the great advantage is immutable ledger and transparency.   



Instructions for Installation of Application:

1. Download the folder "Dapp"
2. Open Terminal from the Dapp folder and give command,
3. (-)npm install 
4. Open another terminal and Run the local blockchain simulator ganache by giving commands below
5. (-)npm install -g ganache-cli            //(to install ganache)
6. (-)ganache-cli
7. go to remix IDE and deploy the contract "Scholarship" to Local-blockchain simulator ie.. ganache. (Note that all the four smart contracts should be available in remix IDE browser.
8. Note that to set the web3 provider to ganache port (8545) in remix IDE.
9. copy the ABI of "Scholarship" contract and also copy the deployed contract address and paste it in the index.js file in the Dapp/routes folder
7.  Now go back to the Dapp-folder terminal and give command,
8. (-) npm start
9. Go to..... http://localhost:3000/home
9. Now you can access the UI part of the D-app.
10. Note that you can use the accounts available in ganache.
11. Now you can do the Transactions.
12. If required,Account can be imported to metaMask by using private key available in ganache.
13. And you can use signing transaction via metamask if required.
14. Note: Check the UI flow chart to follow the steps to be taken while using UI


Alternate Method for Installation and using Dapp using truffle

1. Download the folder "Dapp"
2. Open Terminal from the dapp folder and give command,
3. (-)npm install
4. Now Download the folder "Project-truffle".
5. Open another terminal and Run the local blockchain simulator ie ganache  
6. (-)ganache-cli
7. Go to terminal of Project-truffle and give commands,
8. (-)truffle migrate
9. copy and paste the contract address from ganache to index.js file in Dapp/routes folder.
10. Now go back to the Dapp-folder terminal and give command,
11. (-) npm start
12. Go to..... http://localhost:3000/home
13. Now you can access the UI part of the D-app.
14. Note that you can use the accounts available in ganache.
15. Now you can do the Transactions.
16. If required,Account can be imported to metaMask by using private key available in ganache.
17. And you can use signing transaction via metamask if required.
18. Note: Check the UI flow chart to follow the steps to be taken while using UI.

Method for Testing the smart Contract with truffle.

1. Download the folder "project-truffle" and go to terminal from that folder and give command
2. (-) npm run test 


Note: The RED buttons in the d-app UI is accessible by the owner only ie...The contact deployed address.
      The BLUE buttons are accessible by every user.
      The "User Ethereum Address" is the address from which gas is consumed for transaction.
      The "student Ethereum Address" is the student ID which is also an Ethereum address in which the details are stored.








