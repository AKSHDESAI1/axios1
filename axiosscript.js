const divdata = document.getElementById("divdata");


const makerequest = async(e) => {
    e.preventDefault();
    try {
        console.log("Button Clicked");
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let fees = document.getElementById("fees").value;
        console.log(name, age, fees);
        const result = await axios.post('http://127.0.0.1:3000/student', {
            name: name,
            age: age,
            fees: fees
        })
        console.log(result);
    } catch (error) {
        console.log(error);   
    }
}

document.getElementById("btn").addEventListener('click', makerequest);
