import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { motion, useScroll } from "framer-motion";
import Head from "next/head";
import tekWiza from '../public/images/logo.jpg';
import "../styles/globals.css";
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
    const { scrollYProgress } = useScroll();
    return ( <
        >
        <
        Head >
        <
        title > TechUthopia 2023 < /title> <
        link rel = "icon"
        href = { tekWiza.src }
        /> < /
        Head > <
        motion.div className = "progress-bar"
        style = {
            { scaleX: scrollYProgress }
        }
        /> <
        Component {...pageProps }
        /> < / >
    );
}

export default MyApp;