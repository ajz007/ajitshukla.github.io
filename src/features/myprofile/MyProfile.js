
import Header from "../header/Header";
import React from "react";
import Contact from "../contact/Contact";
import WorkExperience from "../workexp/WorkExperience";
import Skills from "../skills/Skills";

export default function MyProfile() {

    return (
        <>
            <Header />
            <Contact />
            <WorkExperience />
            <Skills />
        </>
    );
}