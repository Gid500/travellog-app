import React from "react";
import '../styles/Main.css'

export default function Main({children}) {
    return(
        <div className="main-Wrapper">
            <div id="mainContent" className="main-Content">
                {children}
            </div>
        </div>
    )
}