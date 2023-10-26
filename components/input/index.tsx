import { modeContext } from '@/utils';
import * as Icon from '@chakra-ui/icons'
import { FormControl, FormLabel, IconButton, Input } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, memo, useEffect, useState } from 'react';
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
    inputIsPassword?: boolean;
    inputIsPhone?: boolean;
}

export default memo((props: props) => {
    const [getShowPassword, setShowPassword] = useState<boolean>();
    useEffect(() => setShowPassword((props.inputIsPassword ?? false) == true ? false : undefined), [props.inputIsPassword]);

    return <motion.div style={{ width: "100%" }} animate={{ height: props.showInput ? "25px" : "0px" }}>
        {(props.showInput != false) && <FormControl style={{
            background: props.modeContext[0] == modeContext.darkMode ? "#2D2D2D" : "#FBFBFB",
            borderRadius: "5px",
            boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
            height: "25px",
            width: "100%",
            ...props.formStyle
        }} display="flex">
            <motion.div style={{ paddingLeft: "15px" }} animate={{ width: (props.inputValue[0] != null && props.inputValue[0] != "") ? "auto" : "0px" }}>
                {(props.inputValue[0] != null && props.inputValue[0] != "") && <FormLabel style={{
                    alignItems: "center",
                    background: "transparent",
                    color: "#1EBADD",
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    whiteSpace: "nowrap",
                    ...props.titleStyle
                }} children={props.titleValue} />}
            </motion.div>
            <Input type={((props.inputIsPassword ?? false) == true && getShowPassword != true) ? 'password' : 'text'}
                style={{
                    background: "transparent",
                    border: "0px",
                    color: "#1EBADD",
                    height: "100%",
                    paddingLeft: "5px",
                    outline: "0px",
                    width: "100%",
                }} _placeholder={{ color: "#1EBADD" }} placeholder={props.inputPlaceholder}
                value={props.inputValue[0]} onChange={(event) => {
                    let text = event.currentTarget.value;
                    if (props.inputIsPhone == true) {
                        text = ('' + text).replace(/\D/g, '').substring(0, 19);
                        const match = text.match(/^(\d{2})(\d{2})(\d{5})(\d{1,11})$/);
                        if (match) {
                            text = `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
                        }
                    }
                    props.inputValue[1](text);
                }} />
            <motion.div style={{ display: "flex", justifyContent: "center", paddingRight: "5px" }} animate={{ width: (getShowPassword != undefined) ? "auto" : "0px" }}>
                {getShowPassword != undefined && <IconButton aria-label="Done" background="None" border="None" cursor="pointer"
                    onClick={() => setShowPassword(!getShowPassword)}
                    icon={getShowPassword ? <Icon.UnlockIcon /> : <Icon.LockIcon />} />}
            </motion.div>
        </FormControl>}
    </motion.div>
});