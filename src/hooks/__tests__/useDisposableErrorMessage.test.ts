import { act, renderHook } from '@testing-library/react-hooks';
import { useDisposableErrorMessage } from '../useDisposableErrorMessage';

jest.useFakeTimers();

describe('useDisposableErrorMessage', () => {
    const newErrorMessage = 'i am an error';

    it('should be defined', () => {
        expect(useDisposableErrorMessage).toBeDefined();
    });

    it('should not have a error message by default', () => {
        const { result } = renderHook(() => useDisposableErrorMessage());

        expect(result.current[0]).toBe(undefined);
    });

    it('should be able to set the error message', () => {
        const { result } = renderHook(() => useDisposableErrorMessage());
        expect(result.current[0]).toBe(undefined);

        act(() => {
            result.current[1](newErrorMessage);
        });

        expect(result.current[0]).toBe(newErrorMessage);
    });

    describe('disposing a message', () => {
        it('should dispose an error message after 5 seconds', () => {
            const { result } = renderHook(() => useDisposableErrorMessage());
            expect(result.current[0]).toBe(undefined);

            act(() => {
                result.current[1](newErrorMessage);
            });

            expect(result.current[0]).toBe(newErrorMessage);

            act(() => {
                jest.runTimersToTime(5000);
            });

            expect(result.current[0]).toBe(undefined);
        });

        it('should dispose an error message after 2 seconds', () => {
            const disposeTime = 2000;

            const { result } = renderHook(() =>
                useDisposableErrorMessage(disposeTime),
            );
            expect(result.current[0]).toBe(undefined);

            act(() => {
                result.current[1](newErrorMessage);
            });

            expect(result.current[0]).toBe(newErrorMessage);

            act(() => {
                jest.runTimersToTime(disposeTime);
            });

            expect(result.current[0]).toBe(undefined);
        });
    });
});
