/* ENVIO DE DADOS DE FORMA ASSÍNCRONA */

// Dados Enviados para o Trello

function enviarAssincCampoPersonalizadoCard( idCard, idCampoPersonalizado, valorCampoPersonalizadoCard )
{
	fetch
	(
		obterURLAtualizarCampoPersonalizadoCard( idCard, idCampoPersonalizado ),
		obterConfigsReqAssincPutCampoPersonalizadoCard( valorCampoPersonalizadoCard )
	)
	.then
	(
		( resp ) => resp.json()
	)
	.catch
	(
		( err ) => console.log( JSON.stringify( err, null, 2 ) )
	);
}
