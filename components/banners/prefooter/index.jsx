

import man from '@/assets/shared/desktop/image-best-gear.jpg';
import { text } from './text';

import { ProductCard, Body } from 'components'

const styles = { color: "#D87D4A" };
const extraMargin = { margin: "150px 0" };

const Prefooter = () => {
    return (
        <div style={extraMargin}>
            <ProductCard style={extraMargin} isLeft={false} src={man}>
                <h1>{"Bringin you the"} <span style={styles}>best</span> {"audio gear"}</h1>
                <Body> {text} </Body>
            </ProductCard>
        </div>
    )
}

export default Prefooter