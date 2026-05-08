$(document).ready(function(){
    function removeHighlights() {
        $('.bike-entry').removeClass('highlight-bike');
    }

    $('#highlightDrivenBtn').on('click', function(){
        removeHighlights();
        location.hash = 'driven';
        $('#driven .bike-entry').addClass('highlight-bike');
        $('#bikeCountDisplay').text('Driven bikes highlighted!');
        setTimeout(function(){
           if($('#bikeCountDisplay').text() === 'Driven bikes highlighted!') 
               $('#bikeCountDisplay').text('ready');
    }, 1800);
    });

    $('#highlightDreamBtn').on('click', function(){
    removeHighlights();
    location.hash = 'dream';
    $('#dream .bike-entry').addClass('highlight-bike');
    $('#bikeCountDisplay').text('Dream bikes highlighted!');
    setTimeout(function(){
        if($('#bikeCountDisplay').text() === 'Dream bikes highlighted!') 
            $('#bikeCountDisplay').text('ready');
    }, 1800);
    });

    $('#countBikesBtn').on('click', function(){
        let drivenCount = $('#driven .bike-entry').length;
        let dreamCount = $('#dream .bike-entry').length;
        let total = drivenCount + dreamCount;
        $('#bikeCountDisplay').html(`🚲 Total: ${total} bikes (Driven: ${drivenCount}, Dream: ${dreamCount})`);
        setTimeout(function(){
            if($('#bikeCountDisplay').html().includes('Total')) {
                $('#bikeCountDisplay').text('ready');
            }
        }, 3000);
    });

    $('#resetHighlightsBtn').on('click', function(){
        removeHighlights();
        $('#bikeCountDisplay').text('highlights cleared');
        setTimeout(function(){
            if($('#bikeCountDisplay').text() === 'highlights cleared') 
                $('#bikeCountDisplay').text('ready');
        }, 1500);
    });

    let totalImages = $('.bike-entry img').length;
    console.log(`Kamote website ready — ${totalImages} bike images loaded (you can freely change each src!)`);



    $('.profile-placeholder').on('click', function(){
        alert('📸 You can replace this profile image by changing the src URL in the HTML!');
    });

    // dark mode toggle
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        $('body').addClass('dark-mode');
        $('#darkModeToggle').text('☀️ light mode');
    }

    $('#darkModeToggle').on('click', function(){
        $('body').toggleClass('dark-mode');
        if ($('body').hasClass('dark-mode')) {
            $(this).text('☀️ light mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            $(this).text('🌙 dark mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    const bikeLinks = {
    mio:        "https://www.yamaha-motor.com.ph/motorcycles/personal-commuter/mio-series/mio-i125",
    wave:       "https://www.motodeal.com.ph/motorcycles/honda/wave-rsx",
    nmax:       "https://motortrade.com.ph/motorcycles/yamaha-nmax-abs/",
    fazzio:     "https://www.yamaha-motor.com.ph/motorcycles/personal-commuter/mio-series/mio-fazzio",
    aerox:      "https://www.yamaha-motor.com.ph/motorcycles/personal-commuter/on-road/aerox",
    rc250i:     "https://www.kamote.ph/motorcycle/rusi-classic-250i",
    bajaj:      "https://kawasaki.ph/motorcycles/show/38",
    nk400:      "https://cfmotord.com/motocicletas/400nk/",
    z650:       "https://kawasakileisurebikes.ph/motorcycles/sports/z650/",
    Click125i:  "https://www.hondaph.com/motor/click125-standard-type",
    Choinori:   "https://www.globalsuzuki.com/motorcycle/smgs/digital-archive/2_bike/scooter_157.php",
    Pallet:     "https://www.webike.ph/SUZUKI/Let+s+4+Pallet/13160/m-spec/",
    rebel:      "https://powersports.honda.com/motorcycle/cruiser/rebel-500",
    ninja:      "https://kawasakileisurebikes.ph/motorcycles/supersports/ninja-zx-6r/",
    w800:       "https://www.kawasaki.com/en-us/motorcycle/w/retro-classic/w800",
    xsr:        "https://www.motodeal.com.ph/motorcycles/yamaha/xsr-155",
    bonneville: "https://www.triumphmotorcycles.ph/bikes/classic/bonneville-bobber",
    Scrambler:  "https://www.triumphmotorcycles.ph/bikes/classic/scrambler-400-x/scrambler-400-x-2024",
    CBR:        "https://www.hondaph.com/honda-bigbikes/products/sports/cb650r-70",
    benelli:    "https://www.benelli.com/ph-en/products/imperiale-400-2",
    Napoleon:   "https://bendamoto.com/product/napoleon-500/",
};

$('.bike-entry img').on('click', function(){
    const bikeKey = $(this).data('bike');
    const url = bikeLinks[bikeKey];
    if (url) {
        window.open(url, '_blank');
    }
});
});