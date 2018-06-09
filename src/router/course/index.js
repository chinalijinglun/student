import date from '@/pages/course/date';
import finished from '@/pages/course/finished';

export default [
    {
        name: '已上课程',
        path: 'finished',
        name: 'finished',
        component: finished
    },
    {
        name: '已约课程',
        path: 'date',
        name: 'date',
        component: date
    }
]