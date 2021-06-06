import psycopg2

def db_conn(hst, db, usr, pw):
    return psycopg2.connect(host = hst, databse = db, user = usr, password = pw)

def db_get(conn, query):
    cur = conn.cursor()
    cur.execute(query)
    return cur.fetchall()

def db_post(conn, query):
    
conn = psycopg2.connect(
    host="localhost",
    database="postgres",
    user="postgres",
    password="password")

cur = conn.cursor()

def post():
    print(conn.status)
    cur.execute('INSERT INTO "testSchema"."Subscribe" VALUES (' +  "'testing123@gmail.com'" + ')')
    conn.commit()
    print(conn.status)
    #db_version = cur.fetchone()
    #print(db_version)

def get():
    cur.execute('Select * from "testSchema"."Subscribe"')
    queryItem = cur.fetchone()
    print(len(queryItem[0]))

get()