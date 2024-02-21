plain = input("Enter plaintext: ")
key = input("Enter key: ")


def vig(plain,key):

    key = adjkey(plain,key)

    cipher =str()

    for i in range(len(plain)):
        if plain[i].islower():
            cipher += chr(ord(plain[i]) + ord(key[i].lower()))
    pass

def adjkey(plain,key):

        s = str()

        for i in range(len(plain)):
            s += key[i]

        return s

