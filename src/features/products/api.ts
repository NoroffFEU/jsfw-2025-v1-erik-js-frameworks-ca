import type { OnlineShopResponse, Product } from './types';

const API_BASE_URL = 'https://v2.api.noroff.dev/online-shop';

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch(API_BASE_URL);

    if (!response.ok) {
        throw new Error('Error: Cannot fetch products from the API');
    }
    
    const json: OnlineShopResponse = await response.json();
    return json.data;
};
