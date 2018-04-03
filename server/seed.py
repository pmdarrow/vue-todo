from vue_todo import db
from vue_todo.models import TodoList, Todo


def seed():
    grocery_list = TodoList(name='Grocery list')
    grocery_list.todos = [
        Todo(title='Apples', completed=True),
        Todo(title='Oranges', completed=True),
        Todo(title='Rice'),
        Todo(title='Milk'),
    ]

    chores = TodoList(name='Chores')
    chores.todos = [
        Todo(title='Clean floors'),
        Todo(title='Wash dishes', completed=True),
        Todo(title='Do laundry', completed=True),
        Todo(title='Meal prep'),
    ]

    travel = TodoList(name='Travel')
    travel.todos = [
        Todo(title='Book flight'),
        Todo(title='Book hotel'),
        Todo(title='Find car rental'),
        Todo(title='Pack suitcase'),
    ]

    db.session.add(grocery_list)
    db.session.add(chores)
    db.session.add(travel)
    db.session.commit()


if __name__ == '__main__':
    seed()
