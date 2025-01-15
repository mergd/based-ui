import { useCallback, useState } from "react"

interface UseControlledStateProps<T> {
	state?: T
	defaultState?: T
	onStateChange?: (state: T) => void
}

export function useControlledState<T>({
	state: controlledState,
	defaultState,
	onStateChange,
}: UseControlledStateProps<T>) {
	const [uncontrolledState, setUncontrolledState] = useState<T>(
		defaultState as T
	)
	const isControlled = controlledState !== undefined
	const state = isControlled ? controlledState : uncontrolledState

	const setState = useCallback(
		(newState: T) => {
			if (!isControlled) {
				setUncontrolledState(newState)
			}
			onStateChange?.(newState)
		},
		[isControlled, onStateChange]
	)

	return [state, setState] as const
}
