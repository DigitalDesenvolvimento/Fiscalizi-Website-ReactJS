import { Input, FormLabel, FormControl } from '@chakra-ui/react';
import { styled } from "@chakra-ui/system";

export const formControlComponent = styled(FormControl, {
    baseStyle: {
        background: "#2D2D2D",
        borderRadius: "5px",
        height: "25px",
        width: "100%"
    }
});
export const labelComponent = styled(FormLabel, {
    baseStyle: {
        alignItems: "center",
        background: "transparent",
        color: "#1EBADD",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        paddingLeft: "5px",
        whiteSpace: "nowrap"
    }
});
export const inputComponent = styled(Input, {
    baseStyle: {
        background: "transparent",
        border: "0px",
        color: "#1EBADD",
        height: "100%",
        paddingLeft: "5px",
        outline: "0px",
        width: "100%",
        _placeholder: {
            color: "#1EBADD"
        }
    }
});