const form = document.getElementById("search-field")


form.addEventListener("submit", submitHandler => {
    submitHandler.preventDefault()
    const number = document.getElementById('phone-number').value.replace(/\s/g, '');
    
    window.location.href = `/${number}`
});
