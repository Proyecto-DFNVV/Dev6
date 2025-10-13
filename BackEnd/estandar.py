def menu_estandar(nombre_usuario, usuarios):
    while True:
        print(f"\n--- Menú Usuario Estándar - {nombre_usuario} ---")
        print("1. Ver perfil")
        print("2. Salir al menú principal")

        opcion = input("Elegí una opción: ")

        if opcion == "1":
            
            for email, datos in usuarios.items():
                if datos["nombre"] == nombre_usuario:
                    
                    print(f"Nombre: {datos['nombre']}")
                    print(f"Email: {email}")
                    print(f"Rol: {datos['rol']}")
                    break
        elif opcion == "2":
            print("Volviendo al menú principal...")
            break
        else:
            print("Opción inválida.")