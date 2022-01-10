
function copyWalletAddress() {
    var copyText = "0x78A2Aa022C361e7E1008a9A48aA6E35a1C2f2724";
    navigator.clipboard.writeText(copyText);
     alert("Copied the text: " + copyText);
}


async function populateMidPanel() {

    let web3 = new Web3(Web3.givenProvider);

    let index =1;

    for(let key in bloktopiaJobeList){
        let contract = new web3.eth.Contract(bloktopiaJobeContract, key);
        let val = await contract.methods.totalSupply().call();
        val = formartVal(web3.utils.fromWei(val, "ether"));
        let status = getStatus(val);
        let rowDiv = getRowDivNode(bloktopiaJobeList[key], index, val, status);
        document.getElementById("midPanel").appendChild(rowDiv);
        index++;
    }
   

}

function getStatus(val){
    if(val == '4,800,000'){
        return 'Full';
    }

    return 'Available';
}


function getRowDivNode(jobeUrl, index, val , status){

    let indexTd = document.createElement('td');
    indexTd.innerHTML = index;

    let linkTd = document.createElement('td');
    linkTd.innerHTML = '<p><a href="'+jobeUrl +'target="_blank">JOBE #'+index+'</a></p>';

    let valTd = document.createElement('td');
    valTd.innerHTML = val;

    let statusTd = document.createElement('td');
    statusTd.innerHTML = status;



    let rowDiv= document.createElement('tr');
    rowDiv.appendChild(indexTd);
    rowDiv.appendChild(linkTd);
    rowDiv.appendChild(valTd);
    rowDiv.appendChild(statusTd);

    return rowDiv;
}

function formartVal(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const bloktopiaJobeList = {
    '0x34c883b2a45b221d3e7269a2d3424edcfc408efd':'https://blokjobe.z35.web.core.windows.net/',
    '0x017125bb687205e5607e8d6328a603d18a97eeb4':'https://blokjobe2.z35.web.core.windows.net/',
    '0x1b0fa71428aee075a0d318dbb5ed9709068d9c96':'https://blokjobe3.z35.web.core.windows.net/',
    '0xa5e5d80387c80dd2ffe3765b00ad24630e602e5c':'https://blokjobe4.z35.web.core.windows.net/',
    '0x4c2c74ca545f851acfb25a7f6090d224e6c276d9':'https://blokjobe5.z35.web.core.windows.net/',
    '0x7b49053468aee5d06343c4d20457b8ea40962169':'https://blokjobe6.z35.web.core.windows.net/',
    '0xb3f5b1d4629dca80012bb9e453ddd15480264a02':'https://blokjobe7.z35.web.core.windows.net/',
    '0xc901e49342d071c3224b015ca0bdcbca21806542':'https://blokjobe8.z35.web.core.windows.net/',
    '0xa7f182995a1f32ae048edec19239917e5d41d124':'https://blokjobe9.z35.web.core.windows.net/',
    '0x5699eb2a1420057be8a04c0d9fbff138b6ca4e68':'https://blokjobe10.z35.web.core.windows.net/',
    '0x1dfa55e822b03ecfb921896161daee611f4d582d':'https://blokjobe11.z35.web.core.windows.net/',
    '0x709be07e632cc566418c617302bfe40e1b2fca03':'https://blokjobe12.z35.web.core.windows.net/',
    '0xf4a356108dab75c3ff5090f4bd4385e07a92a53f':'https://blokjobe13u92a35f5a.z35.web.core.windows.net/',
    '0x3ca47eb24944dd1db9851f08402759de46b5127e':'https://blokjobe14u2a2a7528.z35.web.core.windows.net',
    '0x5a9b97b7df0259c28a35dc7e328b4910a88b2a40':'https://blokjobe15u1b106bb3.z35.web.core.windows.net/',
    '0xd35d83008f30a647ab0841c79f6c3de750494f33':'https://blokjobe16u34f6111f.z35.web.core.windows.net/',
    '0x58697f54571d09be3f33c3d5c3ce47a94f02b1cf':'https://blokjobe17u0edfe4be.z35.web.core.windows.net/',
    '0x87a146038Cc0268D8FAec7276C1b5C6Ba7F04761':'https://blokjobe18u758e1014.z35.web.core.windows.net/',
    '0xce13f87af4b5638fd7d86a67cfaa67ea9fd894ca':'https://blokjobe19u1e4d9ba5.z35.web.core.windows.net/',
    '0x56d5adaeb96575f82037b6cdf49d30128b37c43f':'https://blokjobe20u88b4cfdc.z35.web.core.windows.net/',
    '0x8ee7bf9283e1711787cb1004944df60758265c51':'https://blokjobe21u3b0774c8.z35.web.core.windows.net/',
    '0xe51762afc1ca15f0876550668209811437af2f49':'https://blokjobe22u156da1fa.z35.web.core.windows.net/',
    '0xd35823c6ef358906fc0663d40399e29c28a19c14':'https://blokjobe23u716573fa.z35.web.core.windows.net/',
    '0x0e032a5549da5efb6fcc6827b9a181503d9a4123':'https://blokjobe24ue380b518.z35.web.core.windows.net/',
    '0x7e7faf0767110be61b72ca327ab9ed1bc74814c2':'https://blokjobe25ua49c22a7.z35.web.core.windows.net/',
    '0xba6ce9b4366dcf3e27f49bca16c58f5d47fbef2f':'https://blokjobe26udb0d35e7.z35.web.core.windows.net/',
    '0xc22173687559ae2ca5e17cf3ac5080b81db596fe':'https://blokjobe27u860abe9a.z35.web.core.windows.net/',
    '0xeb679951e6be5e2f67b446373b567544545ae04e':'https://blokjobe28ufc98778b.z35.web.core.windows.net/',
    '0xa6a58bff48a25ed32a90caddc1893f7a43b4fffa':'https://blokjobe29udaa7c2ee.z35.web.core.windows.net/',
    '0xa7d480616d61382376982f5b41b373516ca272d4':'https://blokjobe30ue8e46500.z35.web.core.windows.net/',
    '0xf69e2bb12de4df63b8564371eba81684114b7507':'https://blokjobe31u8bd61e6f.z35.web.core.windows.net/',
    '0x7d21e67af0659b25f00451ee38c840ca90b1cce8':'https://blokjobe32u1b1ec873.z35.web.core.windows.net/',
    '0x5a681e876bd59bd35407c141e2499d1dc3c33ff1':'https://blokjobe33u70501346.z35.web.core.windows.net/',
    '0x3ab5f9e35d420f52fced442be9e5675d5e4b213f':'https://blokjobe34u52e81e29.z35.web.core.windows.net/',
    '0x9bea30ab4e6c9c1bed137e2ef803b004474d98cf':'https://blokjobe35ud0bb13ec.z35.web.core.windows.net/',
    '0x353b18963e0c380717121e3aace1b0022fc77100':'https://blokjobe36uca3c3449.z35.web.core.windows.net/',
    '0xdca2299d48d24a0c6945a8c582145627fd4829e1':'https://blokjobe37u33c9d78f.z35.web.core.windows.net/',
    '0x433f25bcd9be1e0159295a36fda680d04e48ccee':'https://blokjobe38u1398386d.z35.web.core.windows.net/'

}



const bloktopiaJobeContract = [
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];