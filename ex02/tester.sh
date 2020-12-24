#!/bin/bash
subject="ex02"
esc=$(printf '\033')
yellow=$esc"[33:1m"
green=$esc"[32:1m"
red=$esc"[31:1m"
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

echo "case1 no param given"
node sum_args.js > output
diff output empty
check

echo "case2 simple a"
args=("1" "2" "3")
expected="6"
test `node sum_args ${args[@]}` = $expected
check

echo "case2 simple b"
args=("10" "200" "3000" "40000" "500000")
expected="543210"
test `node sum_args ${args[@]}` = $expected
check

echo "case2 simple c"
args=("42")
expected="42"
test `node sum_args ${args[@]}` = $expected
check

echo "case3 too big number"
args=("1000000000000000000000000000000000000000000")
expected="1e+42"
test `node sum_args ${args[@]}` = $expected
check