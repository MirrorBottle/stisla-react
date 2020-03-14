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



// Features
// Profile Features
export const feature_profile = {
    first_name: 'Ujang',
    last_name: 'Maman',
    profile_image: 'avatar-1.png',
    job: 'Web Developer',
    email: 'ujang@maman.com',
    bio: "Ujang maman is a superhero name in <b>Indonesia</b>, especially in my family. He is not a fictional character but an original hero in my family, a hero for his children and for his wife. So, I use the name as a user in this template. Not a tribute, I'm just bored with <b>'John Doe'</b>.",
    phone: '',
    total_posts: 187,
    total_followers: 6800,
    total_followings: 2100,
}

// Forms
// Advanced Forms
export const advanced_form = {
    options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
        { label: 'Option 4', value: 'option4' },
    ],
    sizes: [
        { label: 'S', value: '50' },
        { label: 'M', value: '100' },
        { label: 'L', value: '150' },
        { label: 'XL', value: '100' },
    ],
    icons: [
        { icon: 'fas fa-mobile', value: '50' },
        { icon: 'fas fa-tablet', value: '100' },
        { icon: 'fas fa-laptop', value: '150' },
        { icon: 'fas fa-times', value: '100' },
    ],
    icons_circle: [
        { icon: 'fas fa-sun', value: '50' },
        { icon: 'fas fa-moon', value: '100' },
        { icon: 'fas fa-cloud-rain', value: '150' },
        { icon: 'fas fa-cloud', value: '100' },
    ],
    skills: [
        { label: 'HTML', value: 'HTML' },
        { label: 'CSS', value: 'CSS' },
        { label: 'PHP', value: 'PHP' },
        { label: 'JavaScript', value: 'JavaScript' },
        { label: 'Ruby', value: 'Ruby' },
        { label: 'Swift', value: 'Swift' },
        { label: 'C++', value: 'C++' },
    ],
    images: [
        { image: 'img01.jpg', value: 'img01.jpg' },
        { image: 'img02.jpg', value: 'img02.jpg' },
        { image: 'img03.jpg', value: 'img03.jpg' },
        { image: 'img04.jpg', value: 'img04.jpg' },
        { image: 'img05.jpg', value: 'img05.jpg' },
        { image: 'img06.jpg', value: 'img06.jpg' },
    ]
}


// Components
// Users
const socials = {
    facebook: '-',
    github: '-',
    twitter: '-',
    instagram: '-',
}
export const components_users = {
    user_card_one: {
        id: 1,
        name: 'Hasan Basri',
        profile: 'avatar-1.png',
        job: 'Web Developer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        ...socials
    },
    user_card_two: {
        name: 'Ujang Maman',
        profile: 'avatar-1.png',
        job: 'Web Developer',
        email: 'ujang@maman.com',
        bio: "Ujang maman is a superhero name in <b>Indonesia</b>, especially in my family. He is not a fictional character but an original hero in my family, a hero for his children and for his wife. So, I use the name as a user in this template. Not a tribute, I'm just bored with <b>'John Doe'</b>.",
        total_posts: 187,
        total_followers: 6800,
        total_followings: 2100,
        ...socials
    },
    users: {
        actionText: 'follow',
        actionCallback: (data) => alert('following'),
        dataToShow: 4,
        dataToScroll: 2,
        data: [
            {
                profile: 'avatar-1.png',
                name: 'Hasan Basri',
                job: 'Web Developer'
            },
            {
                profile: 'avatar-2.png',
                name: 'Hasan Basri',
                job: 'Web Developer'
            },
            {
                profile: 'avatar-3.png',
                name: 'Hasan Basri',
                job: 'Web Developer'
            },
            {
                profile: 'avatar-4.png',
                name: 'Hasan Basri',
                job: 'Web Developer'
            },
            {
                profile: 'avatar-5.png',
                name: 'Hasan Basri',
                job: 'Web Developer'
            },
            {
                profile: 'avatar-1.png',
                name: 'Hasan Basri',
                job: 'Web Developer'
            },
            {
                profile: 'avatar-2.png',
                name: 'Hasan Basri',
                job: 'Web Developer'
            },
            {
                profile: 'avatar-3.png',
                name: 'Hasan Basri',
                job: 'Web Developer'
            },
        ]
    }
}