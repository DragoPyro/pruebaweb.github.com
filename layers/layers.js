var wms_layers = [];

var format_REGION_0 = new ol.format.GeoJSON();
var features_REGION_0 = format_REGION_0.readFeatures(json_REGION_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REGION_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGION_0.addFeatures(features_REGION_0);
var lyr_REGION_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REGION_0, 
                style: style_REGION_0,
                interactive: true,
                title: '<img src="styles/legend/REGION_0.png" /> REGION'
            });
var format_ESTADOS_1 = new ol.format.GeoJSON();
var features_ESTADOS_1 = format_ESTADOS_1.readFeatures(json_ESTADOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTADOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTADOS_1.addFeatures(features_ESTADOS_1);
var lyr_ESTADOS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESTADOS_1, 
                style: style_ESTADOS_1,
                interactive: true,
                title: '<img src="styles/legend/ESTADOS_1.png" /> ESTADOS'
            });
var format_MUNICIPIOS_2 = new ol.format.GeoJSON();
var features_MUNICIPIOS_2 = format_MUNICIPIOS_2.readFeatures(json_MUNICIPIOS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIOS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOS_2.addFeatures(features_MUNICIPIOS_2);
var lyr_MUNICIPIOS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUNICIPIOS_2, 
                style: style_MUNICIPIOS_2,
                interactive: true,
                title: '<img src="styles/legend/MUNICIPIOS_2.png" /> MUNICIPIOS'
            });
var format_COLONIAS_3 = new ol.format.GeoJSON();
var features_COLONIAS_3 = format_COLONIAS_3.readFeatures(json_COLONIAS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COLONIAS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COLONIAS_3.addFeatures(features_COLONIAS_3);
var lyr_COLONIAS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COLONIAS_3, 
                style: style_COLONIAS_3,
                interactive: true,
                title: '<img src="styles/legend/COLONIAS_3.png" /> COLONIAS'
            });

lyr_REGION_0.setVisible(true);lyr_ESTADOS_1.setVisible(true);lyr_MUNICIPIOS_2.setVisible(true);lyr_COLONIAS_3.setVisible(true);
var layersList = [lyr_REGION_0,lyr_ESTADOS_1,lyr_MUNICIPIOS_2,lyr_COLONIAS_3];
lyr_REGION_0.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'PAIS_ID': 'PAIS_ID', });
lyr_ESTADOS_1.set('fieldAliases', {'CVE_ENT': 'CVE_ENT', 'NOM_ENT': 'NOM_ENT', 'CVE_CAP': 'CVE_CAP', 'NOM_CAP': 'NOM_CAP', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PAIS_ID': 'PAIS_ID', });
lyr_MUNICIPIOS_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOM_ENT': 'NOM_ENT', 'NOM_MUN': 'NOM_MUN', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', });
lyr_COLONIAS_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'POSTALCODE': 'POSTALCODE', 'ST_NAME': 'ST_NAME', 'MUN_NAME': 'MUN_NAME', 'SETT_NAME': 'SETT_NAME', 'SETT_TYPE': 'SETT_TYPE', 'AREA': 'AREA', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'CVE_MUN': 'CVE_MUN', });
lyr_REGION_0.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'COV_': '', 'COV_ID': '', 'PAIS_ID': '', });
lyr_ESTADOS_1.set('fieldImages', {'CVE_ENT': '', 'NOM_ENT': '', 'CVE_CAP': '', 'NOM_CAP': '', 'COV_': '', 'COV_ID': '', 'AREA': '', 'PERIMETER': '', 'PAIS_ID': '', });
lyr_MUNICIPIOS_2.set('fieldImages', {'CVEGEO': '', 'CVE_ENT': '', 'CVE_MUN': '', 'NOM_ENT': '', 'NOM_MUN': '', 'AREA': '', 'PERIMETER': '', 'COV_': '', 'COV_ID': '', });
lyr_COLONIAS_3.set('fieldImages', {'OBJECTID': '', 'POSTALCODE': '', 'ST_NAME': '', 'MUN_NAME': '', 'SETT_NAME': '', 'SETT_TYPE': '', 'AREA': '', 'SHAPE_LENG': '', 'SHAPE_AREA': '', 'CVE_MUN': '', });
lyr_REGION_0.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'PAIS_ID': 'no label', });
lyr_ESTADOS_1.set('fieldLabels', {'CVE_ENT': 'no label', 'NOM_ENT': 'no label', 'CVE_CAP': 'no label', 'NOM_CAP': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'PAIS_ID': 'no label', });
lyr_MUNICIPIOS_2.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOM_ENT': 'no label', 'NOM_MUN': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', });
lyr_COLONIAS_3.set('fieldLabels', {'OBJECTID': 'no label', 'POSTALCODE': 'no label', 'ST_NAME': 'no label', 'MUN_NAME': 'no label', 'SETT_NAME': 'no label', 'SETT_TYPE': 'no label', 'AREA': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'CVE_MUN': 'no label', });
lyr_COLONIAS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});