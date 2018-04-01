from flask_classy import FlaskView


class ClassyView(FlaskView):
    def index(self):
        return "this is index"

    def get(self, id):
        return "this is page:" + str(id)
