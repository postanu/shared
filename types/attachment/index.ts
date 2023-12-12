export enum AttachmentType {
	image = 100
}

export type AttachmentFields = {
	type: AttachmentType
	filename: string
	src: string
}

export type Attachment = { id: string } & AttachmentFields
