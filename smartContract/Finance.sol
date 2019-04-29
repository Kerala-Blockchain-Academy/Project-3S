import "./Merit.sol";

pragma solidity >=0.4.0<0.6.0;

/**
 *@title Finance
 *@dev Merit contract is imported and inherited to Finance contract
 */ 

contract Finance is Merit{
    
    /**
     *@dev mapping with address as key to struct amount
     */ 
    mapping(address=>amount)amounts;
    
    /**
     *@dev defining struct amount
     */ 
    struct amount{
     
     address studentId;
     uint256 income;
     bool isExist;
    }

    /**
     *@notice function to enter studentId and income
     *@param address is students ethereum address
     *@param income is income of the student's parent
     */ 
    function enterIncome(address studentId,uint256 income)public onlyOwner{
        /**
         *@dev isExist to avoid multiple entry
         */ 
        require(amounts[studentId].isExist==false);
        
        /**
         *@dev assigning values to key
         */
        amounts[studentId]=amount(studentId,income,true);
    }
        
}
