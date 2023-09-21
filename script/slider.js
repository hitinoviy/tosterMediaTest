const sliderContainer = document.querySelector('.product-slider-container');
const sliderItems = document.querySelector('.product-slider-items');

export const activateSlider = () =>{
    sliderItems.querySelector('.product-slider-item').classList.add('active')
    sliderItems.addEventListener('click',(e)=>{
        const {target} = e;
        if(target.closest('.product-slider-item')){
            const targetItem = target.closest('.product-slider-item');
            const id = targetItem.dataset.id;
            sliderContainer.style.transform = `translateX(-${id*25}%)`
            removeActiveItem()
            targetItem.classList.add('active')
        }
    })
}

const removeActiveItem = () => {
    sliderItems.querySelectorAll('.product-slider-item').forEach((item)=>{
        item.classList.remove('active');
    })
}

