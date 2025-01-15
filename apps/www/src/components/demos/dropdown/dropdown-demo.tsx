"use client"

import { useState } from "react"
import Monicon from "@monicon/react"
import {
	Button,
	Dropdown,
	DropdownCheckboxItem,
	DropdownContent,
	DropdownGroup,
	DropdownGroupLabel,
	DropdownItem,
	DropdownRadioGroup,
	DropdownRadioItem,
	DropdownSeparator,
	DropdownSubTrigger,
	DropdownTrigger,
} from "9ui"

export default function DropdownDemo() {
	const [shuffle, setShuffle] = useState(false)
	const [repeat, setRepeat] = useState(false)
	const [sortBy, setSortBy] = useState("artist")

	return (
		<Dropdown>
			<DropdownTrigger asChild>
				<Button>Controls</Button>
			</DropdownTrigger>
			<DropdownContent>
				<DropdownGroup>
					<DropdownGroupLabel>Playback</DropdownGroupLabel>
					<DropdownItem>
						<Monicon name="ri:play-fill" />
						Play
					</DropdownItem>
					<DropdownItem>
						<Monicon name="ri:pause-fill" />
						Pause
					</DropdownItem>
					<DropdownItem>
						<Monicon name="ri:skip-back-fill" />
						Play Previous
					</DropdownItem>
					<DropdownItem>
						<Monicon name="ri:skip-forward-fill" />
						Play Next
					</DropdownItem>
				</DropdownGroup>
				<DropdownSeparator />
				<DropdownCheckboxItem checked={shuffle} onCheckedChange={setShuffle}>
					Shuffle
				</DropdownCheckboxItem>
				<DropdownCheckboxItem checked={repeat} onCheckedChange={setRepeat}>
					Repeat
				</DropdownCheckboxItem>
				<DropdownCheckboxItem disabled>Enhanced Audio</DropdownCheckboxItem>
				<DropdownSeparator />
				<DropdownGroup>
					<DropdownGroupLabel>Sort by</DropdownGroupLabel>
					<DropdownRadioGroup value={sortBy} onValueChange={setSortBy}>
						<DropdownRadioItem value="artist">Artist</DropdownRadioItem>
						<DropdownRadioItem value="album">Repeat</DropdownRadioItem>
						<DropdownRadioItem value="title">Title</DropdownRadioItem>
					</DropdownRadioGroup>
				</DropdownGroup>
				<DropdownSeparator />
				<Dropdown>
					<DropdownSubTrigger>Add to Playlist</DropdownSubTrigger>
					<DropdownContent>
						<DropdownItem>Jazz</DropdownItem>
						<DropdownItem>Rock</DropdownItem>
						<DropdownItem>Pop</DropdownItem>
					</DropdownContent>
				</Dropdown>
			</DropdownContent>
		</Dropdown>
	)
}
