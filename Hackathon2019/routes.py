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
