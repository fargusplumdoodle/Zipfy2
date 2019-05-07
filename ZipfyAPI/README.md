# Zipfy API

This is the API for storing all of the words and their frequency from every time the front end is used.

I have designed this in a way that will minimize the computational work that the API server has to do.

When getting all of the words, the API will send them unordered with no operations on each word. It is then up to the client to sort the data and find meaning in it.

## Endpoints:
#### api/v1
###### get:
Returns all words and their count from the database
###### post:
submits a list of words to the database

#### api/v1/stats
###### get
Returns basic info about the API
