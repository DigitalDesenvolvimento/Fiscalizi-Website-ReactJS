import { Input, FormLabel, FormControl } from '@chakra-ui/react';
import { styled } from "@chakra-ui/system";

export const formControlComponent = styled(FormControl, {
    baseStyle: {
        background: "#2D2D2D",
        borderRadius: "5px",
        height: "25px"
    }
});
export const labelComponent = styled(FormLabel, {
    baseStyle: {
        alignItems: "center",
        background: "transparent",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        color: "#66DAC5",
    }
});
export const inputComponent = styled(Input, {
    baseStyle: {
        background: "transparent",
        border: "0px",
        color: "#BCBCBA",
        height: "100%",
        outline: "0px",
        width: "100%",
        _placeholder: {
            color: "#66DAC5"
        }
    }
});