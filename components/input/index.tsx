import { modeContext } from '@/utils';
import { Input, FormLabel, FormControl } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, memo, useEffect } from 'react';
import { CSSProperties } from 'styled-components';

interface props {
    modeContext: [modeContext, Dispatch<SetStateAction<modeContext>>];
    showInput?: boolean;
    formStyle?: CSSProperties;
    titleValue?: string;
    titleStyle?: CSSProperties;
    inputPlaceholder?: string;
    inputValue: [string | undefined, Dispatch<SetStateAction<string | undefined>>];
    inputStyle?: CSSProperties;
}

export default memo((props: props) => {
    return <motion.div style={{ width: "100%" }} animate={{ height: props.showInput ? "25px" : "0px" }}>
        {(props.showInput != false) && <FormControl style={{
            background: props.modeContext[0] == modeContext.darkMode ? "#2D2D2D" : "#FBFBFB",
            borderRadius: "5px",
            boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
            height: "25px",
            width: "100%",
            ...props.formStyle
        }} display="flex">
            <motion.div animate={{ width: (props.inputValue[0] != null && props.inputValue[0] != "") ? "auto" : "0px" }}>
                {(props.inputValue[0] != null && props.inputValue[0] != "") && <FormLabel style={{
                    alignItems: "center",
                    background: "transparent",
                    color: "#1EBADD",
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    paddingLeft: "5px",
                    whiteSpace: "nowrap",
                    ...props.titleStyle
                }} children={props.titleValue} />}
            </motion.div>
            <Input style={{
                background: "transparent",
                border: "0px",
                color: "#1EBADD",
                height: "100%",
                paddingLeft: "5px",
                outline: "0px",
                width: "100%",
            }} _placeholder={{ color: "#1EBADD" }} placeholder={props.inputPlaceholder}
                value={props.inputValue[0]} onChange={(event) => props.inputValue[1](event.currentTarget.value)} />
        </FormControl>}
    </motion.div>
});