const productForm = document.querySelector('.product-form')

export const actvateForm = () =>{
    productForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        window.location.href = 'https://www.youtube.com/';
    })
}
