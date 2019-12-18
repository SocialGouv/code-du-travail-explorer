#!/urs/bin/env python
# coding=utf-8

from flask import jsonify
import os

from api.ready import add_ready
from api.search import add_search
from api.index import add_index

data_path = os.path.join(
    os.path.dirname(os.path.abspath(__name__)),
    "data"
)

queries_path = os.path.join(data_path, 'data.txt')
stops_path = os.path.join(data_path, 'stops.txt')


class NotReady(Exception):
    status_code = 503

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv


class NLP:
    def __init__(self):
        self.ready = {}
        self.data = {}
        self.threads = []

    def __bool__(self):
        if not self.ready:
            return False
        # return true iff all are services are ready
        return all(self.ready.values())

    @property
    def is_ready(self):
        return bool(self)

    @property
    def what(self):
        return [k for k, v in self.ready.items() if v]

    def check_status(self, target, error_message='NLP API is not ready yet...'):
        if not self.ready.get(target, False):
            raise NotReady(error_message)

    def get(self, target, check_ready=True)
       if check_ready:
            self.check_status(target)
        return self.data.get(target)

    def __getitem__(self, item):
        return self.data.get(item)

    def set(self, target, data=None):
        self.data[target] = data
        self.ready[target] = True

    def queue(self, target, thread):
        self.ready[target] = False
        self.threads.append(thread)

    def load(self):
        for thread in self.threads:
            thread.start()


nlp = NLP()


def load_nlp(app):
    @app.errorhandler(NotReady)
    def handle_not_ready(error):  # pylint: disable=unused-variable
        response = jsonify(error.to_dict())
        response.status_code = error.status_code
        return response

    add_ready(app, nlp)
    add_search(app, nlp, stops_path)
    add_index(app, nlp)

    nlp.load()
