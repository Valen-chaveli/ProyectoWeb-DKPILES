(function (window, document) {
  var loader = function () {
    var arg = [
      's=504236',
      'm=100',
      'uid=wg_fwdg_504236_100_1612016459235',
      'wj=knots',
      'tj=c',
      'waj=m',
      'odh=0',
      'doh=24',
      'fhours=240',
      'hrsm=2',
      'vt=forecasts',
      'lng=es',
      'idbs=1',
      'p=WINDSPD,GUST,SMER,TMP,TMPE,WCHILL,FLHGT,CDC,TCDC,APCP1s,RH',
    ];
    var script = document.createElement('script');
    var tag = document.getElementsByTagName('script')[0];
    script.src = 'https://www.windguru.cz/js/widget.php?' + arg.join('&');
    tag.parentNode.insertBefore(script, tag);
  };
  window.addEventListener
    ? window.addEventListener('load', loader, false)
    : window.attachEvent('onload', loader);
})(window, document);
