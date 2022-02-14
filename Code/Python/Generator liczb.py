print("Witaj w generatorze liczb!")
start = input("Wpisz od której liczby ma zacząc generowac: ")
end = input("Wpisz do ktorej liczby ma skończyć generować: ")

for generate in range(int(start),int(end)+1):
    print(generate)
