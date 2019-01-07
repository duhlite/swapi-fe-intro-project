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

const removeElementById = (id) => {
    document.getElementById(id).parentElement.removeChild(document.getElementById(id));
}

const getQueryString = () => {
    // https://en.wikipedia.org/wiki/Query_string
    return window.location.search;
}

// // how to define loadMyContent():
// //
// // here you should parse the query string to get an idea of what data needs to be loaded
// // loading data asynchronously over the web requires using the concept of promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// // promises can be tricky, so it might be worth researching promises using other resources
// // use the fetch API to get data -- https://developers.google.com/web/updates/2015/03/introduction-to-fetch, https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// // fetch all subsequent pieces of data -- remember: fetch uses Promises under the hood, and there are different ways to conduct multiple fetches at the same time, and then do something once
// // everything has resolved
// //
// // at the end of the function, modify the elements of the page: remove the loading indicator, and add data to the page

function loadMyContent () {
 // do your page operations here
};

document.addEventListener("DOMContentLoaded", function() { 
    loadMyContent();
});