'''
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
AUTHOR:            hail0hydra
DESCRIPTION:       simple rot cypher or modern caesar cipher in python
DATE:              02 Feb 2024
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
'''


import argparse



print("\n\n\t\033[0;34m --==[[ MODERN CAESAR CYPHER || ROT (n) CYPHER ]]==--\n\n\033[0m")

parser = argparse.ArgumentParser(description="caesar cypher")

parser.add_argument('mode', type=str, help="e - encrypt, d - decrypt")

args = parser.parse_args()


def caesar(pt, s):

    ct = str()
    for i in pt:
        if i == " ":
            ct += " "
        elif i.islower():
            ct += chr((((ord(i) - ord('a')) + s ) % 26 ) + ord('a'))
        elif i.isupper():
            ct += chr((((ord(i) - ord('A')) + s ) % 26 ) + ord('A'))
    return ct


def decaesar(ct, s):

    pt = str()
    for i in ct:
        if i == " ":
            pt += " "
        elif i.islower():
            pt += chr((((ord(i) - ord('a')) - s ) % 26 ) + ord('a'))
        elif i.isupper():
            pt += chr((((ord(i) - ord('A')) - s ) % 26 ) + ord('A'))
    return pt


if __name__ == "__main__":
        if args.mode == 'e':
            pt = input("Enter plain text: ")
            shift = int(input("Enter shift value(int): "))
            print(f"\nCypher text is: {caesar(pt,shift)}\n")
        elif args.mode == 'd':
            ct = input("Enter cypher text: ")
            shift = int(input("Enter shift value(int): "))
            print(f"\nPlain text is: {decaesar(ct,shift)}\n")

