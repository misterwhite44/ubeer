from flask import Flask, jsonify, request
from flask_restx import Api, Resource, fields
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

# Configuration de l'API Swagger
api = Api(app, version='1.0', title='API de gestion des tables',
          description='Une API pour récupérer les tables de la base de données')

# Namespace pour organiser les endpoints
ns = api.namespace('Tables', description='Opérations sur les tables')

# Modèle pour valider la création d'une table
table_model = api.model('Table', {
    'nom': fields.String(required=True, description='Nom de la table'),
    'type': fields.String(description='Type de la table'),
    'quantite': fields.Integer(description='Quantité disponible'),
    'emplacement': fields.String(description='Emplacement de la table'),
})

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

# Fonction pour récupérer une table par ID
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

# Endpoint pour récupérer toutes les tables
@ns.route('/')
class TablesList(Resource):
    def get(self):
        """
        Récupère toutes les tables de la base de données
        """
        tables = get_tables()
        return jsonify(tables)

    @api.doc(description="Créer une nouvelle table")
    @api.expect(table_model)
    def post(self):
        """
        Crée une nouvelle table
        """
        data = request.json
        # Ici tu ajouterais la logique pour insérer la nouvelle table dans ta base de données
        return {'message': 'Table créée avec succès', 'data': data}, 201

# Endpoint pour récupérer une table par ID
@ns.route('/<int:id>')
@api.param('id', 'L\'ID de la table')
class Table(Resource):
    def get(self, id):
        """
        Récupère une table spécifique par son ID
        """
        table = get_table_by_id(id)
        return jsonify(table)

    @api.doc(description="Mettre à jour une table par ID")
    @api.expect(table_model)
    def put(self, id):
        """
        Met à jour une table existante par son ID
        """
        data = request.json
        # Ajouter ici la logique pour mettre à jour la table dans la base de données
        return {'message': f'Table avec ID {id} mise à jour', 'data': data}

    @api.doc(description="Supprimer une table par ID")
    def delete(self, id):
        """
        Supprime une table par son ID
        """
        # Ajouter ici la logique pour supprimer la table dans la base de données
        return {'message': f'Table avec ID {id} supprimée'}, 204

if __name__ == '__main__':
    app.run(debug=True)
