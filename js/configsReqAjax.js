/* CONFIGURAÇÕES DE REQUISIÇÕES ASSÍNCRONAS */

// Dados Carregados do Trello

function obterConfigsReqAssincGetCamposPersonalizados( idBoard )
{
	var configsReqAssincGetCamposPersonalizados =
	{
		url: obterURLCamposPersonalizadosComBoardID( idBoard ),
		type: TIPO_REQ_AJAX_GET,
		dataType: TIPO_DADO_AJAX_JSON,
		beforeSend: beforeSendGetCamposPersonalizados
	};
	
	return configsReqAssincGetCamposPersonalizados;
}

function obterConfigsReqAssincGetCards( idBoard )
{
	var configsReqAssincGetCards =
	{
		url: obterURLCardsComBoardID( idBoard ),
		type: TIPO_REQ_AJAX_GET,
		dataType: TIPO_DADO_AJAX_JSON,
		beforeSend: beforeSendGetCards
	};
	
	return configsReqAssincGetCards;
}

function obterConfigsReqAssincGetListas( idBoard )
{
	var configsReqAssincGetListas =
	{
		url: obterURLListasComBoardID( idBoard ),
		type: TIPO_REQ_AJAX_GET,
		dataType: TIPO_DADO_AJAX_JSON,
		beforeSend: beforeSendGetListas
	};
	
	return configsReqAssincGetListas;
}

function obterConfigsReqAssincGetEtiquetas( idBoard )
{
	var configsReqAssincGetEtiquetas =
	{
		url: obterURLEtiquetasComBoardID( idBoard ),
		type: TIPO_REQ_AJAX_GET,
		dataType: TIPO_DADO_AJAX_JSON,
		beforeSend: beforeSendGetEtiquetas
	};
	
	return configsReqAssincGetEtiquetas;
}

// Dados Enviados para o Trello

function obterConfigsReqAssincPutCampoPersonalizadoCard( valorCampoPersonalizadoCard )
{
	var configsReqAssincPutCampoPersonalizadoCard =
	{
		body: JSON.stringify( valorCampoPersonalizadoCard ),
		method: TIPO_REQ_AJAX_PUT,
		headers: { 'content-type': 'application/json' }
	};
	
	return configsReqAssincPutCampoPersonalizadoCard;
}
