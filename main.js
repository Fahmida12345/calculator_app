const input_screen = document.getElementById("input_screen")
const output_screen = document.getElementById("output_screen")

/**
 * Old style of js
 */

// function digit(value){
    
// }
const digit=(value)=>{
    input_screen.value=input_screen.value + value ;
}
const result=() =>{
    output_screen.value=eval(input_screen.value);

}
const clearScreen = () => {
    input_screen.value = ""
}