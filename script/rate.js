const ratingContainer = document.querySelector('.product-rate_container');
export const getRate = () => {
    ratingContainer.addEventListener('click', (e)=>{
        const {target} = e;
        if(target.closest('.product-rate_item')){
            const {itemValue} = target.dataset;
            target.parentNode.dataset.totalValue = itemValue;
        }
    })
}


