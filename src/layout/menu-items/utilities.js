import { IconShoppingCart, IconBuildingFactory, IconListCheck } from '@tabler/icons';

const icons = {
    IconBuildingFactory,
    IconShoppingCart,
    IconListCheck
};

const utilities = {
    id: 'utilities',
    title: 'Features',
    type: 'group',
    children: [
        {
            id: 'products',
            title: 'Products',
            type: 'item',
            url: '/products',
            icon: icons.IconBuildingFactory,
            breadcrumbs: false
        },
        {
            id: 'auctions',
            title: 'Auctions',
            type: 'item',
            url: '/auctions',
            icon: icons.IconListCheck,
            breadcrumbs: false
        },
        {
            id: 'orders',
            title: 'Orders',
            type: 'item',
            url: `/orders`,
            icon: icons.IconShoppingCart,
            breadcrumbs: false
        }
    ]
};

export default utilities;
