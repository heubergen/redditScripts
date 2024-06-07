// ==UserScript==
// @name        Remove title text post links
// @description Remove links from Reddit text posts in the title
// @match       https://*.reddit.com/r/*/comments/*
// ==/UserScript==

// Function to convert an HTML element to a <p> element
function convertToParagraph(selector) {
    // Select the element you want to convert
    const oldElement = document.querySelector(selector);
    if (!oldElement) {
        console.error('Element not found');
        return;
    } else {
        console.log('Element was found')
        }

    // Create a new <p> element
    const newParagraph = document.createElement('span');

    // Copy attributes from the old element to the new <p> element
    for (let i = 0; i < oldElement.attributes.length; i++) {
        const attr = oldElement.attributes[i];
        newParagraph.setAttribute(attr.name, attr.value);
    }

    // Copy the inner content from the old element to the new <p> element
    newParagraph.innerHTML = oldElement.innerHTML;

    // Replace the old element with the new <p> element
    oldElement.parentNode.replaceChild(newParagraph, oldElement);
}

// Find all titles that link to themselves
convertToParagraph('a.title[href^="/r/"]');
