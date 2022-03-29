const fs = require('fs')
const path = require('path')

const source = path.join(process.cwd(), 'netlify.toml')
const dest = path.join(process.cwd(), 'build/netlify.toml')


if (!fs.existsSync(dest)) {
    fs.copyFileSync(source, dest, fs.constants.COPYFILE_EXCL)

} else {
    console.log('config already exists')
}