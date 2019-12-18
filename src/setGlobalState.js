import { setGlobal, addCallback } from 'reactn'

if (process.env.REACT_APP_ENV !== 'production') {
    addCallback(global => {
        console.log(global)
    })
}

setGlobal(
    {
        blogLayout: 'list',
        openDeleteDialog: false,
        // blogs: [],
        BlogId: '',
        posts: [],
        recents: [],
        comments: [],
        title: '',
        CmtId: '',
        openCmtDelete: false,
        selPosts: null,
        showSelPosts: false,
        openNewTag: false,
        tags: [],
        tagsNews: [],
        rss: [],
        url: [],
        showAdmin: [],
        user: {},
        openInquiry: false,
        listUsers: {},
        search: [],
        authUser: null,

    },
)
