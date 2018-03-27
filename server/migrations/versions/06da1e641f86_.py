"""Make todo_list_id non-nullable

Revision ID: 06da1e641f86
Revises: 8611a7814bbf
Create Date: 2018-03-27 18:41:49.610960

"""
from alembic import op
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '06da1e641f86'
down_revision = '8611a7814bbf'
branch_labels = None
depends_on = None


def upgrade():
    op.alter_column(
        'todo',
        'todo_list_id',
        existing_type=mysql.INTEGER(display_width=11),
        nullable=False
    )


def downgrade():
    op.alter_column(
        'todo',
        'todo_list_id',
        existing_type=mysql.INTEGER(display_width=11),
        nullable=True
    )
