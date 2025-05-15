import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";

const RootLayout = ({ children }) => {
    return (
        <html lang="ja">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
