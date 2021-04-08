export type PageType =
	| 'facebook'
	| 'instagram'
	| 'twitter'
	| 'vk'

export type Page = {
	id: string
	type: PageType
	name: string
	username: string
	avatarUrl: string
}

export type PagesList = Page[]

export type PagesGroup = {
	name: PageType
	pages: PagesList
}

export type GroupedPages = PagesGroup[]
