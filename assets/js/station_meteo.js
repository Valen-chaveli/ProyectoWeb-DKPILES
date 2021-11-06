function llamarWidget() {
  WgsWidget({
    id_station: 51,
    wj: 'knots',
    tj: 'c',
    tmprh: true,
    date_format: 'Y-m-d H:i:s T',
    divid: 'wgs_widget_51_1403353076147',
    type: 'curr',
  });
}
llamarWidget();
setInterval(llamarWidget, 60000);
