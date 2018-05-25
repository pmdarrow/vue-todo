from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from flask_cors import CORS

from .make_celery import make_celery


app = Flask(__name__)
app.config.update(
    SQLALCHEMY_DATABASE_URI='mysql://root@localhost/vue_todo',
    SQLALCHEMY_TRACK_MODIFICATIONS=False,
    CELERY_BROKER_URL='redis://localhost:6379',
    CELERY_RESULT_BACKEND='redis://localhost:6379',
    CELERYBEAT_SCHEDULE={
        'query-todos': {
            'task': 'vue_todo.tasks.query_todos',
            'schedule': 5.0,
        }
    },
)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
ma = Marshmallow(app)
CORS(app)
celery = make_celery(app)


from . import views  # noqa
from . import models  # noqa
