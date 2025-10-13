from usuarios import *

def menu_admin(nombre_admin, usuarios):
    while True:
        print(f"\n--- Menú Admin - {nombre_admin} ---")
        print("1. Ver todos los usuarios")
        print("2. Modificar un usuario")
        print("3. Eliminar un usuario")
        print("4. Salir al menú principal")

        opcion = input("Elegí una opción: ")

        if opcion == "1":
            print("\n--- Lista de usuarios registrados ---")
            for email, datos in usuarios.items():
                print(f"Nombre: {datos['nombre']} - Email: {email} - Rol: {datos['rol']}")

        elif opcion == "2":
            print("\n--- Modificar usuario ---")
            email_modificar = input("Email del usuario a modificar: ")
            if email_modificar in usuarios:
                print(f"Modificando usuario: {usuarios[email_modificar]['nombre']}")
                nuevo_nombre = input("Nuevo nombre (dejar vacío para no cambiar): ")
                nuevo_contraseña = input("Nueva contraseña (dejar vacío para no cambiar): ")
                nuevo_rol = input("Nuevo rol ('admin' o 'estandar') (dejar vacío para no cambiar): ")

                if nuevo_nombre:
                    if validar_nombre(nuevo_nombre):
                        usuarios[email_modificar]["nombre"] = nuevo_nombre
                    else:
                        print("Nombre inválido. No se actualizó.")
                if nuevo_contraseña:
                    if validar_contraseña(nuevo_contraseña):
                        usuarios[email_modificar]["contraseña"] = nuevo_contraseña
                    else:
                        print("Contraseña inválida. No se actualizó.")
                if nuevo_rol in ["admin", "estandar"]:
                    usuarios[email_modificar]["rol"] = nuevo_rol

                print("Usuario actualizado.")
            else:
                print("Usuario no encontrado.")

        elif opcion == "3":
            print("\n--- Eliminar usuario ---")
            email_eliminar = input("Email del usuario a eliminar: ")
            if email_eliminar in usuarios:
                if usuarios[email_eliminar]["nombre"] == nombre_admin:
                    print("No podés eliminarte a vos mismo mientras estás logueado.")
                else:
                    nombre_borrado = usuarios[email_eliminar]["nombre"]
                    del usuarios[email_eliminar]
                    print(f"Usuario {nombre_borrado} eliminado.")
            else:
                print("Usuario no encontrado.")

        elif opcion == "4":
            print("Volviendo al menú principal...")
            break

        else:
            print("Opción inválida.")