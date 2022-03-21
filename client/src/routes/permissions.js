import AuthService from 'services/authService';

export const isPrivate = () => {
    return new Promise(async (resolve, reject) => {
        try {
            await AuthService.verifyToken();
            resolve(true);
        } catch (e) {
            resolve(false);
        }
    }); 
}

export const isPublic = () => {
    return new Promise(async (resolve, reject) => {
        try {
            await AuthService.verifyToken();
            resolve(false);
        } catch (e) {
            resolve(true);
        }
    }); 
}