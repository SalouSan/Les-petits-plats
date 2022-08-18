export function filterElements (letters, elements) {
    if (letters.length > 2){
        for(let i=0; i< elements.length; i++){
            if(elements[i].textContent.toLowerCase().includes(letters)){
                elements[i].style.display = "block";
            }
            else{
                elements[i].style.display = "none";
            }
        }
    }
    else {
        for (let i=0; i<elements.length; i++){
            elements[i].style.display= "block";
        }
    }
}