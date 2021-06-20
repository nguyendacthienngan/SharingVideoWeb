
  // which creates the appropriate JSON configuration
  function make_the_json(){
    $.getJSON( "example.json", function() {
        console.log( "success" );
        });
  }
  var timeline_json = make_the_json(); 
  window.timeline = new TL.Timeline('timeline-embed', timeline_json);
  var additionalOptions = {
              start_at_end: true,
              default_bg_color: {r:0, g:0, b:0},
              timenav_height: 250
            }

timeline = new TL.Timeline('timeline-embed',
    'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml',
    additionalOptions);
