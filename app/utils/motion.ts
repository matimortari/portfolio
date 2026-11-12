const ease = [0.22, 1, 0.36, 1] as const

export const MOTION_FADE = {
  initial: { opacity: 0 },
  visibleOnce: { opacity: 1, transition: { duration: 550, ease } },
}

export const MOTION_FADE_UP = {
  initial: { opacity: 0, y: 16 },
  visibleOnce: { opacity: 1, y: 0, transition: { duration: 550, ease } },
}

export const MOTION_FADE_DOWN = {
  initial: { opacity: 0, y: -12 },
  visibleOnce: { opacity: 1, y: 0, transition: { duration: 550, ease } },
}

export const MOTION_FADE_SCALE = {
  initial: { opacity: 0, scale: 0.96 },
  visibleOnce: { opacity: 1, scale: 1, transition: { duration: 550, ease } },
}

export const MOTION_HERO_AVATAR = {
  initial: { opacity: 0, scale: 0.94 },
  visibleOnce: { opacity: 1, scale: 1, transition: { duration: 700, ease } },
}
