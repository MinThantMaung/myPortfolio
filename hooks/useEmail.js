import { useMutation } from "@tanstack/react-query";
import { sendEmail } from "../api/email";

const useSendEmail = () => {
    return useMutation({
        mutationKey: ["post", "email"],
        mutationFn: sendEmail,
        onError: (error) => {
            console.error("Error updating user:", error);
        },
    });
};

export const useEmail = () => {
    return {
        useSendEmail,
    };
};
