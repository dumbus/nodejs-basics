import { env } from 'node:process';

const parseEnv = () => {
    const variables = env;
    const result = [];

    for (const key in variables) {
        if (key.slice(0, 4) === 'RSS_') {
            result.push(`${key}=${variables[key]}`);
        }
    }

    console.log(result.join('; '));
};

parseEnv();