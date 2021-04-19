export type User = {
	id: string
	username: string
	firstName: string
	lastName: string | null | undefined
	avatarUrl: string | null | undefined
}

export type PageNetwork =
	| 'facebook'
	| 'instagram'
	| 'twitter'
	| 'vk'

export type Page = {
	id: string
	name: string
	network: PageNetwork
	username: string
	avatarUrl: string
}

export type PagesList = Page[]

export type PagesGroup = {
	name: PageNetwork
	pages: PagesList
}

export type GroupedPages = PagesGroup[]
