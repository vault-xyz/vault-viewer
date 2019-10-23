module.exports = {
    client: {
        service: {
            name: 'vault-viewer',
            url: 'http://localhost:5000/graphql',
        },
        includes: [
            'src/**/*.vue',
            'src/**/*.js'
        ]
    }
};
