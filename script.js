const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let sum = 0;

const getSum = () => {
  //Add your code here
  const price = document.querySelectorAll(".price");
  let total = 0;
  price.forEach((t) => {
    total += parseInt(t.innerHTML);
  });
  if (total == sum) return;
  sum = total;
  let tr = document.createElement("tr");
  tr.innerHTML = "<td colspan=2>" + total + "</td>";
  let table = document.querySelector("table");
  table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

