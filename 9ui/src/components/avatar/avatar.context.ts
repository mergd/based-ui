import React from "react"

export type AvatarImageStatus = "loading" | "loaded" | "error"

interface AvatarContextValue {
	imageStatus: AvatarImageStatus
	setImageStatus: (imageStatus: AvatarImageStatus) => void
}

export const AvatarContext = React.createContext<AvatarContextValue>({
	imageStatus: "loading",
	setImageStatus: () => {},
})

export const useAvatarContext = () => {
	const context = React.useContext(AvatarContext)

	if (!context) {
		throw new Error("useAvatarContext must be used within a Avatar.Root")
	}

	return context
}
