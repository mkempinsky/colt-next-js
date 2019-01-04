export const getProp = (obj, keys, defaultValue = null) => {
    const objectKeys = keys.split('.');
    const allKeys = objectKeys.reduce((acc, key) => {
        const match = key.match(/\[\d\]$/);
        if (match) {
            const propName = key.slice(0, match.index);
            propName && acc.push(propName);
            const index = +key.slice(match.index + 1, key.length - 1);
            acc.push(index);
        } else {
            acc.push(key);
        }

        return acc;
    }, []);

    const result = allKeys.reduce((acc, cur) => {
        return acc === null || acc === undefined ? acc : acc[cur];
    }, obj);

    return result !== undefined && result !== null ? result : defaultValue;
};