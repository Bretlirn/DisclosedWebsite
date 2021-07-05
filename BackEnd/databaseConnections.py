import sys

sys.path.append('./data')

from pathlib import Path

my_file = Path("./data/database.py")
if my_file.is_file():
    from database import *
    print(isAPI(isAPI)
else:
    print("Not here.")
