// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const { site } = process.env;
const isCN = (site || 'cn') === 'cn';
const lang = isCN ? 'zh' : 'en';

const homeLink = isCN ? 'https://www.databend.cn' : 'https://www.databend.com';
const cloudLink = isCN ? 'https://app.databend.cn' : 'https://app.databend.com';
const docsHomeLink = isCN ? 'https://docs.databend.cn' : 'https://docs.databend.com';
const TwitterSvg =
    '<svg width="20" style="top: 5px; position: relative" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>';

// @ts-ignore
const lightCodeTheme = require('prism-react-renderer/themes/oceanicNext');
// // @ts-ignore
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { site_env } = process.env;
const isProduction = site_env === 'production';
const ASKBEND_URL = 'https://ask.databend.rs';
const algolia = isCN
    ? {
        appId: 'FUCSAUXK2Q',
        apiKey: '0f200c10999f19584ec9e31b5caa9065',
        indexName: 'databend',
        contextualSearch: true
    }
    : {
        appId: 'RL7MS9PKE8',
        apiKey: 'cb5d6af612410c0fced698ff39ccd47a',
        indexName: 'databend-rs-docs',
        contextualSearch: true
    }
/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Databend',
    staticDirectories: ['static', './docs/public'],
    tagline: 'Databend - Your best alternative to Snowflake. Cost-effective and simple for massive-scale analytics.',
    url: isCN ? 'https://docs.databend.cn' : 'https://databend.rs/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/rect-icon.png',
    organizationName: 'datafuselabs',
    projectName: 'databend',
    i18n: {
        defaultLocale: lang,
        locales: [lang],
        localeConfigs: {
            'en': {
                label: 'English',
            },
            'zh': {
                label: '中文',
            }
        },
    },
    headTags: [
        {
            tagName: 'link',
            attributes: {
                rel: 'mask-icon',
                sizes: 'any',
                color: '#0175f6',
                href: '/img/logo/logo-no-text.svg',
            },
        },
    ],
    customFields: {
        isChina: isCN,
        docsHomeLink,
        homeLink,
        cloudLink,
        blogTags: ['weekly', 'databend'],
        askBendUrl: isProduction ? ASKBEND_URL : ''
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    path: `./docs/${isCN ? '/cn/doc' : 'doc'}`,
                    routeBasePath: 'doc',
                    sidebarPath: require.resolve('./docs/sidebars.js'),
                    editUrl: ({ locale, docPath }) => {
                        // // @ts-ignore
                        // if (locale !== config.i18n.defaultLocale) {
                        //     return `https://databend.crowdin.com/databend/${locale}`;
                        // }
                        return `https://github.com/datafuselabs/databend-docs/tree/main/docs/${isCN ? '/cn/doc' : 'doc'}/${docPath}`;
                    },
                },
                // blog: {
                //     showReadingTime: true,
                //     editUrl: ({ locale, blogPath }) => {
                //         // @ts-ignore
                //         if (locale !== config.i18n.defaultLocale) {
                //             return `https://databend.crowdin.com/databend/${locale}`;
                //         }
                //         return `https://github.com/datafuselabs/databend-docs/edit/main/website/blog/${blogPath}`;
                //     },
                //     blogSidebarCount: 5,
                //     postsPerPage: 'ALL',
                //     blogListComponent: '@site/src/components/CustomBlog/CustomBlogListPage.js',
                //     blogPostComponent: '@site/src/components/CustomBlog/BlogPostDetails.js',
                //     blogTagsPostsComponent: '@site/src/components/CustomBlog/CustomBlogTagsPostsPage.js',
                // },
                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },
                sitemap: {
                    changefreq: 'daily',
                    priority: 0.5,
                },
                gtag: {
                    trackingID: 'G-WBQPTTG4ZG',
                    anonymizeIP: true,
                },
            }),
        ]
    ],
    plugins: [
        'docusaurus-plugin-sass',
        './src/plugins/global-sass-var-inject',
        './src/plugins/fetch-databend-releases',
        [
            '@docusaurus/plugin-content-docs',
            /** @type {import('@docusaurus/plugin-content-docs').Options} */
            {
                id: 'dev',
                path: './docs/dev',
                routeBasePath: 'dev',
                sidebarPath: require.resolve('./docs/sidebars.js'),
                editUrl: ({ locale, devPath }) => {
                    // @ts-ignore
                    // if (locale !== config.i18n.defaultLocale) {
                    //     return `https://databend.crowdin.com/databend/${locale}`;
                    // }
                    return `https://github.com/datafuselabs/databend-docs/edit/main/docs/dev/${devPath}`;
                },
            }
        ],
        [
            '@docusaurus/plugin-content-docs',
            /** @type {import('@docusaurus/plugin-content-docs').Options} */
            {
                id: 'tutorials',
                path: `./docs/${isCN ? 'cn/tutorials' : 'tutorials'}`,
                routeBasePath: 'tutorials',
                sidebarPath: require.resolve('./docs/sidebars.js'),
                editUrl: ({ locale, docPath }) => {
                    return `https://github.com/datafuselabs/databend-docs/tree/main/docs/${isCN ? 'cn/tutorials' : 'tutorials'}/${docPath}`;
                }
            }
        ],
        [
            '@docusaurus/plugin-content-docs',
            /** @type {import('@docusaurus/plugin-content-docs').Options} */
            {
                id: 'sqlReference',
                path: `./docs/${isCN ? 'cn/sql-reference' : 'sql-reference'}`,
                routeBasePath: 'sql',
                sidebarPath: require.resolve('./docs/sidebars.js'),
                editUrl: ({ locale, docPath }) => {
                    return `https://github.com/datafuselabs/databend-docs/edit/main/docs/${isCN?'cn/sql-reference':'sql-reference'}/${docPath}`;
                }
            }
        ],
        [
            '@docusaurus/plugin-content-docs',
            /** @type {import('@docusaurus/plugin-content-docs').Options} */
            {
                id: 'releaseNotes',
                path: `./docs/${isCN ? 'cn/release-notes' : 'release-notes'}`,
                routeBasePath: 'release-notes',
                sidebarPath: require.resolve('./docs/sidebars.js'),
                editUrl: ({ locale, docPath }) => {
                    return `https://github.com/datafuselabs/databend-docs/edit/main/docs/${isCN?'cn/release-notes':'release-notes'}/${docPath}`;
                }
            }
        ],
        [
            '@docusaurus/plugin-content-docs',
            /** @type {import('@docusaurus/plugin-content-docs').Options} */
            {
                id: 'developer',
                path: `./docs/${isCN ? 'cn/developer' : 'developer'}`,
                routeBasePath: 'developer',
                sidebarPath: require.resolve('./docs/sidebars.js'),
                editUrl: ({ locale, docPath }) => {
                    return `https://github.com/datafuselabs/databend-docs/edit/main/docs/${isCN?'cn/developer':'developer'}/${docPath}`;
                }
            }
        ],
        'plugin-image-zoom',
        [
            "docusaurus-plugin-devserver",
            {
                devServer: {
                    proxy: {
                        "/query": {
                            target: ASKBEND_URL,
                            // pathRewrite: { "^/query": "" },
                            changeOrigin: true,
                            headers: {
                                Origin: ASKBEND_URL
                            }
                        },
                    },
                },
            },
        ]
    ],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            imageZoom: {
                selector: 'article :not(a) > img'
            },
            announcementBar: {
                id: 'announcementBar-2', // Increment on change
                content: `⭐️ If you like Databend, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/datafuselabs/databend">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/DatabendLabs" >Twitter</a> ${TwitterSvg}`,
            },
            navbar: {
                title: 'Databend',
                logo: {
                    alt: 'Databend Logo',
                    href: '/',
                    target: '_self',
                    srcDark: 'img/logo-dark.svg',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        to: '/doc',
                        label: 'Guides',
                        position: 'right',
                    },
                    {
                        to: '/tutorials',
                        label: 'Tutorials',
                        position: 'right',
                    },
                    {
                        to: '/developer',
                        label: 'Developer',
                        position: 'right',
                    },
                    {
                        to: '/sql',
                        label: 'SQL Reference',
                        position: 'right',
                    },
                    // 
                    {
                        to: '/release-notes',
                        label: 'Releases',
                        position: 'right',
                    },
                    // { to: '/blog', label: 'Blog', position: 'left' }, // or position: 'right'
                    {
                        to: '/download',
                        label: 'Downloads',
                        position: 'right',
                    },
                ],
            },
            footer: {
                links: [
                    {
                        title: 'RESOURCES',
                        items: [
                            {
                                label: 'Performance',
                                to: `https://www.databend.com/blog/clickbench-databend-top`
                            },
                            {
                                label: 'Deployment',
                                to: '/doc/deploy'
                            },
                            {
                                label: 'Blog',
                                to: `${homeLink}/blog`
                            },
                        ]
                    },
                    {
                        title: 'COMMUNITY',
                        items: [
                            {
                                label: 'Slack',
                                href: 'https://link.databend.rs/join-slack',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/DatabendLabs',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © 2023 Datafuse Labs, Inc. Built with Docusaurus. <br><br> <img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg">`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['toml', 'rust'],
            },
            algolia: algolia,
            image: 'img/rect-icon.png',
            metadata: [
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: '@databend.rs' }
            ],
        }),
};

module.exports = config;
