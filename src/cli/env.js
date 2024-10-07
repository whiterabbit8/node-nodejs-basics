const parseEnv = () => {
    const variables = Object.entries(process.env)
        .filter(([key]) => key.startsWith('RSS_'))
        .map(([key, val]) => `${key}=${val}`)
        .join('; ');
    console.log(variables);
};

parseEnv();