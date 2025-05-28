import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import "./technology.css";


export default function Technology() {
    return (

        <>
        <Title number="03" text="Space launch 101" />
                    <Header />

        <Outlet/>
        </>
    );

}
