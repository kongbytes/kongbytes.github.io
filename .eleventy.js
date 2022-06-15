const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(config) {

    config.addPlugin(syntaxHighlight);

    config.addPassthroughCopy('source/assets');
    config.addPassthroughCopy('CNAME');

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
