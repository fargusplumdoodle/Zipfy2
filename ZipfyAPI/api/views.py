

def add_words(request):
    """
    For adding words to the database:

    request:
    {
        words: [
            { word: "elephant", count: 39},
            { word: "communism", count: 49},
            { word: "overlords", count: 39},
        ]
    }

    This view will add whatever the count is to the word in the database

    Sanitation:
        all words are lower case, all non alphabetic characters are removed

    Procedure:
        1. validate data, must follow format above, POST only
            1.1 return 400 if necessary
        2. sanitize words
        3. increment the value for the given word in the database, or create it with that
            count if it does not exist
        4. increment the total number of documents by 1

    Response:
        200
    """
    print("CLIENT: " + request.META['REMOTE_HOST'])
    pass

