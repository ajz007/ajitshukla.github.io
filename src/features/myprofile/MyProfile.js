
import Header from "../header/Header";
import React from "react";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import MyDetails from "../mydetails/MyDetails";
import Download from "../download/Download";
import WorkExperiences from "../workexp/WorkExperiences";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function MyProfile() {

    return (
        <>
                <Header />
                <MyDetails />
                <WorkExperiences />
                <Skills />
                <Projects />
                <Download />
                {/* <RoadMap /> */}
                {/*<Contact />*/}
        </>
    );
}