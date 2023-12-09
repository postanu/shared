export enum AttachmentType {
	image = 100,
	disconnected = 200
}

export type AttachmentFields = {
	projectId: string
	type: AttachmentType
	filename: string
	url: string
	uploaded: boolean
}

export type Attachment = { id: string } & AttachmentFields
