import Head from "next/head";
import React from "react";
import ClueMinatiImage from "../public/images/Events/poster.jpg";
import tomorrowLand from "../public/images/Events/poster.jpg";
import automazeImage from "/public/images/Events/poster.jpg";
import botStrifeImage from "/public/images/Events/poster.jpg";
import BuildItHighImage from "/public/images/Events/poster.jpg";
import CADManiaImage from "/public/images/Events/poster.jpg";
import codeBlue from "/public/images/Events/poster.jpg";
import arcade from "/public/images/Events/poster.jpg";
import FiE from "/public/images/Events/poster.jpg";
import Halo from "/public/images/Events/poster.jpg";
import mysterio from "/public/images/Events/poster.jpg";
import NeonFootballImage from "/public/images/Events/poster.jpg";
import ojingo from "/public/images/Events/poster.jpg";
import PosterPaper from "/public/images/Events/poster.jpg";
import PipetteByNos from "/public/images/Events/poster.jpg";
import QarkFentoImage from "/public/images/Events/poster.jpg";
import salvator from "/public/images/Events/poster.jpg";
import Scrios from "/public/images/Events/poster.jpg";
import SnakeOMystery from "/public/images/Events/poster.jpg";
import TechArcade from "/public/images/Events/poster.jpg";
import tekothon from "/public/images/Events/poster.jpg";
import GladeGreever from "/public/images/Events/poster.jpg";
import illusion from "/public/images/Events/poster.jpg";
import TurboLeague from "/public/images/Events/poster.jpg";
import TurnInsideOut from "/public/images/Events/poster.jpg";
import zypher from "/public/images/Events/poster.jpg";
import EventCard from "/src/components/EventCard";
import Footer from "/src/components/Footer";
import Navbar from "/src/components/Navbar";
import PageHeader from "/src/components/PageHeader";

const Events = () => {
    return ( <
        >
        <
        Head >
        <
        title > Events | TechUthopia 2k23 < /title> < /
        Head > <
        div className = "h-max scroll-smooth overflow-hidden z-20 bg-black Events" >
        <
        Navbar / >
        <
        PageHeader title = { "TechUthopia Events" }
        /> <
        div className = "grid grid-cols-1 lg:grid-cols-3 py-5 place-items-center lg:px-10" >
        <
        EventCard name = { "Arcade" }
        image = { arcade }
        link = { "/events/arcade" }
        /> <
        EventCard name = { "Automaze" }
        image = { automazeImage }
        link = { "/events/automaze" }
        /> <
        EventCard name = { "BotStrife" }
        image = { botStrifeImage }
        link = { "/events/bot-strife" }
        /> <
        EventCard name = { "Build it High!" }
        image = { BuildItHighImage }
        link = { "/events/build-it-high" }
        /> <
        EventCard name = { "CAD Mania" }
        image = { CADManiaImage }
        link = { "/events/cad-mania" }
        /> <
        EventCard name = { "Clueminati" }
        image = { ClueMinatiImage }
        link = { "/events/clueminati" }
        /> <
        EventCard name = { "Code Blue" }
        image = { codeBlue }
        link = { "/events/code-blue" }
        /> <
        EventCard name = { "FiE" }
        image = { FiE }
        link = { "/events/fie" }
        />

        <
        EventCard name = { "Halo" }
        image = { Halo }
        link = { "/events/halo" }
        />

        <
        EventCard name = { "Mysterio" }
        image = { mysterio }
        link = { "/events/mysterio" }
        /> <
        EventCard name = { "Neon Football" }
        image = { NeonFootballImage }
        link = { "/events/neon-football" }
        /> <
        EventCard name = { "Ojingo" }
        image = { ojingo }
        link = { "/events/ojingo" }
        /> <
        EventCard name = { "Pipette By Numbers" }
        image = { PipetteByNos }
        link = { "/events/pipette-by-numbers" }
        /> <
        EventCard name = { "Poster/Paper Presentation" }
        image = { PosterPaper }
        link = { "/poster-paper-presentation" }
        /> <
        EventCard name = { "Quark Fento" }
        image = { QarkFentoImage }
        link = { "/events/quark-fento" }
        /> <
        EventCard name = { "Salvator" }
        image = { salvator }
        link = { "/events/salvator" }
        /> <
        EventCard name = { "SCRIOS" }
        image = { Scrios }
        link = { "/events/scrios" }
        /> <
        EventCard name = { "Snake-O-Mystery" }
        image = { SnakeOMystery }
        link = { "/events/snake-o-mystery" }
        /> <
        EventCard name = { "TechArcade" }
        image = { TechArcade }
        link = { "/events/tech-arcade" }
        /> <
        EventCard name = { "Tek-O-Thon" }
        image = { tekothon }
        link = { "https:/tekothon.in/home" }
        /> <
        EventCard name = { "The Glade" }
        image = { GladeGreever }
        link = { "/events/the-glade" }
        /> <
        EventCard name = { "The Illusion" }
        image = { illusion }
        link = { "/events/the-illusion" }
        /> <
        EventCard name = { "Turbo League" }
        image = { TurboLeague }
        link = { "/events/turbo-league" }
        /> <
        EventCard name = { "TomorrowLand" }
        image = { tomorrowLand }
        link = { "/events/tomorrow-land" }
        /> <
        EventCard name = { "Turn Inside Out" }
        image = { TurnInsideOut }
        link = { "/events/turn-inside-out" }
        /> <
        EventCard name = { "Zypher" }
        image = { zypher }
        link = { "/events/zypher" }
        /> < /
        div > <
        Footer / >
        <
        /div> < / >
    );
};

export default Events;