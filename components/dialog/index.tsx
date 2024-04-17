import { ChakraProvider, Modal, ModalBody, ModalContent, ModalCloseButton, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { modeContext } from "@/utils";
import React, { Dispatch, SetStateAction, memo, useEffect, useState } from 'react';
import { CSSProperties, styled } from 'styled-components';

interface props {
    modeContext: [modeContext, Dispatch<SetStateAction<modeContext>>];
    isOpen?: boolean;
    formStyle?: CSSProperties;
    buttonValue?: string;
    buttonStyle?: CSSProperties;
}

export default memo((props: props) => {
    const cancelRef = React.useRef<any>()
    const [getIsOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        async function didMount() {
            setIsOpen(props.isOpen ?? false);
        }
        didMount();
    }, [props])

    return <ChakraProvider>
        <Modal
            onClose={() => {
                setIsOpen(false);
            }}
            isOpen={getIsOpen}
            isCentered>
            <ModalOverlay />
            <ModalContent height="100vh">
                <ModalHeader>teste fiscalizi?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Are you sure you want to discard all of your notes? 44 words will be
                    deleted.
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </ChakraProvider>
});