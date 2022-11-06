import Footer from '../footer/footer';

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <main>
            {children}
            <Footer></Footer>
        </main>
    );
}
