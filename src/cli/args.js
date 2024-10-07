const parseArgs = () => {
    const argsArr = process.argv.slice(2);
    const argsObj = {};

    for (let i = 0; i < argsArr.length; i += 2) {
        argsObj[argsArr[i].slice(2)] = argsArr[i + 1];
    }

    console.log(
        Object.entries(argsObj)
            .map(([key, val]) => `${key} is ${val}`)
            .join(', ')
        );
};

parseArgs();