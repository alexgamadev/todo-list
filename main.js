(()=>{"use strict";class e{constructor(e,t){this._name=e,this._todos=t,this._isOpen=!1}get name(){return this._name}get todos(){return this._todos}get isEmpty(){return this._todos<=0}get isOpen(){return this._isOpen}set name(e){this._name=e}set isOpen(e){this._isOpen=e}addTodo(e){this._todos.push(e)}removeTodo(e){let t=this._todos.indexOf(e);this._todos.splice(t,1)}addTabDOM(e){this._tabDOM=e}get tabDOM(){return this._tabDOM}}class t{constructor(e,t,n=new Map){this._title=e,this._notes=t,this._checklist=n,this._priority=0}get title(){return this._title}get notes(){return this._notes}get priority(){switch(this._priority){case 0:return"None";case 1:return"Low";case 2:return"Medium";case 3:return"High";default:return"Invalid"}}get checklist(){return this._checklist}set title(e){this._title=e}set notes(e){this._notes=e}set priority(e){e>=0&&e<=3&&(this._priority=e)}addChecklistItem(e,t){_checklist.set(e,t)}removeChecklistItem(e){_checklist.remove(e)}}const n=e=>{const t=document.createElement("div");t.classList.add("tab"),t.classList.add("unselected");const n=document.createElement("span");n.innerText=e.title,t.addEventListener("click",(()=>{c.selectTodo(e)}));const s=document.createElement("i");return s.classList.add("fas"),s.classList.add("fa-times"),s.addEventListener("click",(t=>{t.stopPropagation(),c.closeTodo(e)})),t.appendChild(n),t.appendChild(s),t};class s{static RemoveChildNodes(e){for(;e.firstChild;)e.removeChild(e.firstChild)}static CreateElementFromHTML(e){const t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild}}const i=(()=>{const e=document.getElementById("display-panel");e.getElementsByClassName("top-bar")[0].getElementsByClassName("fa-times")[0].addEventListener("click",(()=>{i()}));const t=document.getElementById("panel-content");function n(){return!e.classList.contains("hidden")}function i(){e.classList.add("hidden"),s.RemoveChildNodes(t)}return{confirmationPanel:function(s,d){if(n())return;e.classList.add("info"),e.classList.remove("hidden");const c=document.createElement("div");c.innerText="Are you sure you want to delete this todo?";const a=document.createElement("div");a.classList.add("buttons");const o=document.createElement("button");o.classList.add("btn","btn-error"),o.innerText="Delete",o.addEventListener("click",(()=>{d(),i()}));const l=document.createElement("button");return l.classList.add("btn"),l.innerText="Cancel",l.addEventListener("click",(({target:e})=>{i()})),a.appendChild(o),a.appendChild(l),t.appendChild(c),t.appendChild(a),t},createPanel:function(s,d){if(n())return;e.classList.add("info"),e.classList.remove("hidden");const c=document.createElement("label");c.classList.add("align-left"),c.innerText=s;const a=document.createElement("input");a.type="text",a.placeholder="Title";const o=document.createElement("div");o.classList.add("buttons");const l=document.createElement("button");l.classList.add("btn","btn-success"),l.innerText="Create",l.addEventListener("click",(()=>{d(a.value),i()}));const r=document.createElement("button");return r.classList.add("btn"),r.innerText="Cancel",r.addEventListener("click",(({target:e})=>{i()})),o.appendChild(l),o.appendChild(r),t.appendChild(c),t.appendChild(a),t.appendChild(o),t}}})(),d=(()=>{const e=e=>{const t=document.createElement("div");t.classList.add("notes-container");const n=document.createElement("h3");n.innerText="Notes";const s=document.createElement("textarea");return s.classList.add("notes"),s.value=e.notes,s.addEventListener("focusout",(function(){console.log(s.value),e.notes=s.value})),t.appendChild(n),t.appendChild(s),t},t=e=>{const t=document.createElement("div");t.classList.add("checklist-container");const c=document.createElement("div");c.classList.add("list-header");const a=document.createElement("h3");a.innerText="Checklist";const o=document.createElement("ul"),l=s.CreateElementFromHTML('<i class="fas fa-plus" aria-hidden="true"></i>');return l.addEventListener("click",(()=>{i.createPanel("Enter Checklist Item Title:",(t=>{e.checklist.set(t,!1),d.addChecklistItem(e,o,!1,t)}))})),c.appendChild(a),c.appendChild(l),s.CreateElementFromHTML('<i class="fas fa-check-circle item-icon"></i>'),s.CreateElementFromHTML('<i class="fas fa-times-circle item-icon"></i>'),e.checklist?.size&&e.checklist.forEach((function(t,s){n(e,o,t,s)})),t.appendChild(c),t.appendChild(o),t};function n(e,t,n,d){const c=document.createElement("li");if(n){c.classList.add("checked");const e=s.CreateElementFromHTML('<i class="fas fa-check-circle item-icon"></i>');c.appendChild(e)}else{c.classList.add("unchecked");const e=s.CreateElementFromHTML('<i class="fas fa-times-circle item-icon"></i>');c.appendChild(e)}c.addEventListener("click",(function({currentTarget:t}){let n=t.classList;const s=t.querySelector(".item-icon");n.contains("checked")?(n.remove("checked"),n.add("unchecked"),s.classList.remove("fa-check-circle"),s.classList.add("fa-times-circle"),e.checklist.set(d,!1)):n.contains("unchecked")&&(n.remove("unchecked"),n.add("checked"),s.classList.add("fa-check-circle"),s.classList.remove("fa-times-circle"),e.checklist.set(d,!0))}));const a=document.createElement("span");a.innerText=d;const o=s.CreateElementFromHTML('<i class="fas fa-times" aria-hidden="true"></i>');o.classList.add("align-right"),o.addEventListener("click",(t=>{t.stopPropagation(),i.confirmationPanel("Are you sure you want to delete this item?",(()=>{console.log(d),console.log(e.checklist),e.checklist.delete(d),c.remove()}))})),c.appendChild(a),c.appendChild(o),t.appendChild(c)}return{generateEditor:n=>{const s=document.getElementById("notes-editor");s.appendChild((n=>{const s=document.getElementById("notes-content"),i=e(n),d=t(n);return s.appendChild(i),s.appendChild(d),s})(n)),s.appendChild((e=>{const t=document.getElementById("notes-details");return t.innerHTML='<div>\n            <h3>Due Date</h3>\n            <input type="date" class="due-date">\n            <div id="priority-title">\n                <h3>Priority:</h3>\n                <h3 class="priority-medium">Medium</h3>\n            </div>\n            <div id="priority-selection">\n                <button class="priority-high tooltip">\n                    <span class="tooltiptext">High</span>\n                </button>\n                <button class="priority-medium tooltip">\n                    <span class="tooltiptext">Medium</span>\n                </button>\n                <button class="priority-low tooltip">\n                    <span class="tooltiptext">Low</span>\n                </button>\n            </div>\n            </div>',t})())},clearEditor:()=>{const e=document.getElementById("notes-content");s.RemoveChildNodes(e);const t=document.getElementById("notes-details");s.RemoveChildNodes(t)},addChecklistItem:n}})(),c=(()=>{let e,t=[],s=[];const i=document.getElementById("notes-explorer").children[0];function c(n){if(void 0!==e){let n=t.indexOf(e);a(s[n])}let i=t.indexOf(n);a(s[i]),e=n,d.clearEditor(),d.generateEditor(n)}function a(e){let t=e.classList;t.contains("unselected")?(t.remove("unselected"),t.add("selected")):t.contains("selected")&&(t.add("unselected"),t.remove("selected"))}function o(e){return!!t.includes(e)}return{openTodo:function(e){var d;o(e)?c(e):(d=n(e),i.appendChild(d),s.push(d),t.push(e),c(e))},closeTodo:function(n){if(!o(n))return;let i=t.indexOf(n);t.splice(i,1),s[i].remove(),s.splice(i,1),n===e&&0!==t.length?(e=void 0,c(t[t.length-1])):n===e&&(e=void 0,d.clearEditor())},selectTodo:c,isTodoOpen:o}})(),a=(()=>{let e=[];return{addProject:function(t){t.id=e.length,e.push(t)},getProject:function(t){return e[t]},getProjects:function(){return e},getNum:function(){return e.length}}})(),o=(()=>{const e=(e,t)=>{const d=document.createElement("div");d.classList.add("todo-doc"),d.attributes["data-project-id"]=e;const a=document.createElement("i");a.classList.add("far"),a.classList.add("fa-file-alt");const o=document.createElement("span");o.innerText=t.title;const l=s.CreateElementFromHTML('<i class="fas fa-times" aria-hidden="true"></i>');return l.classList.add("align-right"),l.addEventListener("click",(s=>{s.stopPropagation(),i.confirmationPanel("Are you sure you want to delete this todo?",(()=>{n(s.target,e,t)}))})),d.appendChild(a),d.appendChild(o),d.appendChild(l),d.addEventListener("click",(()=>{c.openTodo(t)})),d},n=(e,t,n)=>{const s=a.getProject(t);c.closeTodo(n),s.removeTodo(n),e.parentNode.remove()};return{generateTab:n=>{const d=document.createElement("div");d.classList.add("project-container"),d.attributes["data-projectId"]=n.id;const o=document.createElement("div");o.classList.add("project-title"),n.isOpen?o.classList.add("selected"):o.classList.add("unselected");const r=document.createElement("i");r.classList.add("fas"),n.isOpen?r.classList.add("fa-angle-down"):r.classList.add("fa-angle-right");const m=document.createElement("span");m.innerText=n.name;const u=s.CreateElementFromHTML('<i class="fas fa-plus" aria-hidden="true"></i>');u.classList.add("align-right"),u.addEventListener("click",(e=>{e.stopPropagation(),i.createPanel("Enter todo title:",(e=>{let s=new t(e,"");n.addTodo(s),l.loadProjects(a.getProjects()),c.openTodo(s)}))})),o.appendChild(r),o.appendChild(m),o.appendChild(u);const p=document.createElement("div");return p.classList.add("list-container"),n.isOpen?p.classList.add("opened"):p.classList.add("closed"),((t,n,s)=>{s.forEach((s=>{t.appendChild(e(n,s))}))})(p,n.id,n.todos),o.addEventListener("click",(({currentTarget:e})=>{((e,t)=>{let n=e.children[0],s=n.classList;s.contains("unselected")?(s.remove("unselected"),s.add("selected"),n.children[0].classList.remove("fa-angle-right"),n.children[0].classList.add("fa-angle-down"),e.children[1].classList.remove("closed"),e.children[1].classList.add("opened"),t.isOpen=!0):s.contains("selected")&&(s.add("unselected"),s.remove("selected"),n.children[0].classList.add("fa-angle-right"),n.children[0].classList.remove("fa-angle-down"),e.children[1].classList.remove("opened"),e.children[1].classList.add("closed"),t.isOpen=!1)})(e.parentNode,n)})),d.appendChild(o),d.appendChild(p),n.addTabDOM(d),d},deleteTodoLink:n,generateTodoDocLink:e}})(),l=(()=>{const e=document.getElementById("project-explorer");function t(t){e.appendChild(t)}return{loadProject:function(e){t(o.generateTab(e))},loadProjects:function(n){s.RemoveChildNodes(e),n.forEach((e=>{t(o.generateTab(e))}))}}})();(()=>{const t=document.getElementById("header").querySelector(".new-project");t.addEventListener("click",(()=>{i.createPanel("Enter name of new project:",(t=>{console.log(t);let n=new e(t,[]);a.addProject(n),l.loadProject(n)}))})),console.log(t)})(),document.getElementById("app"),function(n){let s=new Map;s.set("Item 1",!1),s.set("Item 2",!0),s.set("Item 3",!1),s.set("Item 4",!1),s.set("Item 5",!1);let i=new t("Boopy","Hello I am a list!",s),d=new t("Hello I am a tab","Hello I am a list 2!"),c=new t("Seperate project todo","I am a todo in a seperate project!",s),o=new e("Hi Kez",[i,d]),r=new e("Boop",[c]);a.addProject(o),a.addProject(r),l.loadProjects(a.getProjects())}()})();