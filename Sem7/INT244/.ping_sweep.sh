#!/usr/bin/bash

if [ $# -lt 2 ]; then
    echo "Usage: $0 {start-ip} {end-ip}"
    exit 1
fi

start=$1
end=$2

for ip in $(seq $start $end); do
    ping -c 1 $ip > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        echo "\033[42;01mHost $ip is alive\033[0m"
    else
        echo "\033[41;01mHost $ip is down\033[0m"
    fi
done




