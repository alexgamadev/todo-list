const TodoDOM = (() => {
    /*=============================================
    Create tab, delete tab, get tab
    ===============================================*/

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

    return {generateTodoTab};
})();

export {TodoDOM};