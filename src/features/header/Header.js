import react from 'react';
import '../../css/animate.css'
import '../../css/icomoon.css'
import '../../css/bootstrap.css'
import '../../css/style.css'
import myBgPhoto from "../../images/nithin.jpeg"
import myThumbNailPhoto from "../../images/nithin.jpg"

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
							<h3><span>Java Full Stack Developer</span></h3>
							<p>
								<ul className="fh5co-social-icons">
									<li><a href="https://twitter.com/AjShukla07"><i className="icon-twitter2"></i></a></li>
									<li><a href="https://www.facebook.com/nithin.chiku"><i className="icon-facebook2"></i></a></li>
									<li><a href="https://www.linkedin.com/in/ajit-shukla-a36171171/"><i className="icon-linkedin2"></i></a></li>
									<li><a href="https://github.com/ajz007"><i className="icon-github2"></i></a></li>
									<li><a href="https://www.instagram.com/nithin.chikku/"><i className="icon-instagram2"></i></a></li>
									<li><a href="https://averagetechie.medium.com/"><i className="icon-instagram2"></i></a></li>
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


