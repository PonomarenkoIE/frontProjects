import { fileURLToPath } from 'url'
import { dirname } from 'path'

export default function pathConst(moduleUrl) {
  const __filename = fileURLToPath(moduleUrl)
  const __dirname = dirname(__filename)

  return {__filename, __dirname}
}