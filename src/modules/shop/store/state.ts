export interface ShopInterface {
    product?: ProductInterface;
    products: ProductInterface[];
    category: string[];
    cart: CartInterface;
}

export interface ProductInterface {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    quantity:  number
}
export interface CartInterface {
    // id: number|null;
    userId?: number;
    date?: string;
    products: ProductInterface[]
}

function state(): ShopInterface {
    return {
        product: {
            id: 0,
            title: "",
            price: 0,
            category: "",
            description: "",
            image: "",
            quantity: 1,
        },
        products: [],
        category: [
            "electronics",
            "jewelery",
            "men's clothing",
            "women's clothing",
        ],
        cart: {
            // TODO: agregar id cuando se guarde en una base de datos -> 
            // id: null,
            userId: 0,
            date: '',
            products: []
        },
    };
}

export default state;
