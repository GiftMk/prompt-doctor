import { cleanEnv, makeValidator } from 'envalid'
import { PASSWORD_LENGTH } from './constants'

const password = makeValidator(value => {
	if (value.length) return value

	throw new Error(
		`Prompt Doctor password must be ${PASSWORD_LENGTH} characters long`,
	)
})

export const env = cleanEnv(process.env, {
	PROMPT_DOCTOR_PASSWORD: password(),
})
