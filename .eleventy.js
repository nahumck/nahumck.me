const markdownIt = require("markdown-it")
const markdownItFootnote = require("markdown-it-footnote")
const markdownItFigCaptions = require('markdown-it-image-figures')
const { execSync } = require('child_process')
const pluginRss = require("@11ty/eleventy-plugin-rss")

module.exports = function(eleventyConfig) {
    const options = {
        html: true, // Enable HTML tags in source
        breaks: true,  // Convert '\n' in paragraphs into <br>
        linkify: true // Autoconvert URL-like text to links
    };

    // configure the library with options
    const markdownLib =  markdownIt(options)
    markdownLib.use(markdownItFootnote)
    markdownLib.use(markdownItFigCaptions, { figcaption: true })
    // set the library to process markdown files
    eleventyConfig.setLibrary("md", markdownLib)


    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`)

    eleventyConfig.addPassthroughCopy("assets")
    eleventyConfig.addPassthroughCopy("posts/images")
    eleventyConfig.addPassthroughCopy({ "posts/images": "images" })

    eleventyConfig.addPlugin(pluginRss);

    eleventyConfig.addFilter("isoDateOnly", function(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    })

    eleventyConfig.addCollection("posts", function(collection) {
        return collection.getFilteredByGlob("posts/**/*.md").reverse().map(p => {
            // apply docId to make footnotes unique when showing multiple posts
            p.data.docId = p.data.permalink.replace('/index.html', '')
            return p
        })
    })

    eleventyConfig.addFilter("limit", function(array, limit) {
        return array.slice(0, limit)
    })

    eleventyConfig.addFilter("readingTime", function(htmlContent) {
        // https://github.com/johanbrook/eleventy-plugin-reading-time/blob/master/lib/reading-time.js
        if (!htmlContent) {
            return '0 minutes'
        }

        const speed = 300
        const content = htmlContent.replace(/(<([^>]+)>)/gi, '')
        const matches = content.match(/[\u0400-\u04FF]+|\S+\s*/g)
        const count = matches !== null ? matches.length : 0

        let est = ''

        const min = Math.ceil(count / speed)

        return min + ' minutes'
    })

    // pagefind search
 	eleventyConfig.on('eleventy.after', () => {
 		console.log('indexing search using pagefind')
 		execSync(`npx pagefind --source _site --glob \"**/*.html\"`, { encoding: 'utf-8' })
   })
}
