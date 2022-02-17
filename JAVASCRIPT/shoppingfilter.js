function filterSelectionAll() {
  $('div').show()
  document.getElementById("filterbutton").classList.add('active');

  if ( document.getElementById("MyElement").classList.contains('active') )

  document.getElementById("MyElement").classList.toggle('active');
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