import { bibleQuery } from "./apiWrapper.js";

async function getBibleList(options = {}) {
    var rawJson = await bibleQuery(options);
    
    var rawData = rawJson.data;
    var list = [];
    for (var i = 0; i < rawData.length; i++) {
        var obj = {
            id: rawData[i].id,
            name: rawData[i].name,
            abbreviation: rawData[i].abbreviation,
            copyright: rawData[i].copyright
        };
        list.push(obj);
    }
    return list;
}