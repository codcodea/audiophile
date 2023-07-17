

import _db from './data.json'
import { Record, Database, CategoryPage, ProductPage } from './DB.d';

class DB {
    db: Database;

    constructor() {
        this.db = _db;
    }

    getCategoryPage(category: string): CategoryPage[] {
        const cat: Record[] = this.db.filter(item => item.category === category);

        return cat.map((item, index) => {
            return {
                id: item.id,
                name: item.name,
                description: item.description,
                slug: item.slug,
                isLeft: index % 2 === 0 ? true : false,
                isNew: item.new,
                categoryImage: "/" + item.categoryImage.tablet,
            };
        });
    }

    getProductPage(productSlug: string): ProductPage {
        const product: Record = this.db.find(item => item.slug === productSlug);

        return {
            id: product.id,
            slug: product.slug,
            category: product.category,
            name: product.name,
            image: "/" + product.image.tablet,
            new: product.new,
            price: product.price,
            description: product.description,
            features: product.features,
            includes: product.includes,
            gallery: product.gallery,
            others: product.others,
        };
    }

    getCategoryName(slug : string): string {
        const product: Record = this.db.find(item => item.slug === slug);
        return product.category;
    }   
}

const db = new DB();

export default db;