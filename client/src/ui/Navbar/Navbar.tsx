import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/mathtestr_logo.png";

// TS
import { T_UserData } from "../../types/UserData.ts";

interface IProps {
    loggedIn: boolean;
    userData: T_UserData;
    verticalMode: boolean;
}

const Navbar: React.FC<IProps> = ({ loggedIn, userData, verticalMode }) => {
    const [rootMode, setRootMode] = useState<string>(styles.collapsedRoot);

    useEffect(() => {
        if (!verticalMode) {
            setRootMode(styles.collapsedRoot);
        } else {
            setRootMode(styles.expandedRoot);
        }
    }, []);

    function expand(e: React.MouseEvent<HTMLDivElement>): void {
        if (!verticalMode) {
            setRootMode(styles.expandedRoot);
        }
    }

    function collapse(e: React.MouseEvent<HTMLDivElement>): void {
        if (!verticalMode) {
            setRootMode(styles.collapsedRoot);
        }
    }

    return (
        <div onMouseOver={expand} onMouseOut={collapse} className={rootMode}>
            <img src={logo} alt="logo" className={styles.logo} />

            <Link to="/" className={styles.btn}>
                <span>
                    <i className={`fa-solid fa-house ${styles.icon}`} />
                </span>
            </Link>
            <Link to="/" className={styles.btn}>
                <div>
                    <i className={`fa-solid fa-gear ${styles.icon} `} />
                </div>
            </Link>
        </div>
    );
};

export default Navbar;
