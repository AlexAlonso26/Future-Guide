/**
 * Gera public/image-4.png a partir de Image 4.png na raiz do projeto.
 * Reexecute após trocar o ficheiro de origem.
 */
import sharp from 'sharp'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const src = join(root, 'Image 4.png')
const dest = join(root, 'public', 'image-4.png')

await sharp(src)
  .resize({
    height: 1920,
    withoutEnlargement: false,
    kernel: sharp.kernel.lanczos3,
  })
  .sharpen({ sigma: 0.55, m1: 0.8, m2: 0.35 })
  .png({ compressionLevel: 9 })
  .toFile(dest)

const meta = await sharp(dest).metadata()
console.log('image-4.png', meta.width, 'x', meta.height)
