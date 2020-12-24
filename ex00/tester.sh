ESC=$(printf '\033')

echo "${ESC}[33:1mtest ex00${ESC}[m"

node hello-world.js > output

diff expected output

if [ $? -eq 0 ] ;then
	echo "${ESC}[32;1mOK${ESC}[m"
else
	echo "${ESC}[31;1mKO${ESC}[m"
fi

rm -f ./output