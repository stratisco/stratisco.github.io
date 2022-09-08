document.write(`<ul class='pageList'>`);
for (cPage in pages) {
    if (pages[cPage].tags.charAt(headers[page].index) == '1') {
        document.write(`<li><a id='${pages[cPage].class}' href='${pages[cPage].src}'>${cPage}</a></li>`);
    }
}
document.write(`</ul>`);