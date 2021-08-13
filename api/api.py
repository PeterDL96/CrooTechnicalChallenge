from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy
import datetime as dt

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///comments.db"
db = SQLAlchemy(app)

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text, nullable=False)
    email = db.Column(db.Text, nullable=False)
    date = db.Column(db.Date, nullable=False)
    content = db.Column(db.Text, nullable=False)

    def __str__(self):
        return f'{self.id} {self.username} {self.email} {self.date} {self.content}'

def comment_serializer(comment):
    return{
        'id': comment.id,
        'username': comment.username,
        'email': comment.email,
        'date': comment.date,
        'content': comment.content
    }

@app.route('/api', methods=['GET'])
def index():
    return jsonify([*map(comment_serializer, Comment.query.all())])

@app.route('/api/create', methods=['POST'])
def create():
    request_data = json.loads(request.data)
    comment = Comment(username=request_data['name'], email=request_data['email'], date = dt.date.today(), content=request_data['content'])
    
    db.session.add(comment)
    db.session.commit()
    return {'201': 'Comment created succesfully'}

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
