"""Initial migration

Revision ID: 8611a7814bbf
Revises:
Create Date: 2018-03-27 13:46:27.852271

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8611a7814bbf'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'todo_list',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sa.Text(), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_table(
        'todo',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('title', sa.Text(), nullable=False),
        sa.Column('completed', sa.Boolean(), nullable=False),
        sa.Column('created', sa.DateTime(), nullable=False),
        sa.Column('modified', sa.DateTime(), nullable=False),
        sa.Column('todo_list_id', sa.Integer(), nullable=True),
        sa.ForeignKeyConstraint(['todo_list_id'], ['todo_list.id'], ),
        sa.PrimaryKeyConstraint('id')
    )


def downgrade():
    op.drop_table('todo')
    op.drop_table('todo_list')
