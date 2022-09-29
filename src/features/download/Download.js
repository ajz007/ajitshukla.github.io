import React from 'react';
import '../../css/animate.css'
import '../../css/icomoon.css'
import '../../css/bootstrap.css'
import '../../css/style.css'

export default function Download(){
    return (
        <div id="fh5co-started" className="fh5co-bg-dark">
		<div className="overlay"></div>
		<div className="container">
			<div className="row animate-box">
				<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<h2>Download Resume</h2>
					<p>Please find the printable resume</p>
					<p><a href="resume-html/index.html" target="_blank" className="btn btn-default btn-lg">Download</a></p>
				</div>
			</div>
		</div>
	</div>
    );
}