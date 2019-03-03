# I don't really know what I'm doing but here goes nothing
# To run locally, enter the Hackathon2019/Hackathon2019/ directory and run:
# >set FLASK_APP=routes.py
# >flask run
# Then paste the URL to a web browser

from flask import Flask, request
from flask import render_template

app = Flask(__name__)


@app.route('/')
def index(name = "User", waste = 0):
    return render_template('index.html', name=name, waste=waste)


@app.route('/survey', methods=["GET","POST"])
def survey():
    if request.method == "POST":
        recycled = request.form['amountRang']
        return render_template('index.html', name="User", waste=recycled)
    else:
        return render_template('survey.html')


@app.route('/user')
def user():
    return "This is the user info page"
    # return render_template('user.html')


@app.route('/friends')
def friends():
    return "This is your friends page"
    # return render_template('friends.html')


@app.route('/rewards')
def rewards():
    return "This is the rewards page"
    # return render_template('rewards.html')


@app.route('/settings')
def settings():
    return "This is the settings page"
    # return render_template('settings.html')
