import { createBrowserRouter } from "react-router";
import App from "../App";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Product from "../Pages/Product/Product";
import AddProduct from "../Pages/Product/AddProduct/AddProduct";
import ListProduct from "../Pages/Product/ListProduct/ListProduct";
import Article from "../Pages/Article/Article";
import AddArticle from "../Pages/Article/AddArticle/AddArticle";
import ListArticle from "../Pages/Article/ListArticle/ListArticle";
import Login from "../Pages/Auth/Login/Login";

export const router = createBrowserRouter([
    {
        path: "/cms/login",
    element: <Login/>
    },
    {
        path: "/cms",
        element: <App/>,
        children: [
            {
                path: "/cms/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/cms/product",
                element: <Product/>,
                children:[
                    {
                        path: "/cms/product/add",
                        element: <AddProduct />
                    },
                    {
                        path: "/cms/product/list",
                        element: <ListProduct />
                    }
                ]
            },
            {
                path: "/cms/article",
                element: <Article/>,
                children:[
                    {
                        path: "/cms/article/add",
                        element: <AddArticle />
                    },
                    {
                        path: "/cms/article/list",
                        element: <ListArticle />
                    }
                ]
            },
         ]
    }
])