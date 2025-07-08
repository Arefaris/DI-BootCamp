fetch("http://localhost:3001/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    render(data);
  })
  .catch((err) => {
    console.log(err);
  });

const render = (arr) => {
  const html = arr.map((item) => {
    return `<div class='box'>
        <h2>${item.name}</h2>
        <p>${item.email}</p>
        </div>`;
  });
  document.getElementById("root").innerHTML = html.join("");
};

const getUserById = (e) => {
  e.preventDefault();
  const userid = e.target.userid.value;
  fetch("http://localhost:3001/users/" + userid)
    .then((res) => {
      console.log(res);
      if (res.status === 404) {
        document.getElementById("root").innerHTML = "user not found";
      } else {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
      if (data) render([data]);
    })
    .catch((err) => {
      console.log(err);
    });
};
