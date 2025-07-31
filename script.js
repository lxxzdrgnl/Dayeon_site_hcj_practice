function changeLanguage(selectElement) {
    const selectedValue = selectElement.value;
    if (selectedValue === "english") {
        window.location.href = "index_eng.html";
    } else if (selectedValue === "korean") {
        window.location.href = "index.html";
    }
}

document.querySelectorAll('.accordion input[type="radio"]').forEach((radio) => {
    radio.previousChecked = false;

    radio.addEventListener('click', function (e) {
        if (this.previousChecked) {
            this.checked = false;
        }
        document.querySelectorAll('.accordion input[type="radio"]').forEach(r => r.previousChecked = false);
        this.previousChecked = this.checked;
    });
});