const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(config) {

    config.addPlugin(syntaxHighlight);

    config.addPassthroughCopy('source/assets');

    config.addCollection('arp', (collection) => {
        //return collection.getFilteredByTag('arp-scan').slice(-5);
        return collection.getFilteredByGlob('source/docs/arp-scan/*');
    });

    return {
        dir: {
            input: 'source',
            output: 'docs'
        },
        passthroughFileCopy: true
    }
};
