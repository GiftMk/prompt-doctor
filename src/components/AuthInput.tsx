'use client'

import { isAuthenticatedAtom } from '@/state/atoms'
import { useSetAtom } from 'jotai'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from '@/components/ui/input-otp'
import { useState } from 'react'
import { authenticateUser } from '@/components/actions/authenticateUser'
import { Heading } from './Heading'
import { PASSWORD_LENGTH } from '@/lib/constants'

export const AuthInput = () => {
	const [value, setValue] = useState('')
	const [invalid, setInvalid] = useState(false)
	const setIsAuthenticated = useSetAtom(isAuthenticatedAtom)

	const handleChange = async (value: string) => {
		setInvalid(false)
		setValue(value)

		const isAuthenticated = await authenticateUser(value)
		setIsAuthenticated(isAuthenticated)
		setInvalid(value.length === PASSWORD_LENGTH && !isAuthenticated)
	}

	return (
		<div className='w-full h-full flex items-center justify-center'>
			<div className='flex flex-col gap-2 items-center'>
				{invalid ? (
					<Heading level={4} className='text-red-400'>
						Invalid Password
					</Heading>
				) : (
					<Heading level={4}>Enter Password</Heading>
				)}
				<InputOTP
					autoFocus
					maxLength={PASSWORD_LENGTH}
					value={value}
					onChange={handleChange}
				>
					<InputOTPGroup>
						<InputOTPSlot index={0} />
						<InputOTPSlot index={1} />
						<InputOTPSlot index={2} />
					</InputOTPGroup>
					<InputOTPSeparator />
					<InputOTPGroup>
						<InputOTPSlot index={3} />
						<InputOTPSlot index={4} />
						<InputOTPSlot index={5} />
					</InputOTPGroup>
				</InputOTP>
			</div>
		</div>
	)
}
