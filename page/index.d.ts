export enum PageStatus {
	connected = 100,
	disconnected = 200
}

export type PagesGroup = {
	name: PageNetwork
	pages: Page[]
	isSolo: boolean
}

export type PageNetwork =
	| 'facebook'
	| 'instagram'
	| 'linkedin'
	| 'pinterest'
	| 'telegram'
	| 'threads'
	| 'twitter'
	| 'vk'
	| 'youtube'

export type PageFields = {
	projectId: string
	name: string
	network: PageNetwork
	username: null | string
	avatar: null | string
	status: PageStatus
}

export type Page = { id: string } & PageFields

export type ClientPage = Page & {
	isSolo: boolean
}
