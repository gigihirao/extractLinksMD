module.exports = getLinksFromMd;
function getLinksFromMd(string) {
    if (string.length === ''){
        throw new Error ('Campo vazio');
    } else if (string === !NaN) {
        throw new Error ('Não pode conter números')
    }
    let urlRegex = new RegExp(/(?<=\().*?(?=\))/gim);
	let url = string.match(urlRegex);
	let textRegex = new RegExp(/(?<=\[).+?(?=\])/gim);
    let text = string.match(textRegex);
    const linkList = [];
    for (let eachText in text){
      linkList.push({
      'text': text[eachText],
      'href': url[eachText]
      });
    }
    return linkList;
}
