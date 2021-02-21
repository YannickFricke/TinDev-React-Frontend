import { atom } from 'recoil';

export const UserLoginState = atom<string | undefined>({
    key: 'UserLoginState',
    default: undefined,
});
