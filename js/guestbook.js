function checkTaste() {
    const form = document.getElementById('guestbookForm');
    const selectedTastes = Array.from(form.elements).filter(el => el.type === 'checkbox' && el.checked).map(el => el.id);

    alert(`${document.getElementById('visitorName').value}님, 저와 ${selectedTastes.length}개의 취향이 같으시네요!`);
}
