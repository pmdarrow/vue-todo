from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config.update(
    SQLALCHEMY_DATABASE_URI='mysql://root@localhost/vue_todo',
    SQLALCHEMY_TRACK_MODIFICATIONS=False,
)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from . import views  # noqa
from . import models  # noqa
