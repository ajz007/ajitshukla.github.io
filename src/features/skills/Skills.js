import react from 'react';
import '../../css/animate.css'
import '../../css/icomoon.css'
import '../../css/bootstrap.css'
import '../../css/style.css'

export default function Skills(){
    return(<div id="fh5co-skills" className="animate-box">
    <div className="container">
        <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2>Skills</h2>
            </div>
        </div>
        <div className="row row-pb-md">
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <div className="chart" data-percent="95"><span><strong>JAVA</strong>75%</span></div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <div className="chart" data-percent="70"><span><strong>Webservice</strong>70%</span></div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <div className="chart" data-percent="50"><span><strong>Spring Boot</strong>50%</span></div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <div className="chart" data-percent="50"><span><strong>Docker</strong>50%</span></div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <div className="chart" data-percent="50"><span><strong>Kubernetes</strong>20%</span></div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <div className="chart" data-percent="50"><span><strong>HTML</strong>50%</span></div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <div className="chart" data-percent="60"><span><strong>Angular</strong>40%</span></div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <div className="chart" data-percent="60"><span><strong>React</strong>30%</span></div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <div className="chart" data-percent="60"><span><strong>Rx Java</strong>30%</span></div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <div className="chart" data-percent="70"><span><strong>JDBC</strong>70%</span></div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 text-center">
                <div className="chart" data-percent="60"><span><strong>Oracle</strong>60%</span></div>
            </div>
            
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="progress-wrap">
                    <h3><span className="name-left">HTML5/CSS3</span><span className="value-right">50%</span></h3>
                    <div className="progress">
                      <div className="progress-bar progress-bar-1 progress-bar-striped active" role="progressbar"
                      aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:"50%"}}>
                      </div>
                    </div>
                </div>
                <div className="progress-wrap">
                    <h3><span className="name-left">JAVA</span><span className="value-right">75%</span></h3>
                    <div className="progress">
                      <div className="progress-bar progress-bar-2 progress-bar-striped active" role="progressbar"
                      aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{"width":"95%"}}>
                      </div>
                    </div>
                </div>
                <div className="progress-wrap">
                    <h3><span className="name-left">Spring Boot</span><span className="value-right">50%</span></h3>
                    <div className="progress">
                      <div className="progress-bar progress-bar-3 progress-bar-striped active" role="progressbar"
                      aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{"width":"50%"}}>
                      </div>
                    </div>
                </div>
                
            </div>
            <div className="col-md-6">
                <div className="progress-wrap">
                    <h3><span className="name-left">Docker</span><span className="value-right">50%</span></h3>
                    <div className="progress">
                      <div className="progress-bar progress-bar-4 progress-bar-striped active" role="progressbar"
                      aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{"width":"50%"}}>
                      </div>
                    </div>
                </div>
                <div className="progress-wrap">
                    <h3><span className="name-left">Kubernetes</span><span className="value-right">20%</span></h3>
                    <div className="progress">
                      <div className="progress-bar progress-bar-5 progress-bar-striped active" role="progressbar"
                      aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{"width":"50%"}}>
                      </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>);
}