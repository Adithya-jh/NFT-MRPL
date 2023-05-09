//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/hardhat/console.sol";


contract NFTMarketplace is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    uint listingPrice = 0.025 ether;
    address payable owner;

    mapping(uint256 => MarketItem) private idToMarketItem;

    struct MarketItem{
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    event MarketItemCreated(
          uint256 indexed tokenId,
        address  seller,
        address  owner,
        uint256 price,
        bool sold
    );

    constructor(){
        owner = payable(msg.sender); //SAYING THE OWNER IS THE ONE WHO IS DEPLOYING IT.
    }

    function updateListingPrice(uint _listingPrice) public payable {
        require(owner== msg.sender,"Only Marketplace owner can update the listing price");
        listingPrice=_listingPrice;
    }

    function getListingPrice() public view returns(uint256){
        return listingPrice;
    }

    function createToken(string memory tokenURI,uint256 price ) public payable returns(uint){
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(msg.sender,newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        createMarketItem(newTokenId,price);
        return newTokenId;
    }



    function mintNFT(address recipient, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}


