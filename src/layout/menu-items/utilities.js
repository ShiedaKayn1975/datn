import { IconShoppingCart, IconBuildingFactory } from '@tabler/icons';

const icons = {
    IconBuildingFactory,
    IconShoppingCart,
};

const utilities = {
    id: 'utilities',
    title: 'Utilities',
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
