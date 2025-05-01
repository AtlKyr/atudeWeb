document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const portButton = document.querySelector('#portButton');

    dropdown.addEventListener('mouseover', () => {
        console.log('Mouse over dropdown');
        portButton.style.backgroundColor = '#6a6ab0';
        portButton.style.borderRadius = '5px 5px 0 0';
    });

    dropdown.addEventListener('mouseout', () => {
        portButton.style.backgroundColor = '';
        portButton.style.borderRadius = '';
    });
});