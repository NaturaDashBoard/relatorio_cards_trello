/* ATUALIZAÇÃO DE ELEMENTOS DE TELA */

function atualizarCorpoTabelaRelatorio()
{
	corpoTabelaRelatorio.html
	(
		obterTextoCorpoTabelaRelatorio( cardsCarregados, listasCarregadas, camposPersonalizadosCarregados )
	);
}

function limparFiltrosBusca()
{
	buscarNumero.val( '' );
	buscarLista.val( '' );
	buscarTitulo.val( '' );
	buscarEtiqueta.val( '' );
	buscarProjeto.val( '' );
	buscarTicketNumber.val( '' );
	buscarFuncional.val( '' );
	buscarModuloFuncional.val( '' );
	buscarHorasABAP.val( '' );
	buscarLimiteConstrucao.val( '' );
	buscarDataRelease.val( '' );
	buscarDataEF.val( '' );
	buscarABAP.val( '' );
	buscarInicioConstrucao.val( '' );
	buscarFimConstrucao.val( '' );
	
	atualizarCorpoTabelaRelatorio();
}

function atualizarElementosTela()
{
	atualizarCorpoTabelaRelatorio();
}
