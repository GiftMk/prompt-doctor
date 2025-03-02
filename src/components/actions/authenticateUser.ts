"use server";

export const authenticateUser = async (password: string): Promise<boolean> => {
	return password === process.env.PROMPT_DOCTOR_PASSWORD;
};