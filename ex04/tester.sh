#!/bin/bash
subject="ex04"
file="asyncio.js"

esc=$(printf '\033')
red=$esc"[31:1m"
green=$esc"[32:1m"
yellow=$esc"[33:1m"
purple=$esc"[35:1m"
cyan=$esc"[36:1m"
reset=$esc"[m"

put_color() {
	echo "$2$1$reset"
}

check() {
	if [ $? -eq 0 ] ;then
		put_color "OK" $green
	else
		put_color "KO" $red
	fi
}

put_color "test "$subject $yellow

put_color "case1 simple a" $purple
path="/etc/passwd"
test `node $file $path` = `cat $path | wc -l`
check

put_color "case2 simple b" $purple
test `node $file $file` = `cat $file | wc -l`
check

put_color "case3 no args" $purple
node $file > /dev/null
check

put_color "case4 too many args" $purple
node $file $file $file > /dev/null
check

put_color "case5 ghost file" $purple
node $file ghost > /dev/null
check