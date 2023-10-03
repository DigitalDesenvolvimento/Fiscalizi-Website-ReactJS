import { motion } from "framer-motion";
import { Dispatch, SetStateAction, memo, useEffect, useState } from 'react';
import { CSSProperties, styled } from 'styled-components';
import * as styles from "./styles";
import { keyframes } from '@emotion/react';

interface props {
    showButton?: boolean;
    formStyle?: CSSProperties;
    buttonValue?: string;
    buttonStyle?: CSSProperties;
    onClick?: () => Promise<void>;
}

export default memo((props: props) => {
    const [getWaitOnClick, setWaitOnClick] = useState<boolean>();
    const Blinking = styled.div`
        animation: blink ${getWaitOnClick == undefined ? "0s" : "2s"} infinite;
        @keyframes blink { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
    `;

    useEffect(() => {
        async function didMount() {
            switch (getWaitOnClick) {
                case true:
                    setTimeout(() => props.onClick && props.onClick().then(() => setWaitOnClick(false)), 0.5 * 1000);
                    break;
                case false:
                    setTimeout(() => setWaitOnClick(undefined), 0.5 * 1000);
                    break;
            }
        }
        didMount();
    }, [getWaitOnClick])

    return <styles.formControlComponent style={props.formStyle} display="flex">
        <motion.div style={{ width: "100%" }} animate={{ height: props.showButton ? "25px" : "0px" }}>
            {(props.showButton == true) && <Blinking>
                <styles.buttonComponent style={props.buttonStyle} children={props.buttonValue}
                    onClick={async () => setWaitOnClick(true)} />
            </Blinking>}
        </motion.div>
    </styles.formControlComponent>
});