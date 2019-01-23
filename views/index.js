// The below functions are simple DOM modification functions, which function as a rendering framework -- similar to the way that AngularJS or ReactJS work,
// but obviously way more rudimentary

const appendToBody = (data) => {
    let body = document.getElementsByTagName('body')[0];
    body.appendChild(data);
}

const appendToElement = (parentElementId, childElement) => {
    document.getElementById(parentElementId).appendChild(childElement);
}

const createElement = (elementName, id) => {
    let elem = document.createElement(elementName);
    elem.setAttribute('id', id);
    return elem;
}

const modifyClassOfElement = (elementId, newClassName) => {
    document.getElementById(elementId).setAttribute('class', newClassName);
}

const getClassOfElement = (elementId) => {
    return document.getElementById(elementId).getAttribute('class');
}

const modifyHTMLContentOfCreatedElement = (createdElement, HTMLContent) => {
    createdElement.innerHTML = HTMLContent;
    return createdElement;
}

const modifyHTMLContentOfExistingElement = (elementId, HTMLContent) => {
    document.getElementById(elementId).innerHTML = HTMLContent;
}

const removeElementById = (id) => {
    // seems a little complex -- but essentially what this does is it gets an element, then gets its parent, then removes the child of that particular parent
    document.getElementById(id).parentElement.removeChild(document.getElementById(id));
}

const getQueryString = () => {
    // https://en.wikipedia.org/wiki/Query_string
    return window.location.search;
}

// // how i would define loadMyContent():
// //
// // here you should parse the query string to get an idea of what data needs to be loaded
// // loading data asynchronously over the web requires using the concept of promises (as taught in Eloquent, chapter 11): 
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// // promises can be tricky, even after all this reading, so it might be worth researching promises using other resources
// // use the fetch API to get data -- https://developers.google.com/web/updates/2015/03/introduction-to-fetch, https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// // fetch all subsequent pieces of data -- 
// // remember: fetch uses Promises under the hood, and there are different ways to conduct multiple fetches at the same time, 
// // and then do something once everything has resolved
// //  (re-read Eloquent, chapter 11, if you get stuck)
// //
// // at the end of the function, modify the elements of the page: remove the loading indicator, and add data to the page
const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

function loadMyContent () {
 // do your page operations here
 fetch('https://swapi.co/api/films/').then(response => {
     return response.json();
 }).then(data => {
     for(let x = 0; x < data.results.length; x++){
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        const h1 = document.createElement('h1');
        h1.textContent = data.results[x].title;

        const p = document.createElement('p');
        p.textContent = `${data.results[x].opening_crawl}`;
        container.appendChild(card);

        card.appendChild(h1);
        card.appendChild(p);
     }
 }).catch(err => {
     console.log('error');
 });
};

document.addEventListener("DOMContentLoaded", function() { 
    loadMyContent();
});
