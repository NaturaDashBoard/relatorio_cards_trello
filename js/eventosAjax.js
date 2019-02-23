/* GET CAMPOS PERSONALIZADOS */

function beforeSendGetCamposPersonalizados()
{
	console.log( 'Enviando Requisição AJAX para obter Campos Personalizados de Board' );
}

function doneGetCamposPersonalizados( data )
{
	camposPersonalizadosCarregados = data;
	
	console.group( "camposPersonalizadosCarregados" );
	console.log( camposPersonalizadosCarregados );
	console.groupEnd( "camposPersonalizadosCarregados" );

	carregarAssincCards( idBoardDadosCarregados );
}

function failGetCamposPersonalizados( jqXHR, textStatus, data )
{
	console.log( 'Ocorreu um Erro na Requisição AJAX para obter Campos Personalizados de Board' );
	
	console.group( "jqXHR" );
	console.log( jqXHR );
	console.groupEnd( "jqXHR" );
	
	console.group( "textStatus" );
	console.log( textStatus );
	console.groupEnd( "textStatus" );	
	
	console.group( "data" );
	console.log( data );
	console.groupEnd( "data" );		
}

/* GET CARDS */

function beforeSendGetCards()
{
	console.log( 'Enviando Requisição AJAX para obter Cards de Board' );	
}

function doneGetCards( data )
{
	cardsCarregados = data;
	
	console.group( "cardsCarregados" );
	console.log( cardsCarregados );
	console.groupEnd( "cardsCarregados" );
	
	carregarAssincListas( idBoardDadosCarregados );
}

function failGetCards( jqXHR, textStatus, data )
{
	console.log( 'Ocorreu um Erro na Requisição AJAX para obter Cards de Board' );
	
	console.group( "jqXHR" );
	console.log( jqXHR );
	console.groupEnd( "jqXHR" );
	
	console.group( "textStatus" );
	console.log( textStatus );
	console.groupEnd( "textStatus" );	
	
	console.group( "data" );
	console.log( data );
	console.groupEnd( "data" );	
}

/* GET LISTAS */

function beforeSendGetListas()
{
	console.log( 'Enviando Requisição AJAX para obter Listas de Board' );
}

function doneGetListas( data )
{
	listasCarregadas = data;
	
	console.group( "listasCarregadas" );
	console.log( listasCarregadas );
	console.groupEnd( "listasCarregadas" );
	
	atualizarElementosTela();

	carregarAssincCamposPersonalizados( idBoardDadosCarregados );
}

function failGetListas( jqXHR, textStatus, data )
{
	console.log( 'Ocorreu um Erro na Requisição AJAX para obter Listas de Board' );
	
	console.group( "jqXHR" );
	console.log( jqXHR );
	console.groupEnd( "jqXHR" );
	
	console.group( "textStatus" );
	console.log( textStatus );
	console.groupEnd( "textStatus" );	
	
	console.group( "data" );
	console.log( data );
	console.groupEnd( "data" );		
}
