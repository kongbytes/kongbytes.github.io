const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { DateTime } = require("luxon");

module.exports = function(config) {

    config.addPlugin(syntaxHighlight);

    config.addPassthroughCopy('source/assets');
    config.addPassthroughCopy('CNAME');
    config.addPassthroughCopy('favicon.svg');

    config.addFilter('dateFormat', (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    config.addCollection('arp', (collection) => {
        return collection.getFilteredByGlob('source/docs/arp-scan/*');
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
