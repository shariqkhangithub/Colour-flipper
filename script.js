function colourGenerate() {
    let arr = [
    "#00FF00", 
    "#39FF14", 
    "#FF073A", 
    "#00FFFF",
    "#FF1493", 
    "#FFD700", 
    "#FF4500", 
    "#9400D3", 
    "#7FFF00", 
    "#FF00FF", 
    "#00BFFF", 
    "#FF6347", 
    "#8A2BE2", 
];
    let pick = Math.floor(Math.random() * arr.length);
    let b = arr[pick];
    document.body.style.background = b
    document.getElementById("spn").innerText = b
}
document.getElementById("btn").addEventListener("click", colourGenerate);
colourGenerate()