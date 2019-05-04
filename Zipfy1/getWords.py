###################################################################
# ZYPHF CALCULATOR						  #
# Reads text documents and calculates word frequency, proving or  #
# disproving Zypfs law						  #
###################################################################

#Importing Salsa
import collections, sys, operator, re

#Setting Variables
allWords = []
totalRanks = 0
dic = {}
keys = []
value = []
totalStr = ""
totalwords = 0
#Checking Arguments
if len(sys.argv) > 1:
	fileName = sys.argv[1]
else:
	fileName = 'sample.txt'

#Adding words to list
print("Loading words...")
with open (fileName, 'r') as f:
	for line in f:
		for word in line.split():
			#totalStr = totalStr + word + " "	
			allWords.append(word)
			totalwords += 1
			dic[word] = 0	
			dic[word] += 1	
# de capitalization code here


#################################
#Putting words into dictionary  #
#################################

#Sorting Dictionary
print("Sorting dictionary...")
sorted_dic = sorted(dic.items(), key=operator.itemgetter(1))
sdic = list(sorted_dic)

		
	
print('Done!')
print sorted_dic[0]

#Setting total ranks
totalRanks = len(sorted_dic) - 1

#Outputing relevant values
print
print("Total Unique Words: %d" % totalRanks)
print("Total Words: %d" % totalwords)
print("keys type: %s" % type(keys))
print("Value type: %s "% type(value))

#Printing top 5 (or less)
first5 = 0
maxOutput = 5

if len(value) < 5:
	maxOutput = len(value)
while first5 < maxOutput:
	print("Rank %d: %s %s" % (first5 + 1, value[first5], keys[first5]))
	first5 += 1
#m = re.search(r"'(.+?)'", string)
#print m.group(1)

print ("Allwords type: %s" % type(allWords))
print (allWords)


#Therefor Zipf was wrong. The universe is chaos. Nothing is predictable. There is no god.



