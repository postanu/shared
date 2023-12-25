export enum ProjectMemberRole {
	admin = 100,
	editor = 200
}

export type ProjectMemberFields = {
	projectId: string
	role: ProjectMemberRole
}

export type ProjectMember = { id: string } & ProjectMemberFields
