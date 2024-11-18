import "./globals.css";
import Sidebar from "./components/Sidebar";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
          <div style={{ display: 'flex' }}>
            <Sidebar />
          </div>
      <div className="mx-64 pt-12">
       {children}
      </div>
      </body>
    </html>
  );
}
