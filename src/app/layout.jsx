
import './css/global.css'
import manrope from './css/fonts'
import { Toolbar, Footer } from 'components'

export const metadata = {
    title: 'Audiophile',
    description: 'A Frontend Mentor Project',
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
