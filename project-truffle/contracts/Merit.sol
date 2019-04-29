
import "./ScholarshipToken.sol";

pragma solidity >=0.4.0<0.6.0;

/**
 *@title Merit 
 *@dev ScholarshipToken contract is imported and inherited to Merit contract
 */ 

contract Merit is ScholarshipToken{
    
    
    /**
     *@dev mapping with address as key to struct mark as marks
     */ 
    mapping(address=>mark)marks;
    
    /**
     *@dev defining the struct
     */ 
    struct mark{
        
        address studentId;
        uint160 mark1;
        uint160 mark2;
        uint160 mark3;
        uint160 totalMarks;
        bool isExist;
    }
    
    /**
     *@notice function to enter the studentId and marks
     *@dev isExist is used to avoid double entry 
     */ 
    function enterMarks(address studentId,uint160 mark1,uint160 mark2,uint160 mark3)public onlyOwner{
        require(marks[studentId].isExist==false);
        uint160 totalMarks;
        
        /**
         *@dev totalMarks is calculated
         */
        totalMarks=(mark1+mark2+mark3);
        
        /**
         *@dev assigning values to key
         */ 
        marks[studentId]=mark(studentId,mark1,mark2,mark3,totalMarks,true);
    }
    
}
