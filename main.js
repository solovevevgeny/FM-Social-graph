addEventListener('load', function(){

    const body = this.document.querySelector('body');
    body.setAttribute('data-theme', 'dark');


    anime({ targets: '.card1', innerHTML: [0, 1987], easing: 'linear', round: 1 });
    anime({ targets: '.card2', innerHTML: [0, 1044], easing: 'linear', round: 1 });
    anime({ targets: '.card3', innerHTML: [0, '11k'], easing: 'linear', round: 1 });
    anime({ targets: '.card4', innerHTML: [0, 8239], easing: 'linear', round: 1 });

    anime({ targets: '.card-sm1', innerHTML: [0, 87], easing: 'linear', round: 1 });
    anime({ targets: '.card-sm2', innerHTML: [0, 52], easing: 'linear', round: 1 });
    anime({ targets: '.card-sm3', innerHTML: [0, 5462], easing: 'linear', round: 1 });
    anime({ targets: '.card-sm4', innerHTML: [0, '52k'], easing: 'linear', round: 1 });
    anime({ targets: '.card-sm5', innerHTML: [0, 117], easing: 'linear', round: 1 });
    anime({ targets: '.card-sm6', innerHTML: [0, 507], easing: 'linear', round: 1 });
    anime({ targets: '.card-sm7', innerHTML: [0, 107], easing: 'linear', round: 1 });
    anime({ targets: '.card-sm8', innerHTML: [0, 1407], easing: 'linear', round: 1 });

});
