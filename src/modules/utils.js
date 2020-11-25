export default class Utility {
  // Delete all the child nodes of an element
  // Effectively "clears" an element
  static RemoveChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  // Basic function to return a DOM element from HTML string
  static CreateElementFromHTML(htmlString) {
    let html = htmlString;
    const template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  }
}
