function calculateSpace() {
    const sideA = parseFloat(document.getElementById("sideA").value);
    const heightH = parseFloat(document.getElementById("heightH").value);
    const radiusR = parseFloat(document.getElementById("radiusR").value);
    const volumeM = parseFloat(document.getElementById("volumeM").value);

    const volumeCube = Math.pow(sideA, 3);
    const volumeCylinder = Math.PI * Math.pow(radiusR, 2) * heightH;
    
    let result = "Жидкость не поместится ни в одну ёмкость.";
    
    if (volumeM <= volumeCube) {
        result = "Жидкость поместится в кубическую ёмкость.";
    } else if (volumeM <= volumeCylinder) {
        result = "Жидкость поместится в цилиндрическую ёмкость.";
    } else if (volumeM <= volumeCube + volumeCylinder) {
        result = "Жидкость поместится и в кубическую, и в цилиндрическую ёмкость.";
    }

    document.getElementById("result").textContent = result;
}