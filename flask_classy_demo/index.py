from flask import Flask
from views.myView import myView

app = Flask(__name__)
myView.register(app)
