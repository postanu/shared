export type UserFields = {
	username: string
	fullname: string
	avatarUrl?: string | null
}

export type User = { id: string } & UserFields
