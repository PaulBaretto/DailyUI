

let incressButtons = document.querySelectorAll('.incress-btn')
let decressButtons = document.querySelectorAll('.decress-btn')


incressButtons.forEach((plusBtn) => {
    plusBtn.addEventListener('click', (e) => {
        let totalProducts = e.currentTarget.nextElementSibling;
        if(totalProducts && totalProducts.tagName === 'INPUT'){
        //    let  t = ++1
            // totalProducts.value =  t;
            totalProducts.value =  parseInt(totalProducts.value) + 1;
        }
        
    })
})

// decressButtons.forEach((minusBtn) => {
//     minusBtn.addEventListener('click', (e) => {
//         let totalProducts = e.currentTarget.nextElementSibling;
//         if(totalProducts && totalProducts.tagName === 'INPUT'){
//             totalProducts.value =  parseInt(totalProducts.value) - 1;
//         }
        
//     })
// })
