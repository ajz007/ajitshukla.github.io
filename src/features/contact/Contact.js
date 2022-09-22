import react from 'react';
import '../../css/animate.css'
import '../../css/icomoon.css'
import '../../css/bootstrap.css'
import '../../css/style.css'

export default function Contact() {

    return(

        <div id="fh5co-about" className="animate-box">
		<div className="container">
			<div className="row">
				<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<h2>About Me</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">
					<ul className="info">
						<li><span className="first-block">Full Name:</span><span className="second-block">Nithin Prasad</span></li>
						<li><span className="first-block">Phone:</span><span className="second-block">+372 55591434</span></li>
						<li><span className="first-block">Phone:</span><span className="second-block">+91 9567320219</span></li>
						<li><span className="first-block">Email:</span><span className="second-block">nithinprasad549@yahoo.com</span></li>
						<li><span className="first-block">Website:</span><span className="second-block">thenithinprasad.com</span></li>
						<li><span className="first-block">Address:</span><span className="second-block">Padinjattedathu House , <br/> Pandanadu West Po , Chengannur,Alappuzha 689506</span></li>
					</ul>
				</div>
				<div className="col-md-8">
					<h2>Hello There!</h2>
					<p>Enthusiastic and reliable Java Developer with a strong banking knowledge base. 6+ years of industry experience as part of a computer program development team. Served as a technical lead for 3+ years and have good onsite experience..</p>
					<p>
						<ul className="fh5co-social-icons">
							<li><a href="https://twitter.com/NITHINPRASAD2"><i className="icon-twitter2"></i></a></li>
							<li><a href="https://www.facebook.com/nithin.chiku"><i className="icon-facebook2"></i></a></li>
							<li><a href="https://www.linkedin.com/in/nithin-prasad/"><i className="icon-linkedin2"></i></a></li>
							<li><a href="https://github.com/nithinprasad/"><i className="icon-github2"></i></a></li>
							<li><a href="https://www.instagram.com/nithin.chikku/"><i className="icon-instagram2"></i></a></li>
						</ul>
					</p>
				</div>
			</div>
		</div>
	</div>
    );
}