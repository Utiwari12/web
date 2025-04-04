
function fetchData(){

        return new Promise((resolve, reject)=> {
            setTimeout(() => {
                //let success = true;
                let success = false;
                if (success) {
                    resolve("Data fetched successfully");       
                }else{
                    reject("Error fetching data");
                }
            }, 3000);
        })       

}

// let response = fetchData();
// console.log(response);

fetchData()
 .then((data) => {
    console.log(data);
    return data.toLowerCase();
 }).then((value) => {
    console.log(value);
 })
 .catch((err) => {
    console.error(err);
    return err.toLowerCase();
 }).then((value) => {
    console.log(value);
 })