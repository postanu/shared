export type User = {
	id: string
	username: string
	firstName: string
	lastName?: string
	avatarUrl?: string
}

export type ProjectMember = User & {
	role: string
}

export type Project = {
	id: string
	name: string
	installed: boolean
}

export type PageNetwork =
	| 'facebook'
	| 'instagram'
	| 'twitter'
	| 'vk'

export type PageStatus =
	| 0
	| 100
	| 200

export type Page = {
	id: string
	projectId: string
	name: string
	network: PageNetwork
	username: string
	avatarUrl?: string
	status: PageStatus
}

export type PagesGroup = {
	name: PageNetwork
	pages: Page[]
	isSolo: boolean
}

export type AttachmentType = 'image'

export type Attachment = {
	id: string
	type: AttachmentType
	url: string
}

export type PostState =
	| 0
	| 100
	| 200

export type PostVariant = {
	text: string
	pagesIds: string[]
	attachmentsIds: string[]
}

export type Post = {
	id: string
	authorId: string
	projectId: string
	time: number
	authorsIds: string[]
	variants: PostVariant[]
	state: PostState
}
