export type UserFields = {
	username: string
	fullname: string
	avatar: string | null
}

export type User = { id: string } & UserFields
