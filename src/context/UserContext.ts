import { createContext } from 'react';

interface IUserContext {
    isLoggedIn: () => boolean;
    login: (username: string, password: string) => void;
    register: (username: string, password: string, email: string) => void;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);
