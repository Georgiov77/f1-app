const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

config.resolver.alias = {
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@screens': path.resolve(__dirname, 'src/screens'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@services': path.resolve(__dirname, 'src/services'),
    '@config': path.resolve(__dirname, 'src/config'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@f1types': path.resolve(__dirname, 'src/types'),
};

module.exports = config;