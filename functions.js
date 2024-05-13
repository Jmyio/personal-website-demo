document.addEventListener('DOMContentLoaded', function () {
    var line1 = document.querySelector('.typewriter.line1');
    var line2 = document.querySelector('.typewriter.line2');

    setTimeout(function () {
        line1.classList.add('hide-cursor');
    }, 2100); // Hide cursor after 2 seconds

    setTimeout(function () {
        line2.style.visibility = 'visible';
    }, 2100); // Make the second line visible after 2 seconds
});

const typewriterLine1 = document.querySelector('.typewriter.line1');
const typewriterLine2 = document.querySelector('.typewriter.line2');
const line1Text = 'A College Student of Computer Science';
const line2Text = 'Beginner of Web, Software Development';

function setTypewriters() {
    let count = 0;
    let interval = setInterval(() => {
        if (count < line1Text.length) {
            typewriterLine1.textContent += line1Text[count];
            count++;
        } else {
            clearInterval(interval); // Stop the interval once line1 is finished typing
            count = 0; // Reset the count for line2
            interval = setInterval(() => {
                if (count < line2Text.length) {
                    typewriterLine2.textContent += line2Text[count];
                    count++;
                } else {
                    clearInterval(interval); // Stop the interval once line2 is finished typing
                }
            }, 100);
        }
    }, 100);
}

import {skills, projects} from './listData.js';
const skillsEntries = Object.entries(skills);
const projectsEntries = Object.entries(projects);
const skillsGrid = document.querySelector('.skills-grid');
const projectsGrid = document.querySelector('.projects-grid');

function setSkillsGrid() {
    console.log('running');
    skillsEntries.slice(0, 8).forEach(entry => {
        const skillName = entry[0];
        const skillIcon = entry[1];

        const gridBlock = document.createElement('div');
        gridBlock.className = 'grid-blocks';
        const langContainer = document.createElement('div');
        langContainer.className = 'lang-container';
        const langIcon = document.createElement('i');
        langIcon.className = skillIcon;
        const langName = document.createElement('p');
        langName.textContent = skillName;

        langContainer.appendChild(langIcon);
        langContainer.appendChild(langName);
        gridBlock.appendChild(langContainer);
        skillsGrid.appendChild(gridBlock);
    });
}

function setProjectsGrid() {
    console.log('running');
    projectsEntries.forEach((entry, index) => {
        const appName = entry[0];
        const appLang = entry[1];

        const projectBlock = document.createElement('div');
        projectBlock.className = 'projects-blocks';
        const projectImg = document.createElement('div');
        projectImg.className = 'projects-img img' + (index + 1); // Fix: Use className instead of className
        const layer = document.createElement('div');
        layer.className = 'layer';
        const name = document.createElement('p');
        name.textContent = appName;
        const progWifLine = document.createElement('p');
        progWifLine.textContent = 'Programmed with:';
        const langUsed = document.createElement('div');
        langUsed.className = 'lang-used';
        
        appLang.forEach(lang => {
            const langItem = document.createElement('i');
            const langIcon = skills[lang];
            langItem.className = langIcon;
            langUsed.appendChild(langItem);
        });

        layer.appendChild(name);
        layer.appendChild(progWifLine);
        layer.appendChild(langUsed);
        projectBlock.appendChild(projectImg);
        projectBlock.appendChild(layer);
        projectsGrid.appendChild(projectBlock);
    });
    const lastBlock = document.createElement('a');
    lastBlock.className = 'projects-blocks last-block';
    lastBlock.setAttribute('href', 'https://github.com/LeungYuLap19');
    const lastBlockText = document.createElement('p');
    lastBlock.textContent = 'More on Github';
    const lastBlockArrow = document.createElement('i');
    lastBlockArrow.className = 'fas fa-arrow-right';
    lastBlock.appendChild(lastBlockText);
    lastBlock.appendChild(lastBlockArrow);
    projectsGrid.appendChild(lastBlock);
}

setSkillsGrid();
setProjectsGrid();
setTypewriters();

// observer for fade in

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root
  threshold: 0.3, // The percentage of the item's visibility required to trigger the intersection callback
});

// Get the elements you want to observe
const fadeElements = document.querySelectorAll('.fade-in');

// Register each element with the observer
fadeElements.forEach((element) => {
  observer.observe(element);
});