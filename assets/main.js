const filteredMenu = new Vue({
    el: "#menu",
    data: {
        items: [
            { name: "Dumplings 1", category: "Dumplings", price: "$5.00" },
            { name: "Dumplings 2", category: "Dumplings", price: "$5.00" },
            { name: "Dumplings 3", category: "Dumplings", price: "$5.00" },
            { name: "Dumplings 4", category: "Dumplings", price: "$5.00" },
            { name: "Dumplings 5", category: "Dumplings", price: "$5.00" },
            { name: "Dumplings 6", category: "Dumplings", price: "$5.00" },
            { name: "Dumplings 7", category: "Dumplings", price: "$5.00" },
            { name: "Sushi 1", category: "Sushi", price: "$5.00" },
            { name: "Sushi 2", category: "Sushi", price: "$5.00" },
            { name: "Sushi 3", category: "Sushi", price: "$5.00" },
            { name: "Sushi 4", category: "Sushi", price: "$5.00" },
            { name: "Sushi 5", category: "Sushi", price: "$5.00" },
            { name: "Noodles 1", category: "Noodles", price: "$5.00" },
            { name: "Noodles 2", category: "Noodles", price: "$5.00" },
            { name: "Noodles 3", category: "Noodles", price: "$5.00" },
            { name: "Noodles 4", category: "Noodles", price: "$5.00" },
            { name: "Noodles 5", category: "Noodles", price: "$5.00" },
            { name: "Drink 1", category: "Drinks", price: "$5.00" },
            { name: "Drink 2", category: "Drinks", price: "$5.00" },
            { name: "Drink 3", category: "Drinks", price: "$5.00" },
            { name: "Drink 3", category: "Drinks", price: "$5.00" },
            { name: "Drink 5", category: "Drinks", price: "$5.00" }
        ],
        selectedCategory: "Dumplings"
    },
    computed: {
        filteredMenu: function () {
            var vm = this;
            var category = vm.selectedCategory;
            return vm.items.filter(function (food) {
                return food.category === category;
            });
        }
    }
});


$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top 
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
   
});
$(document).ready(function() {
    //Preloader
    $(window).on("load", function() {
    preloaderFadeOutTime = 500;
    function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
    });
});

