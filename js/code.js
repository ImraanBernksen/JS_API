// fetch('../data/data.json')
// .then((response)=> {
//     return response.json();
// })
// .then((data)=> {
//     console.log(data);
// })
// .catch(()=> {
//     console.log("Please try again later");
// });

// fetch('../data/data.json')
// .then((res)=> {
//     return res.json();
// })
// .then((data)=> {
//     console.table(data.results);
//     let result = data.results;
//     console.table(results);
// });

// fetch('../data/data.json')
// .then((res)=> {
//     return res.json();
// })
// .then((data)=> {
//     let results = data.results;
//     let record = results.filter((item)=>{
//         return item.id == 1
//     })
//     console.table(record);
// for (let data of results) {
//     console.log(data);
// }
// })

// let data = [9, 12, "Dybala", 26, 8, 1];
// console.log(data);
// data.push(20);
// data.shift();
// data.pop();
// console.log(data.pop());
// data = data.filter(item=> {
//     return item !== 9
// })
// data.unshift("Felix");
// console.log(data.filter(item => {
//     return typeof item !== "string"
// }));
// console.log(data.filter(item => typeof item == "Number"));
// console.log(data.filter(Number));
// for(let d of data) {
//     if(typeof d != "string")
//     console.log(d);
// }
// let onlyNumbers = [];
// for(let d of data) {
//     if(typeof d != "string")
//     onlyNumbers.push(d)
//     }
// console.log(onlyNumber);
// let onlyNumber = data.filter(Number);
// console.log(onlyNumber);
// let sortedValues = onlyNumber.sort((a, b)=> a-b);
// let sortedValues = onlyNumber.sort((a, b)=> b-a);
// console.log(sortedValues);
// console.log(data.slice(3, 4));
// let first = data.slice(0, 2);
// let second = data.slice(3);
// let finalResult = [...first , ...second];
// console.log(finalResult);
// let wellDone = first + second;
// console.log(wellDone);
// splice(start, removeCount, item1, item2...)
// data.splice(2, 1, "Zaniolo");
// console.log(data);
// data[2] = "Havertz"

// fetch("../data/data.json")
// .then((res)=> {
//     return res.json();
// })
// .then(data=> {
//     console.log(data.results);
// })
// .catch(err=> {
//     console.log("Please try again later");
// })

// (async function fetchData() {
//     let res = await fetch("../data/data.json");
//     let data = await res.json();
//      console.table(data.results);
// })();


let wrapper = document.querySelector('.wrapper');
async function fetchData() {
    let res = await fetch("https://randomuser.me/api?results=100");
    let data = await res.json();
    return data.results;
};
(async function display() {
    let data = await fetchData();
    data.forEach( (item)=> {
        // document.write(`<p>${item.gender}</p><br>`);
        //  console.log(item);
        wrapper.innerHTML +=`
        <div class="card" style="width: 18rem;">
        <img src="${item.picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
    })
})();