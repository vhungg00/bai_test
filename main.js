const arrays = [10 ,20 ,20 ,10 ,10 ,30 ,50 ,10 ,20];

const arrNew = arrays.reduce((arrNew, item) => {
    if (arrNew.indexOf(item) === -1) {
        console.log(item);
      arrNew.push(item);
    }
    return arrNew;
  }, []);
console.log(arrNew);

let count_result = 0;
arrNew.forEach((item, i) => {
  let count = 0;
  arrays.forEach((item2, i) => {
    if (item2 === item) {
      count++;
    }
  });
  count_result = count_result + (count % 2);
});
console.log("output: ", count_result);

document.getElementById("app").innerHTML = `
<h1>Kết quản là: ${count_result} đôi tất</h1>
`;
