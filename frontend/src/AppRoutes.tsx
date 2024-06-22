import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageShopPage from "./pages/ManageShopPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import ManageHomePageForm from "./forms/manage-shop-form/ManageHomePageForm";
import ManageProductsForm from "./forms/manage-shop-form/ManageProductsForm";
import OrderDetails from "./forms/manage-shop-form/OrderDetails";

const AppRoutes = () => {
    return (
        <Routes>
            <Route 
                path="/" 
                element={<Layout homePage>
                    <HomePage/>
                </Layout>}/>

            <Route path="auth-callback" element={<AuthCallbackPage/>}/>
            <Route 
                path="/search/:color" 
                element={
                    <Layout homePage={false}>
                        <SearchPage/>
                    </Layout>
                }
            />

            <Route 
                path="/detail/:shopId" 
                element={
                    <Layout homePage={false}>
                        <DetailPage/>
                    </Layout>
                }
            />



            <Route element={<ProtectedRoute/>}>
                <Route 
                    path="/user-profile" 
                    element={
                        <Layout>
                            <UserProfilePage/>
                        </Layout>
                    }
                />
                <Route 
                    path="/admin/manageHomePage" 
                    element={
                        <Layout adminPage={true} >
                            <ManageHomePageForm />
                        </Layout>
                    }
                />
                <Route 
                    path="/admin/addProducts" 
                    element={
                        <Layout adminPage={true} >
                            <ManageShopPage />
                        </Layout>
                    }
                />
                <Route 
                    path="/admin/addProducts" 
                    element={
                        <Layout adminPage={true} >
                            <ManageShopPage />
                        </Layout>
                    }
                />
                <Route 
                    path="/admin/manageProducts" 
                    element={
                        <Layout adminPage={true} >
                            <ManageProductsForm />
                        </Layout>
                    }
                />
                <Route 
                    path="/admin/orderDetails" 
                    element={
                        <Layout adminPage={true} >
                            <OrderDetails />
                        </Layout>
                    }
                />
            </Route>
            
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    );
};

export default AppRoutes