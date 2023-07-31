import {
    Hero,
    CategoryBanner,
    Banner_ZX9,
    Banner_ZX7,
    Banner_YX1,
    Prefooter
} from 'components'

export default function Home() {
    return (
        <>
            <Hero />
            <main className='fadeIn'>
                <CategoryBanner />
                <Banner_ZX9 />
                <Banner_ZX7 />
                <Banner_YX1 />
                <Prefooter />
            </main>
        </>
    )
}
