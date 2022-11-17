
# https://pl.spoj.com/problems/JPESEL/

# PESEL SPRAWDZANIE POPRAWNOŚCI

def start():
    pesel = input("Type here your pesel number: ")
    if pesel.isdigit():
        if len(pesel) == 11:
            pesel_array = list(pesel)

            num_1 = pesel_array[0]
            num_2 = pesel_array[1]
            num_3 = pesel_array[2]
            num_4 = pesel_array[3]
            num_5 = pesel_array[4]
            num_6 = pesel_array[5]
            num_7 = pesel_array[6]
            num_8 = pesel_array[7]
            num_9 = pesel_array[8]
            num_10 = pesel_array[9]
            num_11 = pesel_array[10]

            result = int(num_1) * 1 + int(num_2) * 3 + int(num_3) * 7 + int(num_4) * 9 + int(num_5) * 1 + int(num_6) * 3 + int(num_7) * 7 + int(num_8) * 9 + int(num_9) * 1 + int(num_10) * 3 + int(num_11) * 1

            last_result = int(str(result)[-1])

            if int(last_result) == 0:
                print('Correct PESEL :)\nD')
            else:
                print('Uncorrect PESEL :(\nN')

        else:
            print("The numbers of the PESEL must be 11!\n")
            start()  # start again
    else:
        print("Error. You have to type only numbers!\nTry again.\n")
        start() # start again


start()
