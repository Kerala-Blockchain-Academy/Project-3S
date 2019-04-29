const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const json = require('./../build/contracts/Scholarship.json');


let accounts;
let scholarship;
let owner;
const interface = json['abi'];
const bytecode = json['bytecode'];


beforeEach(async () => {
    accounts = await web3.eth.getAccounts();  // geting the list of accounts
    owner = accounts[0];                      // Assigning the owner address
    scholarship = await new web3.eth.Contract(interface)   // creating a contract instance after deploying
    .deploy({ data: bytecode })
    .send({ from: owner, gas: '4000000' });
    });


    describe('Scholarship', () => {
        it('deploys a contract', async () => {
        const scholarshipAddress= await scholarship.options.address; // here the generated address when contract is deployed is stored intp a constant
        assert.ok(scholarshipAddress, 'Test fail'); // here we are checking whether there is a value in the above defined constant scholarshipAddress
        
    });
     
    // checking the owner account balance 

    it('owner balance',async ()=>{
        owner = accounts[0]; // setting the owner address 
        ownerBalance = await scholarship.methods.balanceOf(owner).call(); //calling method balanceOf
        assert.equal(ownerBalance,10000000000,"Test Fail"); // checking the balance of owner is equal to pre defined value.

    });

     
    // checking the student account balance before registering

    it('student balance',async ()=>{
        owner = accounts[1];
        ownerBalance = await scholarship.methods.balanceOf(owner).call();
        assert.equal(ownerBalance,0,"Test Fail");

    });

    // Registering a student and checking whether registration done and output is optained.
    // Also checking the onlyOwner access of the function.
        
        it('student registered',async ()=>{
            student = accounts[2];
            name="joseph lubin";
            caste="c";
            income=9000;
            mark1=90;  
            mark2=90;
            mark3=90;
            totalMarks=270;
            scholarshipAmount=80000;
            
            try {
            await scholarship.methods.enterIncome(student,income).send({ from:owner,gas: '4000000'});
            await scholarship.methods.enterMarks(student,mark1,mark2,mark3).send({ from:owner,gas: '4000000'});
            await scholarship.methods.register(student,name,caste).send({ from:owner,gas: '4000000'});
            studentRegisteredDetail = await scholarship.methods.getDetails(student).call(); 
            console.log(studentRegisteredDetail);
            assert.equal(studentRegisteredDetail[0],student,"Test Fail");
            assert.equal(studentRegisteredDetail[1],name,"Test Fail");
            assert.equal(studentRegisteredDetail[2],caste,"Test Fail");
            assert.equal(studentRegisteredDetail[3],totalMarks,"Test Fail");
            assert.equal(studentRegisteredDetail[4],income,"Test Fail");
            assert.equal(studentRegisteredDetail[5],scholarshipAmount,"Test Fail");
            }
            catch (err){assert(err);
                console.log(err);
            }

        });


        // Checking the scholarship amount is calculated correctly.
        // Also checking the total Marks is calculated correctly. 


        it('Scholarship Amount and Total Marks',async ()=>{
            student = accounts[3];
            name="vitalik";
            caste="c";
            income=11000;
            mark1=10;  
            mark2=10;
            mark3=10;
            totalMarks=30;
            scholarshipAmount=10000;
            
            await scholarship.methods.enterIncome(student,income).send({ from:owner,gas: '4000000'});
            await scholarship.methods.enterMarks(student,mark1,mark2,mark3).send({ from:owner,gas: '4000000'});
            await scholarship.methods.register(student,name,caste).send({ from:owner,gas: '4000000'});
            studentRegisteredDetail = await scholarship.methods.getDetails(student).call(); 
            console.log(studentRegisteredDetail);
            assert.equal(studentRegisteredDetail[3],totalMarks,"Test Fail");
            assert.equal(studentRegisteredDetail[5],scholarshipAmount,"Test Fail");
            

        });
        // Checking the token supply function

        it('Token Supply',async ()=>{
            student = accounts[4];
            tokens= 10000;
            
            
            await scholarship.methods.transfer(student,tokens).send({ from:owner,gas: '4000000'});
            studentRegisteredDetail = await scholarship.methods.balanceOf(student).call(); 
            assert.equal(studentRegisteredDetail,tokens,"Test Fail");
            

        });

                // Checking the token transfer function

                it('Token Transfer',async ()=>{
                    student1 = accounts[5];
                    student2 = accounts[6];
                    tokens= 10000;
                    await scholarship.methods.transfer(student1,tokens).send({ from:owner,gas: '4000000'});
                    await scholarship.methods.transferFrom(student1,student2,9000).send({ from:student1,gas: '4000000'});
                    studentRegisteredDetail = await scholarship.methods.balanceOf(student2).call(); 
                    assert.equal(studentRegisteredDetail,9000,"Test Fail");
                    
        
                });
                
                // Checking the balance of student after token supply

                it('student balance after transfer',async ()=>{
                    student1 = accounts[5];
                    tokens= 10000;
                    await scholarship.methods.transfer(student1,tokens).send({ from:owner,gas: '4000000'});
                    studentRegisteredDetail = await scholarship.methods.balanceOf(student1).call(); 
                    assert.equal(studentRegisteredDetail,10000,"Test Fail");
                    
        
                }); 

    // Checking the getDetails function, after registering a student
        
        it('get details of student',async ()=>{
            student = accounts[2];
            name="Gavin Wood";
            caste="c";
            income=7000;
            mark1=90;  
            mark2=90;
            mark3=90;
            totalMarks=270;
            scholarshipAmount=80000;
            
            
            await scholarship.methods.enterIncome(student,income).send({ from:owner,gas: '4000000'});
            await scholarship.methods.enterMarks(student,mark1,mark2,mark3).send({ from:owner,gas: '4000000'});
            await scholarship.methods.register(student,name,caste).send({ from:owner,gas: '4000000'});
            studentRegisteredDetail = await scholarship.methods.getDetails(student).call(); 
            console.log(studentRegisteredDetail);
            assert.equal(studentRegisteredDetail[0],student,"Test Fail");
            assert.equal(studentRegisteredDetail[1],name,"Test Fail");
            assert.equal(studentRegisteredDetail[2],caste,"Test Fail");
            assert.equal(studentRegisteredDetail[3],totalMarks,"Test Fail");
            assert.equal(studentRegisteredDetail[4],income,"Test Fail");
            assert.equal(studentRegisteredDetail[5],scholarshipAmount,"Test Fail");
            
            

        });

});
