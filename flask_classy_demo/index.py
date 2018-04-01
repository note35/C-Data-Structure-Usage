from flask import Flask

from views.classy_view import ClassyView
from views.blueprint_view import example_bp


app = Flask(__name__)

app.register_blueprint(example_bp)

ClassyView.register(app)
