# from django.test import TestCase
from unittest import TestCase
from .models import Word, Zipfy
import json
import requests


class TestAddWords(TestCase):
    def test_add_words_all_new(self):
        # all the words here are new to the databse
        valid_data = {
            'words': [
                {'word': "elephant", 'count': 1},
                {'word': "communism", 'count': 1},
                {'word': "overlords", 'count': 1},
             ]
        }

        # deleting the words we dont want
        for word in valid_data['words']:
            Word.objects.filter(word=word['word']).delete()

        num_docs = Zipfy.objects.all().first().total_documents

        # sending request
        r = requests.post('http://127.0.0.1:8000/api/v1/', data=json.dumps(valid_data))

        # checking status code
        assert r.status_code == 201

        for word in valid_data['words']:
            # checking if word in database
            assert len(Word.objects.filter(word=word['word'])) == 1  # word is not in database

            # checking if word has the right count
            assert Word.objects.get(word=word['word']).word_count == word['count']

        assert Zipfy.objects.all().first().total_documents == num_docs + 1  # there should be one more doc added




