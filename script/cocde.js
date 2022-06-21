async function getData() {
    let collections = await fetch("https://randomuser.me/api?results=3");
    let data = collections.json();
    return data;
  }
  // Display
  
  async function displayData() {
    let data = await getData();
    data.results.forEach((item) => {
      document.getElementById("name").innerHTML = item;
      document.getElementById("email").innerHTML = item;
      document.getElementById("age").innerHTML = item;
      document.getElementById("address").innerHTML = item;
      document.getElementById("phone_no").innerHTML = item;
      document.getElementById("name").innerHTML = [
        `${item["name"].title} - ${item["name"].first} ${item["name"].last}`,
      ];
      document.querySelector("#image").src = `${item["picture"].large}`;
      document.getElementById("email").innerHTML = [`${item.email}`];
      document.getElementById("age").innerHTML = [`${item["dob"].age}`];
      document.getElementById("address").innerHTML = [
        `${item.location.street.name} number ${item.location.street.number}`,
      ];
      document.getElementById("phone_no").innerHTML = [`${item.phone}`];
    });
  }
  let back = document.createElement("img");
  document.body.appendChild(back);
  displayData();
  async function displayData1() {
    let data = await getData();
    data.results.forEach((item) => {
      document.getElementById("name1").innerHTML = item;
      document.getElementById("email1").innerHTML = item;
      document.getElementById("age1").innerHTML = item;
      document.getElementById("address1").innerHTML = item;
      document.getElementById("phone_no1").innerHTML = item;
      document.getElementById("name1").innerHTML = [
        `${item["name"].title} - ${item["name"].first} ${item["name"].last}`,
      ];
      document.querySelector("#image1").src = `${item["picture"].large}`;
      document.getElementById("email1").innerHTML = [`${item.email}`];
      document.getElementById("age1").innerHTML = [`${item["dob"].age}`];
      document.getElementById("address1").innerHTML = [
        `${item.location.street.name} number ${item.location.street.number}`,
      ];
      document.getElementById("phone_no1").innerHTML = [`${item.phone}`];
    });
  }
  displayData1();
  async function displayData2() {
    let data = await getData();
    data.results.forEach((item) => {
      document.getElementById("name2").innerHTML = item;
      document.getElementById("email2").innerHTML = item;
      document.getElementById("age2").innerHTML = item;
      document.getElementById("address2").innerHTML = item;
      document.getElementById("phone_no2").innerHTML = item;
      document.getElementById("name2").innerHTML = [
        `${item["name"].title} - ${item["name"].first} ${item["name"].last}`,
      ];
      document.querySelector("#image2").src = `${item["picture"].large}`;
      document.getElementById("email2").innerHTML = [`${item.email}`];
      document.getElementById("age2").innerHTML = [`${item["dob"].age}`];
      document.getElementById("address2").innerHTML = [
        `${item.location.street.name} number ${item.location.street.number}`,
      ];
      document.getElementById("phone_no2").innerHTML = [`${item.phone}`];
    });
  }
  displayData2();