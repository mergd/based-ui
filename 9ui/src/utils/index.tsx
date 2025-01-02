import React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function merge(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function createChildElement(child: React.ReactNode) {
	if (React.isValidElement(child)) {
		return child
	}
	return <div>{child}</div>
}
