(()=>{"use strict";class e{constructor(e,t){this._name=e,this._todos=t,this._isOpen=!1}get name(){return this._name}get todos(){return this._todos}get isEmpty(){return this._todos<=0}get isOpen(){return this._isOpen}set name(e){this._name=e}set isOpen(e){this._isOpen=e}addTodo(e){this._todos.push(e)}removeTodo(e){let t=this._todos.indexOf(e);this._todos.splice(t,1)}addTabDOM(e){this._tabDOM=e}get tabDOM(){return this._tabDOM}}class t{constructor(e,t,n=new Map){this._title=e,this._notes=t,this._checklist=n,this._priority="0"}get title(){return this._title}get notes(){return this._notes}get priority(){switch(this._priority){case"0":return"none";case"1":return"low";case"2":return"medium";case"3":return"high";default:return console.log("get "+this._priority),"invalid"}}get checklist(){return this._checklist}set title(e){this._title=e}set notes(e){this._notes=e}set priority(e){e>=0&&e<=3&&(console.log("Here"),this._priority=e)}addChecklistItem(e,t){_checklist.set(e,t)}removeChecklistItem(e){_checklist.remove(e)}}const n=e=>{const t=document.createElement("div");t.classList.add("tab"),t.classList.add("unselected");const n=document.createElement("span");n.innerText=e.title,t.addEventListener("click",(()=>{o.selectTodo(e)}));const s=document.createElement("i");return s.classList.add("fas"),s.classList.add("fa-times"),s.addEventListener("click",(t=>{t.stopPropagation(),o.closeTodo(e)})),t.appendChild(n),t.appendChild(s),t},s=(()=>{let e=[];return{addProject:function(t){t.id=e.length,e.push(t)},getProject:function(t){return e[t]},getProjects:function(){return e},getNum:function(){return e.length}}})();class i{static RemoveChildNodes(e){for(;e.firstChild;)e.removeChild(e.firstChild)}static CreateElementFromHTML(e){const t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild}}const d=(()=>{const e=document.getElementById("display-panel");e.getElementsByClassName("top-bar")[0].getElementsByClassName("fa-times")[0].addEventListener("click",(()=>{s()}));const t=document.getElementById("panel-content");function n(){return!e.classList.contains("hidden")}function s(){e.classList.add("hidden"),i.RemoveChildNodes(t)}return{confirmationPanel:function(i,d){if(n())return;e.classList.add("info"),e.classList.remove("hidden");const c=document.createElement("div");c.innerText="Are you sure you want to delete this todo?";const o=document.createElement("div");o.classList.add("buttons");const a=document.createElement("button");a.classList.add("btn","btn-error"),a.innerText="Delete",a.addEventListener("click",(()=>{d(),s()}));const l=document.createElement("button");return l.classList.add("btn"),l.innerText="Cancel",l.addEventListener("click",(({target:e})=>{s()})),o.appendChild(a),o.appendChild(l),t.appendChild(c),t.appendChild(o),t},createPanel:function(i,d){if(n())return;e.classList.add("info"),e.classList.remove("hidden");const c=document.createElement("label");c.classList.add("align-left"),c.innerText=i;const o=document.createElement("input");o.type="text",o.placeholder="Title";const a=document.createElement("div");a.classList.add("buttons");const l=document.createElement("button");l.classList.add("btn","btn-success"),l.innerText="Create",l.addEventListener("click",(()=>{d(o.value),s()}));const r=document.createElement("button");return r.classList.add("btn"),r.innerText="Cancel",r.addEventListener("click",(({target:e})=>{s()})),a.appendChild(l),a.appendChild(r),t.appendChild(c),t.appendChild(o),t.appendChild(a),t}}})(),c=(()=>{const e=e=>{const t=document.createElement("div");t.classList.add("notes-container");const n=document.createElement("h3");n.innerText="Notes";const s=document.createElement("textarea");return s.classList.add("notes"),s.value=e.notes,s.addEventListener("focusout",(function(){console.log(s.value),e.notes=s.value})),t.appendChild(n),t.appendChild(s),t},t=e=>{const t=document.createElement("div");t.classList.add("checklist-container");const s=document.createElement("div");s.classList.add("list-header");const o=document.createElement("h3");o.innerText="Checklist";const a=document.createElement("ul"),l=i.CreateElementFromHTML('<i class="fas fa-plus" aria-hidden="true"></i>');return l.addEventListener("click",(()=>{d.createPanel("Enter Checklist Item Title:",(t=>{e.checklist.set(t,!1),c.addChecklistItem(e,a,!1,t)}))})),s.appendChild(o),s.appendChild(l),i.CreateElementFromHTML('<i class="fas fa-check-circle item-icon"></i>'),i.CreateElementFromHTML('<i class="fas fa-times-circle item-icon"></i>'),e.checklist?.size&&e.checklist.forEach((function(t,s){n(e,a,t,s)})),t.appendChild(s),t.appendChild(a),t};function n(e,t,n,s){const c=document.createElement("li");if(n){c.classList.add("checked");const e=i.CreateElementFromHTML('<i class="fas fa-check-circle item-icon"></i>');c.appendChild(e)}else{c.classList.add("unchecked");const e=i.CreateElementFromHTML('<i class="fas fa-times-circle item-icon"></i>');c.appendChild(e)}c.addEventListener("click",(function({currentTarget:t}){let n=t.classList;const i=t.querySelector(".item-icon");n.contains("checked")?(n.remove("checked"),n.add("unchecked"),i.classList.remove("fa-check-circle"),i.classList.add("fa-times-circle"),e.checklist.set(s,!1)):n.contains("unchecked")&&(n.remove("unchecked"),n.add("checked"),i.classList.add("fa-check-circle"),i.classList.remove("fa-times-circle"),e.checklist.set(s,!0))}));const o=document.createElement("span");o.innerText=s;const a=i.CreateElementFromHTML('<i class="fas fa-times" aria-hidden="true"></i>');a.classList.add("align-right"),a.addEventListener("click",(t=>{t.stopPropagation(),d.confirmationPanel("Are you sure you want to delete this item?",(()=>{e.checklist.delete(s),c.remove()}))})),c.appendChild(o),c.appendChild(a),t.appendChild(c)}function o(e,t){console.log(t),e.classList.remove(...e.classList),e.classList.add("priority-"+t),e.innerText=t}return{generateEditor:n=>{const d=document.getElementById("notes-editor");d.appendChild((n=>{const s=document.getElementById("notes-content"),i=e(n),d=t(n);return s.appendChild(i),s.appendChild(d),s})(n)),d.appendChild((e=>{const t=document.getElementById("notes-details");t.innerHTML='<div>\n            <h3>Due Date</h3>\n            <input type="date" class="due-date">\n            </div>';const n=document.createElement("div");n.id="priority-title",n.appendChild(i.CreateElementFromHTML("<h3>Priority:</h3>"));const d=document.createElement("h3");o(d,e.priority),n.appendChild(d);const c=document.createElement("div");return c.id="priority-selection",c.innerHTML='\n            <button class="priority-high tooltip" data-priority="3">\n                <span class="tooltiptext">High</span>\n            </button>\n            <button class="priority-medium tooltip" data-priority="2">\n                <span class="tooltiptext">Medium</span>\n            </button>\n            <button class="priority-low tooltip" data-priority="1">\n                <span class="tooltiptext">Low</span>\n            </button>\n        ',c.querySelectorAll(".tooltip").forEach((t=>{t.addEventListener("click",(({target:t})=>{const n=t.attributes["data-priority"].value;e.priority=n,o(d,e.priority),l.loadProjects(s.getProjects())}))})),t.appendChild(n),t.appendChild(c),console.log(n),t})(n))},clearEditor:()=>{const e=document.getElementById("notes-content");i.RemoveChildNodes(e);const t=document.getElementById("notes-details");i.RemoveChildNodes(t)},addChecklistItem:n}})(),o=(()=>{let e,t=[],s=[];const i=document.getElementById("notes-explorer").children[0];function d(n){if(void 0!==e){let n=t.indexOf(e);o(s[n])}let i=t.indexOf(n);o(s[i]),e=n,c.clearEditor(),c.generateEditor(n)}function o(e){let t=e.classList;t.contains("unselected")?(t.remove("unselected"),t.add("selected")):t.contains("selected")&&(t.add("unselected"),t.remove("selected"))}function a(e){return!!t.includes(e)}return{openTodo:function(e){var c;a(e)?d(e):(c=n(e),i.appendChild(c),s.push(c),t.push(e),d(e))},closeTodo:function(n){if(!a(n))return;let i=t.indexOf(n);t.splice(i,1),s[i].remove(),s.splice(i,1),n===e&&0!==t.length?(e=void 0,d(t[t.length-1])):n===e&&(e=void 0,c.clearEditor())},selectTodo:d,isTodoOpen:a}})(),a=(()=>{const e=(e,t)=>{const s=document.createElement("div");s.classList.add("todo-doc"),s.attributes["data-project-id"]=e;const c=document.createElement("div");c.classList.add("priority-icon",t.priority);const a=document.createElement("i");a.classList.add("far"),a.classList.add("fa-file-alt");const l=document.createElement("span");l.innerText=t.title;const r=i.CreateElementFromHTML('<i class="fas fa-times" aria-hidden="true"></i>');return r.classList.add("align-right"),r.addEventListener("click",(s=>{s.stopPropagation(),d.confirmationPanel("Are you sure you want to delete this todo?",(()=>{n(s.target,e,t)}))})),s.appendChild(c),s.appendChild(a),s.appendChild(l),s.appendChild(r),s.addEventListener("click",(()=>{o.openTodo(t)})),s},n=(e,t,n)=>{const i=s.getProject(t);o.closeTodo(n),i.removeTodo(n),e.parentNode.remove()};return{generateTab:n=>{const c=document.createElement("div");c.classList.add("project-container"),c.attributes["data-projectId"]=n.id;const a=document.createElement("div");a.classList.add("project-title"),n.isOpen?a.classList.add("selected"):a.classList.add("unselected");const r=document.createElement("i");r.classList.add("fas"),n.isOpen?r.classList.add("fa-angle-down"):r.classList.add("fa-angle-right");const m=document.createElement("span");m.innerText=n.name;const p=i.CreateElementFromHTML('<i class="fas fa-plus" aria-hidden="true"></i>');p.classList.add("align-right"),p.addEventListener("click",(e=>{e.stopPropagation(),d.createPanel("Enter todo title:",(e=>{let i=new t(e,"");n.addTodo(i),l.loadProjects(s.getProjects()),o.openTodo(i)}))})),a.appendChild(r),a.appendChild(m),a.appendChild(p);const u=document.createElement("div");return u.classList.add("list-container"),n.isOpen?u.classList.add("opened"):u.classList.add("closed"),((t,n,s)=>{s.forEach((s=>{t.appendChild(e(n,s))}))})(u,n.id,n.todos),a.addEventListener("click",(({currentTarget:e})=>{((e,t)=>{let n=e.children[0],s=n.classList;s.contains("unselected")?(s.remove("unselected"),s.add("selected"),n.children[0].classList.remove("fa-angle-right"),n.children[0].classList.add("fa-angle-down"),e.children[1].classList.remove("closed"),e.children[1].classList.add("opened"),t.isOpen=!0):s.contains("selected")&&(s.add("unselected"),s.remove("selected"),n.children[0].classList.add("fa-angle-right"),n.children[0].classList.remove("fa-angle-down"),e.children[1].classList.remove("opened"),e.children[1].classList.add("closed"),t.isOpen=!1)})(e.parentNode,n)})),c.appendChild(a),c.appendChild(u),n.addTabDOM(c),c},deleteTodoLink:n,generateTodoDocLink:e}})(),l=(()=>{const e=document.getElementById("project-explorer");function t(t){e.appendChild(t)}return{loadProject:function(e){t(a.generateTab(e))},loadProjects:function(n){i.RemoveChildNodes(e),n.forEach((e=>{t(a.generateTab(e))}))}}})();(()=>{const t=document.getElementById("header").querySelector(".new-project");t.addEventListener("click",(()=>{d.createPanel("Enter name of new project:",(t=>{console.log(t);let n=new e(t,[]);s.addProject(n),l.loadProject(n)}))})),console.log(t)})(),document.getElementById("app"),function(n){let i=new Map;i.set("Item 1",!1),i.set("Item 2",!0),i.set("Item 3",!1),i.set("Item 4",!1),i.set("Item 5",!1);let d=new t("Boopy","Hello I am a list!",i),c=new t("Hello I am a tab","Hello I am a list 2!"),o=new t("Seperate project todo","I am a todo in a seperate project!",i),a=new e("Hi Kez",[d,c]),r=new e("Boop",[o]);s.addProject(a),s.addProject(r),l.loadProjects(s.getProjects())}()})();