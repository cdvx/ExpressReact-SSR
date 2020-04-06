

// export default class DataApi {

//     constructor(data) {
//         this.rawData = data;
//     }

//     mapIntoObject=(arr)=> {
//         return arr.reduce((acc, curr) => {
//             acc[curr.id] = curr;
//             return acc
//         }, {})
//     }

//     getArticles=()=> {
//         return this.mapIntoObject(this.rawData.articles)
//     }

//     getAuthors=( )=> {
//         return this.mapIntoObject(this.rawData.authors)
//     }

// }