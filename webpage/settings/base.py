import os

SECRET_KEY = os.getenv("SECRET_KEY")
API_KEY = os.getenv("API_KEY")
ENV_NAME = os.getenv("ENV_NAME")

from dotenv import load_dotenv
load_dotenv()
