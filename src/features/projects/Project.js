import React from 'react'

export default function Project(props) {

	return (
		<div className="fh5co-blog animate-box">
			<div className="blog-text">
				<span className="posted_on">{props.project.role}</span>
				<h3><a href="/#">{props.project.name}</a></h3>
				<p>{props.project.techStack}</p>
				<p>Responsibilities:
					<ul>
						<li>{props.project.description}</li>
						{
							props.project
								.responsibilities.map(resposibility => {
									return <li > {resposibility}</li>
								})

						}
					</ul>
				</p>
			</div>
		</div>
	);

}