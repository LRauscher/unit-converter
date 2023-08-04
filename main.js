const selectInputUnit = document.getElementById("slt");
const selectOutputUnit = document.getElementById("otp");

function changeMeasurement() {

    const inputValue = parseFloat(document.getElementById("putOne").value);
    const inputUnit = document.getElementById("slt").value;
    const outputUnit = document.getElementById("otp").value;
    let Result;

    if (inputUnit === "centimeter" && outputUnit === "meter") {
        Result = inputValue / 100;
    } else if (inputUnit === "centimeter" && outputUnit === "kilometer") {
        Result = inputValue / 100000;
    } else if (inputUnit === "meter" && outputUnit === "centimeter") {
        Result = inputValue * 100;
    } else if (inputUnit === "meter" && outputUnit === "kilometer") {
        Result = inputValue / 1000;
    } else if (inputUnit === "kilometer" && outputUnit === "centimeter") {
        Result = inputValue * 100000;
    } else if (inputUnit === "kilometer" && outputUnit === "meter") {
        Result = inputValue * 1000;
    } else {
        Result = inputValue;
    }

    let OutputResult = document.getElementById("putTwo");
    OutputResult.value = Result;
}

document.getElementById("putOne").addEventListener("input", changeMeasurement);
selectInputUnit.addEventListener("change", changeMeasurement);
selectOutputUnit.addEventListener("change", changeMeasurement);
