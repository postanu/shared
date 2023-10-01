export type Attachment = {
	id: string
	postId: string
	type: AttachmentType
	url: string
}

export type AttachmentType = 'image'
