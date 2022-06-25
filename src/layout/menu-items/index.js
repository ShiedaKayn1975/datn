import dashboard from './dashboard';
import utilities from './utilities';
import customer from './customer';

const menuItems = {
    seller: {
        items: [utilities]
    },
    customer: {
        items: [customer]
    }
};

export default menuItems;
