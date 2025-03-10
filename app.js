const inputElement = document.querySelector("#search");
const buttonElement = document.querySelector("#search-btn");
const userDetailElement = document.querySelector("#user-detail");

buttonElement.addEventListener("click", async (e) => {
	const userData = await fetchUserDetail(inputElement.value);
	render(userData);
});

function render(user) {
	userDetailElement.innerHTML = "";
	const image = document.createElement("img");
	image.src = user.avatar_url;

	userDetailElement.appendChild(image);
}

async function fetchUserDetail(userName) {
	const url = `https://api.github.com/users/${userName}`;

	const response = await fetch(url);

	if (!response.ok) {
		throw new Error("rejected response");
	}

	const userData = await response.json();

	console.log(userData);
	return userData;
}