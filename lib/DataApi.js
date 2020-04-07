

export default class StateApi {

    constructor(data) {
        this.data = {
            articles: this.mapIntoObject(data.articles),
            authors: this.mapIntoObject(data.authors)
        }
    }

    mapIntoObject=(arr)=> {
        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc
        }, {})
    }

    lookupAuthor = authorId => {
        return this.data.authors[authorId]}

    getState = () => this.data;

}