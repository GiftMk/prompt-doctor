import { cn } from '@/lib/utils'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

type HeadingProps = {
	level: HeadingLevel
} & React.ComponentProps<'h1'>

export const Heading = ({ level, className, ...props }: HeadingProps) => {
	switch (level) {
		case 1:
			return (
				<h1
					className={cn('font-bold text-2xl tracking-tight', className)}
					{...props}
				/>
			)
		case 2:
			return (
				<h2
					className={cn('font-bold text-xl tracking-tight', className)}
					{...props}
				/>
			)
		case 3:
			return (
				<h3
					className={cn('font-semibold text-lg tracking-tight', className)}
					{...props}
				/>
			)
		case 4:
			return (
				<h4
					className={cn('font-semibold text-md tracking-tight', className)}
					{...props}
				/>
			)
		case 5:
			return (
				<h5
					className={cn('text font-medium tracking-tight', className)}
					{...props}
				/>
			)
		case 6:
			return (
				<h6 className={cn('font-sm tracking-tight', className)} {...props} />
			)
	}
}
