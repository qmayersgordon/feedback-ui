const ratingEl = document.querySelector('.rating-container');
const sendBtn = document.querySelector('.sendBtn');
const feedbackContainer = document.querySelector('.feedback-container');
const responseContainer = document.querySelector('.response-container');
let val = document.querySelector('.response-container #feed');


function getFeedback(el){
    const feedback = el.children[1].innerText;
    val.innerText = `Feedback ${feedback}.`;
}


ratingEl.addEventListener('click', (event) => {
    if(event.target && event.target.parentElement.classList.contains('rating')){
        const activeRating = document.querySelector('.rating.active');
        activeRating.classList.remove('active');
        event.target.parentElement.classList.add('active');
        getFeedback(event.target.parentElement);
    }

})

sendBtn.addEventListener('click', () => {
    feedbackContainer.style.display = 'none';
    responseContainer.style.display = 'block';
    
})