#Script to facilitate page creation
import json
import os
from pathlib import Path

filepath = "pages/building-nodes/"

#Prompt to flush old files from directory
flush = input("Would you like to erase the old files? (Y/N)")
print(flush)
if str.casefold(flush) == "y":
	for filename in os.listdir(filepath):
		os.unlink(filepath+filename)
		print(filename + " deleted.")
	

#Open JSON data
with open('json/stage2_pages.json') as file:
	data = json.load(file)
	
#Iterate and create new pages
fileNum = 0
for color in data:
	for pageNum in data[color]:
		pageName = data[color][pageNum]["PageName"]
		buildName = data[color][pageNum]["BuildingName"]
		ip = data[color][pageNum]["IP"]
		username = data[color][pageNum]["Username"]
		password = data[color][pageNum]["Password"]
		url = "http://" + username + ":" + password + "@" + ip + ":80/scada-vis"
		
		#MakePage
		filename = filepath + pageNum + ".html"
		htmlTemplate = """
<!DOCTYPE html>
<html>
	<head>
		<title>""" + url + """</title>
		<link rel="stylesheet" href="../../css/style.css">
	</head>
	
	<body>
		<div class="bg">
			<iframe src=""" + "../red.html" + """>
				
			</iframe>
			<div class="menu">
				<img class="menu-button" src="../../svg/SVG-Button-002.svg">
				<div class="menu-options">
					<a href="../red.html">Red</a>
					<a href="../green.html">Green</a>
					<a href="../blue.html">Blue</a>
					<a href="../yellow.html">Yellow</a>
					<a href="../pink.html">Pink</a>
					<a href="../teal.html">Teal</a>
				</div>
			</div>
			
			<div class="back">
				<a href="../../home.html"><img class="back-button" src="../../svg/SVG-Button-001.svg"></a>
			</div>
		</div>
	</body>
	
</html>"""
		msg = ""
		filePath = Path(filename)
		if filePath.is_file():
			msg = filename + " overwritten."
		else:
			msg = filename + " created."
		f = open(filename,"w+")
		f.write(htmlTemplate)
		f.close()
		fileNum += 1
		
		print(msg)
		
endMsg = "\n" + str(fileNum) + " files created. Press enter to finish."
input(endMsg)