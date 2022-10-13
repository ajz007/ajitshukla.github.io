import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getMyProjects } from '../../apis/projectsApi';

import Project from './Project';

export default function Projects() {

	const dispatch = useDispatch();

	const projectsFromRedux = useSelector(state => state.myProjects);
	const status = useSelector(state => state.myProjects.status);

	useEffect(() => {
		if (status === 'init' || status === undefined) { getMyProjects(dispatch); }
	}, [status, dispatch]);

	function converttoArrayOfArray(projectsArray) {
		var finalArray = [];
		for (let i = 0; i < projectsArray.length; i=i+4) {
			let row = [];
			for (let j = i; j <= i+3; j++) {
				if(projectsArray[j] !== undefined) {
				row.push(projectsArray[j]);
				}
			}
			finalArray.push(row);
		}
		return finalArray;
	}

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
							converttoArrayOfArray(projectsFromRedux.payload).map(
								(projectRow, index) => {
										return (
											<div className="row">
												{projectRow.map(project => {
													return (<div className="col-md-3">
														<Project project={project} />
													</div>);
												})}
											</div>
										)
								}
							)}

					</div>
				</div>
			</div>

		);
	}
}