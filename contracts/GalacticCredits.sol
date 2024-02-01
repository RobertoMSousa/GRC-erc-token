// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GalacticCredits is ERC20 {
    uint constant _initial_supply = 1_000_000_000_000 * (10**18); // 1 trillion Galactic Credits
    constructor() ERC20("Galactic Credits", "GCR") {
        _mint(msg.sender, _initial_supply);
    }
}
