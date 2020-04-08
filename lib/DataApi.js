

export default class StateApi {

    constructor(data) {
        this.data = {
            articles: this.mapIntoObject(data.articles),
            authors: this.mapIntoObject(data.authors),
            searchTerm: '',
            timestamp: new Date()
        }
        this.subscriptions = {}
        this.lastSubscriptionId = 0
    }

    mapIntoObject=(arr)=> {
        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc
        }, {})
    }

    lookupAuthor = authorId => {
        return this.data.authors[authorId]
    }

    getState = () => this.data;

    subscribe = (cb) => {
        this.lastSubscriptionId ++;
        this.subscriptions[this.lastSubscriptionId] = cb
        return this.lastSubscriptionId
    }

    unSubscribe = (SubscriptionId) => {
        delete this.subscriptions[SubscriptionId]
    }

    mergeWithState = (stateChange) => {
        this.data ={
            ...this.data,
            ...stateChange
        }
        this.notifySubscribers()
    }


    setSearchTerm =(searchTerm)=> {
        // this.data.searchTerm = searchTerm;
        this.mergeWithState({
            searchTerm
        })
    }

    notifySubscribers = () => {
        Object.values(this.subscriptions).forEach(cb => cb());
    }

    startClock = () => {
        setInterval(()=>{
            this.mergeWithState({
                timestamp: new Date()
            })
        }, 1000)
    }

}