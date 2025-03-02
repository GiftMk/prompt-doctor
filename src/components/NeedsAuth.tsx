'use client'

import { isAuthenticatedAtom } from '@/state/atoms'
import { useAtomValue } from 'jotai'

export const NeedsAuth = ({ children }: React.PropsWithChildren) => {
	const isAuthenticated = useAtomValue(isAuthenticatedAtom)

	if (isAuthenticated) {
		return children
	}
}
