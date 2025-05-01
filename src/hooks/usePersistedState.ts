import { useEffect, useState } from 'react';

/**
 * Custom hook to manage a state that is persisted in localStorage.
 *
 * @param {string} key - The key under which the value is stored in localStorage.
 * @param {T} initialValue - The initial value to be used if no value is found in localStorage.
 * @returns {[T, (value: T) => void]} - An array containing the current value and a function to update it.
 */
export function usePersistedState<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;

    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
