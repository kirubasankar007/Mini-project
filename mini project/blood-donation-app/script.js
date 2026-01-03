let donors = [];

function addDonor() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let blood = document.getElementById("blood").value;
    let city = document.getElementById("city").value;

    if (name === "" || age === "" || blood === "" || city === "") {
        alert("Please fill all details");
        return;
    }

    let donor = {
        name: name,
        age: age,
        blood: blood,
        city: city
    };

    donors.push(donor);
    displayDonors();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("blood").value = "";
    document.getElementById("city").value = "";
}

function displayDonors() {
    let list = document.getElementById("donorList");
    list.innerHTML = "";

    donors.forEach(donor => {
        let li = document.createElement("li");
        li.textContent = `${donor.name} | ${donor.blood} | ${donor.city}`;
        list.appendChild(li);
    });
}
