import { IconUser } from '@tabler/icons';

const icons = { IconUser };

const customer = {
    id: 'products',
    title: 'Products',
    type: 'group',
    children: [
        {
            id: 'products',
            title: 'Products',
            type: 'item',
            url: '/customer/products',
            icon: icons.IconUser,
            breadcrumbs: false
        }
    ]
};

export default customer;
