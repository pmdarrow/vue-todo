from flask import request, jsonify

from . import app, db
from .models import TodoList
from .schemas import todo_list_schema, todo_lists_schema


@app.route('/todo_lists', methods=['GET'])
def get_todo_lists():
    todo_lists = TodoList.query.all()
    result = todo_lists_schema.dump(todo_lists)
    return jsonify(result.data)


@app.route('/todo_lists/<int:pk>', methods=['GET'])
def get_todo_list(pk):
    todo_list = TodoList.query.get(pk)
    if todo_list is None:
        return jsonify({"error": "TodoList could not be found."}), 404
    result = todo_list_schema.dump(todo_list)
    return jsonify(result.data)


@app.route('/todo_lists', methods=['POST'])
def create_todo_list():
    json_data = request.get_json()
    todo_list, errors = todo_list_schema.load(json_data)
    if errors:
        return jsonify(errors), 422

    db.session.add(todo_list)
    db.session.commit()
    result = todo_list_schema.dump(todo_list)
    return jsonify(result.data), 201
