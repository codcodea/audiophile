import _db from './data.json'
import { Record, Database, CategoryPage, ProductPage, CartProduct } from './DB';

class DB {
    db: Database;

    constructor() {
        this.db = _db;
    }

    getSlugs(): string[] {
        return this.db.map(item => item.slug);
    }

    getCategoryPage(category: string): CategoryPage[] {

        const cat: Record[] = this.db.filter(item => item.category === category);
        const a = cat.map((item, index) => {
            const product = this.getProductPage(item.slug);
            const isLeft = index % 2 === 0 ? true : false;
            return { ...product, isLeft }
        });

        if (!a?.length) {
            throw new Error("Category not found");
        }
        return a;
    }

    getProductPage(productSlug: string): ProductPage {
        const item: Record = this.db.find(item => item.slug === productSlug);
        if (!item) {
            throw new Error("Product not found");
        }

        return {
            id: item.id,
            name: item.name,
            description: item.description,
            slug: item.slug,
            isNew: item.new,
            image: "/" + item.img,
            price: item.price,
            features: item.features,
            includes: item.includes,
            gallery: item.gallery,
            others: item.others,
            category: item.category,
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