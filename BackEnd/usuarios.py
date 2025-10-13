import re

def validar_contraseña(contraseña):
    if len(contraseña) < 6:
        return False
    if not re.search(r"[A-Za-z]", contraseña):
        return False
    if not re.search(r"\d", contraseña):
        return False
    return True

def registrar_usuario(lista_usuarios):
    nombre = input("Ingresá un nombre de usuario: ")

    if nombre in lista_usuarios:
        print("Ese nombre de usuario ya está registrado.")
        return

    contraseña = input("Ingresá una contraseña (mínimo 6 caracteres, letras y números): ")

    if not validar_contraseña(contraseña):
        print("La contraseña no cumple con los requisitos.")
        return

    # Preguntar por el rol del nuevo usuario (admin o estandar)
    rol = input("Ingresá el rol (admin o estandar): ").lower()
    if rol not in ["admin", "estandar"]:
        print("Rol inválido. Se asignará 'estandar' por defecto.")
        rol = "estandar"

    lista_usuarios[nombre] = {"contraseña": contraseña, "rol": rol}
    print(f"Usuario {nombre} registrado con éxito con rol: {rol}")

def iniciar_sesion(lista_usuarios):
    nombre = input("Nombre de usuario: ")
    contraseña = input("Contraseña: ")

    if nombre in lista_usuarios and lista_usuarios[nombre]["contraseña"] == contraseña:
        rol = lista_usuarios[nombre]["rol"]
        print(f"¡Bienvenida, {nombre}! Tu rol es: {rol}")
        return nombre, rol
    else:
        print("Nombre de usuario o contraseña incorrectos.")
        return None, None