'use client'

import { useAtomValue } from 'jotai'
import { Logo } from './Logo'
import { ThemeToggle } from './theme/ThemeToggle'
import { SidebarTrigger } from './ui/sidebar'
import { sidebarWidthAtom } from '@/state/atoms'
import { useIsClient } from '@/hooks/useIsClient'

export const NavigationBar = () => {
	const isClient = useIsClient()
	const sidebarWidth = useAtomValue(sidebarWidthAtom)

	if (isClient) {
		return (
			<header
				style={{ width: `calc(100% - ${sidebarWidth}px)` }}
				className='fixed top-0 right-0 z-10 flex h-nav items-center gap-2 bg-background px-2'
			>
				<SidebarTrigger />
				<nav className='flex w-full items-center justify-between'>
					<Logo />
					<ThemeToggle />
				</nav>{' '}
			</header>
		)
	}
}
