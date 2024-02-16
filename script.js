
const scriptURL = 'https://script.google.com/macros/s/AKfycbzFEx5dn9hdQNjp-knKdHDnhjZcJe_f54fVHDvbxg5CwQresRaqfkLvO4_EDLMRwBfw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
            msg.innerHTML = "Thanks for subscribing !"
            setTimeout(()=>{
                msg.innerHTML = ""
            },6000)
            form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

