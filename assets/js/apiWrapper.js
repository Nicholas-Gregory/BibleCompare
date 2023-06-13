function commaSeparatedList(arr) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) {
            str += (arr[i] + ",");
        } else {
            str += arr[i];
        }
    }
    return str;
}

async function makeRequest(endpoint) {
    var response = await fetch(`https://api.scripture.api.bible/v1/${endpoint}`, { headers: { 'accept': 'application/json', 'api-key': apiKey }});
    var data = await response.json();
    return data;
}

export function bibleQuery(options = {}) {
    var endpoint = "bibles?";
    if (options.language) {
        endpoint += `language=${options.language}&`;
    }
    if (options.abbreviation) {
        endpoint += `abbreviation=${options.abbreviation}&`;
    }
    if (options.name) {
        endpoint += `name=${options.name}&`;
    }
    if (options.ids) {
        endpoint += `ids=${commaSeparatedList(options.ids)}&`
    }
    if (options.includeFullDetails) {
        endpoint += `include-full-details=${options.includeFullDetails}`;
    }

    return makeRequest(endpoint);
}

export function getBibleById(id) {
    return makeRequest(`bibles/${id}`);
}

export function queryBooks(id, options = {}) {
    var endpoint = `bibles/${id}/books?`
    if (options.includeChapters) {
        endpoint += "include-chapters=true&";
    }
    if (options.includeChaptersAndSections) {
        endpoint += "include-chapters-and-sections=true";
    }

    return makeRequest(endpoint);
}

export function getBookById(bibleId, bookId, includeChapters = false) {
    var endpoint = `bibles/${bibleId}/books/${bookId}?`;
    if (includeChapters) {
        endpoint += "include-chapters=true";
    }

    return makeRequest(endpoint);
}

export function queryChapters(bibleId, bookId) {
    return makeRequest(`bibles/${bibleId}/books/${bookId}/chapters`);
}

export function getChapterById(bibleId, chapterId, options = {}) {
    var endpoint = `bibles/${bibleId}/chapters/${chapterId}?`;

    if (options.contentType) {
        endpoint += `content-type=${options.contentType}&`;
    }
    if (options.includeNotes) {
        endpoint += "include-notes=true&";
    }
    if (options.includeTitles === false) {
        endpoint += "include-titles=false&";
    }
    if (options.includeChapterNumbers) {
        endpoint += "include-chapter-numbers=true&";
    }
    if (options.includeVerseNumbers === false) {
        endpoint += "include-verse-numbers=false&";
    }
    if (options.includeVerseSpans) {
        endpoint += "include-verse-spans=true&";
    }
    if (options.parallels) {
        endpoint += `parallels=${commaSeparatedList(options.parallels)}`;
    }

    return makeRequest(endpoint);
}

export function querySectionsByBook(bibleId, bookId) {
    return makeRequest(`bibles/${bibleId}/books/${bookId}/sections`);
}

export function querySectionsByChapter(bibleId, chapterId) {
    return makeRequest(`bibles/${bibleId}/chapters/${chapterId}/sections`)
}

export function getSectionById(bibleId, sectoinId, options = {}) {
    var endpoint = `bibles/${bibleId}/sections/${sectoinId}?`;
    
    if (options.contentType) {
        endpoint += `content-type=${options.contentType}&`;
    }
    if (options.includeNotes) {
        endpoint += "include-notes=true&";
    }
    if (options.includeTitles === false) {
        endpoint += "include-titles=false&";
    }
    if (options.includeChapterNumbers) {
        endpoint += "include-chapter-numbers=true&";
    }
    if (options.includeVerseNumbers === false) {
        endpoint += "include-verse-numbers=false&";
    }
    if (options.includeVerseSpans) {
        endpoint += "include-verse-spans=true&";
    }
    if (options.parallels) {
        endpoint += `parallels=${commaSeparatedList(options.parallels)}`;
    }

    return makeRequest(endpoint);
}

export function queryVerses(bibleId, chapterId) {
    return makeRequest(`bibles/${bibleId}/chapters/${chapterId}/verses`);
}

export function getVerseById(bibleId, verseId, options = {}) {
    var endpoint = `bibles/${bibleId}/verses/${verseId}?`;

    if (options.contentType) {
        endpoint += `content-type=${options.contentType}&`;
    }
    if (options.includeNotes) {
        endpoint += "include-notes=true&";
    }
    if (options.includeTitles === false) {
        endpoint += "include-titles=false&";
    }
    if (options.includeChapterNumbers) {
        endpoint += "include-chapter-numbers=true&";
    }
    if (options.includeVerseNumbers === false) {
        endpoint += "include-verse-numbers=false&";
    }
    if (options.includeVerseSpans) {
        endpoint += "include-verse-spans=true&";
    }
    if (options.parallels) {
        endpoint += `parallels=${commaSeparatedList(options.parallels)}&`;
    }
    if (options.useOrgId) {
        endpoint += "use-org-id=true";
    }

    return makeRequest(endpoint);
}

export function search(bibleId, options = {}) {
    var endpoint = `bibles/${bibleId}/search?`;

    if (options.query) {
        endpoint += `query=${options.query}&`;
    }
    if (options.limit) {
        endpoint += `limit=${options.limit}&`;
    }
    if (options.offset) {
        endpoint += `offset=${options.offset}&`;
    }
    if (options.sort) {
        endpoint += `sort=${options.sort}&`;
    }
    if (options.range) {
        endpoint += `range=${commaSeparatedList(options.range)}&`;
    }
    if (options.fuzziness) {
        endpoint += `fuzziness=${options.fuzziness}`;
    }

    return makeRequest(endpoint);
}