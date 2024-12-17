from flask import Flask, jsonify
from flask_restx import Api, Resource
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

# Configuration de l'API Swagger
api = Api(app, version='1.0', title='API de gestion des tables',
          description='Une API pour récupérer les tables de la base de données')

# Namespace pour organiser les endpoints
ns = api.namespace('Tables', description='Opérations sur les tables')

# Détails de connexion à ta base de données
DB_HOST = "127.0.0.1"
DB_PORT = "8889"
DB_USER = "herbier"
DB_PASSWORD = "epsi"
DB_NAME = "ubeer"
DB_CHARSET = "utf8mb4"

# Fonction pour récupérer les tables de la base de données
def get_tables():
    connection = None
    try:
        connection = mysql.connector.connect(
            host=DB_HOST,
            port=DB_PORT,
            user=DB_USER,
            password=DB_PASSWORD,
            database=DB_NAME,
            charset=DB_CHARSET
        )
        if connection.is_connected():
            cursor = connection.cursor()
            cursor.execute("SHOW TABLES")
            tables = cursor.fetchall()
            return [table[0] for table in tables]
    except Error as e:
        return f"Erreur de connexion à la base de données: {e}"
    finally:
        if connection is not None and connection.is_connected():
            cursor.close()
            connection.close()

# Endpoint pour récupérer les tables
@ns.route('/')
class TablesList(Resource):
    def get(self):
        """
        Récupère toutes les tables de la base de données
        """
        tables = get_tables()
        return jsonify(tables)

if __name__ == '__main__':
    app.run(debug=True)
