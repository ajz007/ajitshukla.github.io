//import {projects} from "./mockProjects_copy"

function updateDate() {
    var date = curday("/");
    document.getElementById("currentDate").innerHTML = date;
}

var curday = function(sp){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+sp+dd+sp+yyyy);
    };

function createProjectList() {
    var projects = getMyProjects();

    projects.map(project => createProjectItem(project));

}

//for projectexp
function createProjectExperience() {
    var projects = getMyProjects();

    projects.map(project => createExperience(project));

}

function createExperience(project) {
    var projListHtmlObj = document.getElementById('experience_list');
    
    
    var title = document.createElement('p');
    var p1_role = document.createElement('b');
    var date_range = document.createElement('span');

    title.innerHTML = project.name;
    p1_role.innerHTML = project.role;
    date_range.innerHTML = project.durationTo ? project.durationFrom + " to " + project.durationTo : "From " + project.durationFrom;
 
    
    projListHtmlObj.appendChild(p1_role);
    projListHtmlObj.appendChild(title);
    projListHtmlObj.appendChild(date_range);
}

function createProjectItem(project) {
    var projListHtmlObj = document.getElementById('project_list');
    var li = document.createElement('li');

    var title = document.createElement('b');
    var p1_role = document.createElement('p');
    var p2_skills = document.createElement('p');
    var p3_resp = document.createElement('p');

    title.innerHTML = project.name;
    p1_role.innerHTML = project.role;
    p2_skills.innerHTML = project.techStack.map(skill => skill);
    p3_resp.appendChild(createResponsibilitiesList(project.responsibilities));

    li.appendChild(title);
    li.appendChild(p1_role);
    //li.appendChild(p2_skills);
    li.appendChild(p3_resp);   
    projListHtmlObj.appendChild(li);
}

function createResponsibilitiesList(responsibilities) {
    var ul = document.createElement('ul')

    responsibilities.map(responsibility => {

        let li = document.createElement('li')
        li.innerHTML = responsibility
        ul.append(li)
    })

    return ul
}


function getMyProjects() {
    
    var projects = [ 
        {
            "id":7,
            "name" : "Options Clearing Corporation(Infra), US",
            "description" : "Working as Scrum Master – Developer for Nasdaq’s Options Clearing Project",
            "businessDomain" : "Capital Markets",
            "durationFrom" : "Nov 2022",
            "durationTo" : "",
            "isCurrent" : true,
            "role": "Scrum Master and Individual Contributor (Nasdaq)",
            "responsibilities" : ["Successfully containerized the options trading platform using Docker, Kubernetes, k8s Operator",
            "Achieved the cross cluster communication using NodePort, external name and K8s ingress and helped save cost by avoiding a costly CNI solution",
            "Streamlined the jenkins pipeline by setting up groovy scripts for the pipeline"],
            "location" : "Mumbai",
            "techStack" : ["Docker","Kubernetes","AWS", "AWS-EC2", "AWS-S3", "Terraform", "Rancher", "Jenkins", "Groovy", "Jinja2"]
        },
        {
        "id":6,
        "name" : "Options Clearing Corporation, US",
        "description" : "Working as Scrum Master – Developer for Nasdaq’s Options Clearing Project",
        "businessDomain" : "Capital Markets",
        "durationFrom" : "Feb 2021",
        "durationTo" : "",
        "isCurrent" : false,
        "role": "Scrum Master and Individual Contributor (Nasdaq)",
        "responsibilities" : ["Helped build an event driven asynchronous communication between microservices using Kafka",
                            "Increased team's effectiveness and cost of thirdparty services by implementing a mock server for validating the third party apis",
                            "Created higher order components with React and helped improve re-usability on the UI side"],
        "location" : "Mumbai",
        "techStack" : ["Micro services","CDB (Propriety No Sql DB)","Apache Kafka", "IBM MQ", "Java 11", "OAPI", "Git", "Gradle", "Jenkins", "React", "Redux"]
    }, {
        "id":5,
        "name" : "Brunei Stock Exchange (BNX), Brunei ",
        "description" : "Establish Failover for Brunei Stock Exchange (BNX)",
        "businessDomain" : "Capital Markets",
        "durationFrom" : "April 2021",
        "durationTo" : "Dec 2021",
        "isCurrent" : false,
        "role": "Engineering Manager (NSE It)",
        "responsibilities" : ["Created a master slave automated failover cluster for Brunei Stock Exchange using keepalived and shell scripting",
                            "Created a propriety chat application using React, Javascript and Sprintboot",
                            "Managed a team of developers and ensured they are motivated and up to speed with the daily and longer scheme of things"],
        "location" : "Mumbai",
        "techStack" : ["Redhat Linux", "Keepalived", "Shell scripting"]
    },{
        "id":4,
        "name" : "Mercantile Bank limited, South Africa ",
        "description" : "Re-platforming and Apification of Mercantile Bank limited Application, South Africa ",
        "businessDomain" : "Banking",
        "durationFrom" : "Jan 2020",
        "durationTo" : "Feb 2021",
        "isCurrent" : false,
        "role": "Solutions Architect for Product, Tech lead for implementation (TCS)",
        "responsibilities" : ["Design Restful apis(OAPI) for the application middleware which can be consumed by any third party application/UI ",
                            "Re-engineered the Servlets, JSP based monolithic application to support RESTful, modularised frontend application",
                            "Participated in the core disussions and spearheading implementation of upgrading from the monolith application to a microservice architecture"],
        "location" : "Mumbai",
        "techStack" : ["Springs framework 5" , "Hibernate 4",  "Java 8", "Jboss eap 7.1", "Apache 2.4", "RESTful Third party service integration", "SOAP based integration with Core Banking System", "Git", "Maven", "Jenkins"]
    }, {
        "id":3,
        "name" : "London Mutual Credit Union, UK",
        "description" : "Retail Banking Application for London Mutual Credit Union , UK",
        "businessDomain" : "Banking",
        "durationFrom" : "Feb 2019",
        "durationTo" : "Jan 2020",
        "isCurrent" : false,
        "role": "Solutions Architect for Product, Tech lead for implementation (TCS)",
        "responsibilities" : ["Saved network bandwidth and related cost for the one of the customers by implementing caching and compression for their application",
                                "Implemented biometric and oauth based authentication in Android and IOS apps with a third pary security provider"],
        "location" : "Mumbai",
        "techStack" : ["Javascript", "React", "Spring MVC", "OAuth 2", "OpenId Connect"]
    },
    {
        "id":2,
        "name" : "SME Banking for Peoples State Bank, US",
        "description" : "SME Banking for Peoples State Bank, US",
        "businessDomain" : "Banking",
        "durationFrom" : "Feb 2019",
        "durationTo" : "Feb 2019",
        "isCurrent" : false,
        "role": "Solutions Architect for Product, Tech lead for implementation (TCS)",
        "responsibilities" : ["Designed and implemented Batch file processor for salary processing",
                                "Fine tuning of the queries for performance enhancement",
                            "Added OWASP top 10 security recommendations as part of the product"],
        "location" : "Mumbai",
        "techStack" : ["Servlets","Design Patterns", "Oracle", "Sql", "OAuth 2", "OpenId Connect"]
    },{
        "id":1,
        "name" : "Customer On-boarding and Field Investigation App for Mahindra Finance , Mumbai",
        "description" : "Customer On-boarding and Field Investigation App for Mahindra Finance , Mumbai",
        "businessDomain" : "Banking",
        "durationFrom" : "Dec 2018",
        "durationTo" : "Feb 2019",
        "isCurrent" : false,
        "role": "Solutions Architect for Product, Tech lead for implementation (TCS)",
        "responsibilities" : ["Successfully designed the offline commercial vehicle loan application",
                                ],
        "location" : "Mumbai",
        "techStack" : ["Couchbase Server", "Apache Camel", "Springs framework 5" , "Hibernate 4",  "Java 8", "Jboss eap 7.1", "Apache 2.4", "REST", "SOAP", "Git", "Maven", "Jenkins"]
    },
    {
        "id":0,
        "name" : "Performance scripts and database loader for London Mutual Credit Union, UK",
        "description" : "Performance scripts and database loader for London Mutual Credit Union, UK",
        "businessDomain" : "Banking",
        "durationFrom" : "Dec 2018",
        "durationTo" : "Feb 2019",
        "isCurrent" : false,
        "role": "Tech lead (TCS)",
        "responsibilities" : ["Created database loader and migration scripts for a product upgrade",
                            "Created the performance scripts using IBM RPT tool which helped us in identifying key bottlenecks and improvement areas in the product",
                        "Fine tuned the SQL queries to improve the overall perfomance as per the needs of the implemenation"],
        "location" : "Mumbai",
        "techStack" : ["IBM RPT",  "Java8"]
    },
    ];

    return projects;
}