var Scholarship = artifacts.require("./Scholarship.sol");

//var Merit = artifacts.require("./Merit.sol");
//var Finance = artifacts.require("./Finance.sol");
//var ScholarshipToken = artifacts.require("./ScholarshipToken.sol");

module.exports = function(deployer) {
    //deployer.deploy(Merit);
  //deployer.deploy(Finance);
  //deployer.deploy(ScholarshipToken);
  //deployer.link(Merit,Finance,Scholarship);
  deployer.deploy(Scholarship);
};


