export const format = time => {
    if(time === 'a few seconds ago') {
        return 'just now'
    } else {
        //Eg. 2 months ago,
        //removing ago from dates to make date fit in mobile view
        let arr = time.split(' ')
        arr.splice(-1, 1)
        return arr.join(' ')
    }
}

export const addToStorage
 = (e, palette) => {
    //check if item exists in local storage
    e.target.innerHTML = 'Saved'

    if(localStorage.getItem(`colorful-${palette.id}`)) return

    localStorage.setItem(
        `colorful-${palette.id}`,
        JSON.stringify({
            ...palette,
            fromStorage: true
        })
    )
}

export const removeFromStorage = id => {
    localStorage.removeItem(`colorful-${id}`)
}

export const getFromStorage = () => {

    let  saved = [];

    for (let i = 0; i < localStorage.length; i++){
        if (localStorage.key(i).substring(0,9) === 'colorful-') {
            let item = localStorage.getItem(localStorage.key(i))
            item = JSON.parse(item)
            saved = [...saved, item]
        }
    }
    return saved
}

export const copyCode = (code, e) => {

    let codeElem = e.target.firstElementChild
    //select hexcode
    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(codeElem);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(codeElem);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        alert("Your browser doesn't support copy to clipboard.");
    }
    //execute copy command on whatever code is selected
    document.execCommand("copy");

    codeElem.innerHTML = "<i>Copied!</i>"
    //set hexcode back after 1s
    setInterval(() => {
        codeElem.innerHTML = code
    }, 1000);
}