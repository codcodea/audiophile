import s from './s.module.scss';
import Button from 'components/elements/button';
import Image from 'next/image';
import db from 'lib/db';

const Other = ({ slug, text, image }) => {
    return (
        <div className={s.cardWrapper}>
            <div className={s.imageWrapper}>
                <Image className={s.image} fill sizes="50%" src={"/" + image} alt="others_label" />
            </div>
            <h5 className={s.header}>{text}</h5>
            <div className={s.button}>
                <Button slug={slug} alignCenter={true} type="filled" color="orange"> See product </Button>
            </div>
        </div>
    )
}


const Others = async ({ others }) => {
    return (
        <section className={s.section}>

            <div className={s.headWrapper}>
                <h4 className={s.header}> You may also like </h4>
            </div>

            <div className={s.otherWrapper}>
                {others.map((item) => {
                    const { slug, name, image } = item;
                    const category = db.getCategoryName(slug)
                    const absSlug = "/" + category + "/" + slug;

                    return <Other key={absSlug} slug={absSlug} text={name} image={image.mobile} />
                })}
            </div>
        </section>
    )
}

export default Others;