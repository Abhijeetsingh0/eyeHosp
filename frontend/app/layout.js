import "./globals.css";
import Sidebar from "./components/Sidebar";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
