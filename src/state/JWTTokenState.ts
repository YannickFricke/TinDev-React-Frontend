import { atom } from 'recoil';

export const JWTTokenState = atom<string | undefined>({
    key: 'JWTTokenState',
    default: undefined,
});
