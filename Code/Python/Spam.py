text = input("Wpisz tekst: ")
repeat = input("Ile razy program ma wysłać tekst: ")

val = 1

while val <= int(repeat):
    print(text)
    val = val + 1
    if (val == 100):
        break