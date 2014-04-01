// Window load event used just in case window height is dependant upon images
var $jq = jQuery.noConflict(true);

function stickyFoot() {
  var bodyHeight = $jq("body.yui-skin-sam").height();
  var vwptHeight = $jq(window).height();
  var footHeight = 45;
  var headerHeight = $jq("#header").height();
  $jq("#main-table").css("min-height",vwptHeight-footHeight-headerHeight);
}

$jq(document).ready(function() {
  stickyFoot();
});

$jq(window).resize(function() {
  stickyFoot();
});

$jq(document).scroll(function() {
  stickyFoot();
});

// This fixes the bug where multijob plugin wrapper task console icon points
// to an invalid URL.
$jq(document).ready(function() {
  var $links = $jq('a[href^="/view/"]');
  $links.each(function() {
    if ($jq(this).attr('href').match(/view\/.+\/view\/.*/)) {
      $jq(this).attr('href', $jq(this).attr('href').replace(/^\/view\/[^\/]+\/(.+)/, '/$1'));
    }
  });
});

// Add console icons with hyperlinks to the build rows (so that it's easier to see the logs).
$jq(document).ready(function() {
  var $links = $jq('.build-row a.model-link');
  $links.each(function() {
    $jq(this).after('<a style="margin-left: 10px;" href="' + $jq(this).attr('href') + 'console">' +
      '<img src="/static/8ce57dc1/images/24x24/terminal.gif"/></a>');
  });
});

$jq(document).ready(function() {
  $jq('a[href="/view/Nested%20View/asynchPeople/"]:eq(1)').text('Salsitistas');
  $jq('#description div[align="right"] a').text("add a spicy description");
});
