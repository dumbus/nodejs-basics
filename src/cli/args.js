import { argv } from 'node:process';

const parseArgs = () => {
    const clArgs = argv.slice(2);
    const result = [];

    for (let i = 0; i < clArgs.length; i++) {
        if (i % 2 === 0) {
            clArgs[i] = clArgs[i].slice(2);
        }

        if (i % 2 !== 0) {
            result.push(`${clArgs[Math.floor(i - 1)]} is ${clArgs[i]}`);
        }
    }
    
    console.log(result.join(', '));
};

parseArgs();