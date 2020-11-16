(()=>{"use strict";class e{constructor(e,t){this._name=e,this._todos=t}get name(){return this._name}get todos(){return this._todos}get id(){return this._id}get isEmpty(){return this._todos<=0}set name(e){this._name=e}set id(e){this._id=e}addTodo(e){this.todos.push(e)}addTabDOM(e){this._tabDOM=e}get tabDOM(){return this._tabDOM}}class t{constructor(e,t,n){this._title=e,this._notes=t,this._checklist=n}get title(){return this._title}get notes(){return this._notes}get checklist(){return this._checklist}set title(e){this._title=e}set notes(e){this._notes=e}addChecklistItem(e){_checklist.push(e)}removeChecklistItem(e){let t=_checklist.indexof(e);_checklist.splice(t,1)}}const n=e=>{const t=document.createElement("div");t.classList.add("tab"),t.classList.add("unselected");const n=document.createElement("span");n.innerText=e.title,t.addEventListener("click",(()=>{c.selectTodo(e)}));const d=document.createElement("i");return d.classList.add("fas"),d.classList.add("fa-times"),d.addEventListener("click",(t=>{t.stopPropagation(),c.closeTodo(e)})),t.appendChild(n),t.appendChild(d),t};class d{static RemoveChildNodes(e){for(;e.firstChild;)e.removeChild(e.firstChild)}}const s={generateEditor:e=>{const t=document.getElementById("notes-editor");t.appendChild((e=>{console.log(e);const t=document.getElementById("notes-content"),n=document.createElement("div");n.classList.add("notes-container");const d=document.createElement("h3");d.innerText="Notes";const s=document.createElement("textarea");s.classList.add("notes"),s.innerText=e.notes,n.appendChild(d),n.appendChild(s),t.appendChild(n);const c=document.createElement("div");c.classList.add("checklist-container");const i=document.createElement("h3");i.innerText="Checklist";const o=document.createElement("ul");return e.checklist?.length&&e.checklist.forEach((e=>{const t=document.createElement("li");t.innerText=e,o.appendChild(t)})),c.appendChild(i),c.appendChild(o),t.appendChild(c),t})(e)),t.appendChild((e=>{const t=document.getElementById("notes-details");return t.innerHTML="<div>\n            <h3>Due Date</h3>\n            <div>5th December 2020</div>\n            <h3>Priority</h3>\n            <div>Red</div>\n            </div>",t})())},clearEditor:()=>{const e=document.getElementById("notes-content");d.RemoveChildNodes(e);const t=document.getElementById("notes-details");d.RemoveChildNodes(t)}},c=(()=>{let e,t=[],d=[];const c=document.getElementById("notes-explorer").children[0];function i(n){if(void 0!==e){let n=t.indexOf(e);o(d[n])}let c=t.indexOf(n);o(d[c]),e=n,s.clearEditor(),s.generateEditor(n)}function o(e){let t=e.classList;t.contains("unselected")?(t.remove("unselected"),t.add("selected")):t.contains("selected")&&(t.add("unselected"),t.remove("selected"))}function l(e){return!!t.includes(e)}return{openTodo:function(e){var s;l(e)||(s=n(e),c.appendChild(s),d.push(s),t.push(e),i(e))},closeTodo:function(n){if(!l(n))return;let s=t.indexOf(n);t.splice(s,1),d[s].remove(),d.splice(s,1),n===e&&0!==t.length?(e=void 0,i(t[t.length-1])):n===e&&(e=void 0)},selectTodo:i}})(),i=(()=>{const e=e=>{const t=document.createElement("div");t.classList.add("todo-doc");const n=document.createElement("i");n.classList.add("far"),n.classList.add("fa-file-alt");const d=document.createElement("span");return d.innerText=e.title,t.appendChild(n),t.appendChild(d),t.addEventListener("click",(()=>{c.openTodo(e)})),t};return{generateTab:t=>{const n=document.createElement("div");n.classList.add("project-container"),n.attributes["data-projectId"]=t.id;const d=document.createElement("div");d.classList.add("project-title"),d.classList.add("unselected");const s=document.createElement("i");s.classList.add("fas"),s.classList.add("fa-angle-right");const c=document.createElement("span");c.innerText=t.name,d.appendChild(s),d.appendChild(c);const i=document.createElement("div");return i.classList.add("list-container"),i.classList.add("closed"),((t,n)=>{n.forEach((n=>{t.appendChild(e(n))}))})(i,t.todos),d.addEventListener("click",(({currentTarget:e})=>{(e=>{let t=e.children[0],n=t.classList;n.contains("unselected")?(n.remove("unselected"),n.add("selected"),t.children[0].classList.remove("fa-angle-right"),t.children[0].classList.add("fa-angle-down"),e.children[1].classList.remove("closed"),e.children[1].classList.add("opened")):n.contains("selected")&&(n.add("unselected"),n.remove("selected"),t.children[0].classList.add("fa-angle-right"),t.children[0].classList.remove("fa-angle-down"),e.children[1].classList.remove("opened"),e.children[1].classList.add("closed"))})(e.parentNode)})),n.appendChild(d),n.appendChild(i),t.addTabDOM(n),n}}})(),o=(()=>{const e=document.getElementById("project-explorer");function t(t){e.appendChild(t)}return{loadProject:function(e){t(i.generateTab(e))},loadProjects:function(e){e.forEach((e=>{t(i.generateTab(e))}))}}})(),l=(()=>{let e=[];return{addProject:function(t){t.id=e.length,e.push(t)},getProject:function(t){return e[t]},getProjects:function(){return e},getNum:function(){return e.length}}})();document.getElementById("app"),function(n){let d=new t("Boopy","Hello I am a list!",["Item 1","Item 2","Item 3","Item 4","Item 5"]),s=new t("Hello I am a tab","Hello I am a list 2!"),c=new e("Hi Kez",[d,s]),i=new e("Boop",[s]);l.addProject(c),l.addProject(i),o.loadProjects(l.getProjects())}()})();