import os

from dating.settings import *
import dj_database_url

DATABASES['default'] = dj_database_url.config()

SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

DEBUG = False

ALLOWED_HOSTS = ['*',]

STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'

# Mail

ADMINS = [
  (os.environ.get('ADMIN_NAME'), os.environ.get('ADMIN_EMAIL')),
]

SERVER_EMAIL = os.environ.get('NOTIFICATION_EMAIL')

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = os.environ.get('SENDGRID_SERVER')
EMAIL_PORT = os.environ.get('SENDGRID_PORT')
EMAIL_HOST_USER = os.environ.get('SENDGRID_USERNAME')
EMAIL_HOST_PASSWORD = os.environ.get('SENDGRID_PASSWORD')
EMAIL_USE_TLS = True
DEFAULT_FROM_EMAIL = SERVER_EMAIL

# Media storages

AWS_ACCESS_KEY_ID = os.environ.get('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = os.environ.get('AWS_STORAGE_BUCKET_NAME')
AWS_S3_CUSTOM_DOMAIN = '%s.s3.amazonaws.com' % AWS_STORAGE_BUCKET_NAME
AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl': 'max-age=86400',
}

DEFAULT_FILE_STORAGE = 'dating.storage_backends.MediaStorage'
