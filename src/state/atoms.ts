import type { Feedback } from '@/lib/schemas'
import type { DeepPartial } from 'ai'
import { atom } from 'jotai'

export const feedbackAtom = atom<DeepPartial<Feedback>>()

export const loadingAtom = atom(false)

export const sidebarWidthAtom = atom(0)

export const promptInputHeightAtom = atom(0)
