"use client";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const AsyncProgressBar = () => {
	const [progress, setProgress] = useState(10);

	// useEffect(() => {
	// 	const intervalId = setInterval(() => {
	// 		setProgress((prev) => prev + 1);
	// 	}, 25);
	// }, []);

	return (
		<div>
			<Progress value={progress} />
			<Button onClick={() => setProgress((prev) => prev + 10)}>
				Increment Progress
			</Button>
		</div>
	);
};