import type { User } from '../user/index.js'

export type ProjectFields = {
	name: string
	installed: boolean
	timezone: string
}

export type Project = { id: string } & ProjectFields

export type ProjectMember = User & {
	role: string
}
