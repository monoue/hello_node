subject="ex01"
esc=$(printf '\033')
yellow=$esc"[33:1m"
green=$esc"[32:1m"
red=$esc"[31:1m"
reset=$esc"[m"

put_color() {
	echo "$2$1$reset"
}

put_color "test "$subject $yellow

node vars.js > output

diff expected output

if [ $? -eq 0 ] ;then
	put_color "OK" $green
else
	put_color "KO" $red
fi

rm -f ./output