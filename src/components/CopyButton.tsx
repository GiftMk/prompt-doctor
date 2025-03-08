'use client'

import { ClipboardCheckIcon, ClipboardIcon, ClipboardXIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type CopyButtonProps = {
	text?: string
	iconClassName?: string
} & React.ComponentProps<'button'>

type CopyStatus = 'success' | 'failure'

const TIMEOUT = 750

export const CopyButton = ({
	text,
	className,
	iconClassName,
	...props
}: CopyButtonProps) => {
	const [status, setStatus] = useState<CopyStatus>()

	const onClick = async () => {
		if (!text) return

		try {
			await navigator.clipboard.writeText(text)
			setStatus('success')
		} catch {
			setStatus('failure')
		}
	}

	useEffect(() => {
		if (!status) return

		const handler = setTimeout(() => setStatus(undefined), TIMEOUT)
		return () => clearTimeout(handler)
	}, [status])

	return (
		<Button
			className={cn('disabled:opacity-100', className)}
			disabled={!!status || !text}
			variant={'ghost'}
			onClick={onClick}
			{...props}
		>
			{!status && <ClipboardIcon className={iconClassName} />}
			{status === 'success' && <ClipboardCheckIcon className={iconClassName} />}
			{status === 'failure' && <ClipboardXIcon className={iconClassName} />}
		</Button>
	)
}
