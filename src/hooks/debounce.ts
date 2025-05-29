// debounce on searching

import { useCallback, useRef } from "react";

// Define a generic type for the callback function
type CallbackFunction<T extends unknown[]> = (...args: T) => void;

export const useDebounce = () => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Use generics to properly type the callback and its arguments
    const debounce = useCallback(<T extends unknown[]>(callback: CallbackFunction<T>, delay: number = 500) => {
        return (...args: T) => {
            // clear prev timeout if it exists
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

           // set new timeout 
           timeoutRef.current = setTimeout(() => {
               callback(...args);
           }, delay);
        };
    }, []);
    
    return debounce;
};
