$(document).ready(function () {
    $('.promo-card-1').hover(function () {
            // over
            $('.cover-front-1').hide();
            $('.cover-back-1').removeClass('d-none');
        }, function () {
            // out
            $('.cover-front-1').show();
            $('.cover-back-1').addClass('d-none');
        }
    );
    $('.promo-card-2').hover(function () {
            // over
            $('.cover-front-2').hide();
            $('.cover-back-2').removeClass('d-none');
        }, function () {
            // out
            $('.cover-front-2').show();
            $('.cover-back-2').addClass('d-none');
        }
    );
    $('.promo-card-3').hover(function () {
            // over
            $('.cover-front-3').hide();
            $('.cover-back-3').removeClass('d-none');
        }, function () {
            // out
            $('.cover-front-3').show();
            $('.cover-back-3').addClass('d-none');
        }
    );
});