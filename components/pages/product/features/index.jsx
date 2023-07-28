import List from './_list';
import s from './s.module.scss';

const Features = ({ features, includes }) => {

    // Account for line breaks \n\n in db
    const paragraphs = features.split('\n\n').map((item, i) => (
        <>
            <p key={i}>{item}</p>
            <br />
        </>
    ));

    return (
        <section className={s.section}>
            <h4 className={s.featHead}> Features </h4>
            <span className={s.featText}>{paragraphs}</span>
            <h4 className={s.boxHead}> In the box </h4>
            <List list={includes} />
        </section>
    )
}

export default Features;
