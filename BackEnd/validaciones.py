import re

def validar_nombre(nombre):
    if len(nombre) > 50:
        return False
    if not re.fullmatch(r"[A-Za-zÁÉÍÓÚáéíóúÑñ ]+", nombre):
        return False
    return True

def validar_email(email):
    patron = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    return re.match(patron, email)

def validar_contraseña(contraseña):
    if len(contraseña) < 6 or not re.search(r"[A-Za-z]", contraseña) or not re.search(r"\d", contraseña):
        return False
    return True