const postings = [
    {
        company: "Photosnap",
        title: "Senior Frontend Developer",
        location: "USA only",
        createdAt: "1d ago",
        new: "true",
        featured: "true",
        job_type: "Full Time",
        tags: ["Frontend", "Senior", "HTML", "CSS", "Javascript"],
        image: "images/blackpink.jpg"
    },

    {
        company: "Manage",
        title: "Fullstack Developer",
        location: "Remote",
        createdAt: "1d ago",
        new: "true",
        featured: "true",
        job_type: "Part Time",
        tags: ["Fullstack", "Midweight", "Python", "React"],
        image: "images/brown.jpg"
    },

    {
        company: "Account",
        title: "Junior Frontend Developer",
        location: "USA only",
        createdAt: "2d ago",
        new: "true",
        featured: "false",
        job_type: "part Time",
        tags: ["Frontend", "junior", "React", "Sass", "Javascript"],
        image: "images/purpleslime.jpg"
    },

    {
        company: "Myhome",
        title: "junior Frontend Developer",
        location: "USA only",
        createdAt: "5d ago",
        new: "false",
        featured: "false",
        job_type: "Contract",
        tags: ["Frontend", "junior", "CSS", "Javascript"],
        image: "images/butterflies.jpg"
    },

    {
        company: "Loop Studios",
        title: "Software Engineer",
        location: "Worldwide",
        createdAt: "1d ago",
        new: "false",
        featured: "false",
        job_type: "Full Time",
        tags: ["Fullstack", "Midweight", "Javascript", "Sass", "Ruby"],
        image: "images/pinklines.jpg"
    },

    {
        company: "Facelt",
        title: "Junior Frontend Developer",
        location: "UK only",
        createdAt: "1d ago",
        new: "false",
        featured: "false",
        job_type: "Full Time",
        tags: ["Backend", "Junior", "Ruby", "RoR"],
        image: "images/blueline.jpg"
    },

    {
        company: "Shortly",
        title: "Junior Developer",
        location: "Worldwide",
        createdAt: "2w ago",
        new: "false",
        featured: "false",
        job_type: "Full Time",
        tags: ["Frontend", "Junior", "HTML", "Sass", "Javascript"],
        image: "images/greenflow.jpg"
    },

    {
        company: "Insure",
        title: "Junior Frontend Developer",
        location: "USA only",
        createdAt: "1d ago",
        new: "false",
        featured: "false",
        job_type: "Full Time",
        tags: ["Frontend", "Junior", "Vue", "Javascript", "Sass"],
        image: "images/hearts.jpg"
    },

    {
        company: "Eyecam Co",
        title: "Full Stack Engineer",
        location: "Worldwide",
        createdAt: "1d ago",
        new: "false",
        featured: "false",
        job_type: "Full Time",
        tags: ["Fullstack", "Midweight", "Javascript", "Django", "Python"],
        image: "images/mix.jpg"
    },

    {
        company: "The Air Filter Company",
        title: "Front-end Dev",
        location: "Worldwide",
        createdAt: "1m ago",
        new: "false",
        featured: "false",
        job_type: "Part Time",
        tags: ["Frontend", "Junior", "React", "Sass", "Javascript"],
        image: "images/purple.jpg"
    }
];



let wrap = document.getElementById("wrap");


postings.map((item, index) => {
    let content = document.createElement("div");
    content.classList.add("content");


    // --------------- JOB ITEM -------------------

    let job_item = document.createElement("div");
    job_item.classList.add("job-item");
    let data = `
    `;
    job_item.innerHTML = data;


    // --------------- IMAGE-----------------------

    let image = document.createElement("div");
    image.classList.add("content-img");
    image.innerHTML = `<img src = ${item.image} alt= "">`

    job_item.append(image)


    // ---------------------ACCOUNT INFO-------------

    let account_info = document.createElement("div");
    account_info.classList.add("account-info");

    job_item.append(account_info)


    // ----------------- NAME -----------------------

    let name = document.createElement("div");
    name.classList.add("name");

    name.innerHTML = ` <h2> ${item.company}</h2> 

    <p class= ${item.new ? "" : "hidden"}>New!</p>

    <p class= ${item.featured ? "" : "hidden"}>Featured</p>

     `
    
    account_info.append(name)


    // ------------------ TITLE-----------------------

    let title = document.createElement("div");
    title.classList.add("title");
    title.innerHTML = ` <h3> ${item.title}</h3>
    `

    account_info.append(title)


    // -------------------- LOCATION------------------
    
    let location = document.createElement("div");
    location.classList.add("location");
    location.innerHTML = ` <p> ${item.location}</p>
    <p> ${item.createdAt}</p>
    <p> ${item.job_type}</p>
`
    account_info.append(location);

    wrap.append(content);
    content.append(job_item)


    // ------------------ TAGS---------------------------
    
    let tags = document.createElement("div");
    tags.classList.add("tags");
    tags.innerHTML = ` <p>${item.tags[0]} </p>
    <p>${item.tags[1]} </p>
    <p>${item.tags[2]} </p>
    <p>${item.tags[3]} </p>
    <p>${item.tags[4]} </p>
    `

    content.append(tags);

});



// ---------------------------- SEARCH FUNCTION---------------------


// --------------QUERY SELECTORS----------------
const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();

    const storeitems = document.getElementById("wrap")

    const tech_field = document.querySelectorAll(".content")

    const tname = storeitems.getElementsByClassName("tags")


// -------------------FUNCTION -----------------

    for(var i=0; i< tname.length; i++){
        let match = tech_field[i].getElementsByClassName("tags")[0];

        if(match){
           let textvalue =  match.textContent || match.innerHTML

           if(textvalue.toUpperCase().indexOf(searchbox) > -1 ){
            tech_field[i].style.display = "";
           }
           else{
            tech_field[i].style.display = "none";
           }
        }
    }

}




