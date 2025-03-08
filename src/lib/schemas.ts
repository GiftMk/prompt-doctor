import { z } from 'zod'

export type Feedback = z.infer<typeof feedbackSchema>

export const feedbackSchema = z.object({
	prompt: z
		.string()
		.describe(
			`An improved version of the user's prompt, based on the prompt guidelines.`,
		),
	response: z
		.string()
		.describe(
			'Feedback on how the user can improve their prompt based on the prompt guidelines.',
		),
})
