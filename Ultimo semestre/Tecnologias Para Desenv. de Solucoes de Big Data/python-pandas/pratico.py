import pandas as pd

df = pd.read_csv("dados.csv", sep=";", engine="python", encoding="utf-8")

print(df.info())
print(df.head(2))
print(df.tail(2))
print("---------------------------------------------------------------")

df_tratado = df.copy()


df_tratado["Calories"] = df_tratado["Calories"].fillna(0)
print(df_tratado)
print("---------------------------------------------------------------")

df_tratado["Date"] = df_tratado["Date"].fillna("1900/01/01")
print(df_tratado)
print("---------------------------------------------------------------")

df_tratado["Date"] = df_tratado["Date"].replace("1900/01/01", pd.NA)
print(df_tratado)
print("---------------------------------------------------------------")

df_tratado["Date"] = df_tratado["Date"].replace("20201226", pd.to_datetime("2020/12/26"))
print(df_tratado)
print("---------------------------------------------------------------")


df_tratado["Date"] = pd.to_datetime(df_tratado["Date"])
print(df_tratado)
print("---------------------------------------------------------------")


df_tratado = df_tratado.dropna(subset=["Date"])
print(df_tratado)
print("---------------------------------------------------------------")

print(df_tratado)
print(df_tratado.info())