import { motion } from "framer-motion";
import { Dispatch, SetStateAction, memo } from 'react';
import { CSSProperties } from 'styled-components';
import * as styles from "./styles";

interface props {
    formStyle?: CSSProperties;
    titleValue?: string;
    titleStyle?: CSSProperties;
    inputPlaceholder?: string;
    inputValue: [string | undefined, Dispatch<SetStateAction<string | undefined>>];
    inputStyle?: CSSProperties;
}

export default memo((props: props) => {
    return <styles.formControlComponent style={props.formStyle} display="flex">
    <motion.div animate={{ width: (props.inputValue[0] != null && props.inputValue[0] != "") ? "auto" : "0px" }}>
        {(props.inputValue[0] != null && props.inputValue[0] != "") && <styles.labelComponent style={props.titleStyle} children={props.titleValue} />}
    </motion.div>
    <styles.inputComponent placeholder={props.inputPlaceholder} value={props.inputValue[0]} onChange={(event) => props.inputValue[1](event.currentTarget.value)} />
</styles.formControlComponent>
});