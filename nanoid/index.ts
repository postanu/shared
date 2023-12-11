import { customAlphabet } from 'nanoid'

const customId = customAlphabet(
	'useandom26T198340PX75pxJACKVERYMINDBUSHWOLFGQZbfghjklqvwyzrict'
)

const SIZES = {
	user: 10,
	page: 20,
	post: 20,
	project: 10,
	postVariant: 20,
	attachment: 20
}

export function nanoid (
	typeOrSize: keyof typeof SIZES | number = 21
): string {
	let size = typeof typeOrSize === 'number' ? typeOrSize : SIZES[typeOrSize]
	return customId(size)
}
