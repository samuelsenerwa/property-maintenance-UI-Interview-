// debounce on searching

import { useCallback, useRef } from "react"

export const useDebounce = () => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const debounce = useCallback((callback: Function, delay: number = 500) => {
        return (...args: any[]) => {
            // clear prev timeout if it exists
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }

           // set new timeout 
           timeoutRef.current = setTimeout(() => {
            callback(...args)
           }, delay) 
        }
    }, [])
    
    return debounce;
}
    
