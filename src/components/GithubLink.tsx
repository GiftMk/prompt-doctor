'use client'

import { useTheme } from 'next-themes'
import GithubSvgDark from '../../public/github-mark.svg'
import GithubSvgLight from '../../public/github-mark-white.svg'
import Image from 'next/image'
import Link from 'next/link'
import { GITHUB_URL } from '@/lib/constants'

const isDarkMode = (theme?: string) => {
	if (theme === 'light') return false
	if (theme === 'dark') return true
	return window.matchMedia?.('(prefers-color-scheme: dark)').matches
}

export const GithubLink = () => {
	const { theme } = useTheme()

	return (
		<Link href={GITHUB_URL} target='_blank'>
			<Image
				className='w-6'
				src={isDarkMode(theme) ? GithubSvgLight : GithubSvgDark}
				alt='Github icon'
			/>
		</Link>
	)
}