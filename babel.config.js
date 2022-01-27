module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['module:metro-react-native-babel-preset'],
        plugins: [
            [
                'module:react-native-dotenv',
                {
                    moduleName: 'react-native-dotenv',
                },
            ],
        ],
        env: {
            production: {
                plugins: ['react-native-paper/babel'],
            },
        },
    };
};