$( function() {
    $( "#accordion" ).accordion({
        collapsible: true,
        active: false
    });
});

$( function() {
    $( "#tab" ).tabs({
      event: 'mouseover'
    });
});

$( function() {
  var tabs = $( "#tabs2" ).tabs();
  tabs.find( ".ui-tabs-nav" ).sortable({
    axis: "x",
    stop: function() {
      tabs.tabs( "refresh" );
    }
  });
} );

  