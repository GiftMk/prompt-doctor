'use client'

import { useAtomValue } from 'jotai'
import { Logo } from './Logo'
import { ThemeToggle } from './theme/ThemeToggle'
import { SidebarTrigger } from './ui/sidebar'
import { sidebarWidthAtom } from '@/state/atoms'
import { useIsClient } from '@/hooks/useIsClient'
import { GithubLink } from './GithubLink'

export const NavigationBar = () => {
	const isClient = useIsClient()
	const sidebarWidth = useAtomValue(sidebarWidthAtom)

	if (isClient) {
		return (
			<header
				style={{ width: `calc(100% - ${sidebarWidth}px)` }}
				className='fixed top-0 right-0 z-10 flex h-nav items-center gap-2 bg-background px-4'
			>
				<SidebarTrigger />
				<nav className='flex w-full items-center justify-between'>
					<Logo />
					<div className='flex items-center gap-8'>
						<GithubLink />
						<ThemeToggle />
					</div>
				</nav>
			</header>
		)
	}
}
