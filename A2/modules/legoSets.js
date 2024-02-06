/********************************************************************************
*  WEB322 – Assignment 02
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Kiarash Kia Student ID: 108688235 Date: 02/05/2024
*
********************************************************************************/

const setData = require("../data/setData");
const themeData = require("../data/themeData");

let sets = [];

function initialize() {
setData.forEach(data => {
    let theme = themeData.find(theme => theme.id === data.theme_id)
    if(theme) {
        sets.push(data);
    }
});

return new Promise((resolve, reject) => {
    if (sets.length > 0) {
        console.log('The "sets" array is filled with objects');
        resolve();
    } else {
        reject('Initialization failed: No sets found');
    }
});
}

function getAllSets() {
return new Promise((resolve) => {
    resolve(sets);
});
}

function getSetByNum(setNum) {
return new Promise((resolve, reject) => {
    let set = sets.find(set => set.set_num === setNum);
    if (set) {
        resolve(set);
    } else {
        reject('Unable to find requested set with set number: ' + setNum);
    }
});
}

function getSetsByTheme(theme) {
return new Promise((resolve, reject) => {
    let themeSets = sets.filter(set => set.theme && set.theme.toLowerCase().includes(theme.toLowerCase()));
    if (themeSets.length) {
        resolve(themeSets);
    } else {
        reject('Unable to find sets by theme: ' + theme);
    }
});
}


initialize().then(() => {
    console.log('Initialization successful.');

    getAllSets().then(sets => {
        console.log(`Total sets loaded: ${sets.length}`);
    });


    getSetsByTheme('Technic').then(technicSets => {
        console.log(`Found ${technicSets.length} Technic sets.`);
    }).catch(console.error);

 
    getSetByNum('001-1').then(set => {
        console.log('Found set by number:', set);
    }).catch(console.error);
}).catch(console.error);



//module.exports = { initialize, getAllSets, getSetByNum, getSetsByTheme }