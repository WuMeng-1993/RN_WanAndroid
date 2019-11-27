/**
 * author: WuMeng
 * date: 2019/11/27
 * desc:
 */
import storageUtil from './storageUtil';

const cookieKey = '@cookie';

class AuthUtil {

    static getCookie = () => {
        return storageUtil.get(cookieKey)
    };

}

export default AuthUtil;
