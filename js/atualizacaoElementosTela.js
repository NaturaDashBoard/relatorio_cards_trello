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
	buscarProjeto.val( OPCAO_FILTRO_TODOS );
	buscarTicketNumber.val( '' );
	buscarFuncional.val( '' );
	buscarModuloFuncional.val( '' );
	buscarHorasABAP.val( '' );
	buscarLimiteConstrucao.val( '' );
	buscarDataRelease.val( OPCAO_FILTRO_TODOS );
	buscarDataEF.val( '' );
	buscarABAP.val( '' );
	buscarInicioConstrucao.val( '' );
	buscarFimConstrucao.val( '' );
	buscarProjectCriado.val( OPCAO_FILTRO_TODOS );
	buscarProjectPlanejado.val( OPCAO_FILTRO_TODOS );
	
	atualizarCorpoTabelaRelatorio();
}

function atualizarFiltroProjeto()
{
	var valorSelecionado = buscarProjeto.val();
	
	buscarProjeto.html( obterProjetosParaFiltro( camposPersonalizadosCarregados ) );
	
	buscarProjeto.val( valorSelecionado );
}

function atualizarFiltroRelease()
{
	var valorSelecionado = buscarDataRelease.val();
	
	buscarDataRelease.html
	(
		obterReleasesParaFiltro
		(
			cardsCarregados,
			camposPersonalizadosCarregados
		)
	);
	
	buscarDataRelease.val( valorSelecionado );
}

function atualizarElementosTela()
{
	atualizarCorpoTabelaRelatorio();
	
	atualizarFiltroProjeto();
	
	atualizarFiltroRelease();
}
