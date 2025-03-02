'use client'

import { useAtomValue, useSetAtom } from 'jotai'
import { Card } from '../ui/card'
import { promptInputHeightAtom, sidebarWidthAtom } from '@/state/atoms'
import { useIsClient } from '@/hooks/useIsClient'
import { useRef } from 'react'
import { useDimensions } from '@/hooks/useDimensions'

export const InputContainer = ({ children }: React.PropsWithChildren) => {
	const isClient = useIsClient()
	const sidebarWidth = useAtomValue(sidebarWidthAtom)
	const ref = useRef<HTMLDivElement>(null)
	const setPromptInputHeight = useSetAtom(promptInputHeightAtom)

	useDimensions(ref, ({ height }) => setPromptInputHeight(height))

	return (
		<Card
			ref={ref}
			style={{ width: `calc(100% - ${isClient ? sidebarWidth : 0}px)` }}
			className='fixed right-0 bottom-0 space-y-4 rounded-b-none rounded-l-none border-l-0 bg-primary-foreground p-4'
		>
			{children}
		</Card>
	)
}
