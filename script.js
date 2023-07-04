console.log("hello world!");

let students = [
	{
		ID: 1,
		name: "Alice",
		age: 21,
		grade: "A",
		degree: "Btech",
		email: "alice@example.com",
	},
	{
		ID: 2,
		name: "Bob",
		age: 22,
		grade: "B",
		degree: "MBA",
		email: "bob@example.com",
	},
	{
		ID: 3,
		name: "Charlie",
		age: 20,
		grade: "C",
		degree: "Arts",
		email: "charlie@example.com",
	},
];

const tbody = document.getElementById("tbody");

renderData = (students) => {
	tbody.innerHTML = ``;
	for (let i = 0; i < students.length; i++) {
		let tr = document.createElement("tr");
		let id = students[i].ID;
		tr.innerHTML = `
            <td>${students[i].ID}</td>
                    <td>${students[i].name}</td>
                    <td>${students[i].email}</td>
                    <td>${students[i].age}</td>
                    <td>${students[i].grade}</td>
                    <td>
                        ${students[i].degree}
                        <span>
                            <button class="editors edit" id="button-${id}">
                                <img src="./edit 1.svg" alt="" />
                            </button>
                            <button class="editors delete" id="button-${id}">
                                <img src="./trash-2 1.svg" alt="" />
                            </button>
                        </span>
                    </td>
            `;
		tbody.appendChild(tr);
	}
};

renderData(students);

const input_1 = document.getElementById("input-1");
const input_2 = document.getElementById("input-2");
const input_3 = document.getElementById("input-3");
const input_4 = document.getElementById("input-4");
const input_5 = document.getElementById("input-5");

// add new Student

const add = document.getElementById("button");

add.addEventListener("click", (e) => {
	e.preventDefault();

	const name = input_1.value;
	const email = input_2.value;
	const gpa = input_3.value;
	const age = input_4.value;
	const degree = input_5.value;

	let obj = {
		ID: students.length + 1,
		name: name,
		email: email,
		grade: gpa,
		age: age,
		degree: degree,
	};

	if (
		obj.name == "" &&
		obj.email == "" &&
		obj.grade == "" &&
		obj.degree == "" &&
		obj.degree == ""
	) {
		alert("Please fill in all fields");
	} else {
		students.push(obj);
	}

	console.log(students);

	tbody.innerHTML = ``;
	renderData(students);

	input_1.value = "";
	input_2.value = "";
	input_3.value = "";
	input_4.value = "";
	input_5.value = "";
});

console.log(students);

//search for students

let inputTag = document.getElementById("search");
inputTag.addEventListener("keyup", (event) => {
	const searchTerm = inputTag.value.trim().toLowerCase();
	if (searchTerm == "") {
		renderData(students);
		return;
	}

	const filteredData = students.filter((item) => {
		const itemName = item.name.toLowerCase();
		const itemEmail = item.email.toLowerCase();
		const itemDegree = item.degree.toLowerCase();

		return (
			itemName.includes(searchTerm) ||
			itemEmail.includes(searchTerm) ||
			itemDegree.includes(searchTerm)
		);
	});

	renderData(filteredData);
});

// Edit Button

// const button_1 = document.querySelectorAll("button.editors");

// console.log(button_1);

// for (let i = 0; i < button_1.length; i++) {
// 	button_1[i].addEventListener("click", (e) => {
// 		e.preventDefault();
// 		console.log(e);
// 	});
// }

const buttons = document.getElementsByClassName("edit");

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function () {
		// console.log("Button clicked:", this.id, this.classList[1]);
		// const id = this.id;
		// const value = this.classList[1];
		// console.log(students);
		// console.log(id);
		input_1.value = students[i].name;
		input_2.value = students[i].email;
		input_3.value = students[i].grade;
		input_4.value = students[i].age;
		input_5.value = students[i].degree;

		const id = i + 1;
		const name = input_1.value;
		const email = input_2.value;
		const gpa = input_3.value;
		const age = input_4.value;
		const degree = input_5.value;

		let obj = {
			ID: id,
			name: name,
			email: email,
			grade: gpa,
			age: age,
			degree: degree,
		};

		console.log(students);

		tbody.innerHTML = ``;
		renderData(students);

		// input_1.value = "";
		// input_2.value = "";
		// input_3.value = "";
		// input_4.value = "";
		// input_5.value = "";
	});
}

// const deleteButton = document.getElementsByClassName("delete");

// students.forEach((element, i) => {
// 	deleteButton[i].addEventListener("click", function () {
// 		students.splice(i, 1);
// 		renderData(students);
// 	});
// });
// for (const i of deleteButton) {
// 	deleteButton[i].addEventListener("click", function () {
// 		students.splice(i, 1);
// 		renderData(students);
// 	});
// }
