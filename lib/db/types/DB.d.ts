type Image = {
    mobile: string;
    tablet: string;
    desktop: string;
};

type Includes = {
    quantity: number;
    item: string;
}

type Gallery = {
    first: Image;
    second: Image;
    third: Image;
};

type Others = {
    slug: string;
    name: string;
    image: Image;
};

export type Record = {
    id: number;
    img: string;
    slug: string;
    name: string;
    image: Image;
    category: string;
    categoryImage: Image;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: Includes[];
    gallery: Gallery;
    others: Others[];
};

export interface Product {
    id: number;
    slug: string;
    img: string;
    name: string;
    category: string;
    isNew: boolean;
    price: number;
    description: string;
    isLeft: boolean;    
}

type Category = Product[];

export interface ProductExtras{
    features: string;
    includes: Includes[];
    gallery: Gallery;
    others: Others[];
}

export interface CartProduct {
    id: number;
    name: string;
    image: string;
    price: number;
}

