import type { NETWORKS } from '../../constants/index.js'

export enum PageStatus {
	connected = 100,
	disconnected = 200
}

export type PagesGroup = {
	network: PageNetwork
	pages: Page[]
}

export type PageNetwork = typeof NETWORKS[number]

export type PageFields = {
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
