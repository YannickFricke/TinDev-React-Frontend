import { useState, useEffect, SetStateAction, Dispatch } from 'react';

type MessageType = string | undefined;

export const useDisposableErrorMessage = (): [
    MessageType,
    Dispatch<SetStateAction<MessageType>>,
] => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>(
        undefined,
    );

    useEffect(() => {
        if (errorMessage === undefined) {
            return;
        }

        const timer = setTimeout(() => {
            setErrorMessage(undefined);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [errorMessage]);

    return [errorMessage, setErrorMessage];
};
