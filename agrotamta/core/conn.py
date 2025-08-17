from django.shortcuts import render
from pymongo import MongoClient
import logging

# Set up logging
logger = logging.getLogger(__name__)
def conn():
    try:
        # Establishing a connection to the MongoDB server
        client = MongoClient('mongodb://localhost:27017/')
        # Accessing the specific database
        db = client['db_agro']
        # Print out the names of the databases to confirm the connection
        logger.info("Databases available:")
        databases = client.list_database_names()
        # Check if the specific database is present
        if 'db_agro' in databases:
            logger.info(f"The connection to the database '{db.name}' is successful.")
            return True  # Connection successful
        else:
            logger.warning(f"The database '{db.name}' does not exist.")
            return False  # Database does not exist
    except Exception as e:
        logger.error(f"An error occurred: {e}")
        return False  # Return False in case of an error

# Example view to call the conn function
def check_db_connection(request):
    connection_successful = conn()
    if connection_successful:
        return render(request, 'core/my_template.html', {'status': 'Connection successful'})
    else:
        return render(request, 'core/my_template.html', {'status': 'Connection failed'})
