module.exports = {
    title: 'SORMAS Glossary',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Home', link: 'homepage/' },
            { text: 'Guide', link: 'https://www.sormas-oegd.de' },

            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'English', link: '/language/english/index' },
                    { text: 'German', link: '/language/german/index' },
                    { text: 'French', link: '/language/french/index' }

                ]

            },

        ],
        sidebar: {
            '/homepage/':[
                'dashboard_directory_ordered',
                'case_management',
                'task_management_directory_ordered'
            ],
            '/language/english/':[
                'dashboard_directory_ordered',
                'case_management',
                'task_management_directory_ordered'
            ],
            '/language/german/':[
                'dashboard_directory_ordered',
                'case_management',
                'task_management_directory_ordered'
            ],
            '/language/french/':[
                'dashboard_directory_ordered',
                'case_management',
                'task_management_directory_ordered'
            ]

        }
    }
}

