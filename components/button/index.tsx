import { motion } from "framer-motion";
import { Dispatch, SetStateAction, memo, useEffect, useState } from 'react';
import { CSSProperties } from 'styled-components';
import * as styles from "./styles";

interface props {
    showButton?: boolean;
    formStyle?: CSSProperties;
    buttonValue?: string;
    buttonStyle?: CSSProperties;
    onClick?: () => Promise<void>;
}

export default memo((props: props) => {
    const [getWaitOnClick, setWaitOnClick] = useState<boolean>();

    useEffect(() => {
        async function didMount() {
            switch (getWaitOnClick) {
                case true:
                    props.onClick && props.onClick().then(() => setWaitOnClick(false));
                    break;
                case false:
                    setWaitOnClick(undefined);
                    break;
            }
        }
        didMount();
    }, [getWaitOnClick])

    return <styles.formControlComponent style={props.formStyle} display="flex">
        <motion.div style={{ width: "100%" }}
            animate={{ height: props.showButton ? "25px" : "0px" }}>
            {(props.showButton == true) && <styles.buttonComponent style={props.buttonStyle} children={props.buttonValue}
                onClick={async () => setWaitOnClick(true)} />}
        </motion.div>
    </styles.formControlComponent>
});