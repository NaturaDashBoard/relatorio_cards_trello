/* CARREGAMENTOS DE DADOS DE FORMA ASSÍNCRONA */

// Dados Carregados do Trello

function carregarAssincCamposPersonalizados( idBoard )
{
	$.ajax( obterConfigsReqAssincGetCamposPersonalizados( idBoard ) )
		.done( doneGetCamposPersonalizados )
		.fail( failGetCamposPersonalizados );	
}

function carregarAssincCards( idBoard )
{
	$.ajax( obterConfigsReqAssincGetCards( idBoard ) )
		.done( doneGetCards )
		.fail( failGetCards );
}

function carregarAssincListas( idBoard )
{
	$.ajax( obterConfigsReqAssincGetListas( idBoard ) )
		.done( doneGetListas )
		.fail( failGetListas );
}
