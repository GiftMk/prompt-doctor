'use client'

import { type ChangeEvent, useRef } from 'react'
import { Textarea } from '../ui/textarea'
import { useAtom, useSetAtom } from 'jotai'
import { feedbackAtom, loadingAtom, promptAtom } from '@/state/atoms'
import { fetchFeedback } from '../actions/fetchFeedback'
import { SubmitButton } from './SubmitButton'
import { InputContainer } from './InputContainer'

export const PromptInput = () => {
	const textareaRef = useRef<HTMLTextAreaElement>(null)
	const [prompt, setPrompt] = useAtom(promptAtom)
	const setFeedback = useSetAtom(feedbackAtom)
	const [loading, setLoading] = useAtom(loadingAtom)

	const resizeTextarea = () => {
		const current = textareaRef.current
		if (!current) return

		current.style.height = 'inherit'
		current.style.height = `${current.scrollHeight}px`
	}

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		resizeTextarea()
		setPrompt(e.target.value)
	}

	const handleSubmit = async () => {
		if (!prompt) return

		setLoading(true)
		const feedback = await fetchFeedback(prompt)
		setFeedback(feedback)
		setLoading(false)
	}

	const handleKeyDown = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.code === 'Enter' && (e.metaKey || e.ctrlKey)) {
			await handleSubmit()
		}
	}

	return (
		<InputContainer>
			<Textarea
				onKeyDown={handleKeyDown}
				placeholder='Enter prompt...'
				ref={textareaRef}
				value={prompt}
				onChange={handleChange}
				className='max-h-48 resize-none border-none shadow-none focus-visible:ring-0'
			/>
			<div className='flex w-full justify-end'>
				<SubmitButton onClick={handleSubmit} disabled={loading} />
			</div>
		</InputContainer>
	)
}
