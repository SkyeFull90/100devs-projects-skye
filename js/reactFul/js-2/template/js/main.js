document.querySelector('#convert').addEventListener('click', run);

function run() {
    const cTemperature = parseFloat(document.querySelector('#celsius').value);

    if (isNaN(cTemperature)) {
        document.querySelector('#placeToYell').innerText = "Please enter a valid temperature.";
        return;
    }

    const convertTemp = (cTemperature * 9 / 5) + 32;

    document.querySelector('#placeToYell').innerText = convertTemp;
}
run()