

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

export interface CategoryPage {
    id: number;
    name: string;
    slug: string;
    description: string;
    isLeft: boolean;
    isNew: boolean;
    categoryImage: string;
}

export interface ProductPage {
    id: number;
    slug: string;
    name: string;
    category: string;
    image: string; // tablet
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: Includes[];
    gallery: Gallery;
    others: Others[];
}

export type Database = Record[];

