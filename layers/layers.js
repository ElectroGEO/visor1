var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RegindeCoquimbo_1 = new ol.format.GeoJSON();
var features_RegindeCoquimbo_1 = format_RegindeCoquimbo_1.readFeatures(json_RegindeCoquimbo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegindeCoquimbo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegindeCoquimbo_1.addFeatures(features_RegindeCoquimbo_1);
var lyr_RegindeCoquimbo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegindeCoquimbo_1, 
                style: style_RegindeCoquimbo_1,
                popuplayertitle: 'Región de Coquimbo',
                interactive: true,
                title: '<img src="styles/legend/RegindeCoquimbo_1.png" /> Región de Coquimbo'
            });
var format_ComunascosterasCoquimbo_2 = new ol.format.GeoJSON();
var features_ComunascosterasCoquimbo_2 = format_ComunascosterasCoquimbo_2.readFeatures(json_ComunascosterasCoquimbo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunascosterasCoquimbo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunascosterasCoquimbo_2.addFeatures(features_ComunascosterasCoquimbo_2);
var lyr_ComunascosterasCoquimbo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComunascosterasCoquimbo_2, 
                style: style_ComunascosterasCoquimbo_2,
                popuplayertitle: 'Comunas costeras Coquimbo',
                interactive: true,
                title: '<img src="styles/legend/ComunascosterasCoquimbo_2.png" /> Comunas costeras Coquimbo'
            });
var format_reasProtegidas_3 = new ol.format.GeoJSON();
var features_reasProtegidas_3 = format_reasProtegidas_3.readFeatures(json_reasProtegidas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasProtegidas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasProtegidas_3.addFeatures(features_reasProtegidas_3);
var lyr_reasProtegidas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasProtegidas_3, 
                style: style_reasProtegidas_3,
                popuplayertitle: 'Áreas Protegidas',
                interactive: true,
                title: '<img src="styles/legend/reasProtegidas_3.png" /> Áreas Protegidas'
            });
var format_ZOIT_4 = new ol.format.GeoJSON();
var features_ZOIT_4 = format_ZOIT_4.readFeatures(json_ZOIT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZOIT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZOIT_4.addFeatures(features_ZOIT_4);
var lyr_ZOIT_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZOIT_4, 
                style: style_ZOIT_4,
                popuplayertitle: 'ZOIT',
                interactive: true,
                title: '<img src="styles/legend/ZOIT_4.png" /> ZOIT'
            });
var format_InventariodeHumedales_5 = new ol.format.GeoJSON();
var features_InventariodeHumedales_5 = format_InventariodeHumedales_5.readFeatures(json_InventariodeHumedales_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InventariodeHumedales_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InventariodeHumedales_5.addFeatures(features_InventariodeHumedales_5);
var lyr_InventariodeHumedales_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InventariodeHumedales_5, 
                style: style_InventariodeHumedales_5,
                popuplayertitle: 'Inventario de Humedales',
                interactive: true,
                title: '<img src="styles/legend/InventariodeHumedales_5.png" /> Inventario de Humedales'
            });
var format_HumedalesUrbanos_6 = new ol.format.GeoJSON();
var features_HumedalesUrbanos_6 = format_HumedalesUrbanos_6.readFeatures(json_HumedalesUrbanos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HumedalesUrbanos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HumedalesUrbanos_6.addFeatures(features_HumedalesUrbanos_6);
var lyr_HumedalesUrbanos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HumedalesUrbanos_6, 
                style: style_HumedalesUrbanos_6,
                popuplayertitle: 'Humedales Urbanos',
                interactive: true,
                title: '<img src="styles/legend/HumedalesUrbanos_6.png" /> Humedales Urbanos'
            });
var format_poligonoMonumentoNacional_7 = new ol.format.GeoJSON();
var features_poligonoMonumentoNacional_7 = format_poligonoMonumentoNacional_7.readFeatures(json_poligonoMonumentoNacional_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligonoMonumentoNacional_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligonoMonumentoNacional_7.addFeatures(features_poligonoMonumentoNacional_7);
var lyr_poligonoMonumentoNacional_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poligonoMonumentoNacional_7, 
                style: style_poligonoMonumentoNacional_7,
                popuplayertitle: 'poligono Monumento Nacional',
                interactive: true,
                title: '<img src="styles/legend/poligonoMonumentoNacional_7.png" /> poligono Monumento Nacional'
            });
var format_reasPobladas_8 = new ol.format.GeoJSON();
var features_reasPobladas_8 = format_reasPobladas_8.readFeatures(json_reasPobladas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasPobladas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasPobladas_8.addFeatures(features_reasPobladas_8);
var lyr_reasPobladas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasPobladas_8, 
                style: style_reasPobladas_8,
                popuplayertitle: 'Áreas Pobladas',
                interactive: true,
                title: '<img src="styles/legend/reasPobladas_8.png" /> Áreas Pobladas'
            });
var format_puntoMonumentoNacional_9 = new ol.format.GeoJSON();
var features_puntoMonumentoNacional_9 = format_puntoMonumentoNacional_9.readFeatures(json_puntoMonumentoNacional_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntoMonumentoNacional_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntoMonumentoNacional_9.addFeatures(features_puntoMonumentoNacional_9);
var lyr_puntoMonumentoNacional_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntoMonumentoNacional_9, 
                style: style_puntoMonumentoNacional_9,
                popuplayertitle: 'punto Monumento Nacional',
                interactive: true,
                title: '<img src="styles/legend/puntoMonumentoNacional_9.png" /> punto Monumento Nacional'
            });
var format_ComunidadesIndgenas_10 = new ol.format.GeoJSON();
var features_ComunidadesIndgenas_10 = format_ComunidadesIndgenas_10.readFeatures(json_ComunidadesIndgenas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunidadesIndgenas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunidadesIndgenas_10.addFeatures(features_ComunidadesIndgenas_10);
var lyr_ComunidadesIndgenas_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComunidadesIndgenas_10, 
                style: style_ComunidadesIndgenas_10,
                popuplayertitle: 'Comunidades Indígenas',
                interactive: true,
                title: '<img src="styles/legend/ComunidadesIndgenas_10.png" /> Comunidades Indígenas'
            });
var format_AsociacionesIndgenas_11 = new ol.format.GeoJSON();
var features_AsociacionesIndgenas_11 = format_AsociacionesIndgenas_11.readFeatures(json_AsociacionesIndgenas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AsociacionesIndgenas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AsociacionesIndgenas_11.addFeatures(features_AsociacionesIndgenas_11);
var lyr_AsociacionesIndgenas_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AsociacionesIndgenas_11, 
                style: style_AsociacionesIndgenas_11,
                popuplayertitle: 'Asociaciones Indígenas',
                interactive: true,
                title: '<img src="styles/legend/AsociacionesIndgenas_11.png" /> Asociaciones Indígenas'
            });
var format_bocinasclasificadas_12 = new ol.format.GeoJSON();
var features_bocinasclasificadas_12 = format_bocinasclasificadas_12.readFeatures(json_bocinasclasificadas_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bocinasclasificadas_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bocinasclasificadas_12.addFeatures(features_bocinasclasificadas_12);
var lyr_bocinasclasificadas_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bocinasclasificadas_12, 
                style: style_bocinasclasificadas_12,
                popuplayertitle: 'bocinas clasificadas',
                interactive: true,
    title: 'bocinas clasificadas<br />\
    <img src="styles/legend/bocinasclasificadas_12_0.png" /> Zona Roja Crítica<br />\
    <img src="styles/legend/bocinasclasificadas_12_1.png" /> Zona Roja<br />\
    <img src="styles/legend/bocinasclasificadas_12_2.png" /> Zona Amarilla<br />\
    <img src="styles/legend/bocinasclasificadas_12_3.png" /> Zona Verde<br />' });
var group_resultados = new ol.layer.Group({
                                layers: [lyr_bocinasclasificadas_12,],
                                fold: 'open',
                                title: 'resultados'});
var group_ResultadoID = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Resultado ID'});
var group_preresultado = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'pre resultado'});
var group_regioncoquimbo = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'region coquimbo'});
var group_div = new ol.layer.Group({
                                layers: [lyr_reasProtegidas_3,lyr_ZOIT_4,lyr_InventariodeHumedales_5,lyr_HumedalesUrbanos_6,lyr_poligonoMonumentoNacional_7,lyr_reasPobladas_8,lyr_puntoMonumentoNacional_9,lyr_ComunidadesIndgenas_10,lyr_AsociacionesIndgenas_11,],
                                fold: 'open',
                                title: 'div'});
var group_Bocinas = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Bocinas'});
var group_subgroup1 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'sub-group1'});
var group_Valpo = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Valpo'});
var group_Capasdivididasporcomuna = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Capas divididas por comuna+'});
var group_CONADI = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'CONADI'});
var group_MonumentoNacional = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Monumento Nacional'});

lyr_OpenStreetMap_0.setVisible(true);lyr_RegindeCoquimbo_1.setVisible(true);lyr_ComunascosterasCoquimbo_2.setVisible(true);lyr_reasProtegidas_3.setVisible(true);lyr_ZOIT_4.setVisible(true);lyr_InventariodeHumedales_5.setVisible(true);lyr_HumedalesUrbanos_6.setVisible(true);lyr_poligonoMonumentoNacional_7.setVisible(true);lyr_reasPobladas_8.setVisible(true);lyr_puntoMonumentoNacional_9.setVisible(true);lyr_ComunidadesIndgenas_10.setVisible(true);lyr_AsociacionesIndgenas_11.setVisible(true);lyr_bocinasclasificadas_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RegindeCoquimbo_1,lyr_ComunascosterasCoquimbo_2,group_div,group_resultados];
lyr_RegindeCoquimbo_1.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'REGION': 'REGION', 'SUPERFICIE': 'SUPERFICIE', });
lyr_ComunascosterasCoquimbo_2.set('fieldAliases', {'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_reasProtegidas_3.set('fieldAliases', {'objectid': 'objectid', 'cod_rnap': 'cod_rnap', 'nombre_ap': 'nombre_ap', 'region': 'region', 'designacio': 'designacio', 'ha': 'ha', 'url_fuente': 'url_fuente', 'srid': 'srid', 'COMUNA': 'COMUNA', 'tipo_snsbl': 'tipo_snsbl', });
lyr_ZOIT_4.set('fieldAliases', {'nombre_ap': 'nombre_ap', 'COD': 'COD', 'tipo_snsbl': 'tipo_snsbl', });
lyr_InventariodeHumedales_5.set('fieldAliases', {'NOM_HUMDET': 'NOM_HUMDET', 'NOM_HUMMAS': 'NOM_HUMMAS', 'ORDEN_1': 'ORDEN_1', 'ORDEN_2': 'ORDEN_2', 'ORDEN_3': 'ORDEN_3', 'ORDEN_4': 'ORDEN_4', 'ORDEN_5': 'ORDEN_5', 'COD': 'COD', 'COMUNA': 'COMUNA', 'tipo_snsbl': 'tipo_snsbl', });
lyr_HumedalesUrbanos_6.set('fieldAliases', {'COD_HUM_M': 'COD_HUM_M', 'NOMBRE': 'NOMBRE', 'COMUNA': 'COMUNA', 'PROVINCIA': 'PROVINCIA', 'REGION': 'REGION', 'HECTAREAS': 'HECTAREAS', 'PROCESO': 'PROCESO', 'RESOLUCION': 'RESOLUCION', 'URL_RES_BC': 'URL_RES_BC', 'OBJECTID': 'OBJECTID', 'URL_SIMBIO': 'URL_SIMBIO', 'tipo_snsbl': 'tipo_snsbl', });
lyr_poligonoMonumentoNacional_7.set('fieldAliases', {'CODIGO': 'CODIGO', 'NOMBRE': 'NOMBRE', 'CATEGORIA': 'CATEGORIA', 'COM_RAIZ': 'COM_RAIZ', 'COMPONENTE': 'COMPONENTE', 'TIP_MON': 'TIP_MON', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'TIPO_DECRE': 'TIPO_DECRE', 'NUM_DEC': 'NUM_DEC', 'FCH_DEC': 'FCH_DEC', 'SUP_OFC_MT': 'SUP_OFC_MT', 'SUP_OFC_HA': 'SUP_OFC_HA', 'URL_DEC': 'URL_DEC', 'URL_PLANO': 'URL_PLANO', 'URL_IMAGEN': 'URL_IMAGEN', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'GlobalID': 'GlobalID', 'tipo_snsbl': 'tipo_snsbl', });
lyr_reasPobladas_8.set('fieldAliases', {'objectid': 'objectid', 'comuna': 'comuna', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'COD': 'COD', 'tipo_snsbl': 'tipo_snsbl', });
lyr_puntoMonumentoNacional_9.set('fieldAliases', {'CODIGO': 'CODIGO', 'NOMBRE': 'NOMBRE', 'CATEGORIA': 'CATEGORIA', 'COM_RAIZ': 'COM_RAIZ', 'COMPONENTE': 'COMPONENTE', 'TIP_MON': 'TIP_MON', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'TIPO_DECRE': 'TIPO_DECRE', 'NUM_DEC': 'NUM_DEC', 'FCH_DEC': 'FCH_DEC', 'PUB_DEC': 'PUB_DEC', 'SUP_OFC_MT': 'SUP_OFC_MT', 'SUP_OFC_HA': 'SUP_OFC_HA', 'OBS_DPA': 'OBS_DPA', 'URL_DEC': 'URL_DEC', 'URL_PLANO': 'URL_PLANO', 'URL_IMAGEN': 'URL_IMAGEN', 'GlobalID': 'GlobalID', });
lyr_ComunidadesIndgenas_10.set('fieldAliases', {'REGI_N': 'REGI_N', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'DIRECCI_N_': 'DIRECCI_N_', 'COMUNIDAD': 'COMUNIDAD', 'REGISTRO': 'REGISTRO', 'FECHA_GEO': 'FECHA_GEO', 'FUENTE_INF': 'FUENTE_INF', 'ESTADO': 'ESTADO', 'IDENTIFICA': 'IDENTIFICA', 'LOCALIZACI': 'LOCALIZACI', 'OBSERVACIO': 'OBSERVACIO', 'FECHA': 'FECHA', 'CODIGO': 'CODIGO', 'IDENTIF_01': 'IDENTIF_01', });
lyr_AsociacionesIndgenas_11.set('fieldAliases', {'ID_REGION': 'ID_REGION', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'NOMBRE': 'NOMBRE', 'PJ': 'PJ', 'DIRECCION': 'DIRECCION', 'ESTADO_PJ': 'ESTADO_PJ', 'FECHA_CONS': 'FECHA_CONS', 'PUEBLO': 'PUEBLO', 'FUENTE': 'FUENTE', 'OFICINA': 'OFICINA', 'OBSERVACIO': 'OBSERVACIO', 'FECHA': 'FECHA', 'CODIGO': 'CODIGO', 'IDENTIFICA': 'IDENTIFICA', });
lyr_bocinasclasificadas_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', 'COMUNA': 'COMUNA', 'clasificacion': 'clasificacion', });
lyr_RegindeCoquimbo_1.set('fieldImages', {'CUT_REG': 'TextEdit', 'REGION': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_ComunascosterasCoquimbo_2.set('fieldImages', {'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_reasProtegidas_3.set('fieldImages', {'objectid': 'TextEdit', 'cod_rnap': 'TextEdit', 'nombre_ap': 'TextEdit', 'region': 'TextEdit', 'designacio': 'TextEdit', 'ha': 'TextEdit', 'url_fuente': 'TextEdit', 'srid': 'TextEdit', 'COMUNA': 'TextEdit', 'tipo_snsbl': 'TextEdit', });
lyr_ZOIT_4.set('fieldImages', {'nombre_ap': '', 'COD': '', 'tipo_snsbl': '', });
lyr_InventariodeHumedales_5.set('fieldImages', {'NOM_HUMDET': '', 'NOM_HUMMAS': '', 'ORDEN_1': '', 'ORDEN_2': '', 'ORDEN_3': '', 'ORDEN_4': '', 'ORDEN_5': '', 'COD': '', 'COMUNA': '', 'tipo_snsbl': '', });
lyr_HumedalesUrbanos_6.set('fieldImages', {'COD_HUM_M': '', 'NOMBRE': '', 'COMUNA': '', 'PROVINCIA': '', 'REGION': '', 'HECTAREAS': '', 'PROCESO': '', 'RESOLUCION': '', 'URL_RES_BC': '', 'OBJECTID': '', 'URL_SIMBIO': '', 'tipo_snsbl': '', });
lyr_poligonoMonumentoNacional_7.set('fieldImages', {'CODIGO': '', 'NOMBRE': '', 'CATEGORIA': '', 'COM_RAIZ': '', 'COMPONENTE': '', 'TIP_MON': '', 'REGION': '', 'PROVINCIA': '', 'COMUNA': '', 'TIPO_DECRE': '', 'NUM_DEC': '', 'FCH_DEC': '', 'SUP_OFC_MT': '', 'SUP_OFC_HA': '', 'URL_DEC': '', 'URL_PLANO': '', 'URL_IMAGEN': '', 'Shape__Are': '', 'Shape__Len': '', 'GlobalID': '', 'tipo_snsbl': '', });
lyr_reasPobladas_8.set('fieldImages', {'objectid': '', 'comuna': '', 'st_area_sh': '', 'st_length_': '', 'Localidad': '', 'Entidad': '', 'COD': '', 'tipo_snsbl': '', });
lyr_puntoMonumentoNacional_9.set('fieldImages', {'CODIGO': 'TextEdit', 'NOMBRE': 'TextEdit', 'CATEGORIA': 'TextEdit', 'COM_RAIZ': 'TextEdit', 'COMPONENTE': 'TextEdit', 'TIP_MON': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'TIPO_DECRE': 'TextEdit', 'NUM_DEC': 'TextEdit', 'FCH_DEC': 'DateTime', 'PUB_DEC': 'DateTime', 'SUP_OFC_MT': 'TextEdit', 'SUP_OFC_HA': 'TextEdit', 'OBS_DPA': 'TextEdit', 'URL_DEC': 'TextEdit', 'URL_PLANO': 'TextEdit', 'URL_IMAGEN': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_ComunidadesIndgenas_10.set('fieldImages', {'REGI_N': '', 'PROVINCIA': '', 'COMUNA': '', 'DIRECCI_N_': '', 'COMUNIDAD': '', 'REGISTRO': '', 'FECHA_GEO': '', 'FUENTE_INF': '', 'ESTADO': '', 'IDENTIFICA': '', 'LOCALIZACI': '', 'OBSERVACIO': '', 'FECHA': '', 'CODIGO': '', 'IDENTIF_01': '', });
lyr_AsociacionesIndgenas_11.set('fieldImages', {'ID_REGION': '', 'REGION': '', 'PROVINCIA': '', 'COMUNA': '', 'NOMBRE': '', 'PJ': '', 'DIRECCION': '', 'ESTADO_PJ': '', 'FECHA_CONS': '', 'PUEBLO': '', 'FUENTE': '', 'OFICINA': '', 'OBSERVACIO': '', 'FECHA': '', 'CODIGO': '', 'IDENTIFICA': '', });
lyr_bocinasclasificadas_12.set('fieldImages', {'fid': '', 'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'layer': '', 'path': '', 'COMUNA': '', 'clasificacion': '', });
lyr_RegindeCoquimbo_1.set('fieldLabels', {'CUT_REG': 'no label', 'REGION': 'no label', 'SUPERFICIE': 'no label', });
lyr_ComunascosterasCoquimbo_2.set('fieldLabels', {'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_reasProtegidas_3.set('fieldLabels', {'objectid': 'no label', 'cod_rnap': 'no label', 'nombre_ap': 'no label', 'region': 'no label', 'designacio': 'no label', 'ha': 'no label', 'url_fuente': 'no label', 'srid': 'no label', 'COMUNA': 'no label', 'tipo_snsbl': 'no label', });
lyr_ZOIT_4.set('fieldLabels', {'nombre_ap': 'no label', 'COD': 'no label', 'tipo_snsbl': 'no label', });
lyr_InventariodeHumedales_5.set('fieldLabels', {'NOM_HUMDET': 'no label', 'NOM_HUMMAS': 'no label', 'ORDEN_1': 'no label', 'ORDEN_2': 'no label', 'ORDEN_3': 'no label', 'ORDEN_4': 'no label', 'ORDEN_5': 'no label', 'COD': 'no label', 'COMUNA': 'no label', 'tipo_snsbl': 'no label', });
lyr_HumedalesUrbanos_6.set('fieldLabels', {'COD_HUM_M': 'no label', 'NOMBRE': 'no label', 'COMUNA': 'no label', 'PROVINCIA': 'no label', 'REGION': 'no label', 'HECTAREAS': 'no label', 'PROCESO': 'no label', 'RESOLUCION': 'no label', 'URL_RES_BC': 'no label', 'OBJECTID': 'no label', 'URL_SIMBIO': 'no label', 'tipo_snsbl': 'no label', });
lyr_poligonoMonumentoNacional_7.set('fieldLabels', {'CODIGO': 'no label', 'NOMBRE': 'no label', 'CATEGORIA': 'no label', 'COM_RAIZ': 'no label', 'COMPONENTE': 'no label', 'TIP_MON': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'TIPO_DECRE': 'no label', 'NUM_DEC': 'no label', 'FCH_DEC': 'no label', 'SUP_OFC_MT': 'no label', 'SUP_OFC_HA': 'no label', 'URL_DEC': 'no label', 'URL_PLANO': 'no label', 'URL_IMAGEN': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'GlobalID': 'no label', 'tipo_snsbl': 'no label', });
lyr_reasPobladas_8.set('fieldLabels', {'objectid': 'no label', 'comuna': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', 'Localidad': 'no label', 'Entidad': 'no label', 'COD': 'no label', 'tipo_snsbl': 'no label', });
lyr_puntoMonumentoNacional_9.set('fieldLabels', {'CODIGO': 'no label', 'NOMBRE': 'no label', 'CATEGORIA': 'no label', 'COM_RAIZ': 'no label', 'COMPONENTE': 'no label', 'TIP_MON': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'TIPO_DECRE': 'no label', 'NUM_DEC': 'no label', 'FCH_DEC': 'no label', 'PUB_DEC': 'no label', 'SUP_OFC_MT': 'no label', 'SUP_OFC_HA': 'no label', 'OBS_DPA': 'no label', 'URL_DEC': 'no label', 'URL_PLANO': 'no label', 'URL_IMAGEN': 'no label', 'GlobalID': 'no label', });
lyr_ComunidadesIndgenas_10.set('fieldLabels', {'REGI_N': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'DIRECCI_N_': 'no label', 'COMUNIDAD': 'no label', 'REGISTRO': 'no label', 'FECHA_GEO': 'no label', 'FUENTE_INF': 'no label', 'ESTADO': 'no label', 'IDENTIFICA': 'no label', 'LOCALIZACI': 'no label', 'OBSERVACIO': 'no label', 'FECHA': 'no label', 'CODIGO': 'no label', 'IDENTIF_01': 'no label', });
lyr_AsociacionesIndgenas_11.set('fieldLabels', {'ID_REGION': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'NOMBRE': 'no label', 'PJ': 'no label', 'DIRECCION': 'no label', 'ESTADO_PJ': 'no label', 'FECHA_CONS': 'no label', 'PUEBLO': 'no label', 'FUENTE': 'no label', 'OFICINA': 'no label', 'OBSERVACIO': 'no label', 'FECHA': 'no label', 'CODIGO': 'no label', 'IDENTIFICA': 'no label', });
lyr_bocinasclasificadas_12.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', 'COMUNA': 'no label', 'clasificacion': 'no label', });
lyr_bocinasclasificadas_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});