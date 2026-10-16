/* ALPVERO: Höhenleiste, Route im Ablauf, Kopf-Farbe auf Schnee. Alles Verbesserung, die Inhalte stehen im HTML. */
(function () {
  var doc = document, root = doc.documentElement;
  var rail = doc.querySelector('.rail'), top = doc.querySelector('.top');
  var links = [].slice.call(doc.querySelectorAll('.rail a'));
  var secs = links.map(function (a) { return doc.querySelector(a.getAttribute('href')); });

  /* Aufstieg: Route zeichnen, Stationen markieren, Höhenmeter zählen */
  var act = doc.querySelector('.aufstieg');
  var line = act && act.querySelector('.route__line');
  var svg = act && act.querySelector('.route');
  var meter = act && act.querySelector('[data-meter]');
  var pts = [];
  if (line && svg) {
    var len = line.getTotalLength();
    for (var i = 0; i < 6; i++) {
      var pt = line.getPointAtLength(len * i / 5);
      var c = doc.createElementNS('http://www.w3.org/2000/svg', 'circle');
      c.setAttribute('class', 'route__pt'); c.setAttribute('r', i === 5 ? 14 : 9);
      c.setAttribute('cx', pt.x); c.setAttribute('cy', pt.y);
      svg.appendChild(c); pts.push(c);
    }
  }
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fmt = new Intl.NumberFormat('de-DE');

  function frame() {
    var h = root.scrollHeight - innerHeight;
    var climb = h > 0 ? Math.min(1, Math.max(0, scrollY / h)) : 0;
    if (rail) rail.style.setProperty('--climb', climb.toFixed(4));

    if (act) {
      var p = parseFloat(getComputedStyle(act).getPropertyValue('--sc-p')) || 0;
      var d = reduce ? 1 : Math.min(1, Math.max(0, (p - 0.04) / 0.9));
      act.style.setProperty('--draw', d.toFixed(4));
      if (meter) meter.textContent = fmt.format(Math.round(d * 300) * 10);
      pts.forEach(function (c, i) { c.classList.toggle('is-on', d >= i / 5 - 0.001 && d > 0 || (i === 0 && p > 0)); });
    }

    var snow = doc.querySelector('.gipfel');
    if (snow) {
      var r = snow.getBoundingClientRect();
      var on = r.top < 60;
      if (top) top.classList.toggle('top--snow', on);
      if (rail) rail.classList.toggle('rail--snow', r.top < innerHeight * 0.5);
    }
    var mid = innerHeight * 0.5, best = 0;
    secs.forEach(function (s, i) { if (s && s.getBoundingClientRect().top <= mid) best = i; });
    links.forEach(function (a, i) {
      if (i === best) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
      a.classList.toggle('is-passed', i < best);
    });
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

})();
