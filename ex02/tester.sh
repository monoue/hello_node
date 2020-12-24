#!/bin/bash
subject="ex02"
file="sum_args.js"

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

diff_sh_js() {
	node $file ${args[@]} > js_output
	sh sum.sh ${args[@]} > sh_output
	diff js_output sh_output
	check
}

put_color "test "$subject $yellow

put_color "case1 no args given" $purple
node $file > js_output
diff js_output no_arg
check

put_color "case2 simple a" $purple
args=("1" "2" "3")
diff_sh_js

put_color "case2 simple b" $purple
args=("10" "200" "3000" "40000" "500000")
diff_sh_js

put_color "case2 simple c" $purple
args=("42")
diff_sh_js

put_color "case3 too big number" $purple
args=("1000000000000000000000000000000000000000000")
expected="1e+42"
test `node $file ${args[@]}` = $expected
check

rm -f js_output sh_output