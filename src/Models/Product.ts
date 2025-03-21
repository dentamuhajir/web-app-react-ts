export interface Product {
    id: number;
    category: Category;
    description: string;
    image: string;
    price: number;
}

export interface Category {
    id: number;
    name: string; 
}
