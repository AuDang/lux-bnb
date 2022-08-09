"""empty message

Revision ID: 00ac518aff57
Revises: 7fa4fa94717a
Create Date: 2022-08-09 05:46:42.465732

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '00ac518aff57'
down_revision = '7fa4fa94717a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('bookings', sa.Column('nights', sa.Integer(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('bookings', 'nights')
    # ### end Alembic commands ###
