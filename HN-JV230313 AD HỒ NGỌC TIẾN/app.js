let students = [
  {
    id: 1,
    hoten: "Nguyễn Văn A",
    email: "a@gmail.com",
    dienthoai: "0345678910",
    diachi: "HCM",
    gioitinh: "Nam",
    hanhdong: "aaaa",
  },
  {
    id: 2,
    hoten: "Nguyễn Văn B",
    email: "b@gmail.com",
    dienthoai: "0463442562",
    diachi: "HCM",
    gioitinh: "Nam",
    hanhdong: "bbbbb",
  },
  {
    id: 3,
    hoten: "Nguyễn Văn C",
    email: "c@gmail.com",
    dienthoai: "0524624453",
    diachi: "HCM",
    gioitinh: "Nam",
    hanhdong: "cccccc",
  },
];
console.log(students);

const tbody = document.getElementById("tbody");
const form = document.getElementById("main-form");
const toastElement = document.getElementById("toast-body");
let updateIndex = undefined;

function renderStudents() {
  tbody.innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    tbody.innerHTML += `<tr id="${students[i].id}">
            <th scope="row">${i + 1}</th>
            <td>${students[i].hoten}</td>
            <td>${students[i].email}</td>
            <td>${students[i].dienthoai}</td>
            <td> ${students[i].diachi}</td>
            <td>${students[i].gioitinh}</td>
            <td>
                <button class="btn btn-success btn-update">edit</button>
                <button class="btn btn-danger btn-delete">Delete</button>
            </td>
          </tr>`;
  }
}
renderStudents();

// Lấy các trường input từ form
const hoTenInput = document.getElementById("hoTen");
const emailInput = document.getElementById("email");
const sdtInput = document.getElementById("sdt");
const gioiTinhInput = document.getElementsByName("gioiTinh");

// Xử lý sự kiện click vào nút "Lưu lại"
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const hoTen = hoTenInput.value;
  const email = emailInput.value;
  const sdt = sdtInput.value;
  let gioiTinh = "";
  for (let i = 0; i < gioiTinhInput.length; i++) {
    if (gioiTinhInput[i].checked) {
      gioiTinh = gioiTinhInput[i].value;
      break;
    }
  }

  if (hoTen !== "" && email !== "" && sdt !== "" && gioiTinh !== "") {
    const id = students.length + 1;
    const newStudent = {
      id,
      hoten: hoTen,
      email,
      dienthoai: sdt,
      hanhdong: "nnnn",
    };
    students.push(newStudent);
    renderStudents();
    form.reset();
  } else {
    alert("bạn hãy nhập đầy đủ thông tin");
  }
});

tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-delete")) {
    const rowId = e.target.closest("tr").id;
    const rowIndex = students.findIndex(
      (student) => student.id === parseInt(rowId)
    );
    students.splice(rowIndex, 1);
    renderStudents();
  }
});
