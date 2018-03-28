from datetime import datetime
from sqlalchemy.orm import backref
from . import db


class TodoList(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    todos = db.relationship('Todo', cascade='all, delete-orphan',
                            backref=backref('todo_list', single_parent=True))

    def __repr__(self):
        return '<TodoList %r>' % self.name


class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    completed = db.Column(db.Boolean, nullable=False, default=False)
    created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    modified = db.Column(db.DateTime, nullable=False, default=datetime.utcnow,
                         onupdate=datetime.utcnow)
    todo_list_id = db.Column(db.Integer, db.ForeignKey('todo_list.id'),
                             nullable=False)

    def __repr__(self):
        return '<Todo %r>' % self.title
