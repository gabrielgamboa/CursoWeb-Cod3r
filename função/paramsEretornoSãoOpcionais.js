function area(b,h) {
    const area = b*h
    if (area>20) {
        console.log(`Área invalida de ${area}m²`)
    }
    else {
        return area;
    }
}


console.log(area(2,5))
console.log(area(2)) //retorna NaN
console.log(area(2,3,4,5)) //vai ignorar os dois últimos
console.log(area(5,5))