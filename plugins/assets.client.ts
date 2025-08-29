// plugins/assets.client.ts
// plusgin import global images
export default defineNuxtPlugin(() => {
  const assets = import.meta.glob('~/assets/images/*', { eager: true })
  const images: Record<string, string> = {}
  Object.entries(assets).forEach(([path, mod]) => {
    const name = path.split('/').pop()?.split('.')[0]
    if (name && mod && typeof mod === 'object' && 'default' in mod) {
      images[name] = (mod as { default: string }).default
    }
  })
  return {
    provide: {
      images
    }
  }
 })