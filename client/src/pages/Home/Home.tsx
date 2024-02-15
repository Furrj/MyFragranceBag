import React, { useState } from "react";
import styles from "./Home.module.scss";

// Comps
import LogoutBtn from "../../ui/LogoutBtn";
import Protected from "../../auth/Protected.tsx";

// TS
import { T_UserData } from "../../types/UserData.ts";

type IProps = {
    loggedIn: boolean;
    validationCompleted: boolean;
    setUserData: React.Dispatch<React.SetStateAction<T_UserData>>;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const TEST_LIST = [
    "Chanel No. 5",
    "Dior Sauvage",
    "Jo Malone London English Pear",
    "Yves Saint Laurent Black Opium",
    "Creed Aventus",
    "Gucci Bloom",
    "Tom Ford Black Orchid",
    "Viktor & Rolf Flowerbomb",
    "Marc Jacobs Daisy",
    "Prada Candy",
];

const Home: React.FC<IProps> = ({
    loggedIn,
    validationCompleted,
    setUserData,
    setLoggedIn,
}) => {
    const [fragrances, setFragrances] = useState<string[]>([...TEST_LIST]);
    const [input, setInput] = useState<string>("");

    function addFragrance() {
        const newFragrances = [...fragrances];
        newFragrances.push(input);
        setFragrances(newFragrances);
    }

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value.toString());
    }

    return (
        <Protected
            validationCompleted={validationCompleted}
            loggedIn={loggedIn}
        >
            <div className={styles.root}>
                <section className={styles.title}>
                    <h1>My Fragances</h1>
                </section>

                <div className={styles.main}>
                    <section className={styles.owned}>
                        <h2>Owned</h2>
                        <div>
                            {fragrances.map((name: string, i: number) => {
                                return <div key={i.toString()}>{name}</div>;
                            })}
                        </div>
                    </section>

                    <section className={styles.add}>
                        <h2>Add</h2>
                        <div>
                            <input
                                type="text"
                                name="fragrance"
                                id="fragrance"
                                onChange={handleInput}
                                value={input}
                            />
                            <button onClick={addFragrance}>Add</button>
                        </div>
                    </section>
                </div>
            </div>
        </Protected>
    );
};

export default Home;
