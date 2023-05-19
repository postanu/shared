export type UserFields = {
	username: string
	fullname: string
	avatar: string | null
	timezone: string
}

export type User = { id: string } & UserFields
