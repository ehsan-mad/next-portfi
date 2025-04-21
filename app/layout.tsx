
import Header from "./components/header";
import "./globals.css";
import Footer from './components/footer';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header/>
      <body
        
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
