lint:
	pipenv run flake8 .

create_db:
	mysqladmin -u root create vue_todo

make_migrations:
	export FLASK_APP=vue_todo/__init__.py && pipenv run flask db migrate

run_migrations:
	export FLASK_APP=vue_todo/__init__.py && pipenv run flask db upgrade

seed:
	pipenv run python seed.py

run:
	export FLASK_DEBUG=true FLASK_APP=vue_todo/__init__.py && pipenv run flask run


.PHONY: lint create_db make_migrations run_migrations run
