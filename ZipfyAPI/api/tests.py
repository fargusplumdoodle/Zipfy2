from django.test import TestCase
from .models import Word, Zipfy
import json
import requests


class TestAddWords(TestCase):
    def test_add_words_all_new(self):
        # all the words here are new to the databse
        valid_data = json.dumps({
            'words': [
                {'word': "elephant", 'count': 39},
                {'word': "communism", 'count': 49},
                {'word': "overlords", 'count': 39},
             ]
        })

        # deleting the words we dont want
        for word in valid_data['words']:
            Word.objects.filter(word=word['word']).delete()

        num_docs = Zipfy.objects.all().first().total_documents

        # sending request
        r = requests.post('http://127.0.0.1:8000/api/v1/', data=valid_data)

        # checking status code
        assert r.status_code == 200

        for word in valid_data['words']:
            # checking if word in database
            assert len(Word.objects.filter(word=word['word'])) == 1  # word is not in database

            # checking if word has the right count
            assert Word.objects.get(word=word['word']).count == word['count']

        assert Zipfy.objects.all().first().total_documents == num_docs + 1  # there should be one more doc added




