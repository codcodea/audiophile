
import s from './s.module.css';
import Button from 'components/elements/button';
import Image from 'next/image';

import db from 'db/db.ts';

import { Subhead } from 'components';

const Other = ({ slug, text, image }) => {

    return (
        <div className={s.cardWrapper}>
            <div className={s.imageWrapper}>
                <Image className={s.image} fill sizes="50%" src={"/" + image} alt="others_label" />
            </div>
            <h6 className={s.header}>{text}</h6>
            <div className={s.buttonWrapper}>
               <Button className={s.button} slug={slug} type="filled" color="orange"> See Product</Button>
            </div>
        </div>

    )
}


const Others = async ({ others }) => {

    return (
        <section className={s.section}>

            <div className={s.headWrapper}>
                <Subhead> You may also like </Subhead>
            </div>

            <div className={s.otherWrapper}>
                {others.map((item) => {

                    const { slug, name, image } = item;
                    const category = db.getCategoryName(slug)

                    const absSlug = "/" + category + "/" + slug;

                    return <Other key={absSlug} slug={absSlug} text={name} image={image.desktop} />
                })}
            </div>
        </section>
    )
}

export default Others;