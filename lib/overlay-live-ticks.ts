/** Five live coordination frames — cycle every ~2s while hovering the overlay. */
export const OVERLAY_TICK_COUNT = 5

export const OVERLAY_TICK_IDS = [0, 1, 2, 3, 4] as const

export type OverlayTickId = (typeof OVERLAY_TICK_IDS)[number]
