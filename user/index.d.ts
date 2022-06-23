export type UserFields = {
	username: string
	firstName: string
	lastName?: string
	avatarUrl?: string
}

export type User = { id: string } & UserFields
