
from flask import Flask, jsonify, request, make_response
from flask_cors import CORS, cross_origin

<<<<<<< HEAD
=======
#import sys

#sys.path.append('./data')

#from pathlib import Path

PG_HOST="localhost"
PG_DB="postgres"
PG_USER="postgres"
PG_PW="password"
#my_file = Path("./data/database.py")
#if my_file.is_file():
#    from database import *
#    print(isAPI(isAPI)
#else:
#    PG_HOST="localhost"
#    PG_DB="postgres"
#    PG_USER="postgres"
#    PG_PW="password"

#    def isAPI(api):
#        return True

>>>>>>> a734fe88 (Fixed some css)
import sqlite3

import psycopg2

PG_HOST="localhost"
PG_DB="postgres"
PG_USER="postgres"
PG_PW="password"

app = Flask(__name__)

def applyCors(response):
    header = response.headers
    header['Access-Control-Allow-Origin'] = '*'
    return response

conn = psycopg2.connect(
    host=PG_HOST,
    database=PG_DB,
    user=PG_USER,
    password=PG_PW)

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
        resp = jsonify(item)
        return applyCors(resp)
    if (request.method == 'PUT'):
        new_item = request.get_json(force = True)
        try:
            cur.execute('INSERT INTO "testSchema"."SpeakerPartners" VALUES (' + "'" +  new_item['name'] + "','" + new_item['image'] + "')")
            conn.commit()
        except:
            cur.close()
            resp = jsonify({'message': 'Bad Response'})
            resp.status_code = 400
            return applyCors(resp)
        resp.set_data(jsonify({'message' : 'Complete'}))
        cur.close()
        return applyCors(resp)

if __name__ == "__main__":
    app.run(debug=True)