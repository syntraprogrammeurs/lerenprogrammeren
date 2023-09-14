const ingevoerdGetal = Number(prompt("Geef de faculteit van het getal:"));
let faculteit = 1;
let faculteitString = ingevoerdGetal;
for (let i = ingevoerdGetal; i >= 1; i--) {
    //faculteit *= i;
    faculteit = faculteit * i;
    if(i !== ingevoerdGetal){
        faculteitString += "x"+i;
    }
}
//es5
//document.write(faculteitString+ "=" + faculteit);
//es6
document.write(`${ingevoerdGetal}! = ${faculteit}`);

// 5-> 1

// 5 = 1*5
// 20=5*4
// 60=20*3
// 120=60*2
// 120=120*1