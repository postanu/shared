import type { ComputedRef, DeepReadonly, Ref } from 'vue'

/**
 * Maybe Ref or ComputedRef.
 */
export type Refable<T> = Ref<T> | ComputedRef<T>

/**
 * Maybe Ref or not.
 */
export type MaybeRef<T> = T | Refable<T>

/**
 * Maybe DeepReadonly on not.
 */
export type MaybeReadonly<T> = T | DeepReadonly<T>
