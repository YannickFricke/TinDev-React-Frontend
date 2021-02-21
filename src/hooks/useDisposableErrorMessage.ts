import { useState, useEffect, SetStateAction, Dispatch } from 'react';

type MessageType = string | undefined;

export const useDisposableErrorMessage = (
    timeToDispose: number = 5000,
): [MessageType, Dispatch<SetStateAction<MessageType>>] => {
    const [errorMessage, setErrorMessage] = useState<string | undefined>(
        undefined,
    );

    useEffect(() => {
        if (errorMessage === undefined) {
            return;
        }

        const timer = setTimeout(() => {
            setErrorMessage(undefined);
        }, timeToDispose);

        return () => {
            clearTimeout(timer);
        };
    }, [errorMessage, timeToDispose]);

    return [errorMessage, setErrorMessage];
};
