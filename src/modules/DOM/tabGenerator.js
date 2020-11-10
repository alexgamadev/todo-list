const TabGenerator = (() => {
    const generateProjectTab = (projectData) => {
        const projectTab = document.createElement("div");
        projectTab.classList.add("project-title");
        projectTab.classList.add("unselected");

        const arrow = document.createElement("i");
        arrow.classList.add("fas");
        arrow.classList.add("fa-angle-right");

        const title = document.createElement("span");
        title.innerText = projectData.name;

        projectTab.appendChild(arrow);
        projectTab.appendChild(title);
        

        return projectTab;
    };

    const generateTodoTab = (todoData) => {
        const tab = document.createElement("div");
        tab.classList.add("tab");
        tab.classList.add("unselected");

        const title = document.createElement("span");
        title.innerText = todoData.title;

        const cross = document.createElement("i");
        cross.classList.add("fas");
        cross.classList.add("fa-times");

        tab.appendChild(title);
        tab.appendChild(cross);

        return tab;
    };

    return {generateProjectTab, generateTodoTab};
})();

export {TabGenerator};