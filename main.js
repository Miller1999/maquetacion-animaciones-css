import "normalize.css";
import "./style.css";

const btns = [
	document.querySelector("#btn1"),
	document.querySelector("#btn2"),
	document.querySelector("#btn3"),
];
const modal = document.querySelector(".modal");
const close = document.querySelector("button");
const cards = Array.from(document.querySelectorAll(".card"));
console.log(cards);

btns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		cards.forEach((card) => (card.innerHTML = ""));
		const img1 = document.createElement("img");
		const img2 = document.createElement("img");
		const img3 = document.createElement("img");
		if (e.target.parentElement.id === "btn1") {
			img1.src =
				"https://static.platzi.com/media/public/uploads/spider-man_db8af43d-b692-4986-a385-e645d286e142.png";
			img2.src =
				"https://static.platzi.com/media/public/uploads/spider-man-2_b24c96b3-6d59-496f-815d-32b25eba0141.png";
			img3.src =
				"https://static.platzi.com/media/public/uploads/spider-man-3_19f5c510-8059-4477-abf8-42249a5445b7.png";
			cards[0].append(img1);
			cards[1].append(img2);
			cards[2].append(img3);
		} else if (e.target.parentElement.id === "btn2") {
			img1.src =
				"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a6fb1ee7-a5a4-485c-bab3-fc22668f5684/dfu39wf-d25d1758-dc8b-4681-a955-2df373bdf206.png/v1/fill/w_250,h_185/lego_robin_by_batnado_dfu39wf-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg1IiwicGF0aCI6IlwvZlwvYTZmYjFlZTctYTVhNC00ODVjLWJhYjMtZmMyMjY2OGY1Njg0XC9kZnUzOXdmLWQyNWQxNzU4LWRjOGItNDY4MS1hOTU1LTJkZjM3M2JkZjIwNi5wbmciLCJ3aWR0aCI6Ijw9MjUwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.SI4HXx47gyEs_QA3xwiajr_9PfpwfbQ-_mqTZiXXdiA";
			img2.src =
				"https://clipart.info/images/ccovers/1495815248robin-lego-png-clipart.png";
			img3.src = "https://cdn.merlinssteine.de/minifigs/sh195-bl.webp?v=5";
			cards[0].append(img1);
			cards[1].append(img2);
			cards[2].append(img3);
		} else if (e.target.parentElement.id === "btn3") {
			img1.src =
				"https://www.brickfanatics.com/wp-content/uploads/2024/03/76271_1to1_01-861x1024.png";
			img2.src =
				"https://cdn.toypro.com/media/cache/tp_product_detail/uploads/images/custom/extra/87362-extra.webp";
			img3.src =
				"https://cdn.toypro.com/media/cache/tp_product_detail/uploads/images/custom/extra/87361-extra.webp";
			cards[0].append(img1);
			cards[1].append(img2);
			cards[2].append(img3);
		}

		modal.classList.toggle("hidden");
	});
});
close.addEventListener("click", () => {
	modal.classList.toggle("hidden");
});
