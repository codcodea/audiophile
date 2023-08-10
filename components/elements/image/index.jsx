import s from './s.module.scss';
import Image from 'next/image';

const Img = ({ isCategory = false, autoSizeBypass = false, src, alt = "product_image" }) => {
    
    const tabletOverride = isCategory ? s.isCategory : null;
    const auto = autoSizeBypass ? s.autoSizeBypass : null;
    const format = [s.wrapper, tabletOverride, auto].join(' ');
    const contain = [s.image, tabletOverride, auto].join(' ');

    return (
        <div className={format}>
            <Image className={contain} src={src}
                fill={true}
                sizes="50%"
                alt={alt}
            />
        </div>
    );
}

export default Img;