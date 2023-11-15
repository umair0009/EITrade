import routes from "./config/routes";
import { Routes, Route } from "react-router-dom";
import "../src/Styles/Style.scss";

import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import HaveShippingCost from "./components/HaveShippingCost/HaveShippingCost";
import Home from "./components/Home/Home";
import ImportType from "./components/ImportThrough/ImportThrough";
import ProductType from "./components/ProductType/ProductType";
import SelectProduct from "./components/SelectProduct/SelectProduct";
import ShippingDetails from "./components/ShippingDetails/ShippingDetails";
import ShippingResult from "./components/ShippingResult/ShippingResult";
import Welcome from "./components/Welcome/Welcome";
// import routes from "./config/routes";

import Layout from "./Layout/Layout";
import ImportThrough from "./components/ImportThrough/ImportThrough";
import ShippingType from "./components/NotHaveShippingCost/ShippingType/ShippingType";
import TypeOfPacking from "./components/NotHaveShippingCost/ByAir/TypeOfPacking/TypeOfPacking";
import CartonDetails from "./components/NotHaveShippingCost/ByAir/CartonDetails/CartonDetails";
import TypeOfCargo from "./components/NotHaveShippingCost/BySea/TypeOfCargo/TypeOfCargo";
import Import from "./Pages/Import/Import";

function App() {
  return (
    <>
      <Routes>

      <Route
          path="login"
          element={
         
                <Login />
           
          }
        />

        <Route
          path="/"
          element={
            <Layout>
                <Import/>
              {/*<Home />*/}
            </Layout>
          }
        />
        <Route path="welcome" element={<Welcome />} />
        <Route
          path="/import/import-through"
          element={
            <Layout>
              <ImportThrough />
            </Layout>
          }
        />

        <Route
          path="/import/product-type"
          element={
            <Layout>
              <ProductType />
            </Layout>
          }
        />
        <Route
          path="/import/select-product"
          element={
            <Layout>
              <SelectProduct />
            </Layout>
          }
        />
        <Route
          path="/import/shipping-cost"
          exact
          element={
            <Layout>
              <HaveShippingCost />
            </Layout>
          }
        ></Route>
        <Route
          path="/import/shipping-details"
          exact
          element={
            <>
              <Layout>
                <ShippingDetails />
              </Layout>
            </>
          }
        ></Route>
        <Route
          path="/import/result"
          exact
          element={
            <>
              <Layout>
                <ShippingResult />
              </Layout>
            </>
          }
        ></Route>
        <Route
          path="/import/shipping-type"
          element={
            <Layout>
              <ShippingType />
            </Layout>
          }
        ></Route>

        <Route
          path="/import/packing-type"
          element={
            <Layout>
              <TypeOfPacking />
            </Layout>
          }
        ></Route>

        <Route
          path="/import/carton-details"
          element={
            <Layout>
              <CartonDetails />
            </Layout>
          }
        ></Route>

        <Route
          path="/import/by-sea/cargo-type"
          element={
            <Layout>
              <TypeOfCargo />
            </Layout>
          }
        ></Route>
      </Routes>

      {/* <Login /> */}
      {/* <Signup /> */}

      {/* <Layout>
          <Home />
        </Layout> */}

      {/* <Layout>
          <ProductType />
        </Layout> */}

      {/* <Layout>
          <SelectProduct />
        </Layout> */}

      {/* <Layout>

        </Layout> */}
      {/* <Layout>
          <ShippingDetails />
        </Layout> */}
      {/* <Layout>
          <ShippingResult />
        </Layout> */}
    </>
  );
}

export default App;
