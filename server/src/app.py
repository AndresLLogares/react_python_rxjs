from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['MONGO_URI'] = 'mongodb://localhost:27017/flaskreact'

mongo = PyMongo(app)

db = mongo.db.users


@app.route('/')
def index():
    return 'Hello World!'


@app.route('/users', methods=['POST'])
def create_user():
    if db.find_one({'email': request.json['email']}):
        return 'User already exists', 400
    id = db.insert_one({
        'firstName': request.json['firstName'],
        'lastName': request.json['lastName'],
        'email': request.json['email'],
    })
    print('Created user', id)
    return 'created', 200


@app.route('/users', methods=['GET'])
def get_users():
    users = []
    for doc in db.find():
        users.append({
            '_id': str(ObjectId(doc['_id'])),
            'firstName':  doc['firstName'],
            'lastName': doc['lastName'],
            'email': doc['email'],
        })
    return jsonify(users)


@app.route('/users/<id>', methods=['GET'])
def get_user(id):
    user = db.find_one({'_id': ObjectId(id)})
    print('user', jsonify(user))
    return jsonify(user)


@app.route('/users', methods=['DELETE'])
def delete_user():
    args = request.args
    user_email = args.get("email")
    if db.find_one({'email': user_email}):
        user = db.delete_one({'email': user_email})
    return "User deleted", 200
    return 'User don;t exists', 400


@app.route('/users/<id>', methods=['PUT'])
def update_user(id):
    user = db.update_one({'_id': ObjectId(id)}, {'$set': {
        'firstName': request.json['firstName'],
        'lastName': request.json['lastName'],
        'email': request.json['email'],
    }})
    return jsonify({"msg": "User updated", "user": user})


if __name__ == '__main__':
    app.run(debug=True)
