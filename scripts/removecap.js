// loop through all posts
// find lines with \[caption
// replace with

const fs = require('fs')
const readline = require('readline')

const glob = require("glob");

var getDirectories = function (src, callback) {
    glob(src + '/**/*/*.md', callback)
}
getDirectories('posts', function (err, files) {
    const x = ['posts/2015/11/out-of-the-fog.md']
    x.forEach(file => {
        var lineReader = readline.createInterface({
            input: fs.createReadStream(file)
        });

        lineReader.on('line', function (line) {
            if (line.includes('caption id='))
            {
                const captionRegex = /\ .*?\]/g
                const shortcodeRegex = /\[.*?\]/g
                const captionResults = line.match(captionRegex)
                const caption = captionResults[1].replace('\\[/caption\\]', '')
                let editedLine = line.replace(captionResults[1].trim(), '')
                const shortCodeResults = line.match(shortcodeRegex)
                editedLine = editedLine.replace(shortCodeResults[0].trim(), '')
                    .replace('\\[caption', '')
                    .replace(')](', ` "${caption.trim()}")](`)

                fs.readFile(file, 'utf-8', function (err, contents) {
                    if (err) {
                        console.log(err)
                        return
                    }

                    const replaced = contents.replace(line, editedLine)

                    fs.writeFile(file, replaced, 'utf-8', function (err) {
                        console.log(err)
                    })
                })
            }
        })
    })
})
