
import random
import time

letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

symbols = ['!','@','#','$','%','^','&','*','(',')','.','#','<','>','/',"'",'?',';',':','"','{','}','[',']','=','+','-','~']

def  result(how_much, type1, length):
    if int(how_much) > 1:
        print('\nYour passwords: \n')
        for i in range(how_much):
            type1(length)  # generate easy password
    else:
        print('\nYour password: \n')
        easy(length)

def start():
    print('\nWelcome to password generator')
    time.sleep(0.5)
    length = input('Type here the length of the password: ')

    if length.isdigit() and int(length) > 2:

        how_much = int(input('Type here how much passwords do you want to generate: '))

        # ask user about the type of password
        time.sleep(0.5)
        print('\n[Types of passwords: '
              '\n[   EASY -> only numbers'
              '\n[   MEDIUM -> numbers and lower letters'
              '\n[   HARD -> numbers and letters (lower and uppercase)'
              '\n[   EXTREMELY -> numbers, letters (lower and higher) and symbols')
        pass_type = input('What strength of password do you need? ')
        pass_type = pass_type.upper()

        if pass_type == 'EASY':
            result(how_much, easy, length) # generate easy password
        elif pass_type == 'MEDIUM':
            result(how_much, medium, length) # generate medium password
        elif pass_type == 'HARD':
            result(how_much, hard, length) # generate hard password
        elif pass_type == 'EXTREMELY':
            result(how_much, extremely, length) # generate extremely hard password
        else:
            print('ERROR')
            time.sleep(0.5)
            print('You had to enter password type.\n For example: easy  or HARD \n Try again.')
            time.sleep(1.2)
            start()

    else:
        print('You have to type ONLY the number from 3 to 20.')
        time.sleep(1)
        print('Try again.\n')
        time.sleep(1)
        start()

def easy(amount):
    # amount -> the amount of the characters
    lista = []
    for i in range(int(amount)):
        liczba = random.randint(0,9)
        lista.append(liczba)

    word = ""
    for i in lista:
        word = word + str(i)
    print(word)
    #print('\nTwoje hasło: \n'+word)

def medium(amount):
    lista = []
    for i in range(int(amount)):
        number_of_letter = random.randint(0,1)
        if number_of_letter == 0:
            liczba = random.randint(0,9)
            lista.append(liczba)
        elif number_of_letter == 1:
            size = len(letters)
            liczba_letters = random.randint(0,int(size)-1)
            litera = letters[liczba_letters]

            lista.append(litera)

    word = ""
    for i in lista:
        word = word + str(i)
    print('\nTwoje hasło: \n' + word)

def hard(amount):
    lista = []
    for i in range(int(amount)):
        number_of_letter = random.randint(0, 1)
        if number_of_letter == 0:
            liczba = random.randint(0, 9)
            lista.append(liczba)
        elif number_of_letter == 1:
            size_of_list = len(letters)
            element = random.randint(0,int(size_of_list)-1)
            litera = letters[element]

            lower_or_upper = random.randint(0, 1)
            if lower_or_upper  == 1:
                lista.append(litera)
            elif lower_or_upper == 0:
                litera = litera.upper()
                lista.append(litera)
    word = ""
    for i in lista:
        word = word + str(i)
    print(word)

def extremely(amount):
    lista = []
    for i in range(int(amount)):
        num_let_sym = random.randint(1,3)
        if num_let_sym  == 1: # letter

            size_of_list = len(letters)
            element = random.randint(0, int(size_of_list) - 1)
            litera = letters[element]

            lower_or_upper = random.randint(0, 1)
            if lower_or_upper == 1:
                lista.append(litera)
            elif lower_or_upper == 0:
                litera = litera.upper()
                lista.append(litera)

        elif num_let_sym == 2: # number
            liczba = random.randint(0, 9)
            lista.append(liczba)
        elif num_let_sym == 3: # symbol
            size_of_list = len(symbols)
            element = random.randint(0,  int(size_of_list) - 1)
            symbol = symbols[element]
            lista.append(symbol)


    word = ""
    for i in lista:
        word = word + str(i)
    print(word)
start()


