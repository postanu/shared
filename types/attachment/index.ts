export enum AttachmentType {
	image = 100
}

export enum AttachmentState {
	uploading = 100,
	uploaded = 200
}

export type AttachmentFields = {
	projectId: string
	type: AttachmentType
	filename: string
	src: string
	state: AttachmentState
}

export type Attachment = { id: string } & AttachmentFields
