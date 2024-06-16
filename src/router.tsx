import {createBrowserRouter} from "react-router-dom";
import Index from "./modules/pages/Index";
import SignUp from "./modules/auth/pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
        children: [
            {
                path: '/auth/signup',
                element: <SignUp />
            }
        ]
    },
]);

export default router