fetch('./info.json')  // Updated file name
    .then(response => response.json())
    .then(data => {
        // Update content for the element with id="content"
        

        // Update content for the element with id="name_info"
        document.getElementById('name_info').innerHTML = `
            <h1>${data.name}</h1>
            <p>${data.mail}</p>
            
        `;

        const educationList = document.getElementById('education_list');
        data.education.forEach(entry => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${entry.degree}</strong> <br> ${entry.school} <br> Graduated ${entry.graduationYear}`;
            educationList.appendChild(listItem);
        });


        const Skillslist = document.getElementById('Skills_list');
        data.sill_list.forEach(entry => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${entry.fild}</strong> <br> ${entry.sill} `;
            Skillslist.appendChild(listItem);
        });


        const certificationsList = document.getElementById('certifications_list');
        data.certifications_list.forEach(entry => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${entry.name}  </strong>  <a href="${entry.link}" target="_blank"> Link </a>`;
            certificationsList.appendChild(listItem);
        });

        // Display languages information
        const languagesList = document.getElementById('LANGUAGES_list');
        data.languages.forEach(language => {
            const listItem = document.createElement('li');
            listItem.textContent = language;
            languagesList.appendChild(listItem);
        });




    })
    .catch(error => console.error('Error fetching data:', error));

    document.addEventListener('DOMContentLoaded', function() {
        fetch('./info.json')
            .then(response => response.json())
            .then(data => {
                const projectsData = data.projects || []; // Ensure projectsData is an array, handle if it's not available
    
                const projectsList = document.getElementById('PROJECTS_list');
    
                projectsData.forEach((project, index) => {
                    let projectEntry = document.createElement('div');
                    projectEntry.classList.add('project-entry');
                    projectEntry.setAttribute('id', 'project-entry-' + index);
    
                    let projectDate = document.createElement('div');
                    projectDate.innerHTML = `<br>${project.date}`;

                    projectDate.classList.add('project-date');
    
                    let projectName = document.createElement('div');
                    projectName.innerHTML = `<strong>${project.name}</strong><br> click on me <br><br>`;
                    projectName.classList.add('project-name');
    
                    let projectDescription = document.createElement('div');
                    if (Array.isArray(project.description)) {
                        // If description is an array, join the items into a string
                        projectDescription.innerHTML = project.description.map(item => `<p>${item}</p>`).join('');
                        projectDescription.innerHTML = project.description.join('<br>');
                    } else {
                        projectDescription.textContent = project.description;
                    }
                    projectDescription.style.display = 'none'; // Initially hide the description
    
                    // Click event to toggle the project description visibility
                    projectEntry.addEventListener('click', function() {
                        projectDescription.style.display = projectDescription.style.display === 'none' ? 'block' : 'none';
                    });
    
                    projectEntry.appendChild(projectDate);
                    projectEntry.appendChild(projectName);
                    projectEntry.appendChild(projectDescription);
    
                    projectsList.appendChild(projectEntry);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    });
    