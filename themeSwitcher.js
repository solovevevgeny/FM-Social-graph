addEventListener('load', function(){
    const body = this.document.querySelector('body');
    
    

    

    body.setAttribute('data-theme', 'dark');
});

function switchTheme() {
    const body = this.document.querySelector('body');
    theme = body.getAttribute('data-theme');
    if (theme === "light" ) {
        const switcher = this.document.querySelector('.switcherText');
        body.setAttribute('data-theme','dark');
        switcher.innerHTML = 'Light theme';
        // console.log(switcher);

    }
    else {
        const switcher = this.document.querySelector('.switcherText');
        body.setAttribute('data-theme','light');
        switcher.innerHTML = 'Dark theme';
    }

    // else (theme === "dark"){
    //     
    // }
}