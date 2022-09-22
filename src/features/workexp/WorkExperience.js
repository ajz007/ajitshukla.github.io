import react from 'react';
import '../../css/animate.css'
import '../../css/icomoon.css'
import '../../css/bootstrap.css'
import '../../css/style.css'


export default function WorkExperience(){

    return (
        <div id="fh5co-resume" className="fh5co-bg-color">
		<div className="container">
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
						<li className="animate-box timeline-unverted">
							<div className="timeline-badge"><i className="icon-suitcase"></i></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">Onsite Technical Lead</h3>
									<span className="company">Luminor Bank Estonia - TCS Consultant - 2021 - Current</span>
								</div>
								<div className="timeline-body">
									<p>Worked as a consultant for Luminor Bank in Estonia </p>
								</div>
							</div>
						</li>
						<li className="timeline-inverted animate-box">
							<div className="timeline-badge"><i className="icon-suitcase"></i></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">Technical Lead</h3>
									<span className="company">TCS - 2018 - 2020</span>
								</div>
								<div className="timeline-body">
									<p>Have acted as Technical lead for BSP Implementation</p>
								</div>
							</div>
						</li>
						<li className="animate-box timeline-unverted">
							<div className="timeline-badge"><i className="icon-suitcase"></i></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">Java Devloper</h3>
									<span className="company">TCS - 2015 - 2018</span>
								</div>
								<div className="timeline-body">
									<p>Have worked as a Java Devloper for Multiple Implementation</p>
								</div>
							</div>
						</li>

						<br/>
						<li className="timeline-heading text-center animate-box">
							<div><h3>Education</h3></div>
						</li>
						<li className="timeline-inverted animate-box">
							<div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">Bachelors Degree</h3>
									<span className="company">CUSAT - 2011 - 2015</span>
								</div>
								<div className="timeline-body">
									<p>Completed Bachelor of Technology in Computer Science And Enginnering at College of Engineering Chengannur</p>
								</div>
							</div>
						</li>
						<li className="animate-box timeline-unverted">
							<div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">Higher Secondary</h3>
									<span className="company">Kerala State - 2009 - 2011</span>
								</div>
								<div className="timeline-body">
									<p>Completed Higer Secondary in Computer Science at DBHSS Parumala</p>
								</div>
							</div>
						</li>
						<li className="timeline-inverted animate-box">
							<div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h3 className="timeline-title">SSLC</h3>
									<span className="company">Kerala State - 2008</span>
								</div>
								<div className="timeline-body">
									<p>Completed SSLC  at DBHSS Parumala</p>
								</div>
							</div>
						</li>
			    	</ul>
				</div>
			</div>
		</div>
	</div>
    );
}