from flask import Flask, jsonify, request
import sqlite3

import psycopg2

app = Flask(__name__)

conn = psycopg2.connect(
    host="localhost",
    database="postgres",
    user="postgres",
    password="password")

@app.route('/', methods=['GET'])
def hello_world():
    return jsonify({'message' : 'Hello, World!'})

@app.route('/api/subscribe', methods=['GET'])
def returnAll():
    cur = conn.cursor()
    cur.execute('Select * from "testSchema"."Subscribe"')
    item = cur.fetchall()
    cur.close()
    return jsonify(item)

@app.route('/api/subscribe/<string:name>', methods=['GET'])
def returnOne(name):
    
    cur = conn.cursor()
    cur.execute('Select * from "testSchema"."Subscribe"')
    for item in cur.fetchall():
        if item[0] == name:
            cur.close()
            return jsonify({'message' : 'True'})
    cur.close()
    return jsonify({'message': 'False'})

#Example curl post request (for windows)
#curl -i -H "Content-Type: application/json" -X POST -d "{\"title\":\"Read a book\"}" http://localhost:5000/quarks
@app.route('/api/subscribe', methods=['POST'])
def addOne():
    new_email = request.get_json(force = True)
    print(new_email)
    cur = conn.cursor()
    try:
        cur.execute('INSERT INTO "testSchema"."Subscribe" VALUES (' + "'" +  new_email['email'] + "'" + ')')
        conn.commit()
    except:
        cur.close()
        return jsonify({'message': 'Error'})
    if(cur.statusmessage == 'INSERT 0 1'):
        cur.close()
        return jsonify({'message' : 'Complete'})
    cur.close()
    return jsonify({'message': 'Error'})

@app.route('/quarks/<string:name>', methods=['PUT'])
def editOne(name):
    new_quark = request.get_json()
    for i,q in enumerate(quarks):
      if q['name'] == name:
        quarks[i] = new_quark    
    qs = request.get_json()
    return jsonify({'quarks' : quarks})

@app.route('/quarks/<string:name>', methods=['DELETE'])
def deleteOne(name):
    for i,q in enumerate(quarks):
      if q['name'] == name:
        del quarks[i]  
    return jsonify({'quarks' : quarks})

@app.route('/api/SpeakerPartners', methods=['GET', 'PUT'])
def getSpeakerPartners():
    cur = conn.cursor()
    if (request.method == 'GET'):
        cur.execute('Select * from "testSchema"."SpeakerPartners"')
        item = cur.fetchall()
        cur.close()
        return jsonify(item)
    if (request.method == 'PUT'):
        new_item = request.get_json(force = True)
        try:
            cur.execute('INSERT INTO "testSchema"."SpeakerPartners" VALUES (' + "'" +  new_item['name'] + "','" + new_item['image'] + "')")
            conn.commit()
        except:
            cur.close()
            return jsonify({'message': 'Error'})
        if(cur.statusmessage == 'INSERT 0 1'):
            cur.close()
            return jsonify({'message' : 'Complete'})
        cur.close()
        return jsonify({'message': 'Error'})

if __name__ == "__main__":
    app.run(debug=True)