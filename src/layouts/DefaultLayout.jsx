import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "../components/Loader";
import { useContext } from "react";
import GlobalContext from "../context/globalContext";

export default function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext)


    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            {isLoading && <Loader />}
        </>
    )
}