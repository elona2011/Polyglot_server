const { exec } = require('child_process')
const path = require('path')

const gitpull = function (cb) {
    // console.log(`${path.resolve(__dirname, '../../Polyglot_PWA/')}`)
    exec(`git -C ${path.resolve(__dirname, '../../Polyglot_PWA/')} pull`, (error, stdout, stderr) => {
        cb(stdout, stderr)
    })
}
module.exports = gitpull