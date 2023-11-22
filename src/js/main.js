const allPanels = document.querySelectorAll('.panel');

for(const panel of allPanels){
    panel.addEventListener('click', e => {
        panel.classList.toggle('open');
    })
    panel.addEventListener('transitionend', e => {
        if (e.propertyName.includes('flex')){
            panel.classList.toggle('open-active');
        }
    })
}