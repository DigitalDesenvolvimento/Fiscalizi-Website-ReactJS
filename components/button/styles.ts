import { Button, FormControl } from '@chakra-ui/react';
import { styled } from "@chakra-ui/system";

export const formControlComponent = styled(FormControl, {
    baseStyle: {
        background: "#2D2D2D",
        borderRadius: "5px",
        width: "100%"
    }
});
export const buttonComponent = styled(Button, {
    baseStyle: {
        animation: 123,
        background: "#1EBADD",
        border: "0px",
        borderRadius: "5px",
        cursor: "pointer",
        color: "white",
        fill: true,
        height: "25px",
        outline: "none",
        width: "100%"
    }
});