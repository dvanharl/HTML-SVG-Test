//Get node specific credentials from meta data
var color;
var pageNum;
var http = require('http');
const metas = document.getElementsByTagName('meta');

for (let i = 0; i < metas.length; i++) {
	if (metas[i].getAttribute('name') === 'color') {
		color = metas[i].getAttribute('content');
	}
	if (metas[i].getAttribute('name') === 'pageNum') {
		pageNum = metas[i].getAttribute('content');
	}
}

//Get JSON data
var jsonData = JSON.parse(data);

//Get respective credentials
var host = "192.168.254.10";
var url = jsonData[color][pageNum]["IP"];
var user = jsonData[color][pageNum]["Username"];
var pass = jsonData[color][pageNum]["Password"];
url = "http://192.168.254.10/home/";
//Encode credentials into base64
var cred = user + ":" + pass;
var autho = "Basic " + window.btoa(cred);

//Use basic authorization to log in
document.getElementsByTagName('iframe');
var iframes = document.getElementsByTagName('iframe');
var iframe = iframes.item(0);
var iframePage= iframe.contentWindow.document;
logIn();

function logIn(){
	var header = {'Host': host, 'Authorization': auth};
	//var request = client.request('GET', '/', header);
	var request = http.request(url,header);
}