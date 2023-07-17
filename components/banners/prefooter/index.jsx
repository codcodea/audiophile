

import man from '@/assets/shared/desktop/image-best-gear.jpg';
import { text } from './text';

import { TwoGrid, Body } from 'components'

const styles = { color: "#D87D4A" };
const extraMargin = { margin: "150px 0" };

const Prefooter = () => {
    return (
        <div style={extraMargin}>
            <TwoGrid style={extraMargin} isLeft={false} src={man}>
                <h1>{"Bringin you the"} <span style={styles}>best</span> {"audio gear"}</h1>
                <Body> {text} </Body>
            </TwoGrid>
        </div>
    )
}

export default Prefooter