import React, { useState, useEffect } from 'react';

interface IMessage {
    text: string;
}

export function useSnackbar(iMessage: IMessage) {
    const [isActive, setIsActive] = useState(false);

    const [message, setMessage] = useState("");

    useEffect(() => {
        if(isActive === true) {
            setTimeout(() => {
                setIsActive(false);
            }, 3000);
        }
    }, [isActive]);

    const openSnackBar = (msg = iMessage.text) => {
        setMessage(msg);
        setIsActive(true);
    }

    return { isActive, message, openSnackBar };

}