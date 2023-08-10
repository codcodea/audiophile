import './css/global.scss'
import manrope from './css/fonts'
import { Toolbar, Footer } from 'components'

export const metadata = {
    title: 'Audiophile',
    description: 'A Frontend Mentor Project',
    robots: {
        index: false,
        googleBot: { index: false, follow: false },
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
}

export default function HomeLayout({ children }) {
    return (
        <html lang="en">
            <body className={manrope.className}>
                <Toolbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
