var wms_layers = [];

var format_ProvincialVotes_0 = new ol.format.GeoJSON();
var features_ProvincialVotes_0 = format_ProvincialVotes_0.readFeatures(json_ProvincialVotes_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvincialVotes_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvincialVotes_0.addFeatures(features_ProvincialVotes_0);
var lyr_ProvincialVotes_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProvincialVotes_0, 
                style: style_ProvincialVotes_0,
                interactive: true,
    title: 'Provincial Votes (%)<br />\
    <img src="styles/legend/ProvincialVotes_0_0.png" /> 6.5 - 13.9<br />\
    <img src="styles/legend/ProvincialVotes_0_1.png" /> 13.9 - 21.4<br />\
    <img src="styles/legend/ProvincialVotes_0_2.png" /> 21.4 - 28.9<br />\
    <img src="styles/legend/ProvincialVotes_0_3.png" /> 28.9 - 36.3<br />\
    <img src="styles/legend/ProvincialVotes_0_4.png" /> 36.3 - 43.8<br />\
    <img src="styles/legend/ProvincialVotes_0_5.png" /> 43.8 - 51.2<br />\
    <img src="styles/legend/ProvincialVotes_0_6.png" /> 51.2 - 58.7<br />\
    <img src="styles/legend/ProvincialVotes_0_7.png" /> 58.7 - 66.2<br />\
    <img src="styles/legend/ProvincialVotes_0_8.png" /> 66.2 - 73.6<br />\
    <img src="styles/legend/ProvincialVotes_0_9.png" /> 73.6 - 81.1<br />'
        });

lyr_ProvincialVotes_0.setVisible(true);
var layersList = [lyr_ProvincialVotes_0];
lyr_ProvincialVotes_0.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'Province': 'Province', 'Party-List': 'Party-List', 'Votes': 'Votes', 'Percentage (%)': 'Percentage (%)', 'Provincial Vote (%)': 'Provincial Vote (%)', 'Province_PartyList': 'Province_PartyList', });
lyr_ProvincialVotes_0.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'Province': 'TextEdit', 'Party-List': 'TextEdit', 'Votes': 'Range', 'Percentage (%)': 'TextEdit', 'Provincial Vote (%)': 'TextEdit', 'Province_PartyList': 'TextEdit', });
lyr_ProvincialVotes_0.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'Province': 'no label', 'Party-List': 'no label', 'Votes': 'no label', 'Percentage (%)': 'no label', 'Provincial Vote (%)': 'no label', 'Province_PartyList': 'no label', });
lyr_ProvincialVotes_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});