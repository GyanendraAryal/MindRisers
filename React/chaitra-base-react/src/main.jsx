import { createRoot } from "react-dom/client";
import Courses from "./components/Courses";
import './index.css'
import Blogs from "./components/Blogs";
// import App from "./App";

createRoot(document.getElementById("root")).render(
    // <App/>
    <>
        <Courses />
        <Blogs />
    </>
);
