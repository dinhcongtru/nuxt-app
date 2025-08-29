import type { Options } from '@splidejs/splide';
export const navigationBreadcrumbData = [
    {
        link: '/',
        value: 'Trang chủ'
    },
    {
        link: '/product',
        value: 'Sản phẩm',
    },
];

export const optionMain: Options = {
    type: 'loop',
    perPage: 1,
    width: 495,
    height: 'auto',
    rewind: true,
    pagination: false,
    arrows: false,
    easing: 'ease-in',
};

export const optionthumbnails: Options = {
    fixedWidth: 82,
    height: 'auto',
    isNavigation: true,
    gap: 10,
    pagination: false,
    arrows: false,
    easing: 'linear',
    direction: 'ttb',
};

export const dataImageURL = [
    'pct-kid-detail-02',
    'kid_yody_01',
    'pct-kid-detail-03'
]
