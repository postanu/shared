export interface UserFields {
	id: string
	username: string
	firstName: string
	lastName?: string
	avatarUrl?: string
}

export type User = { id: string } & UserFields
