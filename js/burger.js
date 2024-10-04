const hamburger = document.querySelector(".hamburger input");
const menu = document.querySelector(".menu");
const hamburgerLabel = document.querySelector(".hamburger");

// Функция для закрытия меню при клике вне меню или гамбургера
document.addEventListener("click", function (event) {
	const isClickInside =
		hamburgerLabel.contains(event.target) || menu.contains(event.target);

	if (!isClickInside) {
		hamburger.checked = false;
		// Плавно скрываем меню
		menu.style.opacity = "0";
		menu.style.transform = "translateY(-20px)";
		setTimeout(() => {
			menu.style.display = "none";
		}, 300); // Задержка в 300мс для завершения анимации
	}
});

// Открытие/закрытие меню с анимацией
hamburger.addEventListener("click", () => {
	if (hamburger.checked) {
		menu.style.display = "flex";
		// Плавное появление меню
		setTimeout(() => {
			menu.style.opacity = "1";
			menu.style.transform = "translateY(0)";
		}, 10); // Небольшая задержка для срабатывания анимации
	} else {
		menu.style.opacity = "0";
		menu.style.transform = "translateY(-20px)";
		setTimeout(() => {
			menu.style.display = "none";
		}, 300); // Задержка для плавного исчезновения
	}
});
