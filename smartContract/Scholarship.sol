
import "./Finance.sol";

pragma solidity >=0.4.0<0.6.0;

/**
 * @title Scholarship
 * @notice Scholarship contract inherites the Finance contract
 * @dev Finance contract is imported and inherited to Scholarship contract
  */
  
contract Scholarship is Finance {

    /**
     * @dev mapping with address as key to struct with mapping name students
     */ 
    
    mapping(address=>student)students;
    
    /**
     * @dev defining the struct student
     */
    
    struct student{
        address studentId;
        string  name;
        string  caste;
        uint256 scholarshipAmount;
        bool isExist;
    }
    /**
     * @dev creating an event "registration"
     */ 
    
    event registration( 
        address _studentId,
        string _name
        );
    
    /**
     * @notice function to enter studentId,name and caste and can be called only by owner
     * @param studentId is ethereum address
     * @param name is name of studentId
     * @param caste is caste of the student
     * @dev registering details of student to a address key
     */ 
    function register(address studentId,string memory name,string memory caste)public onlyOwner {
        /**
         * @dev isExist to avoid multiple entry of 
         */ 
        
        require(students[studentId].isExist==false);
        
        uint256 scholarshipAmount;
        /**
         *@dev conditional statments to calculate the scholarshipAmount
         */ 
         
        if (marks[studentId].totalMarks > 240 && amounts[studentId].income < 10000)
        { scholarshipAmount = 80000; 
            
        } 
        else if (marks[studentId].totalMarks > 150 && marks[studentId].totalMarks <=240 && amounts[studentId].income < 10000){
            scholarshipAmount = 50000;
            }
            else {
                scholarshipAmount = 10000;
                }
        
        /**
         *@dev assigning values to a key
         */ 
        students[studentId]=student(studentId,name,caste,scholarshipAmount,true);
        /**
         *@dev emitting event registration
         */ 
        emit registration (msg.sender,name);
    }
    
    /**
     *@notice function to get details of student including totalMarks and scholarshipAmount on the basis of key
     *@param studentId is students ethereum address
     */
     
    function getDetails(address studentId)public view returns(address,string memory,string memory,uint160,uint256,uint256){
        
        /**
         *@dev returning studentId,name,caste,totalMarks,scholarshipAmount to corresponding key
         */
         
        return (students[studentId].studentId,students[studentId].name,students[studentId].caste,marks[studentId].totalMarks,amounts[studentId].income,students[studentId].scholarshipAmount);
        
    }
}
