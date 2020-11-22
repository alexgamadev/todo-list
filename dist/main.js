(()=>{"use strict";class e{constructor(e,t){this._name=e,this._todos=t,this._isOpen=!1}get name(){return this._name}get todos(){return this._todos}get isEmpty(){return this._todos<=0}get isOpen(){return this._isOpen}set name(e){this._name=e}set isOpen(e){this._isOpen=e}addTodo(e){this._todos.push(e)}removeTodo(e){let t=this._todos.indexOf(e);this._todos.splice(t,1)}addTabDOM(e){this._tabDOM=e}get tabDOM(){return this._tabDOM}}class t{constructor(e,t,n){this._title=e,this._notes=t,this._checklist=n}get title(){return this._title}get notes(){return this._notes}get checklist(){return this._checklist}set title(e){this._title=e}set notes(e){this._notes=e}addChecklistItem(e,t){_checklist.set(e,t)}removeChecklistItem(e){_checklist.remove(e)}}const n=e=>{const t=document.createElement("div");t.classList.add("tab"),t.classList.add("unselected");const n=document.createElement("span");n.innerText=e.title,t.addEventListener("click",(()=>{a.selectTodo(e)}));const s=document.createElement("i");return s.classList.add("fas"),s.classList.add("fa-times"),s.addEventListener("click",(t=>{t.stopPropagation(),a.closeTodo(e)})),t.appendChild(n),t.appendChild(s),t};class s{static RemoveChildNodes(e){for(;e.firstChild;)e.removeChild(e.firstChild)}static CreateElementFromHTML(e){const t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild}}const d=(()=>{let e=[];return{addProject:function(t){t.id=e.length,e.push(t)},getProject:function(t){return e[t]},getProjects:function(){return e},getNum:function(){return e.length}}})(),c=(()=>{const e=document.getElementById("display-panel");e.getElementsByClassName("top-bar")[0].getElementsByClassName("fa-times")[0].addEventListener("click",(()=>{r()}));const n=document.getElementById("panel-content");function c(){return!e.classList.contains("hidden")}function r(){e.classList.add("hidden"),s.RemoveChildNodes(n)}return{deleteTodoPanel:function(t,s,d){if(c())return;e.classList.add("info"),e.classList.remove("hidden");const i=document.createElement("div");i.innerText="Are you sure you want to delete this todo?";const a=document.createElement("div");a.classList.add("buttons");const l=document.createElement("button");l.classList.add("btn","btn-error"),l.innerText="Delete",l.addEventListener("click",(()=>{o.deleteTodoLink(t,s,d),r()}));const m=document.createElement("button");return m.classList.add("btn"),m.innerText="Cancel",m.addEventListener("click",(({target:e})=>{r()})),a.appendChild(l),a.appendChild(m),n.appendChild(i),n.appendChild(a),n},createTodoPanel:function(s){if(c())return;e.classList.add("info"),e.classList.remove("hidden");const i=document.createElement("label");i.classList.add("align-left"),i.innerText="Enter Todo Title:";const o=document.createElement("input");o.type="text",o.placeholder="Title";const m=document.createElement("div");m.classList.add("buttons");const u=document.createElement("button");u.classList.add("btn","btn-success"),u.innerText="Create",u.addEventListener("click",(()=>{let e=new t(o.value,"");d.getProject(s).addTodo(e),l.loadProjects(d.getProjects()),a.openTodo(e),r()}));const p=document.createElement("button");return p.classList.add("btn"),p.innerText="Cancel",p.addEventListener("click",(({target:e})=>{r()})),m.appendChild(u),m.appendChild(p),n.appendChild(i),n.appendChild(o),n.appendChild(m),n},createChecklistItem:function(t){if(c())return;e.classList.add("info"),e.classList.remove("hidden");const s=document.createElement("label");s.classList.add("align-left"),s.innerText="Enter Checklist Item Title:";const d=document.createElement("input");d.type="text",d.placeholder="Title";const a=document.createElement("div");a.classList.add("buttons");const o=document.createElement("button");o.classList.add("btn","btn-success"),o.innerText="Create",o.addEventListener("click",(()=>{i.addChecklistItem(t,!1,d.value),r()}));const l=document.createElement("button");return l.classList.add("btn"),l.innerText="Cancel",l.addEventListener("click",(({target:e})=>{r()})),a.appendChild(o),a.appendChild(l),n.appendChild(s),n.appendChild(d),n.appendChild(a),n}}})(),i=(()=>{const e=e=>{const t=document.createElement("div");t.classList.add("notes-container");const n=document.createElement("h3");n.innerText="Notes";const s=document.createElement("textarea");return s.classList.add("notes"),s.value=e.notes,s.addEventListener("focusout",(function(){console.log(s.value),e.notes=s.value})),t.appendChild(n),t.appendChild(s),t},t=e=>{const t=document.createElement("div");t.classList.add("checklist-container");const d=document.createElement("div");d.classList.add("list-header");const i=document.createElement("h3");i.innerText="Checklist";const a=document.createElement("ul"),o=s.CreateElementFromHTML('<i class="fas fa-plus" aria-hidden="true"></i>');return o.addEventListener("click",(()=>{c.createChecklistItem(a)})),d.appendChild(i),d.appendChild(o),s.CreateElementFromHTML('<i class="fas fa-check-circle item-icon"></i>'),s.CreateElementFromHTML('<i class="fas fa-times-circle item-icon"></i>'),e.checklist?.size&&e.checklist.forEach((function(e,t){n(a,e,t)})),t.appendChild(d),t.appendChild(a),t};function n(e,t,n){const d=document.createElement("li");if(t){d.classList.add("checked");const e=s.CreateElementFromHTML('<i class="fas fa-check-circle item-icon"></i>');d.appendChild(e)}else{d.classList.add("unchecked");const e=s.CreateElementFromHTML('<i class="fas fa-times-circle item-icon"></i>');d.appendChild(e)}d.addEventListener("click",(function({currentTarget:e}){let t=e.classList;const s=e.querySelector(".item-icon");t.contains("checked")?(t.remove("checked"),t.add("unchecked"),s.classList.remove("fa-check-circle"),s.classList.add("fa-times-circle"),todo.checklist.set(n,!1)):t.contains("unchecked")&&(t.remove("unchecked"),t.add("checked"),s.classList.add("fa-check-circle"),s.classList.remove("fa-times-circle"),todo.checklist.set(n,!0))}));const c=document.createElement("span");c.innerText=n,d.appendChild(c),e.appendChild(d)}return{generateEditor:n=>{const s=document.getElementById("notes-editor");s.appendChild((n=>{const s=document.getElementById("notes-content"),d=e(n),c=t(n);return s.appendChild(d),s.appendChild(c),s})(n)),s.appendChild((e=>{const t=document.getElementById("notes-details");return t.innerHTML='<div>\n            <h3>Due Date</h3>\n            <input type="date" class="due-date">\n            <h3>Priority</h3>\n            <div>Red</div>\n            </div>',t})())},clearEditor:()=>{const e=document.getElementById("notes-content");s.RemoveChildNodes(e);const t=document.getElementById("notes-details");s.RemoveChildNodes(t)},addChecklistItem:n}})(),a=(()=>{let e,t=[],s=[];const d=document.getElementById("notes-explorer").children[0];function c(n){if(void 0!==e){let n=t.indexOf(e);a(s[n])}let d=t.indexOf(n);a(s[d]),e=n,i.clearEditor(),i.generateEditor(n)}function a(e){let t=e.classList;t.contains("unselected")?(t.remove("unselected"),t.add("selected")):t.contains("selected")&&(t.add("unselected"),t.remove("selected"))}function o(e){return!!t.includes(e)}return{openTodo:function(e){var i;o(e)?c(e):(i=n(e),d.appendChild(i),s.push(i),t.push(e),c(e))},closeTodo:function(n){if(!o(n))return;let d=t.indexOf(n);t.splice(d,1),s[d].remove(),s.splice(d,1),n===e&&0!==t.length?(e=void 0,c(t[t.length-1])):n===e&&(e=void 0,i.clearEditor())},selectTodo:c,isTodoOpen:o}})(),o=(()=>{const e=(e,t)=>{const n=document.createElement("div");n.classList.add("todo-doc"),n.attributes["data-project-id"]=e;const d=document.createElement("i");d.classList.add("far"),d.classList.add("fa-file-alt");const i=document.createElement("span");i.innerText=t.title;const o=s.CreateElementFromHTML('<i class="fas fa-times" aria-hidden="true"></i>');return o.classList.add("align-right"),o.addEventListener("click",(n=>{n.stopPropagation(),c.deleteTodoPanel(n.target,e,t)})),n.appendChild(d),n.appendChild(i),n.appendChild(o),n.addEventListener("click",(()=>{a.openTodo(t)})),n};return{generateTab:t=>{const n=document.createElement("div");n.classList.add("project-container"),n.attributes["data-projectId"]=t.id;const d=document.createElement("div");d.classList.add("project-title"),t.isOpen?d.classList.add("selected"):d.classList.add("unselected");const i=document.createElement("i");i.classList.add("fas"),t.isOpen?i.classList.add("fa-angle-down"):i.classList.add("fa-angle-right");const a=document.createElement("span");a.innerText=t.name;const o=s.CreateElementFromHTML('<i class="fas fa-plus" aria-hidden="true"></i>');o.classList.add("align-right"),o.addEventListener("click",(e=>{e.stopPropagation(),c.createTodoPanel(t.id)})),d.appendChild(i),d.appendChild(a),d.appendChild(o);const l=document.createElement("div");return l.classList.add("list-container"),t.isOpen?l.classList.add("opened"):l.classList.add("closed"),((t,n,s)=>{s.forEach((s=>{t.appendChild(e(n,s))}))})(l,t.id,t.todos),d.addEventListener("click",(({currentTarget:e})=>{((e,t)=>{let n=e.children[0],s=n.classList;s.contains("unselected")?(s.remove("unselected"),s.add("selected"),n.children[0].classList.remove("fa-angle-right"),n.children[0].classList.add("fa-angle-down"),e.children[1].classList.remove("closed"),e.children[1].classList.add("opened"),t.isOpen=!0):s.contains("selected")&&(s.add("unselected"),s.remove("selected"),n.children[0].classList.add("fa-angle-right"),n.children[0].classList.remove("fa-angle-down"),e.children[1].classList.remove("opened"),e.children[1].classList.add("closed"),t.isOpen=!1)})(e.parentNode,t)})),n.appendChild(d),n.appendChild(l),t.addTabDOM(n),n},deleteTodoLink:(e,t,n)=>{const s=d.getProject(t);a.closeTodo(n),s.removeTodo(n),e.parentNode.remove()},generateTodoDocLink:e}})(),l=(()=>{const e=document.getElementById("project-explorer");function t(t){e.appendChild(t)}return{loadProject:function(e){t(o.generateTab(e))},loadProjects:function(n){s.RemoveChildNodes(e),n.forEach((e=>{t(o.generateTab(e))}))}}})();document.getElementById("app"),function(n){let s=new Map;s.set("Item 1",!1),s.set("Item 2",!0),s.set("Item 3",!1),s.set("Item 4",!1),s.set("Item 5",!1);let c=new t("Boopy","Hello I am a list!",s),i=new t("Hello I am a tab","Hello I am a list 2!"),a=new t("Seperate project todo","I am a todo in a seperate project!",s),o=new e("Hi Kez",[c,i]),r=new e("Boop",[a]);d.addProject(o),d.addProject(r),l.loadProjects(d.getProjects())}()})();