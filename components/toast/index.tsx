import { createStandaloneToast } from '@chakra-ui/react'
import { memo } from 'react';

const { ToastContainer, toast } = createStandaloneToast();

function showMessage(title: string, description?: string, action?: () => Promise<void>, status?: "info" | "warning" | "success" | "error" | "loading"): string {
    const timeOut = 1000 + Math.ceil(`${title} ${description}`.split(" ").length * 250);
    const Id = toast({
        title: title,
        description: description,
        duration: timeOut,
        position: "top-right",
        status: status ?? "success",
    }).toString();
    setTimeout(() => action && action(), timeOut + 250);
    return Id;
}

const component = memo(() => <ToastContainer />);

export { component, showMessage };