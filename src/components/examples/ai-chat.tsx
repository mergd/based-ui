"use client"

import { useState } from "react"
import {
	BotIcon,
	MessageSquareMore,
	MessageSquarePlus,
	MoreHorizontalIcon,
	PanelRightClose,
	PanelRightOpen,
	Paperclip,
	PencilIcon,
	Search,
	ShareIcon,
	TrashIcon,
	User,
	UserIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownTrigger,
} from "@/components/ui/dropdown"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"

import { cn } from "@/lib/utils"

interface Message {
	id: number
	role: "user" | "assistant"
	content: string
	timestamp: string
}

interface Chat {
	id: number
	title: string
	timestamp: string
}

const initialMessages: Message[] = [
	{
		id: 1,
		role: "assistant",
		content: "Hello! How can I help you today?",
		timestamp: "10:30 AM",
	},
]

const sampleChats: Chat[] = [
	{
		id: 1,
		title: "New Chat",
		timestamp: "10:30 AM",
	},
	{
		id: 2,
		title: "Project Discussion",
		timestamp: "Yesterday",
	},
	{
		id: 3,
		title: "Code Review",
		timestamp: "2 days ago",
	},
]

export const AIChatInterface = () => {
	const [messages, setMessages] = useState<Message[]>(initialMessages)
	const [inputValue, setInputValue] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!inputValue.trim()) return

		// Add user message
		const userMessage: Message = {
			id: messages.length + 1,
			role: "user",
			content: inputValue,
			timestamp: new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			}),
		}
		setMessages((prev) => [...prev, userMessage])
		setInputValue("")

		// Simulate AI response
		setIsLoading(true)
		setTimeout(() => {
			const aiMessage: Message = {
				id: messages.length + 2,
				role: "assistant",
				content: "This is a simulated response from the AI assistant.",
				timestamp: new Date().toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				}),
			}
			setMessages((prev) => [...prev, aiMessage])
			setIsLoading(false)
		}, 1000)
	}

	return (
		<Card className="relative grid h-[600px] grid-cols-1 overflow-hidden md:grid-cols-[240px_1fr]">
			{/* Sidebar - hidden on mobile by default */}
			<div
				className={cn(
					"absolute inset-y-0 left-0 z-20 w-[240px] border-r bg-background transition-transform md:static md:translate-x-0",
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				)}
			>
				<div className="flex h-full flex-col gap-2">
					<div className="flex items-center justify-between px-3 pt-3">
						<h2 className="text-lg font-semibold">Chats</h2>
						<div className="flex gap-2">
							<Button variant="ghost" size="icon">
								<Search />
							</Button>
							<Button variant="ghost" size="icon">
								<MessageSquarePlus />
							</Button>
						</div>
					</div>

					<nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-3">
						{sampleChats.map((chat) => (
							<Button
								key={chat.id}
								variant="ghost"
								className="justify-between gap-2 first:bg-muted"
							>
								{chat.title}
								<Dropdown>
									<DropdownTrigger
										render={(props) => (
											<div className="flex size-6 items-center justify-center outline-none">
												<MoreHorizontalIcon {...props} className="size-4" />
											</div>
										)}
									></DropdownTrigger>
									<DropdownContent>
										<DropdownItem>
											<PencilIcon className="size-4" />
											Rename
										</DropdownItem>
										<DropdownItem>
											<ShareIcon className="size-4" />
											Share
										</DropdownItem>
										<DropdownItem>
											<TrashIcon className="size-4" />
											Delete
										</DropdownItem>
									</DropdownContent>
								</Dropdown>
							</Button>
						))}
					</nav>

					<div className="mt-auto px-3 pb-3">
						<Button variant="ghost" className="w-full justify-start gap-2">
							<User className="size-4" />
							Account
						</Button>
					</div>
				</div>
				<Button
					variant="ghost"
					size="icon"
					className="absolute -right-11 top-2 z-50 md:hidden"
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				>
					{isSidebarOpen ? <PanelRightOpen /> : <PanelRightClose />}
				</Button>
			</div>

			{/* Main chat area */}
			<div className="relative grid grid-rows-[1fr,auto] overflow-hidden">
				<ScrollArea className="h-full">
					<div className="mt-8 flex flex-col gap-6 p-6 md:mt-0">
						{messages.map((message) => (
							<div
								key={message.id}
								className={cn(
									"flex items-start gap-2",
									message.role === "user" ? "flex-row-reverse" : ""
								)}
							>
								<Avatar>
									<AvatarFallback>
										{message.role === "assistant" ? (
											<BotIcon className="size-4" />
										) : (
											<UserIcon className="size-4" />
										)}
									</AvatarFallback>
								</Avatar>
								<div
									className={cn(
										"flex max-w-[80%] flex-col",
										message.role === "user" ? "items-end" : ""
									)}
								>
									<div className="rounded-lg bg-muted px-4 py-2">
										<p className="break-words text-sm">{message.content}</p>
									</div>
									<span className="mt-1 text-xs text-muted-foreground">
										{message.timestamp}
									</span>
								</div>
							</div>
						))}
						{isLoading && (
							<div className="flex items-center gap-2 text-muted-foreground">
								<MessageSquareMore className="size-4 animate-pulse" />
								<span className="text-sm">AI is typing...</span>
							</div>
						)}
					</div>
				</ScrollArea>

				<div className="border-t p-4">
					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-2 overflow-hidden rounded-md border focus-within:ring-1 focus-within:ring-primary"
					>
						<Textarea
							placeholder="Type your message..."
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							className="flex-1 resize-none border-none focus-visible:ring-0"
							disabled={isLoading}
							onKeyDown={(e) => {
								if (e.key === "Enter" && !e.shiftKey) {
									e.preventDefault()
									handleSubmit(e)
								}
							}}
						/>
						<div className="flex items-center gap-2 p-2">
							<Button type="button" variant="ghost" size="icon">
								<Paperclip className="size-4" />
							</Button>
						</div>
					</form>
				</div>
			</div>

			{/* Overlay for mobile sidebar */}
			{isSidebarOpen && (
				<div
					className="absolute inset-0 z-10 bg-black/70 md:hidden"
					onClick={() => setIsSidebarOpen(false)}
				/>
			)}
		</Card>
	)
}
