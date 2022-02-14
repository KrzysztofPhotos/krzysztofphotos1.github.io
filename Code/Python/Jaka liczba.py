number = input("Podaj liczbe: ")




if int(number) > 0:
    type = "Jest to liczba dodatnia"
elif int(number) < 0:
    type = "Jest to liczba ujemna"
else:
    type = "Nie jest to ani liczba ujemna, ani dodatnia (czyli 0)"

print(type)

