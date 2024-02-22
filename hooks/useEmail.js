import {sendEmail} from "../api/email";
import {useMutation} from "@tanstack/react-query";

const useSendEmail = (email, subject, body) => {
    return useMutation({
        mutationKey: ['post', 'email',  email, subject, body],
        mutationFn: sendEmail({email, subject, body}),
        onError: (error) => {
            console.error("Error updating user:", error)
        },
    })
}

export const useEmail = () => {
    return {
        useSendEmail,
    }
}