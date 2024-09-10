import { axiosInstance } from "../utils/axiosInstance";

export const sendEmail = async ({ email, subject, body }) => {
  try {
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
