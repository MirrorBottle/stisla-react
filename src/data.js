import moment from 'moment';

// Dashboard Datas
export const dashboard_card_icons = [
    {
        title: 'Total Admin',
        value: 10,
        icon: 'far fa-user',
        background: 'primary'
    },
    {
        title: 'News',
        value: 42,
        icon: 'far fa-newspaper',
        background: 'danger'
    }, {
        title: 'Reports',
        value: 1.201,
        icon: 'far fa-file',
        background: 'warning'
    },
    {
        title: 'Online Users',
        value: 47,
        icon: 'fas fa-circle',
        background: 'success'
    },
]

export const dashboard_recent_activites = [
    {
        title: 'Farhan A Mujib',
        image: 'avatar-1.png',
        context: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
        time: moment()
    },
    {
        title: 'Ujang Maman',
        image: 'avatar-2.png',
        context: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
        time: moment().add(12, 'minutes')
    },
    {
        title: 'Rizal Fakhri',
        image: 'avatar-3.png',
        context: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
        time: moment().add(17, 'minutes')
    },
    {
        title: 'Alfa Zukarnain',
        image: 'avatar-4.png',
        context: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.',
        time: moment().add(21, 'minutes')
    }
]

export const dashboard_referrals = [
    { title: 'Google', value: 2200, color: '#DB4437' },
    { title: 'Facebook', value: 1700, color: '#4267B2' },
    { title: 'Bing', value: 1400, color: '#008373' },
    { title: 'Yahoo', value: 700, color: '#6C0094' },
    { title: 'Kodinger', value: 1600, color: '#6979BB' },
    { title: 'Multinity', value: 1500 },
]

export const dashboard_products = [
    { name: 'Final Fantasy X/X-2 HD Remastered', cost: 300, image: 'product-3-50.png', customer: 'MirrorBottle', time: moment() },
    { name: 'Nier: Automata', cost: 500, customer: 'MirrorBottle', image: 'product-2-50.png', time: moment().add(3, 'days') },
    { name: 'Samsung Z Flip', cost: 1380, customer: 'Hasan Basri', image: 'product-1-50.png', time: moment().add(4, 'days') },
]


