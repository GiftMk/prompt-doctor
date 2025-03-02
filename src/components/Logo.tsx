'use client'

import { HeartPulseIcon } from 'lucide-react'
import { Heading } from './Heading'
import { useAtomValue } from 'jotai'
import { loadingAtom } from '@/state/atoms'
import { cn } from '@/lib/utils'

export const Logo = () => {
	const loading = useAtomValue(loadingAtom)

	return (
		<div className='text-foreground flex gap-1 items-center'>
			<Heading level={3} className='uppercase font-bold italic'>
				Prompt
			</Heading>
			<HeartPulseIcon
				className={cn('text-pink-400', {
					'animate-heartbeat': loading,
				})}
			/>
			<Heading level={3} className='uppercase font-bold italic'>
				Doctor
			</Heading>
		</div>
	)
}
