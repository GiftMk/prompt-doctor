import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/AppSidebar'
import { promptGuidelines } from '@/lib/promptGuidelines'
import { JotaiProvider } from '@/state/JotaiProvider'
import { NavigationBar } from '@/components/NavigationBar'
import { PromptInput } from '@/components/prompt-input'
import { Toaster } from '@/components/ui/sonner'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Prompt Doctor',
	description: `Improve your LLM prompts based on OpenAI's guidelines`,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html className='h-full w-full' lang='en' suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} h-full w-full antialiased`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<JotaiProvider>
						<SidebarProvider className='h-full'>
							<AppSidebar promptGuidelines={promptGuidelines} />
							<main className='h-full w-full flex-1'>
								<NavigationBar />
								{children}
								<PromptInput />
							</main>
						</SidebarProvider>
					</JotaiProvider>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}
