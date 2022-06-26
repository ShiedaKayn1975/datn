import { IconZoomMoney, IconBuildingFactory2 } from '@tabler/icons';

const icons = { IconBuildingFactory2, IconZoomMoney };

const customer = {
    id: 'products',
    title: 'Products',
    type: 'group',
    children: [
        {
            id: 'products',
            title: 'Products',
            type: 'item',
            url: '/products',
            icon: icons.IconBuildingFactory2,
            breadcrumbs: false
        },
        {
            id: 'auctions',
            title: 'Auctions',
            type: 'item',
            url: '/auctions',
            icon: icons.IconZoomMoney,
            breadcrumbs: false
        }
    ]
};

export default customer;
