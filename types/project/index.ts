export enum ProjectMemberRole {
	admin = 100,
	editor = 200
}

export type ProjectFields = {
	name: string
	timezone: string
	latestPostDate: null | string
	pages: string[]
	members: string[]
}

export type Project = { id: string } & ProjectFields
