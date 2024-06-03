// variable to hold minted NFTs (array is ideal for multiple NFTs)
let mintedNFTs = [];

// function to mint an NFT with metadata
function mintNFT(name, description, image) {
  // Create NFT object with metadata
  const nft = {
    name: name,
    description: description,
    image: image,
  };

  // Add minted NFT to the array
  mintedNFTs.push(nft);
}

// function to list all minted NFTs' metadata
function listNFTs() {
  console.log("** Minted NFTs **");
  for (const nft of mintedNFTs) {
    console.log("Name:", nft.name);
    console.log("Description:", nft.description);
    console.log("Image:", nft.image);
    console.log("----------");
  }
}

// function to get the total number of minted NFTs
function getTotalSupply() {
  return mintedNFTs.length;
}

// Example usage (call your functions here)
mintNFT("Cool Crypto Cat", "A unique and adorable crypto kitty", "https://.../cat.png");
mintNFT("Space Traveler", "A digital artwork depicting a journey through space", "https://.../space.jpg");

console.log("Total NFTs minted:", getTotalSupply());
listNFTs();
