import { Button, FormControl } from '@chakra-ui/react';
import { modeContext } from "@/utils";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, memo, useEffect, useState } from 'react';
import { CSSProperties, styled } from 'styled-components';

interface props {
    modeContext: [modeContext, Dispatch<SetStateAction<modeContext>>];
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
                    setTimeout(() => (props.onClick && props.onClick().then(() => setWaitOnClick(false))) || setWaitOnClick(false), 0.5 * 1000);
                    break;
                case false:
                    setTimeout(() => setWaitOnClick(undefined), 0.5 * 1000);
                    break;
            }
        }
        didMount();
    }, [getWaitOnClick])
    return <FormControl style={{
        background: props.modeContext[0] == modeContext.darkMode ? "#2D2D2D" : "#FBFBFB",
        borderRadius: "5px",
        width: "100%",
        ...props.formStyle
    }} display="flex">
        <motion.div style={{ width: "100%" }} animate={{ height: props.showButton ? "25px" : "0px" }}>
            {(props.showButton == true) && <Blinking>
                <Button style={{
                    animation: 123,
                    background: props.modeContext[0] == modeContext.darkMode ? "#1EBADD" : "#0FDEC4",
                    border: "0px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "white",
                    height: "25px",
                    outline: "none",
                    width: "100%",
                    ...props.buttonStyle
                }} children={props.buttonValue}
                    onClick={async () => setWaitOnClick(true)} />
            </Blinking>}
        </motion.div>
    </FormControl>
});