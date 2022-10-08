import React from 'react'
import myBgPhoto from "../../images/pexels-pixabay-270360.jpg"
import myThumbNailPhoto from "../../images/ajit.jpeg"

export default function Header() {


    return(
        <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" style={{ backgroundImage: `url(${myBgPhoto})` }} > 
		<div className="overlay"></div>
		<div className="container">
			<div className="row">
				<div className="col-md-8 col-md-offset-2 text-center">
					<div className="display-t js-fullheight">
						<div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
							<div className="profile-thumb" style={{ backgroundImage: `url(${myThumbNailPhoto})` }}></div> 
							<h1><span>Ajit Shukla</span></h1>
							<h3><span>A Java Full Stack Generalist/Backend Specialist</span></h3>
							<br/>
							<p> 
								<ul className="fh5co-social-icons">
									<li><a href="https://twitter.com/AjShukla07" target="_blank" rel="noreferrer"><i className="icon-twitter2"></i></a></li>									
									<li><a href="https://www.linkedin.com/in/ajit-shukla-a36171171/" target="_blank" rel="noreferrer"><i className="icon-linkedin2"></i></a></li>
									<li><a href="https://github.com/ajz007" target="_blank" rel="noreferrer"><i className="icon-github2"></i></a></li>
									
								</ul>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
    );

}


