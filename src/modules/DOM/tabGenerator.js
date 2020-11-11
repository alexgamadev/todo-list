const TabGenerator = (() => {
    const generateProjectTab = (Project) => {
        //Create project tab container
        const projectTab = document.createElement("div");
        projectTab.classList.add("project-container");
        projectTab.attributes["data-projectId"] = Project.id;

        //Create container for title elements
        const projectTitle = document.createElement("div");
        projectTitle.classList.add("project-title");
        projectTitle.classList.add("unselected");

        //Create project selection arrow
        const arrow = document.createElement("i");
        arrow.classList.add("fas");
        arrow.classList.add("fa-angle-right");

        //Create title name
        const name = document.createElement("span");
        name.innerText = Project.name;

        //Add arrow and title to container
        projectTitle.appendChild(arrow);
        projectTitle.appendChild(name);

        //Create container where project list tabs will be stored
        const listContainer = document.createElement("div");
        listContainer.classList.add("list-container");
        listContainer.classList.add("closed");
 
        projectTab.addEventListener('click', (({currentTarget}) => {
            toggleSelected(currentTarget, Project);
        }));

        /* ================================================================== */

        //Fill project container
        projectTab.appendChild(projectTitle);
        projectTab.appendChild(listContainer);

        Project.addTabDOM(projectTab);

        return projectTab;
    };

    const generateTodoTab = (todoData) => {
        //Create tab container
        const tab = document.createElement("div");
        tab.classList.add("tab");
        tab.classList.add("unselected");

        //Create tab title span
        const title = document.createElement("span");
        title.innerText = todoData.title;

        //Create tab close button
        const closeButton = document.createElement("i");
        closeButton.classList.add("fas");
        closeButton.classList.add("fa-times");

        //Fill tab container
        tab.appendChild(title);
        tab.appendChild(closeButton);

        return tab;
    };

    const toggleSelected = (currentTarget, Project) => {
        let projectTitle = currentTarget.children[0];

        if(Project.isEmpty) { return; }
        let classList = projectTitle.classList;

        if(classList.contains("unselected")) {
            classList.remove("unselected");
            classList.add("selected");

            //Move to own functions
            projectTitle.children[0].classList.remove("fa-angle-right");
            projectTitle.children[0].classList.add("fa-angle-down");
            currentTarget.children[1].classList.remove("closed");
            currentTarget.children[1].classList.add("opened");
        }
        else if(classList.contains("selected")) {
            classList.add("unselected");
            classList.remove("selected");

            //Move to own functions
            projectTitle.children[0].classList.add("fa-angle-right");
            projectTitle.children[0].classList.remove("fa-angle-down");
            currentTarget.children[1].classList.remove("opened");
            currentTarget.children[1].classList.add("closed"); 
        }
    }

    return {generateProjectTab, generateTodoTab};
})();

export {TabGenerator};