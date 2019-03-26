function inicializarBotoes()
{
	botaoExportarTXT.click( exportarRelatorioTXT );
	botaoLimparFiltros.click( limparFiltrosBusca );
}

function inicializarTextAreas()
{
	buscarNumero[0].oninput = atualizarElementosTela;
	buscarLista[0].oninput = atualizarElementosTela;
	buscarTitulo[0].oninput = atualizarElementosTela;
	buscarEtiqueta[0].oninput = atualizarElementosTela;
	buscarTicketNumber[0].oninput = atualizarElementosTela;
	buscarFuncional[0].oninput = atualizarElementosTela;
	buscarModuloFuncional[0].oninput = atualizarElementosTela;
	buscarHorasABAP[0].oninput = atualizarElementosTela;
	buscarLimiteConstrucao[0].oninput = atualizarElementosTela;
	buscarDataEF[0].oninput = atualizarElementosTela;
	buscarABAP[0].oninput = atualizarElementosTela;
	buscarInicioConstrucao[0].oninput = atualizarElementosTela;
	buscarFimConstrucao[0].oninput = atualizarElementosTela;
}

function inicializarSelectOptions()
{
	buscarProjeto.change( atualizarElementosTela );
	buscarDataRelease.change( atualizarElementosTela );
	buscarProjectCriado.change( atualizarElementosTela );
	buscarProjectPlanejado.change( atualizarElementosTela );
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
