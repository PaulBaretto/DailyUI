

let incressButtons = document.querySelectorAll('.incress-btn')
let decreaseButtons = document.querySelectorAll('.decress-btn')
let totalProductCost = document.querySelectorAll('.product-cost');
let perProduct = 30;


incressButtons.forEach((plusBtn) => {
    plusBtn.addEventListener('click', (e) => {
        let currentPrice =  e.target.closest('button').parentElement.parentElement.nextElementSibling.querySelector('h4.product-cost');
        // currentPrice.textContent = 60;

        let plusButton = e.target.closest('button');
        let productHolder = plusButton.parentElement.parentElement;
        let productCost = productHolder.nextElementSibling.querySelector('h4.product-cost');
        let productCostStr = productCost.textContent;
        let productCostSlicedStr = productCostStr.slice(1);

        // get closeet product price 
       
        
        let totalProducts = e.currentTarget.nextElementSibling;
        if(totalProducts && totalProducts.tagName === 'INPUT'){
            let value = parseInt(totalProducts.value);
            if(value < 5){
                totalProducts.value =  value + 1 ;
               
                    productCost.textContent = `$ ${parseInt(productCostSlicedStr) + perProduct}`;
                    updateTotalAmount()
            }else{
                e.preventDefault()
            }
        }
        
        function updateTotalAmount(){
            let subTotal = document.querySelector('.subtotal');
                let subCost = allProductCost();
                subTotal.textContent = `$ ${subCost}`;
                subTotalSticed = subCost.toString()
            
            let shippingCost = document.querySelector('.shippingCost');
                shippingCostStr = shippingCost.textContent;
                shippingCostSliced = shippingCostStr.slice(1)

            let texes = document.querySelector('.totalTexes');
                texesStr = texes.textContent;
                texesSliced = texesStr.slice(1)
        

            let total = document.querySelector('.totalAmount');
            let totalStr = total.textContent;
                total.textContent = `$ ${parseInt(subTotalSticed) + parseInt(shippingCostSliced)  + parseInt(texesSliced) }`

        }
        
    })
})


decreaseButtons.forEach((minusBtn) => {
    minusBtn.addEventListener('click', (e) => {
        let plusButton = e.target.closest('button');
        let productHolder = plusButton.parentElement.parentElement;
        let productCost = productHolder.nextElementSibling.querySelector('h4.product-cost');
        let productCostStr = productCost.textContent;
        let productCostSlicedStr = productCostStr.slice(1);

        let totalProducts = e.currentTarget.previousElementSibling;
        if(totalProducts && totalProducts.tagName === 'INPUT'){
            let value =  parseInt(totalProducts.value);
            if(value > 1){
                totalProducts.value = value - 1;
              
                    productCost.textContent = `$ ${parseInt(productCostSlicedStr) - perProduct}`;
                    updateTotalAmount()
            }
        }

        function updateTotalAmount(){
            let subTotal = document.querySelector('.subtotal');
                let subCost = allProductCost();
                subTotal.textContent = `$ ${subCost}`;
                subTotalSticed = subCost.toString()
                console.log(subTotalSticed);
            
            let shippingCost = document.querySelector('.shippingCost');
                shippingCostStr = shippingCost.textContent;
                shippingCostSliced = shippingCostStr.slice(1)
                console.log(shippingCostSliced)

            let texes = document.querySelector('.totalTexes');
                texesStr = texes.textContent;
                texesSliced = texesStr.slice(1)
                console.log(texesSliced);

            let total = document.querySelector('.totalAmount');
            let totalStr = total.textContent;
                total.textContent = `$ ${parseInt(subTotalSticed) + parseInt(shippingCostSliced)  + parseInt(texesSliced) }`

        }
        
    })
})

// Get products current totol cost
function allProductCost(){
    let total = 0;
    totalProductCost.forEach(totalCost => {
        let y = totalCost.textContent;
        let x = parseFloat(y.slice(1));
        total += x;
    })
    return total;
}





// Progress bar code 
let customer_info_button = document.querySelector('.customer-info-btn')
let payment_info_button = document.querySelector('.payment-btn');
let progress_wrap = document.querySelector('.progress-bar-wrap')
let customer_info_element = progress_wrap.querySelector('.customer-info')
let payment_info_element = progress_wrap.querySelector('.payment-info')

customer_info_button.addEventListener('click', () => {
    customer_info_element.classList.add('fil-prograss');
})
payment_info_button.addEventListener('click', () => {
    payment_info_element.classList.add('fil-prograss');
    let prog_dot = customer_info_element.querySelector('.prog-dot');
    console.log(prog_dot);
    prog_dot.style.cssText = ' transform: scale(0);';
})




// find element in DOM 
function findElement(selector){
    return document.querySelector(selector)
}
// convert to string, not working 
function toTextContent(selector){
    return document.querySelector(selector).textContent;
}