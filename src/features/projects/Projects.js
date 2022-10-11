import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getMyProjects } from '../../apis/projectsApi';

import Project from './Project';

export default function Projects() {

	//const [status, setStatus] = useState('init');
	//const [projectsFromRedux, setProjectsFromRedux] = useState('init');

	const dispatch = useDispatch();
	/*var useSelect = state => {
		setProjectsFromRedux(state.myProjects);
		setStatus(state.status);
		console.log(`status = ${status}`);
	} */
	const projectsFromRedux = useSelector(state => state.myProjects);
	const status = useSelector(state => state.myProjects.status);
	console.log(`status = ${status}`);
	console.log(`projectsFromRedux = ${projectsFromRedux}`);

	useEffect(() => {
		if (status === 'init' || status === undefined) { getMyProjects(dispatch); }
	}, []);
	//setStatus(projectsFromRedux.status); }, [])
	//projectsFromRedux.payload.map(project => console.log(`project.name = ${project.name}`))

	if (status === 'init' || status === undefined) {
		return (<div id="fh5co-blog">
			<div className="container">
				<div className="row animate-box">
					<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
						<h2>Projects</h2>
						<p>No projects as of now.</p>
					</div>
				</div>
			</div>
		</div>);
	} else if (status === 'loading') {
		return (<div id="fh5co-blog">
			<div className="container">
				<div className="row animate-box">
					<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
						<h2>Projects</h2>
						<p>Loading...</p>
					</div>
				</div>
			</div>
		</div>);
	} else if (status === 'success') {

		return (
			<div id="fh5co-blog">
				<div className="container">
					<div className="row animate-box">
						<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
							<h2>Projects</h2>
							<p>List of Projects Completed So Far</p>
						</div>
					</div>

					<div className="row">

						{
							projectsFromRedux.payload.map(
								(project, index) => {
									{
										console.log(`index = ${index+1}`)
										return (
											<div className="col-md-3">
												<Project project={project} />
											</div>
										)
									}
								}
							)}

						<div className="col-md-3">
							<div className="fh5co-blog animate-box">
								<div className="blog-text">
									<span className="posted_on">Technical Lead</span>
									<h3><a href="/#">Luminor</a></h3>
									<p>Technology: Java8, Openam, Rest, Jboss</p>
									<p>Responsibilities:
										<ul>
											<li>Worked closely with the client for requirement finalization </li>
											<li>Worked closely with the L2 team for production support and analysis </li>
											<li>Worked closely with the performance team for application tuning  </li>
											<li>Designing and integrating application with oauth provider</li>
											<li>Involved in Analysis, Design, Coding</li>
											<li>Integration with third party providers for the Security integration using web services</li>
											<li>Worked closely with team for containerisation</li>
										</ul>
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="fh5co-blog animate-box">
								<div className="blog-text">
									<span className="posted_on">Snr. Java Devloper</span>
									<h3><a href="/#">Bank South Pacific </a></h3>
									<p>Technology: JDBC, Servlets, JSP, Java7, Soap, Oracle weblogic</p>
									<p>Responsibilities:
										<ul>
											<li>Involved in Analysis, Design, Coding, and Testing of Application</li>
											<li>Developed entire admin module, Developed the banking transactions</li>
											<li>Integration with third party providers for the Security integration using webservices</li>
											<li>Deploying and Managing application in the server</li>
										</ul>
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="fh5co-blog animate-box">
								<div className="blog-text">
									<span className="posted_on">Java Devloper</span>
									<h3><a href="/#">Mercantile Bank Limited </a></h3>
									<p>Technology & Environment: JDBC, Servlets, JSP, Java7, Soap, IBM WebSphere</p>
									<p>Responsibilities:
										<ul>
											<li>Involved in Analysis, Design, Coding, and Testing of Application</li>
											<li>Developed entire admin module, Developed the banking transactions</li>
											<li>Integration with third party providers for the Security integration using webservices</li>
											<li>Deploying and Managing application in the server</li>
										</ul>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}