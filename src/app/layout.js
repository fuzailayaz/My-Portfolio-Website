import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css'; // Import global styles (Tailwind CSS)

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
