export enum AttachmentType {
	image = 100
}

export type AttachmentFields = {
	projectId: string
	type: AttachmentType
	filename: string
	url: string
	thumbnailUrl: string
	uploaded: boolean
}

export type Attachment = { id: string } & AttachmentFields
