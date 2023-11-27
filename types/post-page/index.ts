import type { PageFields } from '../page/index.js'

export type PostPageFields = Omit<PageFields, 'projectId'> & {
	postId: string
}

export type PostPage = { id: string } & PostPageFields
