# https://pl.spoj.com/problems/OSTBR/

def liczba(zmienna):
    if zmienna.isdigit():
        zmienna = zmienna[-1]
        return zmienna
    else:
        return "You only can type numbers!"

zmienna = input("Type a number: ")

print(liczba(zmienna))
