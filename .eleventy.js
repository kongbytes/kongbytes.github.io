const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const readingTime = require('eleventy-plugin-reading-time');

const { DateTime } = require("luxon");

module.exports = function(config) {

    config.addPlugin(syntaxHighlight);
    config.addPlugin(readingTime);

    config.addPassthroughCopy('source/assets');
    config.addPassthroughCopy('CNAME');
    config.addPassthroughCopy('favicon.svg');

    config.addFilter('dateFormat', (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    // Do not use tags on documentation pages, the collections are created here
    // based on the folder structure
    config.addCollection('arp-scan', (collection) => {
        return collection.getFilteredByGlob('source/docs/arp-scan/*')
            .sort((page1, page2) => page1.data.doc_index - page2.data.doc_index);
    });
    config.addCollection('watchdog', (collection) => {
        return collection.getFilteredByGlob('source/docs/watchdog/*')
            .sort((page1, page2) => page1.data.doc_index - page2.data.doc_index);
    });

    config.addCollection('posts', (collection) => {
        return collection.getFilteredByGlob('source/blog/*');
    });

    return {
        dir: {
            input: 'source',
            output: 'docs'
        },
        passthroughFileCopy: true
    }
};
