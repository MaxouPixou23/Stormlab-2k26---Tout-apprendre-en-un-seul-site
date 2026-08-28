# /*

# STORMLAB V2 — DATA MANAGER

*/

"use strict";

const STORMLAB_DATA_KEY =
"stormlab_admin_data";

const defaultData = {

```
chasseurs: [
    {
        id: 1,
        name: "Sean Casey",
        role: "DOCUMENTAIRE • IMAX",
        image: "../assets/images/sean-casey.jpg",
        description:
            "Cinéaste et documentariste spécialisé dans les phénomènes météorologiques extrêmes.",
        link: "dominator.html"
    },

    {
        id: 2,
        name: "Joshua Wurman",
        role: "RECHERCHE • RADAR",
        image: "../assets/images/Joshua-Wurman.jpg",
        description:
            "Météorologue et chercheur connu pour ses travaux sur les tornades et le Doppler on Wheels.",
        link: "radar.html"
    },

    {
        id: 3,
        name: "Reed Timmer",
        role: "MÉTÉOROLOGIE • CHASING",
        image: "../assets/images/reed-timmer.jpg",
        description:
            "Météorologue et storm chaser américain spécialisé dans l'observation des phénomènes violents.",
        link: "reed-timmer.html"
    }
],

actualites: [],

alertes: [],

galerie: [],

videos: []
```

};

function getData() {

```
const saved =
    localStorage.getItem(
        STORMLAB_DATA_KEY
    );

if (!saved) {

    saveData(defaultData);

    return structuredClone(defaultData);

}

try {

    return JSON.parse(saved);

} catch {

    saveData(defaultData);

    return structuredClone(defaultData);

}
```

}

function saveData(data) {

```
localStorage.setItem(
    STORMLAB_DATA_KEY,
    JSON.stringify(data)
);
```

}

function resetData() {

```
localStorage.removeItem(
    STORMLAB_DATA_KEY
);

saveData(defaultData);

return getData();
```

}

function generateId(items) {

```
if (!items.length) {
    return 1;
}

return Math.max(
    ...items.map(item => Number(item.id) || 0)
) + 1;
```

}

function addItem(type, item) {

```
const data = getData();

if (!Array.isArray(data[type])) {
    data[type] = [];
}

item.id =
    generateId(data[type]);

data[type].push(item);

saveData(data);

return item;
```

}

function updateItem(type, id, updates) {

```
const data = getData();

const index =
    data[type].findIndex(
        item => Number(item.id) === Number(id)
    );

if (index === -1) {
    return false;
}

data[type][index] = {
    ...data[type][index],
    ...updates
};

saveData(data);

return true;
```

}

function deleteItem(type, id) {

```
const data = getData();

data[type] =
    data[type].filter(
        item =>
            Number(item.id) !== Number(id)
    );

saveData(data);
```

}

function countItems(type) {

```
const data = getData();

return Array.isArray(data[type])
    ? data[type].length
    : 0;
```

}

