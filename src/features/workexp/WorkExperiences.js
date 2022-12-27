import React from 'react';
import '../../css/animate.css'
import '../../css/icomoon.css'
import '../../css/bootstrap.css'
import '../../css/style.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMyProjects } from '../../apis/projectsApi';
import WorkExperience from './WorkExperience';


export default function WorkExperiences() {

	const dispatch = useDispatch();

	const projectsFromRedux = useSelector(state => state.myProjects);
	const status = useSelector(state => state.myProjects.status);

	useEffect(() => {
		if (status === 'init' || status === undefined) { getMyProjects(dispatch); }
	}, [status, dispatch]);

	if (status === 'init' || status === undefined) {
		return showInitPage();
	} else if (status === 'loading') {
		return showLoadingPage();
	} else if (status === 'success') {
		return showWorkExperiencePage(projectsFromRedux);
	}
}

function showInitPage() {
	return <div className="container">
		<div className="row animate-box">
			<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
				<h2>My Resume</h2>
			</div>
		</div>
		<div className="row">
			<div className="col-md-12 col-md-offset-0">
				<ul className="timeline">
					<li className="timeline-heading text-center animate-box">
						<div><h3>Work Experience</h3></div>
					</li>
					<li className="timeline-heading text-center animate-box">
						<div><h3>No work experience found..</h3></div>
					</li>
				</ul>
			</div>
		</div>
	</div>
}

function showLoadingPage() {
	return <div className="container">
		<div className="row animate-box">
			<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
				<h2>My Resume</h2>
			</div>
		</div>
		<div className="row">
			<div className="col-md-12 col-md-offset-0">
				<ul className="timeline">
					<li className="timeline-heading text-center animate-box">
						<div><h3>Work Experience</h3></div>
					</li>
					<li className="timeline-heading text-center animate-box">
						<div><h3>Work Experience Loading..</h3></div>
					</li>
				</ul>
			</div>
		</div>
	</div>
}

function showWorkExperiencePage(projectsFromRedux) {

	return <div className="container">
		<div className="row animate-box">
			<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
				<h2>My Resume</h2>
			</div>
		</div>
		<div className="row">
			<div className="col-md-12 col-md-offset-0">
				<ul className="timeline">
					<li className="timeline-heading text-center animate-box">
						<div><h3>Work Experience</h3></div>
					</li>
					{
						projectsFromRedux.payload.map((project, index) => <WorkExperience project={project} index={index}/>)
					}
				</ul>
			</div>
		</div>
	</div>

}