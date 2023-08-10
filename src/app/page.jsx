import { Hero, Home } from 'components'

export default function HomePage() {
    return (
        <>
            <Hero />
            <main className='fadeIn'>
                <Home />
            </main>
        </>
    )
}
