import React from "react";
import styles from "../styles/Button.module.css";
import Link from 'next/link';

export default function Button({ link, props }) {
    return (
        <Link href={link} className={styles.button}>
            {props}
        </Link>
    );
}