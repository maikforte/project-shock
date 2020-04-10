import { AsyncStorage } from 'react-native';

const set = async (key, value) => {
    console.log({
        logType: 'SET_LOCAL_STORAGE_ITEM',
        key,
        value,
    });

    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (exception) {
        console.log(exception);
    }
};

const get = async (key) => {
    console.log({
        logType: 'GET_LOCAL_STORAGE_ITEM',
        key,
    });

    let item = null;

    try {
        item = await AsyncStorage.getItem(key);
    } catch (exception) {
        console.log(exception);
    }

    return JSON.parse(item);
};

const clear = async () => {
    console.log({
        logType: 'CLEAR_LOCAL_STORAGE',
    });

    try {
        await AsyncStorage.clear();
    } catch (exception) {
        console.log(exception);
    }
};

export const StorageService = {
    set,
    get,
    clear,
};
