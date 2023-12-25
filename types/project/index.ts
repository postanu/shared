export type ProjectFields = {
	name: string
	timezone: string
	latestPostDate: null | string
}

export type Project = { id: string } & ProjectFields
