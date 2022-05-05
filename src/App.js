import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/AddProduct/AddProduct";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Home from "./pages/Home/Home";
import Inventory from "./pages/Inventory/Inventory";
import Login from "./pages/Login/Login";
import Manage from "./pages/Manage/Manage";
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

        <Route path="/inventory/:id" element={<Inventory></Inventory>}></Route>
        <Route path="/manage" element={<Manage></Manage>}></Route>
        <Route
          path="/manage/productList"
          element={<ProductList></ProductList>}
        ></Route>
        <Route
          path="/manage/addProduct"
          element={<AddProduct></AddProduct>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
