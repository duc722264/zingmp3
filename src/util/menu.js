import icons from './icon';

const { MdOutlineLibraryMusic, HiOutlineChartPie, MdDynamicFeed, TbChartArcs3 } = icons;

export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icon: <MdOutlineLibraryMusic size={20} />,
    },
    {
        path: '',
        text: 'Khám phá',
        end: true,
        icon: <TbChartArcs3 size={20} />,
    },
    {
        path: 'zing-chart',
        text: '#zing-chart',
        icon: <HiOutlineChartPie size={20} />,
    },
    {
        path: 'follow',
        text: 'Theo dõi',
        icon: <MdDynamicFeed size={20} />,
    },
];
