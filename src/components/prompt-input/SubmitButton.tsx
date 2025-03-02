'use client'

import { LoadingSpinner } from '@/components/LoadingSpinner'
import { Button } from '../ui/button'
import { useIsClient } from '@/hooks/useIsClient'
import { useIsMobile } from '@/hooks/useIsMobile'
import { loadingAtom } from '@/state/atoms'
import { useAtomValue } from 'jotai'
import { CommandIcon, CornerDownLeftIcon } from 'lucide-react'

type SubmitButtonProps = {
	disabled?: boolean
	onClick: () => void
}

export const SubmitButton = ({ disabled, onClick }: SubmitButtonProps) => {
	const isMobile = useIsMobile()
	const isClient = useIsClient()
	const loading = useAtomValue(loadingAtom)
	const showHotkeyLabel = isClient && !isMobile
	const isMac = navigator.userAgent.includes('Mac')

	return (
		<Button disabled={disabled} className='gap-4' onClick={onClick}>
			{loading ? <LoadingSpinner /> : 'Go'}
			{showHotkeyLabel && (
				<span className='flex items-center gap-2 rounded-md p-1 text-xs outline outline-2'>
					{isMac ? <CommandIcon /> : 'Ctrl'} + <CornerDownLeftIcon />
				</span>
			)}
		</Button>
	)
}
