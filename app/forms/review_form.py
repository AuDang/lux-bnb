from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length, NumberRange

class ReviewForm(FlaskForm):
   user_id= IntegerField("user_id", validators=[DataRequired()])
   spot_id = IntegerField("spot_id", validators=[DataRequired("Rating: Please give a rating from 1 to 5"), NumberRange(min=1, max=5, message='Number must be between 1 and 5')])
   review= StringField("review", validators=[DataRequired('Review: Please leave a review'), Length(min=5, max=1000, message='Review must be at least 5 character and no more than 1000 characters.')])
   rating = IntegerField('Rating', validators=[DataRequired("Rating: Please give a rating from 1 to 5")])
