/* ロゴアニメーション
************************* */

var speed = 200;
var svg = Snap(600,300).remove().attr({viewBox: [0, 0, 600, 300]});

Object.keys(paths).forEach(function (key) {
	var path = svg.path(paths[key].from).attr({fill: paths[key].color});
	svg.click(function() {
		path.stop().attr({
			path: paths[key].from,
			fill: '#5782B2'
		}).animate({
			path: paths[key].to,
			fill: paths[key].color,
			opacity: paths[key].opacity
		}, speed);
	});
});
svg.prependTo(container);


/* タイピングアニメーション
************************* */
$('.typeAnime').t();
