from rest_framework.views import APIView
import json
import re
from django.http import HttpResponse, JsonResponse
from .models import Word, Zipfy


class ZipfAPI(APIView):
    def post(self, request, format=None):
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
            201
        """
        # 1
        try:
            # attempting to load data
            data = json.loads(request.body)
        except json.JSONDecodeError:
            return HttpResponse(status=400, content=json.dumps({'error': 'bad json request'}))

        # validating data
        if not validate_input(data):
            return HttpResponse(status=400, content=json.dumps({'error': 'bad request'}))

        data = data['words']  # cutting down on typing

        for word in data:
            # 2. Sanitization
            # this statement removes all non alphabetic characters and converts to lowercase
            word['word'] = re.sub(r'(\W|\d)', '', word['word']).lower()

            # 3. adding data to base of data
            # this whole thing assumes everything works when connecting to the database
            db_word = Word.objects.get_or_create(word=word['word'])[0]
            x = type(db_word)
            db_word.word_count = db_word.word_count + word['count']

            db_word.save()

        # 4. incrementing number of documentaroos in database
        # there should only be 1 Ziphy object ever because it holds all the general data for the API
        if len(Zipfy.objects.all()) == 0:
            Zipfy.objects.create(total_documents=1)
        else:
            z = Zipfy.objects.all().first()
            z.total_documents = z.total_documents + 1
            z.save()

        return HttpResponse(status=201)

    def get(self, request, format=None):
        """
        returns a list of all words in the database and how many times they appear.
        It is the clients job to sort and make sense of them, they mave more computing resources than we do
        """
        data = {
            'words': []
        }

        for word in Word.objects.all():
            data['words'].append({
                'word': word.word, 'count': word.word_count
            })

        return JsonResponse(data=data, status=200)


def stats(request):
    """
    this view is for retrieving global stats/information

    :response:
    {
        'documents': <int, total number of documents submitted to API>,
        'unique_words': <int, total number of unique words in database>
    }
    """
    if request.method != "GET": return JsonResponse({'error': 'endpoint requires GET'})

    # fixes bug were if this endpoint is called before the POST is called, would result in a 500 error
    if len(Zipfy.objects.all()) == 0:
        Zipfy.objects.create(total_documents=0)

    data = {
        'documents': Zipfy.objects.all().first().total_documents,
        'unique_words': len(Word.objects.all())
    }
    return JsonResponse(data)

def validate_input(data):
    try:
        if not type(data['words']) == list: return False
        for x in data['words']:
            if not type(x['word']) == str: return False
            if not type(x['count']) == int: return False
    except:  # sorry pep8
        return False

    return True

