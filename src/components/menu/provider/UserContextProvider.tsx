import React from 'react';
import { useRecoilState } from 'recoil';
import { UserContext } from '../../../context/UserContext';
import { UserLoginState } from '../../../state/UserLoginState';

export function UserContextProvider(props: React.PropsWithChildren<{}>) {
    const [token, setToken] = useRecoilState(UserLoginState);

    function isLoggedIn() {
        return token !== undefined;
    }

    function login(username: string, password: string) {
        if (token !== undefined) {
            return;
        }
    }

    function register(username: string, password: string, email: string) {
        if (token !== undefined) {
            return;
        }
    }

    return (
        <UserContext.Provider
            value={{
                login,
                isLoggedIn,
                register,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}
