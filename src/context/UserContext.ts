import { createContext } from 'react';

interface IUserContext {
    isLoggedIn: () => boolean;
    login: (username: string, password: string) => void;
    register: (username: string, password: string, email: string) => void;
    lastErrorMessage: string | undefined;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);
