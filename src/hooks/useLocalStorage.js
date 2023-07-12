import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
    const prefix = 'tom-';
    const prefixedKey = prefix + key;
    const defaultValue = '';

    const [value, setValue] = useState(() => {
        let currentValue;

        try {
            currentValue = localStorage.getItem(prefixedKey);
            currentValue = JSON.parse(currentValue ?? defaultValue);
        } catch (error) {
            currentValue ??= (initialValue ?? defaultValue);
        }

        return currentValue;
    });

    useEffect(() => {
        const newValue = (!value || typeof value === 'string')
            ? (value ?? defaultValue) : JSON.stringify(value);

        localStorage.setItem(prefixedKey, newValue);
    }, [prefixedKey, value]);

    return [value, setValue];
}

export default useLocalStorage;