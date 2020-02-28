$('.page-scroll').on('click', function(e){
    
    // ambil isi href
    let tujuan = $(this).attr('href');

    // tangkap elemen yang bersangkutan
    let elemenTujuan = $(tujuan);

    // jarak dari element section bersangkutan ke paling atas body / html
    // console.log($(elemenTujuan.offset().top));

    // mengetahui jarak yang sedang berlangsung
    // console.log($('html, body').scrollTop());

    //pindahkan scroll
    // $('html, body').scrollTop(elemenTujuan.offset().top);
    $('html, body').animate({
        scrollTop : elemenTujuan.offset().top - 54
    }, 1250, 'easeInOutExpo');
    // 1250 -> 1.25 detik adalah estimasi dengan satuan milisecond/ms
    // secara default = swing. ada juga linier (bawaan jquery)
    // easing jquery tambahan animasi buatan org, taro sesudah jquery
    e.preventDefault();
})


// parallax
$(window).scroll(function(){
    let wScroll = $(this).scrollTop();

    // console.log(wScroll);

    $('.jumbotron img').css({
        'transform' : 'translate(0px, ' + wScroll/3 + '%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, ' + wScroll/1.4 + '%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, ' + wScroll*2.2 + '%)'
    });

    // landing portfolio ver 1
    // if( wScroll > $('.portfolio').offset().top - 250 ){
    //     // console.log('oke');
    //     $('.portfolio .img-thumbnail').addClass('muncul');
    // }

    // landing portfolio ver 2
    if( wScroll > $('.portfolio').offset().top - 250 ){
        // console.log('oke');
        $('.portfolio .img-thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .img-thumbnail').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
        // $('.portfolio .img-thumbnail').addClass('muncul');
    }
})

//About
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});