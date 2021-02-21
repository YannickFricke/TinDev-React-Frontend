import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import { JWTTokenState } from '../../state/JWTTokenState';
import { API_ENDPOINT } from '../../constants';
import { useDisposableErrorMessage } from '../../hooks/useDisposableErrorMessage';

export function UserContextProvider(props: React.PropsWithChildren<{}>) {
    const [token, setToken] = useRecoilState(JWTTokenState);
    const [lastErrorMessage, setLastErrorMessage] = useDisposableErrorMessage();

    function isLoggedIn() {
        return token !== undefined;
    }

    function login(username: string, password: string) {
        if (token !== undefined) {
            return;
        }

        axios.post(`${API_ENDPOINT}/login`).then((response) => {
            switch (response.status) {
                case 204:
                    setToken(response.data.token);
                    break;

                case 400:
                    setLastErrorMessage(response.data.detail);
                    break;

                default:
                    break;
            }
        });
    }

    function register(username: string, password: string, email: string) {
        if (token !== undefined) {
            return;
        }

        axios.post(`${API_ENDPOINT}/register`).then((response) => {
            switch (response.status) {
                case 400:
                    setLastErrorMessage(response.data.detail);
                    break;

                default:
                    break;
            }
        });
    }

    return (
        <UserContext.Provider
            value={{
                login,
                isLoggedIn,
                register,
                lastErrorMessage,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}
