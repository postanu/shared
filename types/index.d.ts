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
	solo: boolean
	meta?: {
		[extra: string]: any
	}
}

export type PagesList = Page[]

export type PagesGroup = {
	name: PageNetwork
	pages: PagesList
}

export type GroupedPages = PagesGroup[]
