import { atom, selector } from 'recoil';

export const UserLoginState = atom<string | undefined>({
    key: 'UserLoginState',
    default: undefined,
});

export const IsUserLoggedInState = selector({
    key: 'IsUserLoggedInState',
    get: ({ get }) => {
        return get(UserLoginState) !== undefined;
    },
});
