(()=>{"use strict";class e{constructor(e,t){this._name=e,this._todos=t,this._isOpen=!1}get name(){return this._name}get todos(){return this._todos}get isEmpty(){return this._todos<=0}get isOpen(){return this._isOpen}set name(e){this._name=e}set isOpen(e){this._isOpen=e}addTodo(e){this._todos.push(e)}removeTodo(e){let t=this._todos.indexOf(e);this._todos.splice(t,1)}addTabDOM(e){this._tabDOM=e}get tabDOM(){return this._tabDOM}}class t{constructor(e,t,n){this._title=e,this._notes=t,this._checklist=n}get title(){return this._title}get notes(){return this._notes}get checklist(){return this._checklist}set title(e){this._title=e}set notes(e){this._notes=e}addChecklistItem(e,t){_checklist.set(e,t)}removeChecklistItem(e){_checklist.remove(e)}}const n=e=>{const t=document.createElement("div");t.classList.add("tab"),t.classList.add("unselected");const n=document.createElement("span");n.innerText=e.title,t.addEventListener("click",(()=>{c.selectTodo(e)}));const s=document.createElement("i");return s.classList.add("fas"),s.classList.add("fa-times"),s.addEventListener("click",(t=>{t.stopPropagation(),c.closeTodo(e)})),t.appendChild(n),t.appendChild(s),t};class s{static RemoveChildNodes(e){for(;e.firstChild;)e.removeChild(e.firstChild)}static CreateElementFromHTML(e){const t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild}}const d=(()=>{const e=e=>{const t=document.createElement("div");t.classList.add("notes-container");const n=document.createElement("h3");n.innerText="Notes";const s=document.createElement("textarea");return s.classList.add("notes"),s.value=e.notes,s.addEventListener("focusout",(function(){console.log(s.value),e.notes=s.value})),t.appendChild(n),t.appendChild(s),t},t=e=>{const t=document.createElement("div");t.classList.add("checklist-container");const n=document.createElement("h3");n.innerText="Checklist";const d=document.createElement("ul");return s.CreateElementFromHTML('<i class="fas fa-check-circle item-icon"></i>'),s.CreateElementFromHTML('<i class="fas fa-times-circle item-icon"></i>'),e.checklist?.size&&e.checklist.forEach((function(t,n){const c=document.createElement("li");if(t){c.classList.add("checked");const e=s.CreateElementFromHTML('<i class="fas fa-check-circle item-icon"></i>');c.appendChild(e)}else{c.classList.add("unchecked");const e=s.CreateElementFromHTML('<i class="fas fa-times-circle item-icon"></i>');c.appendChild(e)}c.addEventListener("click",(function({currentTarget:t}){let s=t.classList;const d=t.querySelector(".item-icon");s.contains("checked")?(s.remove("checked"),s.add("unchecked"),d.classList.remove("fa-check-circle"),d.classList.add("fa-times-circle"),e.checklist.set(n,!1)):s.contains("unchecked")&&(s.remove("unchecked"),s.add("checked"),d.classList.add("fa-check-circle"),d.classList.remove("fa-times-circle"),e.checklist.set(n,!0))}));const i=document.createElement("span");i.innerText=n,c.appendChild(i),d.appendChild(c)})),t.appendChild(n),t.appendChild(d),t};return{generateEditor:n=>{const s=document.getElementById("notes-editor");s.appendChild((n=>{const s=document.getElementById("notes-content"),d=e(n),c=t(n);return s.appendChild(d),s.appendChild(c),s})(n)),s.appendChild((e=>{const t=document.getElementById("notes-details");return t.innerHTML='<div>\n            <h3>Due Date</h3>\n            <input type="date" class="due-date">\n            <h3>Priority</h3>\n            <div>Red</div>\n            </div>',t})())},clearEditor:()=>{const e=document.getElementById("notes-content");s.RemoveChildNodes(e);const t=document.getElementById("notes-details");s.RemoveChildNodes(t)}}})(),c=(()=>{let e,t=[],s=[];const c=document.getElementById("notes-explorer").children[0];function i(n){if(void 0!==e){let n=t.indexOf(e);a(s[n])}let c=t.indexOf(n);a(s[c]),e=n,d.clearEditor(),d.generateEditor(n)}function a(e){let t=e.classList;t.contains("unselected")?(t.remove("unselected"),t.add("selected")):t.contains("selected")&&(t.add("unselected"),t.remove("selected"))}function o(e){return!!t.includes(e)}return{openTodo:function(e){var d;o(e)?i(e):(d=n(e),c.appendChild(d),s.push(d),t.push(e),i(e))},closeTodo:function(n){if(!o(n))return;let c=t.indexOf(n);t.splice(c,1),s[c].remove(),s.splice(c,1),n===e&&0!==t.length?(e=void 0,i(t[t.length-1])):n===e&&(e=void 0,d.clearEditor())},selectTodo:i,isTodoOpen:o}})(),i=(()=>{let e=[];return{addProject:function(t){t.id=e.length,e.push(t)},getProject:function(t){return e[t]},getProjects:function(){return e},getNum:function(){return e.length}}})(),a=(()=>{const e=document.getElementById("display-panel");e.getElementsByClassName("top-bar")[0].getElementsByClassName("fa-times")[0].addEventListener("click",(()=>{a()}));const n=document.getElementById("panel-content");function d(){return!e.classList.contains("hidden")}function a(){e.classList.add("hidden"),s.RemoveChildNodes(n)}return{deleteTodoPanel:function(t,s,c){if(d())return;e.classList.add("info"),e.classList.remove("hidden");const i=document.createElement("div");i.innerText="Are you sure you want to delete this todo?";const l=document.createElement("div");l.classList.add("buttons");const r=document.createElement("button");r.classList.add("btn","btn-error"),r.innerText="Delete",r.addEventListener("click",(()=>{o.deleteTodoLink(t,s,c),a()}));const m=document.createElement("button");return m.classList.add("btn"),m.innerText="Cancel",m.addEventListener("click",(({target:e})=>{a()})),l.appendChild(r),l.appendChild(m),n.appendChild(i),n.appendChild(l),n},createTodoPanel:function(s){if(d())return;e.classList.add("info"),e.classList.remove("hidden");const o=document.createElement("label");o.classList.add("align-left"),o.innerText="Enter Todo Title:";const r=document.createElement("input");r.type="text",r.placeholder="Title";const m=document.createElement("div");m.classList.add("buttons");const u=document.createElement("button");u.classList.add("btn","btn-success"),u.innerText="Create",u.addEventListener("click",(()=>{let e=new t(r.value,"");i.getProject(s).addTodo(e),l.loadProjects(i.getProjects()),c.openTodo(e),a()}));const p=document.createElement("button");return p.classList.add("btn"),p.innerText="Cancel",p.addEventListener("click",(({target:e})=>{a()})),m.appendChild(u),m.appendChild(p),n.appendChild(o),n.appendChild(r),n.appendChild(m),n}}})(),o=(()=>{const e=(e,t)=>{const n=document.createElement("div");n.classList.add("todo-doc"),n.attributes["data-project-id"]=e;const d=document.createElement("i");d.classList.add("far"),d.classList.add("fa-file-alt");const i=document.createElement("span");i.innerText=t.title;const o=s.CreateElementFromHTML('<i class="fas fa-times" aria-hidden="true"></i>');return o.classList.add("align-right"),o.addEventListener("click",(n=>{n.stopPropagation(),a.deleteTodoPanel(n.target,e,t)})),n.appendChild(d),n.appendChild(i),n.appendChild(o),n.addEventListener("click",(()=>{c.openTodo(t)})),n};return{generateTab:t=>{const n=document.createElement("div");n.classList.add("project-container"),n.attributes["data-projectId"]=t.id;const d=document.createElement("div");d.classList.add("project-title"),t.isOpen?d.classList.add("selected"):d.classList.add("unselected");const c=document.createElement("i");c.classList.add("fas"),t.isOpen?c.classList.add("fa-angle-down"):c.classList.add("fa-angle-right");const i=document.createElement("span");i.innerText=t.name;const o=s.CreateElementFromHTML('<i class="fas fa-plus" aria-hidden="true"></i>');o.classList.add("align-right"),o.addEventListener("click",(e=>{e.stopPropagation(),a.createTodoPanel(t.id)})),d.appendChild(c),d.appendChild(i),d.appendChild(o);const l=document.createElement("div");return l.classList.add("list-container"),t.isOpen?l.classList.add("opened"):l.classList.add("closed"),((t,n,s)=>{s.forEach((s=>{t.appendChild(e(n,s))}))})(l,t.id,t.todos),d.addEventListener("click",(({currentTarget:e})=>{((e,t)=>{let n=e.children[0],s=n.classList;s.contains("unselected")?(s.remove("unselected"),s.add("selected"),n.children[0].classList.remove("fa-angle-right"),n.children[0].classList.add("fa-angle-down"),e.children[1].classList.remove("closed"),e.children[1].classList.add("opened"),t.isOpen=!0):s.contains("selected")&&(s.add("unselected"),s.remove("selected"),n.children[0].classList.add("fa-angle-right"),n.children[0].classList.remove("fa-angle-down"),e.children[1].classList.remove("opened"),e.children[1].classList.add("closed"),t.isOpen=!1)})(e.parentNode,t)})),n.appendChild(d),n.appendChild(l),t.addTabDOM(n),n},deleteTodoLink:(e,t,n)=>{const s=i.getProject(t);c.closeTodo(n),s.removeTodo(n),e.parentNode.remove()},generateTodoDocLink:e}})(),l=(()=>{const e=document.getElementById("project-explorer");function t(t){e.appendChild(t)}return{loadProject:function(e){t(o.generateTab(e))},loadProjects:function(n){s.RemoveChildNodes(e),n.forEach((e=>{t(o.generateTab(e))}))}}})();document.getElementById("app"),function(n){let s=new Map;s.set("Item 1",!1),s.set("Item 2",!0),s.set("Item 3",!1),s.set("Item 4",!1),s.set("Item 5",!1);let d=new t("Boopy","Hello I am a list!",s),c=new t("Hello I am a tab","Hello I am a list 2!"),a=new t("Seperate project todo","I am a todo in a seperate project!",s),o=new e("Hi Kez",[d,c]),r=new e("Boop",[a]);i.addProject(o),i.addProject(r),l.loadProjects(i.getProjects())}()})();