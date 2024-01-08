import themeMaster from './theme';
import blogMateData from './theme/plugins/blogMate';
import { tocPlugin } from '@vuepress/plugin-toc';

module.exports = {
    theme: 'master',
    dest: './dist',
    temp: './.temp',
    cache: './.cache',
    public: './assets',
    description: '',
    permalinkPattern: ':raw',
    plugins: [
        themeMaster(),
        blogMateData({
            initMateNames: ['title', 'description', 'lables'],
            countMateNames: ['lables'],
            isArrMateNames: ['lables'],
        }),
        tocPlugin({}),
    ],
};
