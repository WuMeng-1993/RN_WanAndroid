/**
 * author: WuMeng
 * date: 2019/11/27
 * desc:
 */

import AsyncStorage from '@react-native-community/async-storage';

const storageUtil = {

    get(key) {
        if (!Array.isArray(key)) {
            return AsyncStorage.getItem(key)
                .then(value => {
                    return JSON.parse(value);
                });
        } else {
            return AsyncStorage.multiGet(key)
                .then(values => {
                    return values.map(value => {
                        return JSON.parse(value[1]);
                    });
                });
        }
    },

};

export default storageUtil;
