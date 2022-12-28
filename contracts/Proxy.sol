// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IContract {
    function attempt() external;
}

contract Proxy {
    address owner;
    address winnerContract = 0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502;

    constructor(){
        owner = msg.sender;
    }

    function win() public {
        require(msg.sender == owner, "You aren't the owner");
        IContract(winnerContract).attempt();
    }
}
