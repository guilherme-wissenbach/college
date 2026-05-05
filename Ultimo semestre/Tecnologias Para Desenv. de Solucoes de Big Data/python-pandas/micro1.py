import pandas as pd

df = pd.read_csv("dados2.csv", sep=",", engine="python", encoding="utf-8")

print(df)