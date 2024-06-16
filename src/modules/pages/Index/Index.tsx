import {Outlet} from "react-router-dom";
import Header from "src/components/Header";

function Index() {
    const pageClassName = 'container mx-auto w-full md:w-[350px] px-4 py-8'

    return (
        <>
            <Header/>
            <div className={pageClassName}>
                <Outlet/>
            </div>
        </>
    )
}

export default Index
