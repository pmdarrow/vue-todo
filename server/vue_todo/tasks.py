from celery.utils.log import get_task_logger

from . import celery
from .models import Todo

logger = get_task_logger(__name__)


@celery.task()
def query_todos():
    todos = Todo.query.all()
    print('All todos: {}'.format(todos))
