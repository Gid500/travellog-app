import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Card from "./components/Card";
import './App.css'

export default function App() {

    return (
        <>
            <Header/>
            <Main>
                <Card/>
            </Main>
            <Footer/>
        </>
    );
}