import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

ALLOWED_HOSTS = ['swiftkind.dev']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

DEBUG = True

DEFAULT_FROM_EMAIL = 'Swiftkind <swiftkind.test@gmail.com>'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'swiftkind.test@gmail.com'
EMAIL_HOST_PASSWORD = 'gwapoako123'
EMAIL_PORT = 465
EMAIL_USE_SSL = True

COMPANY_EMAIL = ''