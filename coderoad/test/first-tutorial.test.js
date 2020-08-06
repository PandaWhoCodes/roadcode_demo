const assert = require('assert')
const fs = require('fs')
const util = require('util')
const path = require('path')

const readdir = util.promisify(fs.readdir)
const getRootDir = async (dir = process.cwd()) => {
  const pathToRoot = path.join(dir, '..')
  const rootDir = await readdir(pathToRoot)

  if (!rootDir) {
    throw new Error(`Could not find folder ${pathToRoot}`)
  }

  return rootDir
}

describe('root folder', () => {
  let rootDir
  before(async () => {
    rootDir = await getRootDir()
  })

  it('should have an index.html file', async () => {
    assert(rootDir.indexOf('index.html') >= 0)
  })
})