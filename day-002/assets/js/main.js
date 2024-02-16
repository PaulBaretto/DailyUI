

let incressButtons = document.querySelectorAll('.incress-btn')
let decreaseButtons = document.querySelectorAll('.decress-btn')

let perProduct = 100;

incressButtons.forEach((plusBtn) => {
    plusBtn.addEventListener('click', (e) => {
        
        let totalProducts = e.currentTarget.nextElementSibling;
        if(totalProducts && totalProducts.tagName === 'INPUT'){
            let value = parseInt(totalProducts.value);
            if(value < 5){
                totalProducts.value =  value + 1 ;
            }else{
                e.preventDefault()
            }
        }
        
        let plusButton = e.target.closest('button');
        let productHolder = plusButton.parentElement.parentElement;
        let productCost = productHolder.nextElementSibling;
        console.log(productCost);
        
    })
})

decreaseButtons.forEach((minusBtn) => {
    minusBtn.addEventListener('click', (e) => {
        let totalProducts = e.currentTarget.previousElementSibling;
        if(totalProducts && totalProducts.tagName === 'INPUT'){
            let value =  parseInt(totalProducts.value);
            if(value > 1){
                totalProducts.value = value - 1;
            }
        }
        
    })
})


// function test(){
//    console.log(e.currentTarget)
// }