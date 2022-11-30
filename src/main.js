function handleDelete (e) {
    const value = e.target.previousElementSibling.innerHTML;
    console.log(value);
    const location = window.location.href;
    console.log(location);
    window.location.href = `${location}/delete/${value}`; 
}

function handleEdit (e) {
    const value = e.target.previousElementSibling.previousElementSibling.innerHTML;
    console.log(value);
    const location = window.location.href;
    console.log(location);
    window.location.href = `${location}/edit/${value}`
}