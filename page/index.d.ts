export type Page = {
	id: string
	projectId: string
	name: string
	network: PageNetwork
	username: string
	avatarUrl?: string
	status: PageStatus
}

export type ClientPage = Page & {
	isSolo: boolean
}

export type PagesGroup = {
	name: PageNetwork
	pages: Page[]
	isSolo: boolean
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
