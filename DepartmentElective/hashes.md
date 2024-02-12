# Hash iterative Structure

<br>
<br>

> _Life is like a cryptographic hash function – sometimes it feels like a random mix of characters, but deep down, there's a method to the madness... or so we hope! :)_ 


<br>
<br>

- In this method, *chaining is used* in which, the `variable length message` is divided into blocks of equal sizes and the last `Lth` block is __padded__ if required.

<br>

- After this, the first block is feeded into a fixed hash function `f` which takes two inputs:
   
   1. The current message block

   2. the digest from previous block (or a fixed predefined value in the beginning acc. to the algo)

<br>

- This is followed in a chained way, which in the end provides us `h`, which is our desired __hash value__.

```

        m1             m2            ... mL
        |   _____      |    _____        |      _____
        |-->|   |      |--->|   |        |----->|   |
  IV-->---->|{f}|--|------->|{f}|--> ... ------>|{f}|----> h
            -----           -----               -----

- IV is the inital value
```

<br>
<br>


- it is believed that if the compression function `f` is collision resistant, then so is the entire `hash function`.

<br>
<br>


