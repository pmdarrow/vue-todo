from datetime import datetime
from . import db


class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    completed = db.Column(db.Boolean, nullable=False, default=False)
    created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    modified = db.Column(db.DateTime, nullable=False, default=datetime.utcnow,
                         onupdate=datetime.utcnow)
    todo_list_id = db.Column(db.Integer, db.ForeignKey('todolist.id'))

    def __repr__(self):
        return '<Todo %r>' % self.title


class TodoList(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    todos = db.relationship('Todo', backref='todo_list')

    def __repr__(self):
        return '<TodoList %r>' % self.name
