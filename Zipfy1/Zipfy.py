#!/usr/bin/python
# Usage Guide
#
#	-f <File> Sets input File
#
#	-o <File> Sets output File
#
#	-p	  Pareto console output
#
#	-pX <numerical Value> Print X
#
#	-n 	  Excludes Numbers from count
#
from __future__ import division
import collections, sys, operator, re, xlsxwriter
from collections import Counter

#Declaring Salsa
wordEntry = []
value = []
dic = {}
allWords = []
totalRank = 0
totalWordCount = 0
topWordValue = 0
topWord = ""
setFile = False
checkPareto = False
printX = False
printXindex = 0
zipfVars = []
excludeNumbers = False

#Checking Arguments for Document
for x in range (0, len(sys.argv)):
        
	if sys.argv[x] == "-f" and setFile == False:
                print ("Loading File...")
                setFile = True
                inPutFileIndex = x+1
	
	if sys.argv[x] == "-p" and checkPareto == False:
		checkPareto = True
	
	if sys.argv[x] == "-pX" and printX == False:
		printXindex = int(sys.argv[x + 1])
		printX = True
        if sys.argv[x] == "-n" and excludeNumbers == False:
               excludeNumbers = True
	

#Opening File
if setFile == True:
	fileName = sys.argv[inPutFileIndex]
else:
	fileName = 'sample.txt'

#Opening File and populating allWords
print ("Loading Words!")
with open (fileName, 'r') as f:
	for line in f:
		for word in line.split():
			allWords.append(word.lower())
#setting wordcount

totalWordCount = len(allWords)

for x in range (0, len(allWords)):

	if excludeNumbers == True:
		allWords[x] = re.sub(r'0', r'', allWords[x])
		allWords[x] = re.sub(r'1', r'', allWords[x])
		allWords[x] = re.sub(r'2', r'', allWords[x])
		allWords[x] = re.sub(r'3', r'', allWords[x])
		allWords[x] = re.sub(r'4', r'', allWords[x])
		allWords[x] = re.sub(r'5', r'', allWords[x])
		allWords[x] = re.sub(r'6', r'', allWords[x])
		allWords[x] = re.sub(r'7', r'', allWords[x])
		allWords[x] = re.sub(r'8', r'', allWords[x])
		allWords[x] = re.sub(r'9', r'', allWords[x])



	allWords[x] = re.sub(r'[^a-zA-Z0-9 ]',r'',allWords[x])

for x in range (0, len(allWords)):

	a = str(allWords[x])

	if a in wordEntry:
		value[wordEntry.index(a)] += 1

	else:
		wordEntry.append(a)	
		value.append(1)

#Ordering pastrami
print ("Ordering Words!")
value, wordEntry = (list(t) for t in zip(*sorted(zip(value, wordEntry))))

totalRank = len(wordEntry)

#reversing list orders
ovalue = value[::-1]
owordEntry = wordEntry[::-1]

#setting top word 
topWordValue = ovalue[0]
topWord = str(owordEntry[0])


#printing relevant mangos
print
print("Total Unique Words: %d" % totalRank)
print("Total Words: %d" % totalWordCount)
print

#printing top x bananas
superTempVar = False


if printX == True and printXindex <= totalRank and superTempVar == False: 

	superTempVar == True
	print('Top Words:')

	for x in range (0, printXindex):
		zipfH = ovalue[0] * 1 / (x + 1)
		print("Word %d: %s,     %s,     %.2f" % (x + 1, owordEntry[x], ovalue[x], zipfH))
	#	zipfVars.append(zipfH)
	
	
 ###############################################################################################################################
 ###############################################################################################################################
 ###############################################################################################################################
 ###############################################################################################################################

#	for x in range (0, len(zipfH))
	###############################################################################################################################
		
if printXindex > totalRank and superTempVar == False:
	print ("X is greater than total number of words, Try again with a smaller number")


#checking for pareto pickle
if checkPareto == True:
	print 
	print ('Checking Pareto pickle')
	
	top20p = int(totalRank*0.2)
	top20total = 0
	bot80p = int(totalRank*.8)
	pareto = 0
	
	if top20p < 1:
		print ("Too little data to check Pareto Principle")
	else:
		while pareto < top20p:
	
			top20total += int(ovalue[pareto])
			pareto += 1
	
		percentageOf20percent = top20total/totalWordCount
	
		print ("Top 20 percent Total Words: %d / %d" % (top20total, totalWordCount))
		print ("Top 20 percent ratio: %.2f Percent" % percentageOf20percent)
	
		#Calculating if pareto principle applies
		if (percentageOf20percent > 0.85) or (percentageOf20percent < 0.75):
			print("The Pareto Principle does not apply to this document...")
	
		else: 
			print("Pareto Principle applies!")
	print
	
#####	  ##### 
#	      #
# File output #
#	      #	
#####     #####

setOutput = False
outPutFileIndex = 0

#Checking Arguments for pesto
for x in range (0, len(sys.argv)):
	if sys.argv[x] == "-o" and setOutput == False:
		print ("Detected Output File Request")
		setOutput = True
		outPutFileIndex = x+1

if setOutput == True:

	outputFile = sys.argv[outPutFileIndex]

	#setting path
	row = 0
	col = 0
	
	#adding Workbook
	print ("Adding Workbook...")
	wb = xlsxwriter.Workbook(outputFile)
	ws = wb.add_worksheet()
	
	print ("Writing to WorkBook...")
	#adding table headers
	ws.write(row, col, "Rank")
	col += 1
	
	ws.write(row, col, "Word")
	col += 1
		
	ws.write(row, col, "Presence")
	col += 1
		 
	ws.write(row, col, "Zypf Estimate")
	
	col -= 3
	row += 1
	
	#Filling out data
	for x in range(0, len(owordEntry)):
	
		if x > 0:
			ws.write(row, col, (x+1))
			col += 1
			ws.write(row, col, owordEntry[x])
			col += 1
			ws.write(row, col, ovalue[x])
			col += 1	
			zypf = ovalue[0] * 1 / (x+1) 
			ws.write(row, col, zypf)
			col -= 3
			row += 1
			
		else: 
			ws.write(row, col, (x+1))
			col += 1
			ws.write(row, col, owordEntry[x])
			col += 1
			ws.write(row, col, ovalue[x])
			
	
			col -= 2 
			row += 1
	
	#Generating Chart
	row = 0
	col = 10
	
	#setting chart type
	chart = wb.add_chart({'type': 'line'})
	
	chart.add_series({'name': 'Zipf vs Reality'})
	chart.add_series({'categories': '=Sheet1!A2:A40'})
	#chart.add_series({'value': '=Sheet1!C2:D40'})
	chart.add_series({'values': '=Sheet1!$A$1:$A$6'})

	ws.insert_chart('G1', chart)
	
	wb.close()
	print ("Done!")
































