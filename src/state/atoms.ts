import { atom } from 'jotai'
import { z } from 'zod'

export const promptAtom = atom<string>()

export const feedbackSchema = z.object({
	response: z
		.string()
		.describe(
			'Feedback on how the user can improve their prompt based on the prompt guidelines.',
		),
	prompt: z
		.string()
		.describe(
			`An improved version of the user's prompt, based on the prompt guidelines.`,
		),
})

export type Feedback = z.infer<typeof feedbackSchema>

export const feedbackAtom = atom<Feedback>()

export const loadingAtom = atom(false)

export const sidebarWidthAtom = atom(0)

export const promptInputHeightAtom = atom(0)

export const isAuthenticatedAtom = atom(false)
