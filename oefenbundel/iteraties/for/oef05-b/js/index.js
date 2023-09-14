for (let i = 0; i < 100; i++) {
    let getal = i < 10 ? "0" + i : i.toString();
    document.write(getal);
    if (i < 99) {
        document.write(",");
    }
}
