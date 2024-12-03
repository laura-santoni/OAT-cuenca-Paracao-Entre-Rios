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
var format_DatoscensalesejidodeOroVerde_2 = new ol.format.GeoJSON();
var features_DatoscensalesejidodeOroVerde_2 = format_DatoscensalesejidodeOroVerde_2.readFeatures(json_DatoscensalesejidodeOroVerde_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DatoscensalesejidodeOroVerde_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DatoscensalesejidodeOroVerde_2.addFeatures(features_DatoscensalesejidodeOroVerde_2);
var lyr_DatoscensalesejidodeOroVerde_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DatoscensalesejidodeOroVerde_2, 
                style: style_DatoscensalesejidodeOroVerde_2,
                popuplayertitle: "Datos censales ejido de Oro Verde",
                interactive: true,
                title: '<img src="styles/legend/DatoscensalesejidodeOroVerde_2.png" /> Datos censales ejido de Oro Verde'
            });
var format_Plantaurbanahabitada_3 = new ol.format.GeoJSON();
var features_Plantaurbanahabitada_3 = format_Plantaurbanahabitada_3.readFeatures(json_Plantaurbanahabitada_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plantaurbanahabitada_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plantaurbanahabitada_3.addFeatures(features_Plantaurbanahabitada_3);
var lyr_Plantaurbanahabitada_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plantaurbanahabitada_3, 
                style: style_Plantaurbanahabitada_3,
                popuplayertitle: "Planta urbana habitada",
                interactive: false,
                title: '<img src="styles/legend/Plantaurbanahabitada_3.png" /> Planta urbana habitada'
            });
var format_Plantaurbana_4 = new ol.format.GeoJSON();
var features_Plantaurbana_4 = format_Plantaurbana_4.readFeatures(json_Plantaurbana_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plantaurbana_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plantaurbana_4.addFeatures(features_Plantaurbana_4);
var lyr_Plantaurbana_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plantaurbana_4, 
                style: style_Plantaurbana_4,
                popuplayertitle: "Planta urbana",
                interactive: false,
                title: '<img src="styles/legend/Plantaurbana_4.png" /> Planta urbana'
            });
var format_RP11_5 = new ol.format.GeoJSON();
var features_RP11_5 = format_RP11_5.readFeatures(json_RP11_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RP11_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RP11_5.addFeatures(features_RP11_5);
var lyr_RP11_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RP11_5, 
                style: style_RP11_5,
                popuplayertitle: "RP11",
                interactive: false,
                title: '<img src="styles/legend/RP11_5.png" /> RP11'
            });
var format_Puntosdereferencia_6 = new ol.format.GeoJSON();
var features_Puntosdereferencia_6 = format_Puntosdereferencia_6.readFeatures(json_Puntosdereferencia_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntosdereferencia_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntosdereferencia_6.addFeatures(features_Puntosdereferencia_6);
var lyr_Puntosdereferencia_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntosdereferencia_6, 
                style: style_Puntosdereferencia_6,
                popuplayertitle: "Puntos de referencia",
                interactive: true,
                title: '<img src="styles/legend/Puntosdereferencia_6.png" /> Puntos de referencia'
            });
var format_EjidodeOroVerde_7 = new ol.format.GeoJSON();
var features_EjidodeOroVerde_7 = format_EjidodeOroVerde_7.readFeatures(json_EjidodeOroVerde_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EjidodeOroVerde_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EjidodeOroVerde_7.addFeatures(features_EjidodeOroVerde_7);
var lyr_EjidodeOroVerde_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EjidodeOroVerde_7, 
                style: style_EjidodeOroVerde_7,
                popuplayertitle: "Ejido de Oro Verde",
                interactive: false,
                title: '<img src="styles/legend/EjidodeOroVerde_7.png" /> Ejido de Oro Verde'
            });
var format_DepartamentosdeEntreRios_8 = new ol.format.GeoJSON();
var features_DepartamentosdeEntreRios_8 = format_DepartamentosdeEntreRios_8.readFeatures(json_DepartamentosdeEntreRios_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentosdeEntreRios_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentosdeEntreRios_8.addFeatures(features_DepartamentosdeEntreRios_8);
var lyr_DepartamentosdeEntreRios_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DepartamentosdeEntreRios_8, 
                style: style_DepartamentosdeEntreRios_8,
                popuplayertitle: "Departamentos de Entre Rios",
                interactive: true,
                title: '<img src="styles/legend/DepartamentosdeEntreRios_8.png" /> Departamentos de Entre Rios'
            });
var format_ProvinciadeEntreRios_9 = new ol.format.GeoJSON();
var features_ProvinciadeEntreRios_9 = format_ProvinciadeEntreRios_9.readFeatures(json_ProvinciadeEntreRios_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvinciadeEntreRios_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinciadeEntreRios_9.addFeatures(features_ProvinciadeEntreRios_9);
var lyr_ProvinciadeEntreRios_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProvinciadeEntreRios_9, 
                style: style_ProvinciadeEntreRios_9,
                popuplayertitle: "Provincia de Entre Rios",
                interactive: false,
                title: '<img src="styles/legend/ProvinciadeEntreRios_9.png" /> Provincia de Entre Rios'
            });
var format_OTBN_10 = new ol.format.GeoJSON();
var features_OTBN_10 = format_OTBN_10.readFeatures(json_OTBN_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OTBN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OTBN_10.addFeatures(features_OTBN_10);
var lyr_OTBN_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OTBN_10, 
                style: style_OTBN_10,
                popuplayertitle: "OTBN",
                interactive: true,
    title: 'OTBN<br />\
    <img src="styles/legend/OTBN_10_0.png" /> I<br />\
    <img src="styles/legend/OTBN_10_1.png" /> II<br />'
        });
var format_InfraestructuraverdeurbanadeOroVerde2024_11 = new ol.format.GeoJSON();
var features_InfraestructuraverdeurbanadeOroVerde2024_11 = format_InfraestructuraverdeurbanadeOroVerde2024_11.readFeatures(json_InfraestructuraverdeurbanadeOroVerde2024_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfraestructuraverdeurbanadeOroVerde2024_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfraestructuraverdeurbanadeOroVerde2024_11.addFeatures(features_InfraestructuraverdeurbanadeOroVerde2024_11);
var lyr_InfraestructuraverdeurbanadeOroVerde2024_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfraestructuraverdeurbanadeOroVerde2024_11, 
                style: style_InfraestructuraverdeurbanadeOroVerde2024_11,
                popuplayertitle: "Infraestructura verde urbana de Oro Verde 2024",
                interactive: true,
                title: '<img src="styles/legend/InfraestructuraverdeurbanadeOroVerde2024_11.png" /> Infraestructura verde urbana de Oro Verde 2024'
            });
var format_Areasverdesurbanas_12 = new ol.format.GeoJSON();
var features_Areasverdesurbanas_12 = format_Areasverdesurbanas_12.readFeatures(json_Areasverdesurbanas_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areasverdesurbanas_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areasverdesurbanas_12.addFeatures(features_Areasverdesurbanas_12);
var lyr_Areasverdesurbanas_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areasverdesurbanas_12, 
                style: style_Areasverdesurbanas_12,
                popuplayertitle: "Areas verdes urbanas",
                interactive: true,
                title: '<img src="styles/legend/Areasverdesurbanas_12.png" /> Areas verdes urbanas'
            });
var format_Areasnaturalesprotegidas_13 = new ol.format.GeoJSON();
var features_Areasnaturalesprotegidas_13 = format_Areasnaturalesprotegidas_13.readFeatures(json_Areasnaturalesprotegidas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areasnaturalesprotegidas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areasnaturalesprotegidas_13.addFeatures(features_Areasnaturalesprotegidas_13);
var lyr_Areasnaturalesprotegidas_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areasnaturalesprotegidas_13, 
                style: style_Areasnaturalesprotegidas_13,
                popuplayertitle: "Areas naturales protegidas",
                interactive: true,
                title: '<img src="styles/legend/Areasnaturalesprotegidas_13.png" /> Areas naturales protegidas'
            });
var format_Reddedrenaje_14 = new ol.format.GeoJSON();
var features_Reddedrenaje_14 = format_Reddedrenaje_14.readFeatures(json_Reddedrenaje_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reddedrenaje_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reddedrenaje_14.addFeatures(features_Reddedrenaje_14);
var lyr_Reddedrenaje_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reddedrenaje_14, 
                style: style_Reddedrenaje_14,
                popuplayertitle: "Red de drenaje",
                interactive: false,
                title: '<img src="styles/legend/Reddedrenaje_14.png" /> Red de drenaje'
            });
var format_CuencadelarroyoParacao_15 = new ol.format.GeoJSON();
var features_CuencadelarroyoParacao_15 = format_CuencadelarroyoParacao_15.readFeatures(json_CuencadelarroyoParacao_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuencadelarroyoParacao_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuencadelarroyoParacao_15.addFeatures(features_CuencadelarroyoParacao_15);
var lyr_CuencadelarroyoParacao_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CuencadelarroyoParacao_15, 
                style: style_CuencadelarroyoParacao_15,
                popuplayertitle: "Cuenca del arroyo Paracao",
                interactive: false,
                title: '<img src="styles/legend/CuencadelarroyoParacao_15.png" /> Cuenca del arroyo Paracao'
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
var format_CuencashidrograficasdeEntreRios_17 = new ol.format.GeoJSON();
var features_CuencashidrograficasdeEntreRios_17 = format_CuencashidrograficasdeEntreRios_17.readFeatures(json_CuencashidrograficasdeEntreRios_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuencashidrograficasdeEntreRios_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuencashidrograficasdeEntreRios_17.addFeatures(features_CuencashidrograficasdeEntreRios_17);
var lyr_CuencashidrograficasdeEntreRios_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CuencashidrograficasdeEntreRios_17, 
                style: style_CuencashidrograficasdeEntreRios_17,
                popuplayertitle: "Cuencas hidrograficas de Entre Rios",
                interactive: true,
                title: '<img src="styles/legend/CuencashidrograficasdeEntreRios_17.png" /> Cuencas hidrograficas de Entre Rios'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Argenmap_1.setVisible(true);lyr_DatoscensalesejidodeOroVerde_2.setVisible(true);lyr_Plantaurbanahabitada_3.setVisible(true);lyr_Plantaurbana_4.setVisible(true);lyr_RP11_5.setVisible(true);lyr_Puntosdereferencia_6.setVisible(true);lyr_EjidodeOroVerde_7.setVisible(true);lyr_DepartamentosdeEntreRios_8.setVisible(true);lyr_ProvinciadeEntreRios_9.setVisible(true);lyr_OTBN_10.setVisible(true);lyr_InfraestructuraverdeurbanadeOroVerde2024_11.setVisible(true);lyr_Areasverdesurbanas_12.setVisible(true);lyr_Areasnaturalesprotegidas_13.setVisible(true);lyr_Reddedrenaje_14.setVisible(true);lyr_CuencadelarroyoParacao_15.setVisible(true);lyr_ArroyoParacao_16.setVisible(true);lyr_CuencashidrograficasdeEntreRios_17.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Argenmap_1,lyr_DatoscensalesejidodeOroVerde_2,lyr_Plantaurbanahabitada_3,lyr_Plantaurbana_4,lyr_RP11_5,lyr_Puntosdereferencia_6,lyr_EjidodeOroVerde_7,lyr_DepartamentosdeEntreRios_8,lyr_ProvinciadeEntreRios_9,lyr_OTBN_10,lyr_InfraestructuraverdeurbanadeOroVerde2024_11,lyr_Areasverdesurbanas_12,lyr_Areasnaturalesprotegidas_13,lyr_Reddedrenaje_14,lyr_CuencadelarroyoParacao_15,lyr_ArroyoParacao_16,lyr_CuencashidrograficasdeEntreRios_17];
lyr_DatoscensalesejidodeOroVerde_2.set('fieldAliases', {'toponimo_i': 'toponimo_i', 'link': 'link', 'varon': 'varon', 'mujer': 'mujer', 'totalpobl': 'totalpobl', 'hogares': 'hogares', 'viviendasp': 'viviendasp', 'viv_part_h': 'viv_part_h', });
lyr_Plantaurbanahabitada_3.set('fieldAliases', {'id': 'id', 'Sup m2': 'Sup m2', });
lyr_Plantaurbana_4.set('fieldAliases', {'id': 'id', 'Sup m2': 'Sup m2', });
lyr_RP11_5.set('fieldAliases', {'Objeto': 'Objeto', 'FNA1': 'FNA1', 'GNA1': 'GNA1', 'NAM1': 'NAM1', 'FNA2': 'FNA2', 'GNA2': 'GNA2', 'NAM2': 'NAM2', 'FUN': 'FUN', 'RST': 'RST', 'TYP': 'TYP', 'MES': 'MES', 'HCT': 'HCT', 'LOC': 'LOC', 'SAG': 'SAG', });
lyr_Puntosdereferencia_6.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_EjidodeOroVerde_7.set('fieldAliases', {'id': 'id', 'Sup m2': 'Sup m2', });
lyr_DepartamentosdeEntreRios_8.set('fieldAliases', {'FNA': 'FNA', 'GNA': 'GNA', 'Dep.': 'Dep.', 'SAG': 'SAG', 'IN1': 'IN1', });
lyr_ProvinciadeEntreRios_9.set('fieldAliases', {'FNA': 'FNA', 'GNA': 'GNA', 'NAM': 'NAM', 'SAG': 'SAG', 'IN1': 'IN1', });
lyr_OTBN_10.set('fieldAliases', {'id': 'id', 'Categoria': 'Categoria', 'Sup m2': 'Sup m2', });
lyr_InfraestructuraverdeurbanadeOroVerde2024_11.set('fieldAliases', {'id': 'id', 'Obs': 'Obs', 'Escala': 'Escala', 'Integra': 'Integra', 'Tipologia': 'Tipologia', 'Sup m2': 'Sup m2', 'Esp': 'Esp', });
lyr_Areasverdesurbanas_12.set('fieldAliases', {'id': 'id', 'Tipo': 'Tipo', 'Loteo': 'Loteo', 'Loteo N°': 'Loteo N°', 'Manzana': 'Manzana', 'Calles ref': 'Calles ref', 'Obs': 'Obs', 'Sup m2': 'Sup m2', });
lyr_Areasnaturalesprotegidas_13.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Sup m2': 'Sup m2', });
lyr_Reddedrenaje_14.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_CuencadelarroyoParacao_15.set('fieldAliases', {'ID': 'ID', 'Sup m2': 'Sup m2', });
lyr_ArroyoParacao_16.set('fieldAliases', {'id': 'id', 'Long km': 'Long km', });
lyr_CuencashidrograficasdeEntreRios_17.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_DatoscensalesejidodeOroVerde_2.set('fieldImages', {'toponimo_i': '', 'link': '', 'varon': '', 'mujer': '', 'totalpobl': '', 'hogares': '', 'viviendasp': '', 'viv_part_h': '', });
lyr_Plantaurbanahabitada_3.set('fieldImages', {'id': 'TextEdit', 'Sup m2': '', });
lyr_Plantaurbana_4.set('fieldImages', {'id': 'TextEdit', 'Sup m2': '', });
lyr_RP11_5.set('fieldImages', {'Objeto': 'TextEdit', 'FNA1': 'TextEdit', 'GNA1': 'TextEdit', 'NAM1': 'TextEdit', 'FNA2': 'TextEdit', 'GNA2': 'TextEdit', 'NAM2': 'TextEdit', 'FUN': 'TextEdit', 'RST': 'TextEdit', 'TYP': 'TextEdit', 'MES': 'TextEdit', 'HCT': 'TextEdit', 'LOC': 'TextEdit', 'SAG': 'TextEdit', });
lyr_Puntosdereferencia_6.set('fieldImages', {'id': '', 'Nombre': '', });
lyr_EjidodeOroVerde_7.set('fieldImages', {'id': 'TextEdit', 'Sup m2': '', });
lyr_DepartamentosdeEntreRios_8.set('fieldImages', {'FNA': 'TextEdit', 'GNA': 'TextEdit', 'Dep.': '', 'SAG': 'TextEdit', 'IN1': 'TextEdit', });
lyr_ProvinciadeEntreRios_9.set('fieldImages', {'FNA': 'TextEdit', 'GNA': 'TextEdit', 'NAM': 'TextEdit', 'SAG': 'TextEdit', 'IN1': 'TextEdit', });
lyr_OTBN_10.set('fieldImages', {'id': 'TextEdit', 'Categoria': 'TextEdit', 'Sup m2': '', });
lyr_InfraestructuraverdeurbanadeOroVerde2024_11.set('fieldImages', {'id': 'TextEdit', 'Obs': 'TextEdit', 'Escala': 'TextEdit', 'Integra': 'TextEdit', 'Tipologia': 'TextEdit', 'Sup m2': 'TextEdit', 'Esp': 'TextEdit', });
lyr_Areasverdesurbanas_12.set('fieldImages', {'id': 'TextEdit', 'Tipo': 'TextEdit', 'Loteo': 'TextEdit', 'Loteo N°': 'TextEdit', 'Manzana': 'Range', 'Calles ref': 'TextEdit', 'Obs': 'TextEdit', 'Sup m2': 'TextEdit', });
lyr_Areasnaturalesprotegidas_13.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Sup m2': 'TextEdit', });
lyr_Reddedrenaje_14.set('fieldImages', {'SEGMENT_ID': 'TextEdit', 'NODE_A': 'TextEdit', 'NODE_B': 'TextEdit', 'BASIN': 'TextEdit', 'ORDER': 'TextEdit', 'ORDER_CELL': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_CuencadelarroyoParacao_15.set('fieldImages', {'ID': 'TextEdit', 'Sup m2': '', });
lyr_ArroyoParacao_16.set('fieldImages', {'id': 'TextEdit', 'Long km': 'TextEdit', });
lyr_CuencashidrograficasdeEntreRios_17.set('fieldImages', {'Nombre': '', });
lyr_DatoscensalesejidodeOroVerde_2.set('fieldLabels', {'toponimo_i': 'hidden field', 'link': 'hidden field', 'varon': 'inline label - always visible', 'mujer': 'inline label - always visible', 'totalpobl': 'inline label - always visible', 'hogares': 'inline label - always visible', 'viviendasp': 'hidden field', 'viv_part_h': 'hidden field', });
lyr_Plantaurbanahabitada_3.set('fieldLabels', {'id': 'no label', 'Sup m2': 'no label', });
lyr_Plantaurbana_4.set('fieldLabels', {'id': 'header label - visible with data', 'Sup m2': 'no label', });
lyr_RP11_5.set('fieldLabels', {'Objeto': 'hidden field', 'FNA1': 'hidden field', 'GNA1': 'hidden field', 'NAM1': 'hidden field', 'FNA2': 'hidden field', 'GNA2': 'inline label - always visible', 'NAM2': 'hidden field', 'FUN': 'hidden field', 'RST': 'hidden field', 'TYP': 'hidden field', 'MES': 'hidden field', 'HCT': 'hidden field', 'LOC': 'hidden field', 'SAG': 'hidden field', });
lyr_Puntosdereferencia_6.set('fieldLabels', {'id': 'hidden field', 'Nombre': 'inline label - always visible', });
lyr_EjidodeOroVerde_7.set('fieldLabels', {'id': 'hidden field', 'Sup m2': 'no label', });
lyr_DepartamentosdeEntreRios_8.set('fieldLabels', {'FNA': 'hidden field', 'GNA': 'hidden field', 'Dep.': 'inline label - always visible', 'SAG': 'hidden field', 'IN1': 'hidden field', });
lyr_ProvinciadeEntreRios_9.set('fieldLabels', {'FNA': 'header label - always visible', 'GNA': 'hidden field', 'NAM': 'hidden field', 'SAG': 'hidden field', 'IN1': 'hidden field', });
lyr_OTBN_10.set('fieldLabels', {'id': 'hidden field', 'Categoria': 'inline label - always visible', 'Sup m2': 'inline label - always visible', });
lyr_InfraestructuraverdeurbanadeOroVerde2024_11.set('fieldLabels', {'id': 'inline label - always visible', 'Obs': 'inline label - always visible', 'Escala': 'inline label - always visible', 'Integra': 'inline label - always visible', 'Tipologia': 'inline label - always visible', 'Sup m2': 'inline label - always visible', 'Esp': 'inline label - always visible', });
lyr_Areasverdesurbanas_12.set('fieldLabels', {'id': 'inline label - always visible', 'Tipo': 'inline label - always visible', 'Loteo': 'inline label - always visible', 'Loteo N°': 'inline label - always visible', 'Manzana': 'inline label - always visible', 'Calles ref': 'inline label - always visible', 'Obs': 'inline label - always visible', 'Sup m2': 'inline label - always visible', });
lyr_Areasnaturalesprotegidas_13.set('fieldLabels', {'id': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Sup m2': 'inline label - always visible', });
lyr_Reddedrenaje_14.set('fieldLabels', {'SEGMENT_ID': 'hidden field', 'NODE_A': 'hidden field', 'NODE_B': 'hidden field', 'BASIN': 'hidden field', 'ORDER': 'hidden field', 'ORDER_CELL': 'hidden field', 'LENGTH': 'hidden field', });
lyr_CuencadelarroyoParacao_15.set('fieldLabels', {'ID': 'hidden field', 'Sup m2': 'no label', });
lyr_ArroyoParacao_16.set('fieldLabels', {'id': 'hidden field', 'Long km': 'no label', });
lyr_CuencashidrograficasdeEntreRios_17.set('fieldLabels', {'Nombre': 'inline label - always visible', });
lyr_CuencashidrograficasdeEntreRios_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});