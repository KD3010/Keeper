import React from "react";

const date = new Date();
const year = date.getUTCFullYear()

function Footer(){
    return <footer>
        <p>CopyrightÂ© {year}</p>
    </footer>
}

export default Footer;