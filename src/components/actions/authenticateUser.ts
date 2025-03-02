'use server'

import { env } from '@/lib/env'

export const authenticateUser = async (password: string): Promise<boolean> => {
	return password === env.PROMPT_DOCTOR_PASSWORD
}
