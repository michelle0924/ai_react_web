import { useState, useCallback } from 'react';

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

/**
 * A simple hook for running async operations with loading / error state.
 *
 * @example
 * const { data, loading, error, execute } = useAsync(fetchUser);
 */
export function useAsync<T, Args extends unknown[]>(asyncFn: (...args: Args) => Promise<T>) {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (...args: Args) => {
      setState({ data: null, loading: true, error: null });
      try {
        const data = await asyncFn(...args);
        setState({ data, loading: false, error: null });
        return data;
      } catch (err) {
        setState({ data: null, loading: false, error: err as Error });
        throw err;
      }
    },
    [asyncFn],
  );

  return { ...state, execute };
}
