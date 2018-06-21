import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [
        // {path:'/',redirect:'/ArticleUnscramble'},
        {
            path: '/ArticleUnscramble',
            name: 'ArticleUnscramble',
            component: resolve =>require(['@/components/ArticleUnscramble'],resolve)
        },
        {
            path: '/CleanCulture',
            name: 'CleanCulture',
            component: resolve =>require(['@/components/CleanCulture'],resolve)
        },
        {
            path: '/LawsRegulations',
            name: 'LawsRegulations',
            component: resolve =>require(['@/components/LawsRegulations'],resolve)
        },
        {
            path: '/ReportInquiries',
            name: 'ReportInquiries',
            component: resolve =>require(['@/components/ReportInquiries'],resolve)
        },
        {
            path: '/ReportOffense',
            name: 'ReportOffense',
            component: resolve =>require(['@/components/ReportOffense'],resolve)
        },
        {
            path: '/StudyAnswer',
            name: 'StudyAnswer',
            component: resolve =>require(['@/components/StudyAnswer'],resolve)
        },
        {
            path: '/VideoEducation',
            name: 'VideoEducation',
            component: resolve =>require(['@/components/VideoEducation'],resolve)
        },
        {
            path: '/WarningExposure',
            name: 'WarningExposure',
            component: resolve =>require(['@/components/WarningExposure'],resolve)
        },
    ]
})
