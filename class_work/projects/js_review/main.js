function convert() {
    const c_to_f = c => (c * 9/5) + 32;
    let c = parseFloat(document.getElementById("celsiusInput").value);
    let resultElement = document.getElementById("result");

    if (!isNaN(c)) {
        let f = c_to_f(c);
        resultElement.textContent = `${c} C is ${f} F`;
    } else {
        resultElement.textContent = "Invalid input";
    }
}