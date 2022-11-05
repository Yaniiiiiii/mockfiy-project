import Footer from '../footer/footer';

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <div>
            <Footer></Footer>
            {children}
        </div>
    );
}
