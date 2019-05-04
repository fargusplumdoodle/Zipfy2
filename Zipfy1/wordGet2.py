from __future__ import division
import collections, sys, operator, re
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

#Checking Arguments for pesto
if len(sys.argv) > 1:
	fileName = sys.argv[1]
else:
	fileName = 'sample.txt'

#Opening File
file = open(fileName, "r")

print ("Loading Words!")
with open (fileName, 'r') as f:
	for line in f:
		for word in line.split():
			#.index("test")

			allWords.append(word.lower())
			totalWordCount += 1

			if word in wordEntry:
				dic[word.lower()] += 1
				value[wordEntry.index(word.lower())] += 1

			else:
				wordEntry.append(word.lower())	
				dic[word.lower()] = 1					
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

#printing top 5 bananas
first5 = 0

print('Top Words:')

if totalRank < 5:
	while first5 < totalRank:
		print("Word %d: %s %s" % (first5 + 1, owordEntry[first5], ovalue[first5]))
		first5 += 1
else:
	while first5 < 5:
		print("Word %d: %s %s" % (first5 + 1, owordEntry[first5], ovalue[first5]))
		first5 += 1

#checking for pareto pickle
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
	if (percentageOf20percent > 0.85) or (percentageOf20percent > 0.75):
		print("The Pareto Principle does not apply to this document...")

	else: 
		print("Pareto Principle applies!")


#Checking Zipfs Potatoe
print
print ("Checking Zipfs McDouble")
checkRank = 50
tempVar = topWordValue / (checkRank+1)
print("Word: %s" % owordEntry[checkRank])
print("Rank: %d" % (checkRank+1))
print("Zipf says the word should appear: %.2f" % tempVar)
print("The word appears: %d times." % ovalue[checkRank])


