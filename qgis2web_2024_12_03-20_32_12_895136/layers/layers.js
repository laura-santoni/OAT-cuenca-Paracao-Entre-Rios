var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Argenmap_1 = new ol.layer.Tile({
            'title': 'Argenmap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var format_ProvinciadeEntreRios_2 = new ol.format.GeoJSON();
var features_ProvinciadeEntreRios_2 = format_ProvinciadeEntreRios_2.readFeatures(json_ProvinciadeEntreRios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvinciadeEntreRios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinciadeEntreRios_2.addFeatures(features_ProvinciadeEntreRios_2);
var lyr_ProvinciadeEntreRios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProvinciadeEntreRios_2, 
                style: style_ProvinciadeEntreRios_2,
                popuplayertitle: "Provincia de Entre Rios",
                interactive: false,
                title: '<img src="styles/legend/ProvinciadeEntreRios_2.png" /> Provincia de Entre Rios'
            });
var format_DepartamentosdeEntreRios_3 = new ol.format.GeoJSON();
var features_DepartamentosdeEntreRios_3 = format_DepartamentosdeEntreRios_3.readFeatures(json_DepartamentosdeEntreRios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentosdeEntreRios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentosdeEntreRios_3.addFeatures(features_DepartamentosdeEntreRios_3);
var lyr_DepartamentosdeEntreRios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DepartamentosdeEntreRios_3, 
                style: style_DepartamentosdeEntreRios_3,
                popuplayertitle: "Departamentos de Entre Rios",
                interactive: false,
                title: '<img src="styles/legend/DepartamentosdeEntreRios_3.png" /> Departamentos de Entre Rios'
            });
var format_DatoscensalesejidodeOroVerde_4 = new ol.format.GeoJSON();
var features_DatoscensalesejidodeOroVerde_4 = format_DatoscensalesejidodeOroVerde_4.readFeatures(json_DatoscensalesejidodeOroVerde_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DatoscensalesejidodeOroVerde_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DatoscensalesejidodeOroVerde_4.addFeatures(features_DatoscensalesejidodeOroVerde_4);
var lyr_DatoscensalesejidodeOroVerde_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DatoscensalesejidodeOroVerde_4, 
                style: style_DatoscensalesejidodeOroVerde_4,
                popuplayertitle: "Datos censales ejido de Oro Verde",
                interactive: true,
                title: '<img src="styles/legend/DatoscensalesejidodeOroVerde_4.png" /> Datos censales ejido de Oro Verde'
            });
var format_Plantaurbana_5 = new ol.format.GeoJSON();
var features_Plantaurbana_5 = format_Plantaurbana_5.readFeatures(json_Plantaurbana_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plantaurbana_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plantaurbana_5.addFeatures(features_Plantaurbana_5);
var lyr_Plantaurbana_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plantaurbana_5, 
                style: style_Plantaurbana_5,
                popuplayertitle: "Planta urbana",
                interactive: false,
                title: '<img src="styles/legend/Plantaurbana_5.png" /> Planta urbana'
            });
var format_Plantaurbanahabitada_6 = new ol.format.GeoJSON();
var features_Plantaurbanahabitada_6 = format_Plantaurbanahabitada_6.readFeatures(json_Plantaurbanahabitada_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plantaurbanahabitada_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plantaurbanahabitada_6.addFeatures(features_Plantaurbanahabitada_6);
var lyr_Plantaurbanahabitada_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plantaurbanahabitada_6, 
                style: style_Plantaurbanahabitada_6,
                popuplayertitle: "Planta urbana habitada",
                interactive: false,
                title: '<img src="styles/legend/Plantaurbanahabitada_6.png" /> Planta urbana habitada'
            });
var format_Areasnaturalesprotegidas_7 = new ol.format.GeoJSON();
var features_Areasnaturalesprotegidas_7 = format_Areasnaturalesprotegidas_7.readFeatures(json_Areasnaturalesprotegidas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areasnaturalesprotegidas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areasnaturalesprotegidas_7.addFeatures(features_Areasnaturalesprotegidas_7);
var lyr_Areasnaturalesprotegidas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areasnaturalesprotegidas_7, 
                style: style_Areasnaturalesprotegidas_7,
                popuplayertitle: "Areas naturales protegidas",
                interactive: true,
                title: '<img src="styles/legend/Areasnaturalesprotegidas_7.png" /> Areas naturales protegidas'
            });
var format_Areasverdesurbanas_8 = new ol.format.GeoJSON();
var features_Areasverdesurbanas_8 = format_Areasverdesurbanas_8.readFeatures(json_Areasverdesurbanas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areasverdesurbanas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areasverdesurbanas_8.addFeatures(features_Areasverdesurbanas_8);
var lyr_Areasverdesurbanas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areasverdesurbanas_8, 
                style: style_Areasverdesurbanas_8,
                popuplayertitle: "Areas verdes urbanas",
                interactive: true,
                title: '<img src="styles/legend/Areasverdesurbanas_8.png" /> Areas verdes urbanas'
            });
var format_InfraestructuraverdeurbanadeOroVerde2024_9 = new ol.format.GeoJSON();
var features_InfraestructuraverdeurbanadeOroVerde2024_9 = format_InfraestructuraverdeurbanadeOroVerde2024_9.readFeatures(json_InfraestructuraverdeurbanadeOroVerde2024_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfraestructuraverdeurbanadeOroVerde2024_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfraestructuraverdeurbanadeOroVerde2024_9.addFeatures(features_InfraestructuraverdeurbanadeOroVerde2024_9);
var lyr_InfraestructuraverdeurbanadeOroVerde2024_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfraestructuraverdeurbanadeOroVerde2024_9, 
                style: style_InfraestructuraverdeurbanadeOroVerde2024_9,
                popuplayertitle: "Infraestructura verde urbana de Oro Verde 2024",
                interactive: true,
                title: '<img src="styles/legend/InfraestructuraverdeurbanadeOroVerde2024_9.png" /> Infraestructura verde urbana de Oro Verde 2024'
            });
var format_EjidodeOroVerde_10 = new ol.format.GeoJSON();
var features_EjidodeOroVerde_10 = format_EjidodeOroVerde_10.readFeatures(json_EjidodeOroVerde_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EjidodeOroVerde_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EjidodeOroVerde_10.addFeatures(features_EjidodeOroVerde_10);
var lyr_EjidodeOroVerde_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EjidodeOroVerde_10, 
                style: style_EjidodeOroVerde_10,
                popuplayertitle: "Ejido de Oro Verde",
                interactive: false,
                title: '<img src="styles/legend/EjidodeOroVerde_10.png" /> Ejido de Oro Verde'
            });
var format_OTBN_11 = new ol.format.GeoJSON();
var features_OTBN_11 = format_OTBN_11.readFeatures(json_OTBN_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OTBN_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OTBN_11.addFeatures(features_OTBN_11);
var lyr_OTBN_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OTBN_11, 
                style: style_OTBN_11,
                popuplayertitle: "OTBN",
                interactive: true,
    title: 'OTBN<br />\
    <img src="styles/legend/OTBN_11_0.png" /> I<br />\
    <img src="styles/legend/OTBN_11_1.png" /> II<br />'
        });
var format_Reddedrenaje_12 = new ol.format.GeoJSON();
var features_Reddedrenaje_12 = format_Reddedrenaje_12.readFeatures(json_Reddedrenaje_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reddedrenaje_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reddedrenaje_12.addFeatures(features_Reddedrenaje_12);
var lyr_Reddedrenaje_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reddedrenaje_12, 
                style: style_Reddedrenaje_12,
                popuplayertitle: "Red de drenaje",
                interactive: false,
                title: '<img src="styles/legend/Reddedrenaje_12.png" /> Red de drenaje'
            });
var format_Puntosdereferencia_13 = new ol.format.GeoJSON();
var features_Puntosdereferencia_13 = format_Puntosdereferencia_13.readFeatures(json_Puntosdereferencia_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntosdereferencia_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntosdereferencia_13.addFeatures(features_Puntosdereferencia_13);
var lyr_Puntosdereferencia_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntosdereferencia_13, 
                style: style_Puntosdereferencia_13,
                popuplayertitle: "Puntos de referencia",
                interactive: true,
                title: '<img src="styles/legend/Puntosdereferencia_13.png" /> Puntos de referencia'
            });
var format_RP11_14 = new ol.format.GeoJSON();
var features_RP11_14 = format_RP11_14.readFeatures(json_RP11_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RP11_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RP11_14.addFeatures(features_RP11_14);
var lyr_RP11_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RP11_14, 
                style: style_RP11_14,
                popuplayertitle: "RP11",
                interactive: false,
                title: '<img src="styles/legend/RP11_14.png" /> RP11'
            });
var format_CuencashidrograficasdeEntreRios_15 = new ol.format.GeoJSON();
var features_CuencashidrograficasdeEntreRios_15 = format_CuencashidrograficasdeEntreRios_15.readFeatures(json_CuencashidrograficasdeEntreRios_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuencashidrograficasdeEntreRios_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuencashidrograficasdeEntreRios_15.addFeatures(features_CuencashidrograficasdeEntreRios_15);
var lyr_CuencashidrograficasdeEntreRios_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CuencashidrograficasdeEntreRios_15, 
                style: style_CuencashidrograficasdeEntreRios_15,
                popuplayertitle: "Cuencas hidrograficas de Entre Rios",
                interactive: true,
                title: '<img src="styles/legend/CuencashidrograficasdeEntreRios_15.png" /> Cuencas hidrograficas de Entre Rios'
            });
var format_ArroyoParacao_16 = new ol.format.GeoJSON();
var features_ArroyoParacao_16 = format_ArroyoParacao_16.readFeatures(json_ArroyoParacao_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArroyoParacao_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArroyoParacao_16.addFeatures(features_ArroyoParacao_16);
var lyr_ArroyoParacao_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArroyoParacao_16, 
                style: style_ArroyoParacao_16,
                popuplayertitle: "Arroyo Paracao",
                interactive: false,
                title: '<img src="styles/legend/ArroyoParacao_16.png" /> Arroyo Paracao'
            });
var format_CuencadelarroyoParacao_17 = new ol.format.GeoJSON();
var features_CuencadelarroyoParacao_17 = format_CuencadelarroyoParacao_17.readFeatures(json_CuencadelarroyoParacao_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuencadelarroyoParacao_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuencadelarroyoParacao_17.addFeatures(features_CuencadelarroyoParacao_17);
var lyr_CuencadelarroyoParacao_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CuencadelarroyoParacao_17, 
                style: style_CuencadelarroyoParacao_17,
                popuplayertitle: "Cuenca del arroyo Paracao",
                interactive: false,
                title: '<img src="styles/legend/CuencadelarroyoParacao_17.png" /> Cuenca del arroyo Paracao'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Argenmap_1.setVisible(true);lyr_ProvinciadeEntreRios_2.setVisible(true);lyr_DepartamentosdeEntreRios_3.setVisible(true);lyr_DatoscensalesejidodeOroVerde_4.setVisible(true);lyr_Plantaurbana_5.setVisible(true);lyr_Plantaurbanahabitada_6.setVisible(true);lyr_Areasnaturalesprotegidas_7.setVisible(true);lyr_Areasverdesurbanas_8.setVisible(true);lyr_InfraestructuraverdeurbanadeOroVerde2024_9.setVisible(true);lyr_EjidodeOroVerde_10.setVisible(true);lyr_OTBN_11.setVisible(true);lyr_Reddedrenaje_12.setVisible(true);lyr_Puntosdereferencia_13.setVisible(true);lyr_RP11_14.setVisible(true);lyr_CuencashidrograficasdeEntreRios_15.setVisible(true);lyr_ArroyoParacao_16.setVisible(true);lyr_CuencadelarroyoParacao_17.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Argenmap_1,lyr_ProvinciadeEntreRios_2,lyr_DepartamentosdeEntreRios_3,lyr_DatoscensalesejidodeOroVerde_4,lyr_Plantaurbana_5,lyr_Plantaurbanahabitada_6,lyr_Areasnaturalesprotegidas_7,lyr_Areasverdesurbanas_8,lyr_InfraestructuraverdeurbanadeOroVerde2024_9,lyr_EjidodeOroVerde_10,lyr_OTBN_11,lyr_Reddedrenaje_12,lyr_Puntosdereferencia_13,lyr_RP11_14,lyr_CuencashidrograficasdeEntreRios_15,lyr_ArroyoParacao_16,lyr_CuencadelarroyoParacao_17];
lyr_ProvinciadeEntreRios_2.set('fieldAliases', {'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'SAG': 'SAG', 'IN1': 'IN1', });
lyr_DepartamentosdeEntreRios_3.set('fieldAliases', {'FNA': 'FNA', 'GNA': 'GNA', 'Dep.': 'Dep.', 'SAG': 'SAG', 'IN1': 'IN1', });
lyr_DatoscensalesejidodeOroVerde_4.set('fieldAliases', {'toponimo_i': 'toponimo_i', 'link': 'link', 'varon': 'varon', 'mujer': 'mujer', 'totalpobl': 'totalpobl', 'hogares': 'hogares', 'viviendasp': 'viviendasp', 'viv_part_h': 'viv_part_h', });
lyr_Plantaurbana_5.set('fieldAliases', {'id': 'id', 'Sup m2': 'Sup m2', });
lyr_Plantaurbanahabitada_6.set('fieldAliases', {'id': 'id', 'Sup m2': 'Sup m2', });
lyr_Areasnaturalesprotegidas_7.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Sup m2': 'Sup m2', });
lyr_Areasverdesurbanas_8.set('fieldAliases', {'id': 'id', 'Tipo': 'Tipo', 'Loteo': 'Loteo', 'Loteo N°': 'Loteo N°', 'Manzana': 'Manzana', 'Calles ref': 'Calles ref', 'Obs': 'Obs', 'Sup m2': 'Sup m2', });
lyr_InfraestructuraverdeurbanadeOroVerde2024_9.set('fieldAliases', {'id': 'id', 'Obs': 'Obs', 'Escala': 'Escala', 'Integra': 'Integra', 'Tipologia': 'Tipologia', 'Sup m2': 'Sup m2', 'Esp': 'Esp', });
lyr_EjidodeOroVerde_10.set('fieldAliases', {'id': 'id', 'Sup m2': 'Sup m2', });
lyr_OTBN_11.set('fieldAliases', {'id': 'id', 'Categoria': 'Categoria', 'Area': 'Area', });
lyr_Reddedrenaje_12.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_Puntosdereferencia_13.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_RP11_14.set('fieldAliases', {'Objeto': 'Objeto', 'FNA1': 'FNA1', 'GNA1': 'GNA1', 'NAM1': 'NAM1', 'FNA2': 'FNA2', 'GNA2': 'GNA2', 'NAM2': 'NAM2', 'FUN': 'FUN', 'RST': 'RST', 'TYP': 'TYP', 'MES': 'MES', 'HCT': 'HCT', 'LOC': 'LOC', 'SAG': 'SAG', });
lyr_CuencashidrograficasdeEntreRios_15.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_ArroyoParacao_16.set('fieldAliases', {'id': 'id', 'Long km': 'Long km', });
lyr_CuencadelarroyoParacao_17.set('fieldAliases', {'ID': 'ID', 'Sup m2': 'Sup m2', });
lyr_ProvinciadeEntreRios_2.set('fieldImages', {'FNA': 'TextEdit', 'GNA': 'TextEdit', 'NAM': 'TextEdit', 'SAG': 'TextEdit', 'IN1': 'TextEdit', });
lyr_DepartamentosdeEntreRios_3.set('fieldImages', {'FNA': 'TextEdit', 'GNA': 'TextEdit', 'Dep.': '', 'SAG': 'TextEdit', 'IN1': 'TextEdit', });
lyr_DatoscensalesejidodeOroVerde_4.set('fieldImages', {'toponimo_i': '', 'link': '', 'varon': '', 'mujer': '', 'totalpobl': '', 'hogares': '', 'viviendasp': '', 'viv_part_h': '', });
lyr_Plantaurbana_5.set('fieldImages', {'id': 'TextEdit', 'Sup m2': '', });
lyr_Plantaurbanahabitada_6.set('fieldImages', {'id': 'TextEdit', 'Sup m2': '', });
lyr_Areasnaturalesprotegidas_7.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Sup m2': 'TextEdit', });
lyr_Areasverdesurbanas_8.set('fieldImages', {'id': 'TextEdit', 'Tipo': 'TextEdit', 'Loteo': 'TextEdit', 'Loteo N°': 'TextEdit', 'Manzana': 'Range', 'Calles ref': 'TextEdit', 'Obs': 'TextEdit', 'Sup m2': 'TextEdit', });
lyr_InfraestructuraverdeurbanadeOroVerde2024_9.set('fieldImages', {'id': 'TextEdit', 'Obs': 'TextEdit', 'Escala': 'TextEdit', 'Integra': 'TextEdit', 'Tipologia': 'TextEdit', 'Sup m2': 'TextEdit', 'Esp': 'TextEdit', });
lyr_EjidodeOroVerde_10.set('fieldImages', {'id': 'TextEdit', 'Sup m2': '', });
lyr_OTBN_11.set('fieldImages', {'id': 'TextEdit', 'Categoria': 'TextEdit', 'Area': 'TextEdit', });
lyr_Reddedrenaje_12.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_Puntosdereferencia_13.set('fieldImages', {'id': '', 'Nombre': '', });
lyr_RP11_14.set('fieldImages', {'Objeto': 'TextEdit', 'FNA1': 'TextEdit', 'GNA1': 'TextEdit', 'NAM1': 'TextEdit', 'FNA2': 'TextEdit', 'GNA2': 'TextEdit', 'NAM2': 'TextEdit', 'FUN': 'TextEdit', 'RST': 'TextEdit', 'TYP': 'TextEdit', 'MES': 'TextEdit', 'HCT': 'TextEdit', 'LOC': 'TextEdit', 'SAG': 'TextEdit', });
lyr_CuencashidrograficasdeEntreRios_15.set('fieldImages', {'Nombre': '', });
lyr_ArroyoParacao_16.set('fieldImages', {'id': 'TextEdit', 'Long km': 'TextEdit', });
lyr_CuencadelarroyoParacao_17.set('fieldImages', {'ID': 'TextEdit', 'Sup m2': '', });
lyr_ProvinciadeEntreRios_2.set('fieldLabels', {'FNA': 'header label - always visible', 'GNA': 'hidden field', 'NAM': 'hidden field', 'SAG': 'hidden field', 'IN1': 'hidden field', });
lyr_DepartamentosdeEntreRios_3.set('fieldLabels', {'FNA': 'hidden field', 'GNA': 'hidden field', 'Dep.': 'inline label - always visible', 'SAG': 'hidden field', 'IN1': 'hidden field', });
lyr_DatoscensalesejidodeOroVerde_4.set('fieldLabels', {'toponimo_i': 'no label', 'link': 'no label', 'varon': 'inline label - always visible', 'mujer': 'inline label - always visible', 'totalpobl': 'inline label - always visible', 'hogares': 'no label', 'viviendasp': 'no label', 'viv_part_h': 'no label', });
lyr_Plantaurbana_5.set('fieldLabels', {'id': 'header label - visible with data', 'Sup m2': 'no label', });
lyr_Plantaurbanahabitada_6.set('fieldLabels', {'id': 'no label', 'Sup m2': 'no label', });
lyr_Areasnaturalesprotegidas_7.set('fieldLabels', {'id': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Sup m2': 'inline label - always visible', });
lyr_Areasverdesurbanas_8.set('fieldLabels', {'id': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Loteo': 'inline label - always visible', 'Loteo N°': 'inline label - always visible', 'Manzana': 'inline label - always visible', 'Calles ref': 'inline label - always visible', 'Obs': 'inline label - always visible', 'Sup m2': 'inline label - always visible', });
lyr_InfraestructuraverdeurbanadeOroVerde2024_9.set('fieldLabels', {'id': 'inline label - always visible', 'Obs': 'inline label - always visible', 'Escala': 'inline label - always visible', 'Integra': 'inline label - always visible', 'Tipologia': 'inline label - always visible', 'Sup m2': 'inline label - always visible', 'Esp': 'inline label - always visible', });
lyr_EjidodeOroVerde_10.set('fieldLabels', {'id': 'hidden field', 'Sup m2': 'no label', });
lyr_OTBN_11.set('fieldLabels', {'id': 'inline label - always visible', 'Categoria': 'inline label - always visible', 'Area': 'inline label - always visible', });
lyr_Reddedrenaje_12.set('fieldLabels', {'SEGMENT_ID': 'hidden field', 'NODE_A': 'hidden field', 'NODE_B': 'hidden field', 'BASIN': 'hidden field', 'ORDER': 'hidden field', 'ORDER_CELL': 'hidden field', 'LENGTH': 'hidden field', });
lyr_Puntosdereferencia_13.set('fieldLabels', {'id': 'hidden field', 'Nombre': 'inline label - always visible', });
lyr_RP11_14.set('fieldLabels', {'Objeto': 'hidden field', 'FNA1': 'hidden field', 'GNA1': 'hidden field', 'NAM1': 'hidden field', 'FNA2': 'hidden field', 'GNA2': 'inline label - always visible', 'NAM2': 'hidden field', 'FUN': 'hidden field', 'RST': 'hidden field', 'TYP': 'hidden field', 'MES': 'hidden field', 'HCT': 'hidden field', 'LOC': 'hidden field', 'SAG': 'hidden field', });
lyr_CuencashidrograficasdeEntreRios_15.set('fieldLabels', {'name': 'inline label - always visible', 'folders': 'no label', 'descriptio': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_ArroyoParacao_16.set('fieldLabels', {'id': 'hidden field', 'Long km': 'no label', });
lyr_CuencadelarroyoParacao_17.set('fieldLabels', {'ID': 'hidden field', 'Sup m2': 'no label', });
lyr_CuencadelarroyoParacao_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});