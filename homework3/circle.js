function circleArea(r){
    let area= Math.PI*r*r
    console.log("Dairenin alanı:",area)
}
function circleCircumference(r){
    let c = 2*Math.PI*r
    console.log("Dairenin çevresi:",c)
}
module.exports = {
    circleArea,
    circleCircumference
}