import React from 'react';
import { useState, useEffect } from 'react'
import styles from './Alert.module.css';

type AlertProps = {
    text: string;
    delay: number;
}

export function Alert({text, delay}: AlertProps) {
    const [show, setShow] = useState(true)

    useEffect(() => {
        const timeId = setTimeout(() => {
            setShow(false)
        }, delay*1000)

        return () => {
            clearTimeout(timeId)
        }
    }, []);

    if (!show) {
        return null;
    }

    return <div className={styles.text}> {text}</div>;
}
