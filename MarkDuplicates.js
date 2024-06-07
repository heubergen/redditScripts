// ==UserScript==
// @name        Mark duplicates orange
// @description This script marks potential duplicate titles orange
// @match      https://*.reddit.com/*
// ==/UserScript==

const links = [...document.querySelectorAll("a.title[data-event-action='title']")];
//const links = [...document.querySelectorAll('a')];
const titles = Array.from(links, element => element.textContent);
const allAffectedLinks = [];

function findSharedWordsTitles(titles) {
    const wordSets = titles.map(title => new Set(title.split(/\W+/).filter(Boolean).map(word => word.toLowerCase())));
    const sharedWordsTitles = [];

    for (let i = 0; i < wordSets.length; i++) {
        for (let j = i + 1; j < wordSets.length; j++) {
            const commonWords = [...wordSets[i]].filter(word => wordSets[j].has(word));
            if (commonWords.length >= 4) {
                allAffectedLinks.push(j, i);
            }
        }
    }
    uniqueAffectedLinks = [...new Set(allAffectedLinks)];
    uniqueAffectedLinks.forEach(l => {
        const affectedElements = links.find(element => element.textContent.includes(titles[l]));
        affectedElements.style.backgroundColor = '#E97451';
    });
}
findSharedWordsTitles(titles)
