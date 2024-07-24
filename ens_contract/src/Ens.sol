// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Ens {


    struct AddressToName {
        address addr;
        string name;
    }

    AddressToName public addressToName;

    constructor (string memory userName) {
        addressToName.addr = msg.sender;
        addressToName.name = userName;
    }

    modifier onlyOwner() {
        require(msg.sender == addressToName.addr, "Caller is not the owner");
        _;
    }

    function setUsername(string memory _name) external onlyOwner {
        addressToName.name = _name;
    }

    function getUserName() external view returns (string memory) {
        if (bytes(addressToName.name).length == 0) {
            return "set user name first";
        }

        return addressToName.name;
    }

    function getUsesAddress() external view returns (address) {
        return addressToName.addr;
    }    

}