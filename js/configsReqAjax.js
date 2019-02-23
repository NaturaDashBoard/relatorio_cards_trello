/* CONFIGURAÇÕES DE REQUISIÇÕES SÍNCRONAS */

function obterConfigsReqSincGetCards( idBoard )
{
	var configsReqSincGetCards =
	{
		async: false,
		url: obterURLCardsComBoardID( idBoard ),
		type: TIPO_REQ_AJAX_GET,
		dataType: TIPO_DADO_AJAX_JSON,
		beforeSend: beforeSendGetCards
	};
	
	return configsReqSincGetCards;
}

var configsReqSincGetCardsGestaoDemandasNatura =
{
	async: false,
	url: obterURLCardsComBoardID( ID_BOARD_GESTAO_DEMANDAS_NATURA ),
	type: TIPO_REQ_AJAX_GET,
	dataType: TIPO_DADO_AJAX_JSON,
	beforeSend: beforeSendGetCardsGestaoDemandasNatura
};

function obterConfigsReqSincGetCardActions( idCard )
{
	var configsReqGetCardActions =
	{
		async: false,
		url: obterURLCardActions( idCard ),
		type: TIPO_REQ_AJAX_GET,
		dataType: TIPO_DADO_AJAX_JSON,
		beforeSend: beforeSendGetCardActionsQuadroTestesDashboardNatura
	};
	
	return configsReqGetCardActions;
}

function obterConfigsReqSincGetCamposPersonalizadosCard( idCard )
{
	var configsReqGetCamposPersonalizadosCard =
	{
		async: false,
		url: obterURLCamposPersonalizadosCard( idCard ),
		type: TIPO_REQ_AJAX_GET,
		dataType: TIPO_DADO_AJAX_JSON,
		beforeSend: beforeSendGetCamposPersonalizadosCard
	};
	
	return configsReqGetCamposPersonalizadosCard;	
}

function obterConfigsReqSincGetAnexosCard( idCard )
{
	var configsReqGetAnexosCard =
	{
		async: false,
		url: obterURLAnexosCard( idCard ),
		type: TIPO_REQ_AJAX_GET,
		dataType: TIPO_DADO_AJAX_JSON,
		beforeSend: beforeSendGetAnexosCard
	};
	
	return configsReqGetAnexosCard;	
}

/* CONFIGURAÇÕES DE REQUISIÇÕES ASSÍNCRONAS */

// Dados Carregados do Trello

function obterConfigsReqAssincGetBoardActions( idBoard )
{
	var configsReqAssincGetBoardActions =
	{
		url: obterURLBoardActions( idBoard ),
		type: TIPO_REQ_AJAX_GET,
		dataType: TIPO_DADO_AJAX_JSON,
		beforeSend: beforeSendGetBoardActions
	};
	
	return configsReqAssincGetBoardActions;
}

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

// Gestão Demandas Natura

var configsReqAssincGetBoardActionsGestaoDemandasNatura =
{
	url: obterURLBoardActions( ID_BOARD_GESTAO_DEMANDAS_NATURA ),
	type: TIPO_REQ_AJAX_GET,
	dataType: TIPO_DADO_AJAX_JSON,
	beforeSend: beforeSendGetBoardActionsGestaoDemandasNatura
};

var configsReqAssincGetCamposPersonalizadosGestaoDemandasNatura =
{
	url: obterURLCamposPersonalizadosComBoardID( ID_BOARD_GESTAO_DEMANDAS_NATURA ),
	type: TIPO_REQ_AJAX_GET,
	dataType: TIPO_DADO_AJAX_JSON,
	beforeSend: beforeSendGetCamposPersonalizadosGestaoDemandasNatura
};

var configsReqAssincGetCardsGestaoDemandasNatura =
{
	url: obterURLCardsComBoardID( ID_BOARD_GESTAO_DEMANDAS_NATURA ),
	type: TIPO_REQ_AJAX_GET,
	dataType: TIPO_DADO_AJAX_JSON,
	beforeSend: beforeSendGetCardsGestaoDemandasNatura
};

var configsReqAssincGetListasGestaoDemandasNatura =
{
	url: obterURLListasComBoardID( ID_BOARD_GESTAO_DEMANDAS_NATURA ),
	type: TIPO_REQ_AJAX_GET,
	dataType: TIPO_DADO_AJAX_JSON,
	beforeSend: beforeSendGetListasGestaoDemandasNatura
};

// Quadro de Testes para Dashboard da Natura

var configsReqAssincGetBoardActionsQuadroTestesDashboardNatura =
{
	url: obterURLBoardActions( ID_BOARD_QUADRO_TESTES_DASHBOARD_NATURA ),
	type: TIPO_REQ_AJAX_GET,
	dataType: TIPO_DADO_AJAX_JSON,
	beforeSend: beforeSendGetBoardActionsQuadroTestesDashboardNatura
};

var configsReqAssincGetCamposPersonalizadosQuadroTestesDashboardNatura =
{
	url: obterURLCamposPersonalizadosComBoardID( ID_BOARD_QUADRO_TESTES_DASHBOARD_NATURA ),
	type: TIPO_REQ_AJAX_GET,
	dataType: TIPO_DADO_AJAX_JSON,
	beforeSend: beforeSendGetCamposPersonalizadosQuadroTestesDashboardNatura
};

var configsReqAssincGetCardsQuadroTestesDashboardNatura =
{
	url: obterURLCardsComBoardID( ID_BOARD_QUADRO_TESTES_DASHBOARD_NATURA ),
	type: TIPO_REQ_AJAX_GET,
	dataType: TIPO_DADO_AJAX_JSON,
	beforeSend: beforeSendGetCardsQuadroTestesDashboardNatura
};

var configsReqAssincGetListasQuadroTestesDashboardNatura =
{
	url: obterURLListasComBoardID( ID_BOARD_QUADRO_TESTES_DASHBOARD_NATURA ),
	type: TIPO_REQ_AJAX_GET,
	dataType: TIPO_DADO_AJAX_JSON,
	beforeSend: beforeSendGetListasQuadroTestesDashboardNatura
};
