from .settings import *  # noqa


SECRET_KEY="django-insecure-b38^&s704#(2&rvtfzj%3ih#ly5@2hy^lptyce@=(=vq^^23)r"


ALLOWED_HOSTS.append("*")  # noqa

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",  # noqa
    }
}

DEBUG = True
