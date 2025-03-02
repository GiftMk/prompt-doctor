import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

export interface ISVGProps extends React.SVGProps<SVGSVGElement> {
	size?: number;
	className?: string;
}

export const LoadingSpinner = ({
	size = 24,
	className,
	...props
}: ISVGProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			{...props}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={cn("animate-spin", className)}
		>
			<title>Loading spinner</title>
			<path d="M21 12a9 9 0 1 1-6.219-8.56" />
		</svg>
	);
};

const LoadingOverlay = () => {
	return (
		<div className="p-8 flex flex-col gap-8 items-center justify-center w-full h-full">
			<p className="text-3xl uppercase font-bold tracking-tighter">
				Prompt Doctor
			</p>
			<LoadingSpinner />
			<Logo />
		</div>
	);
};

export default LoadingOverlay;