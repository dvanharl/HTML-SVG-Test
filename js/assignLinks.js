(function(){
//Get title of html for color
color = document.title;
//Get links of respective color in JSON
var jsonData = JSON.parse(data);
/*var jsonData = {
	"Yellow":{
		"25":{
			"PageName":"N050",
			"BuildingName": "T2 - Penthouse",
			"IP": "192.168.1.170",
			"Username": "",
			"Password": ""
		},
		"26":{
			"PageName":"N051",
			"BuildingName": "T2",
			"IP": "192.168.1.171",
			"Username": "",
			"Password": ""
		},
		"27":{
			"PageName":"N052",
			"BuildingName": "T2",
			"IP": "192.168.1.172",
			"Username": "",
			"Password": ""
		},
		"28":{
			"PageName":"N053",
			"BuildingName": "T2",
			"IP": "192.168.1.173",
			"Username": "",
			"Password": ""
		},
		"29":{
			"PageName":"N054",
			"BuildingName": "T2",
			"IP": "192.168.1.174",
			"Username": "",
			"Password": ""
		},
		"30":{
			"PageName":"N055",
			"BuildingName": "T2",
			"IP": "192.168.1.175",
			"Username": "",
			"Password": ""
		},
		"31":{
			"PageName":"N056",
			"BuildingName": "T2",
			"IP": "192.168.1.176",
			"Username": "",
			"Password": ""
		},
		"32":{
			"PageName":"N057",
			"BuildingName": "T2",
			"IP": "192.168.1.177",
			"Username": "",
			"Password": ""
		},
		"33":{
			"PageName":"N058",
			"BuildingName": "T2",
			"IP": "192.168.1.178",
			"Username": "",
			"Password": ""
		},
		"34":{
			"PageName":"N059",
			"BuildingName": "T2",
			"IP": "192.168.1.179",
			"Username": "",
			"Password": ""
		},
		"35":{
			"PageName":"N060",
			"BuildingName": "T2",
			"IP": "192.168.1.180",
			"Username": "",
			"Password": ""
		},
		"36":{
			"PageName":"N061",
			"BuildingName": "T2",
			"IP": "192.168.1.181",
			"Username": "",
			"Password": ""
		},
		"37":{
			"PageName":"N062",
			"BuildingName": "T2",
			"IP": "192.168.1.182",
			"Username": "",
			"Password": ""
		},
		"38":{
			"PageName":"N063",
			"BuildingName": "T2",
			"IP": "192.168.1.183",
			"Username": "",
			"Password": ""
		},
		"39":{
			"PageName":"N064",
			"BuildingName": "T2",
			"IP": "192.168.1.184",
			"Username": "",
			"Password": ""
		},
		"40":{
			"PageName":"N065",
			"BuildingName": "T2",
			"IP": "192.168.1.185",
			"Username": "",
			"Password": ""
		},
		"41":{
			"PageName":"N066",
			"BuildingName": "T2",
			"IP": "192.168.1.186",
			"Username": "",
			"Password": ""
		},
		"42":{
			"PageName":"N067",
			"BuildingName": "T2",
			"IP": "192.168.1.187",
			"Username": "",
			"Password": ""
		},
		"43":{
			"PageName":"N068",
			"BuildingName": "T2",
			"IP": "192.168.1.188",
			"Username": "",
			"Password": ""
		},
		"44":{
			"PageName":"N069",
			"BuildingName": "T2",
			"IP": "192.168.1.189",
			"Username": "",
			"Password": ""
		},
		"45":{
			"PageName":"N070",
			"BuildingName": "T2",
			"IP": "192.168.1.190",
			"Username": "",
			"Password": ""
		},
		"46":{
			"PageName":"N071",
			"BuildingName": "T2",
			"IP": "192.168.1.191",
			"Username": "",
			"Password": ""
		},
		"47":{
			"PageName":"N072",
			"BuildingName": "T2",
			"IP": "192.168.1.192",
			"Username": "",
			"Password": ""
		}
	},
	"Blue":{
		"17":{
			"PageName":"N150",
			"BuildingName": "T4",
			"IP": "192.168.1.150",
			"Username": "",
			"Password": ""
		},
		"18":{
			"PageName":"N151",
			"BuildingName": "T4",
			"IP": "192.168.1.151",
			"Username": "",
			"Password": ""
		},
		"19":{
			"PageName":"N152",
			"BuildingName": "T4",
			"IP": "192.168.1.152",
			"Username": "",
			"Password": ""
		},
		"20":{
			"PageName":"N153",
			"BuildingName": "T4",
			"IP": "192.168.1.153",
			"Username": "",
			"Password": ""
		},
		"21":{
			"PageName":"N154",
			"BuildingName": "T4",
			"IP": "192.168.1.154",
			"Username": "",
			"Password": ""
		},
		"22":{
			"PageName":"N155",
			"BuildingName": "T4",
			"IP": "192.168.1.155",
			"Username": "",
			"Password": ""
		},
		"23":{
			"PageName":"N156",
			"BuildingName": "T4",
			"IP": "192.168.1.156",
			"Username": "",
			"Password": ""
		},
		"24":{
			"PageName":"N157",
			"BuildingName": "T4",
			"IP": "192.168.1.157",
			"Username": "",
			"Password": ""
		}
	},
	"Red":{
		"8":{
			"PageName":"N300",
			"BuildingName": "STCP - Riser 1, 2 & 3",
			"IP": "192.168.1.158",
			"Username": "",
			"Password": ""
		},
		"9":{
			"PageName":"N301",
			"BuildingName": "STCP - Riser 4",
			"IP": "192.168.1.159",
			"Username": "",
			"Password": ""
		},
		"49":{
			"PageName":"N333",
			"BuildingName": "Building 219 Data Centre",
			"IP": "192.168.1.169",
			"Username": "",
			"Password": ""
		}
	},
	"Green":{
		"10":{
			"PageName":"N310",
			"BuildingName": "MLS - Ground",
			"IP": "192.168.1.160",
			"Username": "",
			"Password": ""
		},
		"11":{
			"PageName":"N311",
			"BuildingName": "MLS - Level 1",
			"IP": "192.168.1.161",
			"Username": "",
			"Password": ""
		},
		"12":{
			"PageName":"N312",
			"BuildingName": "MLS - Level 2",
			"IP": "192.168.1.162",
			"Username": "",
			"Password": ""
		},
		"13":{
			"PageName":"N313",
			"BuildingName": "MLS - Level 3",
			"IP": "192.168.1.163",
			"Username": "",
			"Password": ""
		},
		"14":{
			"PageName":"N314",
			"BuildingName": "MLS - Level 4",
			"IP": "192.168.1.164",
			"Username": "",
			"Password": ""
		},
		"15":{
			"PageName":"N315",
			"BuildingName": "MLS - Level 5",
			"IP": "192.168.1.165",
			"Username": "",
			"Password": ""
		},
		"16":{
			"PageName":"N316",
			"BuildingName": "MLS - Level 6 & 7",
			"IP": "192.168.1.166",
			"Username": "",
			"Password": ""
		}
	},
	"Pink":{
		"6":{
			"PageName":"N320",
			"BuildingName": "TSB - 1",
			"IP": "192.168.1.167",
			"Username": "",
			"Password": ""
		}
	},
	"Teal":{
		"48":{
			"PageName":"N330",
			"BuildingName": "Building 219",
			"IP": "192.168.1.168",
			"Username": "",
			"Password": ""
		}
	}
};
*/
//var jsonData = JSON.parse(jsonText);
var pageList = Object.keys(jsonData[color]);

//Find number of blocks in color page
var numContainer = document.getElementsByClassName("map-detail-table").length;

//Divide stage 2 pages along those blocks
var partitions = {
	"Red":[1,2,0,0],
	"Green":[4,3,0,0],
	"Blue":[4,4,0,0],
	"Yellow":[6,6,6,6],
	"Pink":[1,0,0,0],
	"Teal":[1,0,0,0]
}

var index = 1;

//Apply links to each block in page
for (i=0;i<pageList.length;i++){
	if(index == 5){
		break;
	}
	pageNum = String(pageList[i]);
	var linkName = jsonData[color][pageNum].BuildingName;
	var localUrl = "building-nodes/" + pageNum + ".html";
	//Finding the container
	container = document.getElementById(color + index);
	console.log(container);
	addLink(container,linkName,localUrl);
	partitions[color][index-1] -= 1;
	if(partitions[color][index-1] == 0){
		index += 1;
		
	}
}

//Clean up and hide other blocks
for(i=1;i<5;i++){
	container = document.getElementById(color+i);
	if(container.is(':empty') ) {
		container.style.display = "none";
	}
}

function addLink(container,title,src){
	var a = document.createElement('a');
	var aText = document.createTextNode(title);
	a.appendChild(aText);
	a.title = title;
	a.href = src;
	container.appendChild(a);
	var br = document.createElement('br');
	container.appendChild(br);
}
}());