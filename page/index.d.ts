import type { NETWORKS_ORDER } from '@postanu/core'

export type PageStatus =
	| 0
	| 100
	| 200

export type PagesGroup = {
	name: PageNetwork
	pages: Page[]
	isSolo: boolean
}

export type PageNetwork = typeof NETWORKS_ORDER[number]

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
