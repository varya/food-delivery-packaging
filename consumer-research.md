---
layout: page
title: Consumer research
permalink: /consumer-research/
---


<div class="block">
  <h3 class="block__title">69</h3>
  <p class="block__text">Interviews</p>
</div>
<div class="block">
  <h3 class="block__title">30</h3>
  <p class="block__text">Countries</p>
</div>
<div class="block">
  <h3 class="block__title">10</h3>
  <p class="block__text">Meal services</p>
</div>

<object type="image/svg+xml" data="/idbm-packaging/assets/pictures/map.svg" id="map" class="map"></object>

## People avoid food because of the issues

<div class="block block--white">
  <p class="block__text">
    “Would like to order KFC but it always gets very soggy”
  </p>
  <p class="block__sign">
    M, 18 to 25, Sri Lanka
  </p>
</div>
<div class="block block--white">
  <p class="block__text">
    “Avoid grills, steamed vegetables, salads and fries because they tend to get soggy. If I want these, I’d rather go out” 
  </p>
  <p class="block__sign">
    F, 26 to 33, India
  </p>
</div>
<div class="block block--white">
  <p class="block__text">
    “I only order things that I know can’t get soggy (eg. no sandwiches)” 
  </p>
  <p class="block__sign">
    F, 26 to 33, USA
  </p>
</div>

## Bad packaging experience

<div class="block block--white">
  <p class="block__text">
    “As for burgers, they are a fragile construction. I do not order burgers any more, because I get not a burger but “burger salad” 
  </p>
  <p class="block__sign">
    M, 34 to 41, Germany
  </p>
</div>
<div class="block block--white">
  <p class="block__text">
    “When the food inside is hot, the styrofoam material gets soft and becomes more tricky to handle” 
  </p>
  <p class="block__sign">
    F, 26 to 33, Finland/Singapore
  </p>
</div>
<div class="block block--white">
  <p class="block__text">
    “Once had packaging that was so bad that the food somehow went through it and fell on my doorstep as the delivery person was handing it to me” 
  </p>
  <p class="block__sign">
    F, 26 to 33, Kenya/Finland/Thailand
  </p>
</div>

 * moisture
 * condensation
 * spills
 * too much
 * leaks
 * over-filling
 * bad lids
 * garbadge
 * eco-unfriendly
 * not warm
 * not recycable
{: .cloud }


## [Industry research](/idbm-packaging/industry-research/){: .next }


<script>
window.onload = function() {
  var map = document.getElementById('map');
  var countries = [
    'in',
    'ru',
    'fi',
    'us',
    'lk',
    'nz',
    'au',
    'gr',
    'nl',
    'ke',
    'co',
    'dk',
    'jp',
    'be',
    'ee',
    'de',
    'ua',
    'ca',
    'gb',
    'om',
    'ng',
    'ae',
    'kr',
    'fr',
    'za',
    'it',
    'ie',
    'cn',
    'th',
    'pl',
    'gh',
    'vn',
    'ch',
    'eg',
    'ar',
    'es',
    'jo',
    'no',
    'my'
  ];
  countries.forEach(function(c) {
    console.log(c);
    map.getSVGDocument().querySelector('[cc=' + c + ']').style.fill = "#39C1BE";
  });
}
</script>
