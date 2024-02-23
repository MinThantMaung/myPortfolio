import { axiosInstance } from "../utils/axiosInstance";

export const sendEmail = async ({ email, subject, body }) => {
    try {
        console.log("recipientEmail:", email); // Log for debugging
        const res = await axiosInstance.post("/send-email", {
            email,
            subject,
            body,
        });
        return res.data;
    } catch (e) {
        throw e;
    }
};