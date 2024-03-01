    window.onload = function() {
        function removeAds() {
            var adClasses = ["ad", "advertisement", "ad-banner", "ad-container"];
            adClasses.forEach(function(className) {
                var elements = document.getElementsByClassName(className);
                for (var i = 0; i < elements.length; i++) {
                    elements[i].remove();
                }
            });

            var adKeywords = ["sponsored", "promo", "advertising"];
            adKeywords.forEach(function(keyword) {
                var elementsWithKeyword = document.querySelectorAll(`:contains(${keyword})`);
                elementsWithKeyword.forEach(function(element) {
                    element.remove();
                });
            });
        }
        removeAds();
    }