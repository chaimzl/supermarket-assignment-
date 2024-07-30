import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import createCache from "@emotion/cache";
import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";

import { ProductsPage } from "../features/pruducts/products-page";
import { OrderPage } from "../features/order/order-page";

import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { TopMenu } from "../shared/top-menu/top-menu";

function App() {
  const theme = (outerTheme: Theme) =>
    createTheme({
      direction: "rtl"
    });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [ rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">
          <TopMenu />
          <Router>
            <Routes>
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/order" element={<OrderPage />} />
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
