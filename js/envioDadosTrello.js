/* ENVIO DE DADOS DE FORMA ASSÍNCRONA */

// Dados Enviados para o Trello

function enviarAssincCampoPersonalizadoCard( idCard, idCampoPersonalizado, valorCampoPersonalizadoCard )
{
	$.ajax( obterConfigsReqAssincPutCampoPersonalizadoCard( idCard, idCampoPersonalizado, valorCampoPersonalizadoCard ) )
		.done( donePutCampoPersonalizadoCard )
		.fail( failPutCampoPersonalizadoCard );	
}
