export interface User {
	id: string
	username: string
	firstName: string
	lastName?: string
	avatarUrl?: string
}

export interface ProjectMember extends User {
	role: string
}

export interface Project {
	id: string
	name: string
	pages: PagesList
	members: ProjectMember[]
}

export type PageNetwork =
	| 'facebook'
	| 'instagram'
	| 'twitter'
	| 'vk'

export interface Page {
	id: string
	name: string
	network: PageNetwork
	username: string
	avatarUrl?: string
}

export type PagesList = Page[]

export interface PagesGroup {
	name: PageNetwork
	pages: PagesList
}

export type GroupedPages = PagesGroup[]
