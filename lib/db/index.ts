import _db from './data/data.json'
import { Record, Product, ProductExtras, Category, CartProduct } from './types/DB';

class DB {
    db: Record[];

    constructor() {
        this.db = _db;
    }

    getProductPage(productSlug: string): Product {
        const item: Record = this.db.find(item => item.slug === productSlug);
        const newObj = (({ features, includes, gallery, others, ...rest }) => rest)(item);
        return { isNew: item.new, isLeft: true, ...newObj }
    }

    getProductExtras(productSlug: string): ProductExtras {
        const product: Record = this.db.find(item => item.slug === productSlug);
        const { features, includes, gallery, others } = product;
        return { features, includes, gallery, others };
    }

    getCategoryPage(category: string): Category {
        const cat: Record[] = this.db.filter(item => item.category === category);
        return cat.map((item, index) => {
            const product = this.getProductPage(item.slug) as Product;
            return {...product, isLeft: index % 2 == 0};
        });
    }

    getCategoryName(slug: string): string {
        const product: Record = this.db.find(item => item.slug === slug);
        return product.category;
    }

    getCartProduct(id: number): CartProduct {
        const product: Record = this.db.find(item => item.id === id);

        // Remove category name in the cart
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