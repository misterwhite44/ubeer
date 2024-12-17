from flask import Flask, jsonify, request
from flask_restx import Api, Resource, fields
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

# Configuration de l'API Swagger
api = Api(app, version='1.0', title='API Ubeers',
          description='API to Fetch Data')

ns = api.namespace('Tables', description='Operations')

table_model = api.model('Table', {
    'nom': fields.String(required=True, description='Nom de la table'),
    'type': fields.String(description='Type de la table'),
    'quantite': fields.Integer(description='Quantité disponible'),
    'emplacement': fields.String(description='Emplacement de la table'),
})

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

def get_table_by_id(table_id):
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
            cursor.execute("SELECT * FROM tables WHERE id = %s", (table_id,))
            table = cursor.fetchone()
            if table:
                return table
            else:
                return f"Table avec ID {table_id} non trouvée"
    except Error as e:
        return f"Erreur de connexion à la base de données: {e}"
    finally:
        if connection is not None and connection.is_connected():
            cursor.close()
            connection.close()

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
