import { promptGuidelines } from '@/lib/promptGuidelines'
import { feedbackSchema } from '@/lib/schemas'
import { openai } from '@ai-sdk/openai'
import { streamObject } from 'ai'

export const maxDuration = 30

const makePrompt = (userPrompt: string) => `
  ### Task ###
  - Improve and give feedback on the following prompt which is going to be sent to an LLM
  so that it is as effective as possible and meets the prompt guidelines from  OpenAI.
  
  - If the prompt is good enough considering the guidelines, or is so simple it needs no further improvement. Leave the original prompt as is.

  - Keep the improved prompt simple and concise.

  - feedback.response should end on a complete sentence, avoid ending with phrases like "here's the improved prompt:"

  ### OpenAI Prompt Guidelines ###
  ${JSON.stringify(promptGuidelines, null, 2)}

  ---

  ### User Prompt ###
  ${userPrompt}

  ---
  `

export async function POST(req: Request) {
	const userPrompt = await req.text()

	const result = streamObject({
		model: openai('gpt-4o'),
		schema: feedbackSchema,
		prompt: makePrompt(userPrompt),
	})

	return result.toTextStreamResponse()
}
