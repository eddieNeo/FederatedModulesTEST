dirs=()
for f in ../FModules/*; do
    if [ -d "$f" ]; then
        # Will not run if no directories are available
        # if [ -f "$f/package.json" ];then
            # echo "pushing $f"
            dirs+=("$f")
        # else
            # echo "$f doesnt have package json"
        # fi
    fi
done
mm(){
    cd "$1"
    echo "Building $1"
    eval 'npm init --yes'
    wait
    eval 'npm i -D webpack webpack-cli webpack-dev-server'
    wait
    eval 'npm i react react-dom'
    wait
    cd '..'
}
# echo "${dirs[@]}"
pids=()
for d in "${dirs[@]}";do
    echo "$d"
    mm "$d" &
    pids+=($!)
done
echo "${pids[@]}"
wait ${pids[@]}