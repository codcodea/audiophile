
import _db from './data.json'
import { Record, Database, CategoryPage, ProductPage, CartProduct } from './DB';

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

        if (!product) {
            return null;
        }

        return {
            id: product.id,
            slug: product.slug,
            category: product.category,
            name: product.name,
            image: "/" + product.categoryImage.tablet,
            isNew: product.new,
            price: product.price,
            description: product.description,
            features: product.features,
            includes: product.includes,
            gallery: product.gallery,
            others: product.others,
        };
    }

    getCategoryName(slug: string): string {
        const product: Record = this.db.find(item => item.slug === slug);
        return product.category;
    }

    getCartProduct(id: number): CartProduct {
        const product: Record = this.db.find(item => item.id === id);

        const wordsToRemove = ["headphones", "speaker", "earphones", "wireless"];
        const regexPattern = new RegExp(`\\b(${wordsToRemove.join('|')})\\b`, 'gi');

        return {
            id: product.id,
            name: product.name.replace(regexPattern, ''),
            image: "/" + product.image.mobile,
            price: product.price,
        };
    }

}

const db = new DB();

export default db;