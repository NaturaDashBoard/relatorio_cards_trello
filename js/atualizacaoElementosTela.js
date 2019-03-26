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
	buscarLista.val( OPCAO_FILTRO_TODOS );
	buscarTitulo.val( '' );
	buscarEtiqueta.val( OPCAO_FILTRO_TODOS );
	buscarProjeto.val( OPCAO_FILTRO_TODOS );
	buscarTicketNumber.val( '' );
	buscarFuncional.val( OPCAO_FILTRO_TODOS );
	buscarModuloFuncional.val( OPCAO_FILTRO_TODOS );
	buscarHorasABAP.val( '' );
	buscarLimiteConstrucao.val( '' );
	buscarDataRelease.val( OPCAO_FILTRO_TODOS );
	buscarDataEF.val( '' );
	buscarABAP.val( OPCAO_FILTRO_TODOS );
	buscarInicioConstrucao.val( '' );
	buscarFimConstrucao.val( '' );
	buscarProjectCriado.val( OPCAO_FILTRO_TODOS );
	buscarProjectPlanejado.val( OPCAO_FILTRO_TODOS );
	
	atualizarCorpoTabelaRelatorio();
}

/*
function atualizarFiltroLista()
{
	var valorSelecionado = buscarLista.val();
	
	buscarLista.html( obterOpcoesParaFiltro( NOME_CAMPO_PERSONALIZADO_PROJETO, camposPersonalizadosCarregados ) );
	
	buscarLista.val( valorSelecionado );
}

function atualizarFiltroEtiqueta()
{
	var valorSelecionado = buscarEtiqueta.val();
	
	buscarEtiqueta.html( obterOpcoesParaFiltro( NOME_CAMPO_PERSONALIZADO_PROJETO, camposPersonalizadosCarregados ) );
	
	buscarEtiqueta.val( valorSelecionado );
}
*/

function atualizarFiltroProjeto()
{
	var valorSelecionado = buscarProjeto.val();
	
	buscarProjeto.html( obterOpcoesParaFiltro( NOME_CAMPO_PERSONALIZADO_PROJETO, camposPersonalizadosCarregados ) );
	
	buscarProjeto.val( valorSelecionado );
}

function atualizarFiltroFuncional()
{
	var valorSelecionado = buscarFuncional.val();
	
	buscarFuncional.html( obterOpcoesParaFiltro( NOME_CAMPO_PERSONALIZADO_FUNCIONAL, camposPersonalizadosCarregados ) );
	
	buscarFuncional.val( valorSelecionado );
}

function atualizarFiltroModuloFuncional()
{
	var valorSelecionado = buscarModuloFuncional.val();
	
	buscarModuloFuncional.html( obterOpcoesParaFiltro( NOME_CAMPO_PERSONALIZADO_MODULO_FUNCIONAL, camposPersonalizadosCarregados ) );
	
	buscarModuloFuncional.val( valorSelecionado );
}

function atualizarFiltroDataRelease()
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

function atualizarFiltroABAP()
{
	var valorSelecionado = buscarABAP.val();
	
	buscarABAP.html( obterOpcoesParaFiltro( NOME_CAMPO_PERSONALIZADO_ABAP, camposPersonalizadosCarregados ) );
	
	buscarABAP.val( valorSelecionado );
}

function atualizarElementosTela()
{
	atualizarCorpoTabelaRelatorio();
	
	//atualizarFiltroLista();
	
	//atualizarFiltroEtiqueta();
	
	atualizarFiltroProjeto();
	
	atualizarFiltroFuncional();
	
	atualizarFiltroModuloFuncional();
	
	atualizarFiltroDataRelease();
	
	atualizarFiltroABAP();
}
