from flask import Flask, jsonify, request
from flask_restx import Api, Resource, fields
from flask_cors import CORS
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

# Activer CORS
CORS(app, resources={r"/*": {"origins": "*"}})

# Swagger API configuration
api = Api(app, version='1.0', title='Ubeers API',
          description='API for managing beers, breweries, deliveries, and users')

ns_beers = api.namespace('beers', description='Beer Operations')
ns_breweries = api.namespace('breweries', description='Brewery Operations')

# Database configuration
DB_HOST = "127.0.0.1"
DB_PORT = "8889"
DB_USER = "herbier"
DB_PASSWORD = "epsi"
DB_NAME = "ubeer"
DB_CHARSET = "utf8mb4"

# Beer model for Swagger
beer_model = api.model('Beer', {
    'name': fields.String(required=True, description='Name of the beer'),
    'type': fields.String(description='Type of the beer'),
    'quantity': fields.Integer(description='Available quantity'),
    'brewery': fields.String(description='Brewery name'),
    'abv': fields.Float(description='Alcohol by Volume'),
})

# Brewery model for Swagger
brewery_model = api.model('Brewery', {
    'id': fields.Integer(description='ID of the brewery'),
    'name': fields.String(required=True, description='Name of the brewery'),
    'description': fields.String(description='Description of the brewery'),
    'location': fields.String(description='Location of the brewery'),
    'image_url': fields.String(description='Image URL of the brewery')
})

def get_db_connection():
    """Establish and return a database connection."""
    return mysql.connector.connect(
        host=DB_HOST,
        port=DB_PORT,
        user=DB_USER,
        password=DB_PASSWORD,
        database=DB_NAME,
        charset=DB_CHARSET
    )

# Beers Routes
@ns_beers.route('/')
class BeersList(Resource):
    @ns_beers.doc('list_beers')
    def get(self):
        """
        Fetch all beers from the database
        """
        try:
            connection = get_db_connection()
            cursor = connection.cursor(dictionary=True)
            cursor.execute("SELECT * FROM beers")
            beers = cursor.fetchall()
            return jsonify(beers)
        except Error as e:
            return {'error': str(e)}, 500
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

    @ns_beers.doc('add_beer')
    @ns_beers.expect(beer_model)
    def post(self):
        """
        Add a new beer to the database
        """
        data = request.json
        try:
            connection = get_db_connection()
            cursor = connection.cursor()
            cursor.execute(
                "INSERT INTO beers (name, type, quantity, brewery, abv) VALUES (%s, %s, %s, %s, %s)",
                (data['name'], data['type'], data['quantity'], data['brewery'], data['abv'])
            )
            connection.commit()
            return {'message': 'Beer added successfully'}, 201
        except Error as e:
            return {'error': str(e)}, 500
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

@ns_beers.route('/<int:beer_id>')
class Beer(Resource):
    @ns_beers.doc('get_beer')
    def get(self, beer_id):
        """
        Fetch a beer by its ID
        """
        try:
            connection = get_db_connection()
            cursor = connection.cursor(dictionary=True)
            cursor.execute("SELECT * FROM beers WHERE id = %s", (beer_id,))
            beer = cursor.fetchone()
            if beer:
                return jsonify(beer)
            else:
                return {'message': 'Beer not found'}, 404
        except Error as e:
            return {'error': str(e)}, 500
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

    @ns_beers.doc('update_beer')
    @ns_beers.expect(beer_model)
    def put(self, beer_id):
        """
        Update a beer by its ID
        """
        data = request.json
        try:
            connection = get_db_connection()
            cursor = connection.cursor()
            cursor.execute(
                "UPDATE beers SET name = %s, type = %s, quantity = %s, brewery = %s, abv = %s WHERE id = %s",
                (data['name'], data['type'], data['quantity'], data['brewery'], data['abv'], beer_id)
            )
            connection.commit()
            if cursor.rowcount:
                return {'message': 'Beer updated successfully'}, 200
            else:
                return {'message': 'Beer not found'}, 404
        except Error as e:
            return {'error': str(e)}, 500
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

    @ns_beers.doc('patch_beer')
    def patch(self, beer_id):
        """
        Partially update a beer by its ID
        """
        data = request.json
        try:
            connection = get_db_connection()
            cursor = connection.cursor()
            fields = ', '.join(f"{key} = %s" for key in data.keys())
            values = list(data.values()) + [beer_id]
            cursor.execute(f"UPDATE beers SET {fields} WHERE id = %s", values)
            connection.commit()
            if cursor.rowcount:
                return {'message': 'Beer updated successfully'}, 200
            else:
                return {'message': 'Beer not found'}, 404
        except Error as e:
            return {'error': str(e)}, 500
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

    @ns_beers.doc('delete_beer')
    def delete(self, beer_id):
        """
        Delete a beer by its ID
        """
        try:
            connection = get_db_connection()
            cursor = connection.cursor()
            cursor.execute("DELETE FROM beers WHERE id = %s", (beer_id,))
            connection.commit()
            if cursor.rowcount:
                return {'message': 'Beer deleted successfully'}, 200
            else:
                return {'message': 'Beer not found'}, 404
        except Error as e:
            return {'error': str(e)}, 500
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

# Breweries Routes
@ns_breweries.route('/')
class BreweriesList(Resource):
    @ns_breweries.doc('list_breweries')
    def get(self):
        """
        Fetch all breweries from the database
        """
        try:
            connection = get_db_connection()
            cursor = connection.cursor(dictionary=True)
            cursor.execute("SELECT * FROM breweries")  # Assure-toi que la table s'appelle 'breweries'
            breweries = cursor.fetchall()
            return jsonify(breweries)
        except Error as e:
            return {'error': str(e)}, 500
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

@ns_breweries.route('/<int:brewery_id>')
class Brewery(Resource):
    @ns_breweries.doc('get_brewery')
    def get(self, brewery_id):
        """
        Fetch a brewery by its ID
        """
        try:
            connection = get_db_connection()
            cursor = connection.cursor(dictionary=True)
            cursor.execute("SELECT * FROM breweries WHERE id = %s", (brewery_id,))
            brewery = cursor.fetchone()
            if brewery:
                return jsonify(brewery)
            else:
                return {'message': 'Brewery not found'}, 404
        except Error as e:
            return {'error': str(e)}, 500
        finally:
            if connection.is_connected():
                cursor.close()
                connection.close()

if __name__ == '__main__':
    app.run(debug=True)
