import axios from "axios";

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function() {
    const myAddress = document.getElementById("user-address");
    console.log(myAddress.value);

    const apiKey = "eqVlGAkmbuEJsJ_9jR5c9RAsVA8yYRBy";
    const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs/`;
    const ownerAddr = myAddress.value;
    console.log(myAddress.value)

    var config = {
        method: 'get',
        url: `${baseURL}?owner=${ownerAddr}`
    };

    axios(config).then(function (response) {
        var nftList = response.data.ownedNfts;
        console.log(nftList);
        let nftMasterList = [];
        // Create a table element
        const tableElement = document.createElement("div");
        tableElement.classList.add('nft-row');
        
        for (let i = 0; i < nftList.length; i++) {
            console.log(response.data.ownedNfts[i].metadata.name);
            console.log(response.data.ownedNfts[i].metadata.image);
            nftMasterList[i] = response.data.ownedNfts[i].metadata.name;

            // Create a row element for each NFT
            const colElement = document.createElement("div");
            colElement.classList.add('nft-col');

            // Create a cell element for the NFT name
            const nameCellElement = document.createElement("h3");
            // Set the innerHTML of the cell element to the name of the NFT
            nameCellElement.innerHTML = response.data.ownedNfts[i].metadata.name;
            // Create a cell element for the NFT image
            const imageCellElement = document.createElement("div");
            imageCellElement.classList.add('butt');

            // Create an img element for the NFT image
            const imgElement = document.createElement("img");

            // Set the src attribute of the img element to the image URL
            imgElement.src = response.data.ownedNfts[i].metadata.image;
            // Append the img element to the cell element
            imageCellElement.appendChild(imgElement);
            // Append the cell elements to the row element
            colElement.appendChild(nameCellElement);
            colElement.appendChild(imageCellElement);
            // Append the row element to the table element
            tableElement.appendChild(colElement);
        }

        // Append the table element to the nft-images-container element
        document.getElementById("nft-images-container").appendChild(tableElement);
    })
})
