export type ProjectFields = {
	name: string
	installed: boolean
	timezone: string
	lastPostDate: null | string
}

export type Project = { id: string } & ProjectFields
