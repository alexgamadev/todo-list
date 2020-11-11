const TabGenerator = (() => {
    const generateProjectTab = (projectData) => {
        //Create project tab container
        const projectTab = document.createElement("div");
        projectTab.classList.add("project-container");
        projectTab.attributes["data-projectId"] = projectData.id;

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
        name.innerText = projectData.name;

        //Add arrow and title to container
        projectTitle.appendChild(arrow);
        projectTitle.appendChild(name);

        //Create container where project list tabs will be stored
        const listContainer = document.createElement("div");
        listContainer.classList.add("list-container");
        listContainer.classList.add("closed");

        //Fill project container
        projectTab.appendChild(projectTitle);
        projectTab.appendChild(listContainer);

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

    return {generateProjectTab, generateTodoTab};
})();

export {TabGenerator};