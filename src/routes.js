import { createBrowserRouter } from "react-router-dom";
import Form from "./pages/form";
import Home from "./pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/create",
        element: <Form />
    },
    {
        path: "/update/:id",
        element: <Form isCreate={false} />
    },
]);


export default router;