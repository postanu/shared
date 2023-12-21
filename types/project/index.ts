export enum ProjectMemberRole {
	admin = 100,
	editor = 200
}

export type ProjectFields = {
	name: string
	installed: boolean
	timezone: string
	lastPostDate: null | string
	pages: string[]
}

export type Project = { id: string } & ProjectFields
