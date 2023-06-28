const NavBarLinks = [
  { id: 1, href: '#home', text: 'Home' },
  { id: 2, href: '#about', text: 'About' },
  { id: 3, href: '#services', text: 'Services' },
  { id: 4, href: '#tours', text: 'Tours' },
];

const SocialLinks = [
  {
    id: 1,
    href: 'https://twitter.com',
    icon: <i class='fa-brands fa-twitter'></i>,
  },
  {
    id: 2,
    href: 'https://www.facebook.com',
    icon: <i class='fa-brands fa-facebook'></i>,
  },
  {
    id: 3,
    href: 'https://www.squarespace.com',
    icon: <i class='fa-brands fa-squarespace'></i>,
  },
];

const Services = [
  { id: 1, title: 'saving money', icon: 'fas fa-wallet fa-fw', text: '' },
  { id: 2, title: 'endless hiking', icon: 'fas fa-tree fa-fw', text: '' },
  { id: 3, title: 'amazing comfort', icon: 'fas fa-socks fa-fw', text: '' },
];

const Tours = [
  {
    id: 1,
    title: 'saving money',
    image: 'tour1',
    info: '',
    date: 'August 26th 2020',
    location: 'china',
    duration: '6',
    cost: '2100',
  },
  {
    id: 2,
    title: 'best of java',
    image: 'tour2',
    info: '',
    date: 'October 1st 2020',
    location: 'Indonesia',
    duration: '11',
    cost: '1400',
  },
  {
    id: 3,
    title: 'explore hong kong',
    image: 'tour3',
    info: '',
    date: 'September 15th 2020',
    location: 'hong kong',
    duration: '8',
    cost: '5000',
  },
  {
    id: 4,
    title: 'kenya highlights',
    image: 'tour3',
    info: '',
    date: 'December 5th 2020',
    location: 'kenya',
    duration: '20',
    cost: '3300',
  },
];

export { NavBarLinks, SocialLinks, Services, Tours };
