import { IconShoppingCart, IconPalette, IconShadow, IconWindmill, IconBuildingFactory } from '@tabler/icons';

const icons = {
    IconBuildingFactory,
    IconShoppingCart,
    IconShadow,
    IconWindmill
};

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Products',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons.IconBuildingFactory,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Orders',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconShoppingCart,
            breadcrumbs: false
        },
        // {
        //     id: 'util-shadow',
        //     title: 'Shadow',
        //     type: 'item',
        //     url: '/utils/util-shadow',
        //     icon: icons.IconShadow,
        //     breadcrumbs: false
        // },
        // {
        //     id: 'icons',
        //     title: 'Icons',
        //     type: 'collapse',
        //     icon: icons.IconWindmill,
        //     children: [
        //         {
        //             id: 'tabler-icons',
        //             title: 'Tabler Icons',
        //             type: 'item',
        //             url: '/icons/tabler-icons',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'material-icons',
        //             title: 'Material Icons',
        //             type: 'item',
        //             url: '/icons/material-icons',
        //             breadcrumbs: false
        //         }
        //     ]
        // }
    ]
};

export default utilities;
