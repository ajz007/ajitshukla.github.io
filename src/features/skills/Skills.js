import React, { useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import SkillBarChart from './SkillBarChart';

export default function Skills() {

    const dispatch = useDispatch();
    const backendSkillSelectFromRedux = useSelector((state) => state.skills.backendSkills);
    const frontendSkillSelectFromRedux = useSelector((state) => state.skills.frontendSkills);
    const devopsSkillSelectFromRedux = useSelector((state) => state.skills.devopsSkills);

    useEffect(() => {
        dispatch({ type: "BACKEND_SKILLS" })
        dispatch({ type: "FRONTEND_SKILLS" })
        dispatch({ type: "DEVOPS_SKILLS" })
    }, [dispatch])

    return (<div id="fh5co-skills" className="animate-box">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                    <h2>Full Stack Developer Skills</h2>
                </div>
            </div>
            {/* <div className="row row-pb-md">

                {backendSkillSelectFromRedux.map(skill =>
                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <SkillBarChart percentageValue={skill.measure * 100} expertise={skill.expertise} skill={skill.name} />
                    </div>)}
                </div> */}
            <div className="row">
            <h3>Backend Skills</h3>
                {backendSkillSelectFromRedux && backendSkillSelectFromRedux.map((skill, index) =>
                    <SkillBarChart percentageValue={skill.measure * 100} expertise={skill.expertise} skill={skill.name} index={index} />
                )}                
            </div>
            
            <div className="row">
            <h3>Frontend Skills</h3>
                {frontendSkillSelectFromRedux && frontendSkillSelectFromRedux.map((skill, index) =>
                    <SkillBarChart percentageValue={skill.measure * 100} expertise={skill.expertise} skill={skill.name} index={index} />
                )}                
            </div>

            <div className="row">
            <h3>Devops Skills</h3>
                {devopsSkillSelectFromRedux && devopsSkillSelectFromRedux.map((skill, index) =>
                    <SkillBarChart percentageValue={skill.measure * 100} expertise={skill.expertise} skill={skill.name} index={index} />
                )}                
            </div>

        </div>
    </div>);
}