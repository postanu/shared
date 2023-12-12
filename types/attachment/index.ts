export enum AttachmentType {
	image = 100
}

export type AttachmentFields = {
	projectId: string
	type: AttachmentType
	filename: string
	src: string
}

export type Attachment = { id: string } & AttachmentFields
