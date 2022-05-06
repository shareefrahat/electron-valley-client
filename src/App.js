import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/AddProduct/AddProduct";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ProductList from "./components/ProductList/ProductList";
import Home from "./pages/Home/Home";
import Inventory from "./pages/Inventory/Inventory";
import Login from "./pages/Login/Login";
import Manage from "./pages/Manage/Manage";
import MyItems from "./pages/MyItems/MyItems";
import NotFound from "./pages/NotFound/NotFound";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>

        <Route
          path="/inventory/:id"
          element={
            <PrivateRoute>
              <Inventory></Inventory>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <PrivateRoute>
              <Manage></Manage>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/manage/productList"
          element={
            <PrivateRoute>
              <ProductList></ProductList>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/manage/addProduct"
          element={
            <PrivateRoute>
              <AddProduct></AddProduct>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/addProduct"
          element={
            <PrivateRoute>
              <AddProduct></AddProduct>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/myitems"
          element={
            <PrivateRoute>
              <MyItems></MyItems>
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
