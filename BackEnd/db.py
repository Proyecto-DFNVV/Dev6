import mysql.connector

def obtener_conexion():
    return mysql.connector.connect(
        host="localhost",
        user="root",          # usuario por defecto de XAMPP
        password="",          # XAMPP normalmente no tiene contraseña por defecto
        database="sistema_usuarios"
    )
