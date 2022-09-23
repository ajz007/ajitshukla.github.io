import react from 'react';
import '../../css/animate.css'
import '../../css/icomoon.css'
import '../../css/bootstrap.css'
import '../../css/style.css'
import RoadMapImage from "../../images/roadmap.jpeg"


export default function RoadMap(){
    return(
        <div id="fh5co-about" className="animate-box">
		<div className="container">
			<div className="row">
				<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
					<h2>My Road Map</h2>
				</div>
			</div>
			<div className="row">
				<div className="container"> 
				<div className="col-md-12">
					<img src={RoadMapImage} style={{width: "100%"}} className="img-fluid mx-auto" alt="Responsive image" />
				</div>
				</div>
			</div>
		</div>
	</div>
    );
}