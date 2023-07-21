
import man from '@/assets/shared/desktop/image-best-gear.jpg';
import { ProductCard, Body } from 'components'
import { prefooter } from "/lib/db/footer"

const styles = { color: "#D87D4A" };
const extraMargin = { margin: "150px 0" };

const Prefooter = () => {

    const headline =
        <>
            {"Bringin you the"} <span style={styles}>best</span> {"audio gear"}
        </>

    return (
        <div style={extraMargin}>
            <ProductCard style={extraMargin} isLeft={false} src={man}>
                <h1>{headline}</h1>
                <Body> {prefooter} </Body>
            </ProductCard>
        </div>
    )
}

export default Prefooter