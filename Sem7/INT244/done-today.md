<!-- 27-08-2024 -->

## Labs 
<br>

- [x] did [this](https://tryhackme.com/r/room/activerecon) lab.

- [x] Active recon lab.

<br>

## Scanning

<br>

---

<br>

<!-- 29-08-2024 -->

## Nmap

<br>
<br>

> 📓 Cheatsheet: [here](https://www.stationx.net/nmap-cheat-sheet/)

- talked about scanning, spoofing, IDS, firewalls, etc.

<br>
<br>

```bash
nmap -sn network-ip/range
```

- `sn` does a __Ping Scan__ and disables __PORT scan__

- output saved [here](discover.nmap)


<br>

> Alt: we could've used netdiscover for this 🤡

<br>

### Fast scanning


```bash
nmap -F example.com
```

- output of this is [here](example.nmap)


<br>
<br>

### three types of status

1. open

2. closed (stay away)

3. filtered - undetermined, maybe Firewall (stay away)

<br>
<br>

### Banner grabbing in two ways using `-A` and `-O`

    1. Basic OS detection
    ```bash
     nmap -O scanme.nmap.org
     ```


    
    2. More aggressive, does `--script` and others as well

    ```bash
     nmap -A scanme.nmap.org
     ```

<br>
<br>


### __Stealth Scan__

```bash
nmap -sS scanme.nmap.org
```

    - Just doing _Half-Scan_ or _TCP SYN_ scan only


<br>
<br>


### Only see open ports

```bash
nmap --open scanme.nmap.org
```

<br>
<br>

- likewise `-sV` for __service version detetection__

<br>
<br>

### Timing and Performance

```bash
nmap -T0 scanme.nmap.org
```

- takes a lot of time, not much noisy.


<br>
<br>

### Saving results

- Teacher said just redirect it 🤣

- But we can use `-o?`

```bash
nmap example.com -oN / -oX / -Os
```


<br>
<br>

---

<br>
<br>

- talked about `nslookup`

<br>

> `dig` better 👻

<br>
<br>
<br>

---

[ 10 Sep 2024 ]

- Installed Nessus.


<br>
<br>
<br>

---

[ 12 Sep 2024 ]

-  What is SNMP. What info can be gathered b doing SNMP, LDAP enumeration

- System Hacking. (Starting with this today)

- password cracking.

- Distributed Network Attack

- Salting

- How to denfend against password cracking?

<br>

- Privilege Escalation

- Using DLL Hijacking 💉

- By exploiting CVEs

- Unquoted Service Path

- UAC bypassing

<br>
<br>

- How to defend against PrivEsc.

<br>

- What are rootkits?

- How it works (functioning and diagram)

- How to defend against rootkits?

<br>

- What is Steganography

<br>

- __Steganalysis__

<br>
<br>

<!-- Sep 17 2024 -->

<br>
<br>

- [Using]('SystemHackingUpdated.pptx')

- [Using](MalwareUpdated.pptx)

- What are [APTs](https://www.crowdstrike.com/cybersecurity-101/advanced-persistent-threat-apt/)?


<br>
<br>

- Started __Malware Analysis__

<br>
<br>

---

<br>
<br>


<!-- 01 Oct 2024 -->

<br>
<br>

- Discussed __MAC FLOODING__

- Discussed __SWITCH PORT STEALING__ 

- DHCP Starvation Attack

- Performing `Wireshark` practical.

<br>
<br>

---


<br>
<br>
<br>

<!-- 03 OCt 2024 -->


<br>
<br>


- Starting with _Social Engineering_ 👿

- Phases of social engineering attack

- Types of Social Engineering 

- Solved [this THM lab](https://tryhackme.com/r/room/commonattacks)

- Also did the `blue-lab` attached with it (long time ago 🙂).


<br>
<br>

<!-- 10 Oct 2024 -->

<br>
<br>

- Social Engineering Continued

- Talked about Insider Threats

    - IOCs for Insider Threats.

<br>
<br>

<!-- 24 Oct 2024 -->


<br>
<br>


## Session Hijacking

- Why is session hijacking successful?

- Two types of Session Hijacking

- In OSI Model

    1. Network - Level Hijacking (interception of packets)

    2. Application - Level Hijacking (HTTP user session)


- `Spoofing` vs `Hijacking`

- ___Man in the Browser Attack___

<br>
<br>

### Using Client Side Attacks

1. Cross Site Scripting

2. MITM vs Replay Attacks

3. Performing DOS attack with SYN flooding

<br>
<br>
<br>

<!-- 05 Nov 2024 -->

<br>
<br>

### Hacking Web Servers

<br>
<br>

- Why are web servers compromised?


<br>
<br>


<!-- 07 Nov 2024 -->


<br>

### Website Mirroring 🕸

<br>

- [httrack](https://github.com/xroche/httrack) 🐧

<br>

- SQL Injection 👽

<br>
