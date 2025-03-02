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
				className='z-10 h-nav fixed top-0 right-0 px-2 flex items-center gap-2 bg-background'
			>
				<SidebarTrigger />
				<nav className='w-full justify-between items-center flex'>
					<Logo />
					<ThemeToggle />
				</nav>{' '}
			</header>
		)
	}
}
