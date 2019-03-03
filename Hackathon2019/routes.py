# I don't really know what I'm doing but here goes nothing
# To run locally, enter the Hackathon2019/Hackathon2019/ directory and run:
# >set FLASK_APP=routes.py
# >flask run
# Then paste the URL to a web browser

from flask import Flask
from flask import render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/survey')
def survey():
    return "This is the survey page"


@app.route('/user')
def user():
    return "This is the user info page"


@app.route('/friends')
def friends():
    return "This is your friends page"


@app.route('/rewards')
def rewards():
    return "This is the rewards page"


@app.route('/settings')
def settings():
    return "This is the settings page"
