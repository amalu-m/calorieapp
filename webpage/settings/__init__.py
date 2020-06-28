import os
from .base import *

env_name = os.getenv('ENV_NAME', 'prod')

if env_name == 'prod':
    from .prod import *
elif env_name == 'stage':
    from .stage import *
else:
    from .local import *
