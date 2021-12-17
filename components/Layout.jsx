import Footer from "./Footer"
import Header from "./Header"

function Layout({children, title}) {
    return (
        <>
            <Header title={title}/>
                {children}
            <Footer />
        </>
    )
}

export default Layout
