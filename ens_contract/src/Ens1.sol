// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Ens1 {
    struct Namings {
        address owner;
        string name;
        address addressToResolve;
        uint index;

    }

    struct Domains {
        address owner;
        string name;
        address domainToResolve;
        uint index;
    }

    Namings[] getIndexToStruct;
    Domains[] getIndexToDomains;


    function registerName(string memory _name, address _addressToResolve) internal {
        // todo- add only owner modifier and require
        uint index = getIndexToStruct.length + 1;
        getIndexToStruct.push(Namings(msg.sender, _name, _addressToResolve, index));

    }


}