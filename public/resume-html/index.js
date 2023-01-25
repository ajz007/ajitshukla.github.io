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
    date_range.innerHTML = project.durationTo ? project.durationFrom + "&nbsp; - &nbsp;" + project.durationTo : "From " + project.durationFrom;
 
    
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
    li.appendChild(p2_skills);
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
            "name" : "Options Clearing Corporation, US",
            "description" : "Working as Scrum Master – Developer for Nasdaq’s Options Clearing Project",
            "businessDomain" : "Capital Markets",
            "durationFrom" : "Nov 2022",
            "durationTo" : "",
            "isCurrent" : true,
            "role": "Scrum Master and Individual Contributor",
            "responsibilities" : ["Planning, designing and execution of project deployment on kubernetes and aws", ""],
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
        "role": "Scrum Master and Individual Contributor",
        "responsibilities" : ["Story creation", "estimation", "monitoring and closure of stories along with working as a developer"],
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
        "role": "Engineering Manager",
        "responsibilities" : ["Ensure the failover is created", "tested and handed over to the development team"],
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
        "role": "Solutions Architect for Product, Tech lead for implementation",
        "responsibilities" : ["Design Restful apis for the application middleware which can be consumed by any third party application/UI "],
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
        "role": "Solutions Architect for Product, Tech lead for implementation",
        "responsibilities" : ["As Team Lead: Developed data migration scripts, code fixes",
    "As Solutions Architect: Study the RFP, help in responding to RFPs, propose tech stack , effort estimation, review any changes to product."],
        "location" : "Mumbai",
        "techStack" : ["Shell Scripting", "SQL", "DB Procedures", "DB Functions"]
    },
    {
        "id":2,
        "name" : "Retail and SME Banking for People's State Bank, US",
        "description" : "Retail and SME Banking for People's State Bank, US",
        "businessDomain" : "Banking",
        "durationFrom" : "Feb 2019",
        "durationTo" : "Feb 2019",
        "isCurrent" : false,
        "role": "Solutions Architect for Product, Tech lead for implementation",
        "responsibilities" : ["As Team Lead: Requirement gathering, design and development of the solution, code review, all third party integration",
    "Study the RFP, help in responding to RFPs, propose tech stack , effort estimation, review any changes to product."],
        "location" : "Mumbai",
        "techStack" : ["Integration of OpenId Connect and OAuth2"]
    },{
        "id":1,
        "name" : "Customer On-boarding and Field Investigation App for Mahindra Finance , Mumbai",
        "description" : "Customer On-boarding and Field Investigation App for Mahindra Finance , Mumbai",
        "businessDomain" : "Banking",
        "durationFrom" : "Dec 2018",
        "durationTo" : "Feb 2019",
        "isCurrent" : false,
        "role": "Solutions Architect for Product, Tech lead for implementation",
        "responsibilities" : ["As Team Lead: Requirement gathering, design and development of the solution, code review, all third party integration",
    "Study the RFP, help in responding to RFPs, propose tech stack , effort estimation, review any changes to product."],
        "location" : "Mumbai",
        "techStack" : ["Couchbase Server", "Camel, Springs framework 5" , "Hibernate 4",  "Java 8", "Jboss eap 7.1", "Apache 2.4", "REST Based third party service integration", "SOAP based integration with Core Banking System", "Git", "Maven", "Jenkins"]
    },
    {
        "id":0,
        "name" : "Performance scripts and database loader for London Mutual Credit Union, UK",
        "description" : "Performance scripts and database loader for London Mutual Credit Union, UK",
        "businessDomain" : "Banking",
        "durationFrom" : "Dec 2018",
        "durationTo" : "Feb 2019",
        "isCurrent" : false,
        "role": "Tech lead",
        "responsibilities" : ["Role as Team Lead: Requirement gathering, design and development of the solution, code review"],
        "location" : "Mumbai",
        "techStack" : ["IBM RPT",  "Java8"]
    },
    ];

    return projects;
}