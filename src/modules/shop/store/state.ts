export interface ShopInterface {
    product: ProductInterface;
    products: ProductInterface[];
    category: string[];
    cart: CartInterface;
}

export interface ProductInterface {
    id: string;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}
export interface CartInterface {
    // id: number|null;
    userId: number|null;
    date: string|null;
    products: {
        product: ProductInterface;
        quantity: string
    }[]
}

function state(): ShopInterface {
    return {
        product: {
            id: "",
            title: "",
            price: "",
            category: "",
            description: "",
            image: "",
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
            userId: null,
            date: null,
            products: []
        },
    };
}

export default state;
