from flask import Blueprint


example_bp = Blueprint('example', __name__, template_folder='templates', static_folder='static')


@example_bp.route('/blueprint')
def example():
    return 'example blueprint'
