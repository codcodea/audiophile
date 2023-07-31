
type Image = {
    mobile: string;
    tablet: string;
    desktop: string;
};

type CategoryImage = Image;

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
    categoryImage: CategoryImage;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: Includes[];
    gallery: Gallery;
    others: Others[];
};

export interface ProductPage {
    id: number;
    slug: string;
    name: string;
    category: string;
    image: string; 
    isNew: boolean;
    price: number;
    description: string;
    features: string;
    includes: Includes[];
    gallery: Gallery;
    others: Others[];
}


export interface CategoryPage extends ProductPage {
   isLeft: boolean;
}


export interface CartProduct {
    id: number;
    name: string;
    image: string;
    price: number;
}

export type Database = Record[];

