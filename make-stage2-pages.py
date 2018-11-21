#Script to facilitate page creation
import json
import os
from pathlib import Path
from shutil import copyfile

filecontent = ""
#Iterate and create new pages
def createfiles(range):
	filepath = "pages/building-nodes/"
	fileNum = 0
	for color in data:
		for pageNum in data[color]:
			if int(pageNum) not in range or pageNum not in data[color].keys():
				continue;
			pageName = data[color][pageNum]["PageName"]
			buildName = data[color][pageNum]["BuildingName"]
			ip = data[color][pageNum]["IP"]
			username = data[color][pageNum]["Username"]
			password = data[color][pageNum]["Password"]
			port = ":80"
			if ip:
				url = "http://" + ip
			else:
				url = pageName
			
			#MakePage
			filename = filepath + pageNum + ".html"
			htmlTemplate = """
	<!DOCTYPE html>
	<html>
		<head>
			<meta name="color" content='""" + color + """'>
			<meta name="pageNum" content='""" + pageNum + """'>
			<title>""" + pageName + """</title>
			<link rel="stylesheet" href="../../css/style.css">
		</head>
		
		<body>
			<div class="bg">
				<iframe></iframe>
				<script type="text/javascript" src="../../json/stage2_pages.json"></script>
				<script type="text/javascript" src="../../js/login.js"></script>
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
	if os.path.exists("json/stage2_last_update.json"):
		os.unlink("json/stage2_last_update.json")
		file2.close()
	temp = filecontent.replace("'",'"')
	content = "data = '" + temp + "';"
	file.close()
	copyfile("json/stage2_setup.json","json/stage2_last_update.json")
	fout = open("json/stage2_pages.json", "w")
	fout.write(content)
	fout.close()
	endMsg = "\n" + str(fileNum) + " files created. Press enter to finish."
	input(endMsg)

pageNums = list(range(6,50))
pageNums.remove(7)

#Open JSON data

with open('json/stage2_setup.json') as file:
	data = json.load(file)
	filecontent = str(data)

#Check for old JSON file, if not existant, make all files
if not os.path.exists("json/stage2_last_update.json"):
	createfiles(pageNums)
else:
	with open('json/stage2_last_update.json') as file2:
		dataOld = json.load(file2)
	for color in data:
		for pageNum in data[color]:
			different = False
			for property in data[color][pageNum]:
				if str(data[color][pageNum][property]) != str(dataOld[color][pageNum][property]):
					different = True
					break
			if not different:
				pageNums.remove(int(pageNum))
	print("Differences by page number:")
	print(*pageNums, sep = ", ")
	if len(pageNums) == 0:
		flush = input("No changes found. Overwrite all files anyway? (Y/N)")
		if str.casefold(flush) == "y":
			createfiles(list(range(6,50)))
		else:
			print("\nNo changes made. Exiting program.")
	else:
		flush = input("Overwrite files? (Y/N)")
		if str.casefold(flush) == "y":
			createfiles(pageNums)
			print("\nExiting program.")
		else:
			print("\nNo changes found. Exiting program.")


