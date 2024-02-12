import sys

pt = sys.argv[1].lower()
shift = int(sys.argv[2])

def caesar(pt, s):

    ct = str()
    for i in pt:
        # if ord(i) == ord('z') or ord(i) == ord('Z'):
        #     ct+= ord('a') + s
        # else:
        ct += chr((ord(i) - ord('a')) + s)

    return ct


print(caesar(pt,shift))


    
