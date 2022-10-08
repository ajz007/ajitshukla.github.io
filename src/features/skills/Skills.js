import React, { useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import Skill from './Skill';

export default function Skills() {

    const dispatch = useDispatch();
    const backendSkillSelectFromRedux = useSelector((state) => state.skills);

    useEffect(() => {
        dispatch({ type: "BACKEND_SKILLS" })
    }, [dispatch])

    backendSkillSelectFromRedux.map(skill => console.log(`skill.id = ${skill.id}`))

    return (<div id="fh5co-skills" className="animate-box">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                    <h2>Full Stack Developer Skills</h2>
                </div>
            </div>
            <div className="row row-pb-md">

                {backendSkillSelectFromRedux.map(skill =>
                    <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                        <Skill percentageValue={skill.measure * 100} expertise={skill.expertise} skill={skill.name} />
                    </div>)}
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="progress-wrap">
                        <h3><span className="name-left">HTML5/CSS3</span><span className="value-right">50%</span></h3>
                        <div className="progress">
                            <div className="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>
                            </div>
                        </div>
                    </div>
                    <div className="progress-wrap">
                        <h3><span className="name-left">JAVA</span><span className="value-right">75%</span></h3>
                        <div className="progress">
                            <div className="progress-bar progress-bar-2 progress-bar-striped active" role="progressbar"
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ "width": "95%" }}>
                            </div>
                        </div>
                    </div>
                    <div className="progress-wrap">
                        <h3><span className="name-left">Spring Boot</span><span className="value-right">50%</span></h3>
                        <div className="progress">
                            <div className="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ "width": "50%" }}>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="progress-wrap">
                        <h3><span className="name-left">Docker</span><span className="value-right">50%</span></h3>
                        <div className="progress">
                            <div className="progress-bar progress-bar-4 progress-bar-striped active" role="progressbar"
                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ "width": "50%" }}>
                            </div>
                        </div>
                    </div>
                    <div className="progress-wrap">
                        <h3><span className="name-left">Kubernetes</span><span className="value-right">20%</span></h3>
                        <div className="progress">
                            <div className="progress-bar progress-bar-5 progress-bar-striped active" role="progressbar"
                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ "width": "50%" }}>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>);
}