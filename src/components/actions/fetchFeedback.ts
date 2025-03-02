'use server'

import 'dotenv/config'
import { promptGuidelines } from '@/lib/promptGuidelines'
import { type Feedback, feedbackSchema } from '@/state/atoms'
import { ChatOpenAI } from '@langchain/openai'

const model = new ChatOpenAI({
	model: 'gpt-4o',
	temperature: 0,
})

export const fetchFeedback = async (prompt: string): Promise<Feedback> => {
	const structuredModel = model.withStructuredOutput(feedbackSchema)
	const feedback = await structuredModel.invoke(`
  ### Task ###
  - Improve and give feedback on the following prompt which is going to be sent to an LLM
  so that it is as effective as possible and meets the prompt guidelines from  OpenAI.
  
  - Keep the improved prompt simple and concise.

  - Feedback should end on a complete sentence, avoid ending with colons

  ### OpenAI Prompt Guidelines ###
  ${JSON.stringify(promptGuidelines, null, 2)}

  ---

  ### User Prompt ###
  ${prompt}

  ---
  `)

	return feedback
}
