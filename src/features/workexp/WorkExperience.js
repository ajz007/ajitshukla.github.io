import React from 'react';
import '../../css/animate.css'
import '../../css/icomoon.css'
import '../../css/bootstrap.css'
import '../../css/style.css'


export default function WorkExperience(props) {


	return (
		<>
			<li key={props.index} className={`${props.index%2 === 0 ? "animate-box timeline-unverted" : "timeline-inverted animate-box" } `}>
				<div className="timeline-badge"><i className="icon-suitcase"></i></div>
				<div className="timeline-panel">
					<div className="timeline-heading">
						<h3 className="timeline-title">{props.project.name}</h3>
						<span className="company">{props.project.role}</span>
					</div>
					<div className="timeline-body">
						<p>Skills:
							{
								props.project.techStack.map(skill => <button className="button round-button" > {skill} </button>)
							}</p>
						{
							props.project.responsibilities.map(responsibility => <p>{responsibility}</p>)
						}
					</div>
				</div>
			</li>
		</>
	);
}