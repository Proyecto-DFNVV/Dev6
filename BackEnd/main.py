from db import obtener_conexion

from usuarios import *
from validaciones import *
from administrador import *
from estandar import *

usuarios = {
    "admin@admin.com": {
        "nombre": "Admin",
        "contraseña": "admin123",
        "rol": "admin"
    }
}

# menú que ven los usuarios cuando ingresan

def main():
    while True:
        print("\n=== Menú Principal 'Inmobiliaria Saul Hnos' ===")
        print("1. Registrarse")
        print("2. Iniciar sesión")
        print("3. Salir")

        opcion = input("Para comenzar, elegí una opción: ")

        if opcion == "1":
            registrar_usuario(usuarios)  #llama a las funciones que están en usuarios.py
        elif opcion == "2":
            nombre, rol = iniciar_sesion(usuarios)
            if rol == "admin":
                menu_admin(nombre, usuarios)
            elif rol == "estandar":
                menu_estandar(nombre, usuarios)      
        elif opcion == "3":
            print("¡Hasta luego!")
            break
        else:
            print("Opción inválida.")
            
if __name__ == "__main__":
    main()