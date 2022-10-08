
import Header from "../header/Header";
import React from "react";
import Contact from "../contact/Contact";
import WorkExperience from "../workexp/WorkExperience";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import MyDetails from "../mydetails/MyDetails";
import Download from "../download/Download";

export default function MyProfile() {

    return (
        <>
            <Header />
            <MyDetails />
            <WorkExperience />
            <Skills />
            <Projects />
            <Download />
           {/* <RoadMap /> */}
            <Contact />
        </>
    );
}