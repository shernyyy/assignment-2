
function filterSelectionAll() {
  $('div').show();
}

function filterSelectionShirt() {
  $('div').show().filter(':not(.shirt)').hide();
}

function filterSelectionSkirt() {
  $('div').show().filter(':not(.skirt)').hide();
}

function filterSelectionJeans() {
  $('div').show().filter(':not(.jeans)').hide();
}

function filterSelectionShorts() {
  $('div').show().filter(':not(.shorts)').hide();
}

function filterSelectionMidthighs() {
  $('div').show().filter(':not(.midthighs)').hide();
}


if ( window.location.hash && window.location.hash.match('#page1')){
  $(function(){
      $('div').show().filter(':not(.skirt)').hide();
  })
};

if ( window.location.hash && window.location.hash.match('#page2')){
  $(function(){
      $('div').show().filter(':not(.jeans)').hide();
  })
};

if ( window.location.hash && window.location.hash.match('#page3')){
  $(function(){
      $('div').show().filter(':not(.shorts)').hide();
  })
};

if ( window.location.hash && window.location.hash.match('#page4')){
  $(function(){
      $('div').show().filter(':not(.shirt)').hide();
  })
};