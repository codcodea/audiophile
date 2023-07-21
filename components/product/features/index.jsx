
import { Body, Subhead } from 'components';
import List from './_list';
import s from './s.module.css';

const Features = ({ features, includes }) => {

    const bodyStyles = [s.featText].join(' ');

    return (
        <section className={s.section}>
            <Subhead className={s.featHead}> Features </Subhead>
            <Body className={bodyStyles} size="sm">{features}</Body>
            <Subhead className={s.boxHead}> In the box </Subhead>
            <List list={includes} />
        </section>
    )
}

export default Features;
