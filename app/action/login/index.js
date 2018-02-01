export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const handleLogin = (param) => {
    return {
        type: HANDLE_LOGIN,
        param
    }
}
