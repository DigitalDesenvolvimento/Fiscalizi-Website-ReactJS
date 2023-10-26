import { modeContext } from '@/utils';
import * as Icon from '@chakra-ui/icons'
import { FormControl, FormLabel, IconButton, Input, background } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { Dispatch, JSXElementConstructor, ReactElement, SetStateAction, memo, useEffect, useState } from 'react';
import { CSSProperties } from 'styled-components';

interface props {
    modeContext: [modeContext, Dispatch<SetStateAction<modeContext>>];
    icon?: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
    isChecked?: boolean;
    formStyle?: CSSProperties;
    titleValue?: string;
    titleStyle?: CSSProperties;
    onClick?: () => Promise<void>;
}

export default memo((props: props) => {
    const [getShowPassword, setShowPassword] = useState<boolean>();
    const [getWaitOnClick, setWaitOnClick] = useState<boolean>();
    useEffect(() => {
        async function didMount() {
            if (props.isChecked) {
                setWaitOnClick(undefined);
            }
            else switch (getWaitOnClick) {
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
    return <motion.div style={{ width: "100%", cursor: "pointer", paddingLeft: "20px" }} whileHover={{ background: "radial-gradient(92% 445.98% at 8.17% 50.56%, #A5E3F1 0%, rgba(165, 227, 241, 0.0566056) 25%, rgba(165, 227, 241, 0) 100%)", paddingLeft: "40px", paddingTop: "10px", paddingBottom: "10px" }}
        animate={{ background: (getWaitOnClick == true || props.isChecked == true) ? "radial-gradient(92% 445.98% at 8.17% 50.56%, #A5E3F1 0%, rgba(165, 227, 241, 0.0566056) 25%, rgba(165, 227, 241, 0) 100%)" : "transparent", paddingLeft: (getWaitOnClick != true) ? "20px" : "40px", paddingTop: (getWaitOnClick != true) ? "0px" : "10px", paddingBottom: (getWaitOnClick != true) ? "0px" : "10px" }} onClick={() => setWaitOnClick(true)}>
        <FormControl style={{ alignItems: "center", display: "flex", height: "100%", ...props.formStyle }}>
            <IconButton aria-label="Done" background="None" border="None" style={{ cursor: "pointer" }}
                onClick={() => setShowPassword(!getShowPassword)}
                icon={props.icon} />
            <FormLabel style={{
                alignItems: "center",
                color: props.modeContext[0] == modeContext.darkMode ? "#FCFCFC" : "#15004C",
                cursor: "pointer",
                display: "flex",
                fontSize: "20px",
                height: "100%",
                justifyContent: "center",
                marginLeft: "5px",
                whiteSpace: "nowrap",
                ...props.titleStyle
            }} children={props.titleValue} />
        </FormControl>
    </motion.div>
});