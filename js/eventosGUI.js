function inicializarBotoes()
{
	botaoExportarTXT.click( exportarRelatorioTXT );
	botaoLimparFiltros.click( limparFiltrosBusca );
}

function inicializarTextAreas()
{
	buscarNumero[0].oninput = atualizarElementosTela;
	buscarTitulo[0].oninput = atualizarElementosTela;
	buscarTicketNumber[0].oninput = atualizarElementosTela;
	buscarHorasABAP[0].oninput = atualizarElementosTela;
	buscarLimiteConstrucao[0].oninput = atualizarElementosTela;
	buscarDataEF[0].oninput = atualizarElementosTela;
	buscarInicioConstrucao[0].oninput = atualizarElementosTela;
	buscarFimConstrucao[0].oninput = atualizarElementosTela;
}

function inicializarSelectOptions()
{
	buscarABAP.change( atualizarElementosTela );
	buscarDataRelease.change( atualizarElementosTela );
	buscarEtiqueta.change( atualizarElementosTela );
	buscarFuncional.change( atualizarElementosTela );
	buscarLista.change( atualizarElementosTela );
	buscarModuloFuncional.change( atualizarElementosTela );
	buscarProjectCriado.change( atualizarElementosTela );
	buscarProjectPlanejado.change( atualizarElementosTela );
	buscarProjeto.change( atualizarElementosTela );
}

function inicializarInputs()
{
	inicializarBotoes();
	
	inicializarTextAreas();
	
	inicializarSelectOptions();
}

function carregarAssincDadosTrello()
{
	carregarAssincCamposPersonalizados( idBoardDadosCarregados );
}

function documentReady()
{
	inicializarInputs();
	
	carregarAssincDadosTrello();
}

$( document ).ready( documentReady );
