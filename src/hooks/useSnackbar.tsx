import { useState, useEffect } from 'react';

export function useSnackbar() {
    const [isActive, setIsActive] = useState(false);

    const [message, setMessage] = useState("");

    useEffect(() => {
        if(isActive === true) {
            const timer = setTimeout(() => {
                setIsActive(false);
            }, 8000);
            
            return () => {
                clearTimeout(timer);
            };
        }
    },[isActive]);

    const openSnackBar = (msg = 'Failed to order') => {
        setMessage(msg);
        setIsActive(true);
    }

    return { isActive, message, openSnackBar };

}