function obterURLCardsComBoardID( idBoard )
{
	return TEMPLATE_URL_CARDS.replace( '[BOARD_ID]', idBoard );
}

function obterURLCamposPersonalizadosComBoardID( idBoard )
{
	return TEMPLATE_URL_BOARD_CAMPOS_PERSONALIZADOS.replace( '[BOARD_ID]', idBoard );
}

function obterURLListasComBoardID( idBoard )
{
	return TEMPLATE_URL_LISTAS.replace( '[BOARD_ID]', idBoard );
}

function obterURLEtiquetasComBoardID( idBoard )
{
	return TEMPLATE_URL_ETIQUETAS.replace( '[BOARD_ID]', idBoard );
}

function obterURLAtualizarCampoPersonalizadoCard( idCard, idCampoPersonalizado )
{
	return TEMPLATE_URL_ATUALIZAR_CAMPO_PERSONALIZADO_CARD.replace( '[CARD_ID]', idCard ).replace( '[CUSTOM_FIELD_ID]', idCampoPersonalizado );
}

function obterIDCampoPersonalizado( nomeCampoPersonalizado, camposPersonalizados )
{
	var idCampoPersonalizado = undefined;
	
	for( indiceCampoPersonalizado = 0; indiceCampoPersonalizado < camposPersonalizados.length; ++indiceCampoPersonalizado )
	{
		var campoPersonalizado = camposPersonalizados[indiceCampoPersonalizado];
		
		if( campoPersonalizado['name'] == nomeCampoPersonalizado )
		{
			idCampoPersonalizado = campoPersonalizado['id'];
			
			break;
		}
	}
	
	return idCampoPersonalizado;
}

function obterValorCampoPersonalizadoCard( idCampoPersonalizado, itemsCamposPersonalizadosCard, camposPersonalizadosBoard )
{
	var valorCampoPersonalizado = undefined;
	
	for( indiceCampoPersonalizado = 0; indiceCampoPersonalizado < itemsCamposPersonalizadosCard.length; ++indiceCampoPersonalizado )
	{
		var campoPersonalizado = itemsCamposPersonalizadosCard[indiceCampoPersonalizado];
		
		if( campoPersonalizado['idCustomField'] == idCampoPersonalizado )
		{
			valorCampoPersonalizado = campoPersonalizado['value'];
			
			if( valorCampoPersonalizado == undefined )
			{
				var idValorCampoPersonalizado = campoPersonalizado['idValue'];
				
				var opcoesCampoPersonalizadoBoard = obterCampoPersonalizadoPeloID( idCampoPersonalizado, camposPersonalizadosBoard )['options'];
				
				for( indiceOpcaoCampoPersonalizadoBoard = 0; indiceOpcaoCampoPersonalizadoBoard < opcoesCampoPersonalizadoBoard.length; ++indiceOpcaoCampoPersonalizadoBoard )
				{
					var opcaoCampoPersonalizadoBoard = opcoesCampoPersonalizadoBoard[indiceOpcaoCampoPersonalizadoBoard];
					
					if( opcaoCampoPersonalizadoBoard['id'] == idValorCampoPersonalizado )
					{
						valorCampoPersonalizado = opcaoCampoPersonalizadoBoard['value'];
						
						break;
					}
				}
			}
			
			break;
		}
	}
	
	return valorCampoPersonalizado;
}

function obterCampoPersonalizadoPeloID( idCampoPersonalizado, camposPersonalizadosBoard )
{
	var campoPersonalizado = undefined;
	
	for( indiceCampoPersonalizado = 0; indiceCampoPersonalizado < camposPersonalizadosBoard.length; ++indiceCampoPersonalizado )
	{
		var campoPersonalizadoBoard = camposPersonalizadosBoard[indiceCampoPersonalizado];
		
		if( campoPersonalizadoBoard['id'] == idCampoPersonalizado )
		{
			campoPersonalizado = campoPersonalizadoBoard;
			
			break;
		}
	}
	
	return campoPersonalizado;
}

function obterStringNumeroZerosEsquerda( numero, quantidadeMaximaZeros )
{
	var stringNumero = numero.toString();
	
	var quantidadeMaximaDigitos = quantidadeMaximaZeros + 1;
	
	if( stringNumero.length == quantidadeMaximaDigitos )
	{
		return stringNumero;
	}
	
	var quantidadeZerosInseridos = 0;
	
	while( quantidadeZerosInseridos < quantidadeMaximaZeros )
	{
		stringNumero = '0' + stringNumero;
		
		++quantidadeZerosInseridos;
	}
	
	return stringNumero;
}

function obterStringData( dia, mes, ano, separador )
{
	var stringData = obterStringNumeroZerosEsquerda( dia, 1 ) + separador
					 + obterStringNumeroZerosEsquerda( mes, 1 ) + separador
					 + ano.toString();
	
	return stringData;
}

function obterStringDataObjetoDate( objetoDate, separador )
{
	var stringData = '';
	
	var dia = objetoDate.getDate();
	var mes = objetoDate.getMonth() + 1;
	var ano = objetoDate.getFullYear();
	
	stringData = obterStringData
	(
		dia,
		mes,
		ano,
		separador
	);
	
	return stringData;
}

function obterLabelCard( card )
{
	var label = undefined;
	
	var labelsCard = card['labels'];
	
	if
	(
		labelsCard != undefined
		&& labelsCard.length > 0
	)
	{
		label = labelsCard[0]['name'];
	}
	
	return label;
}

function obterNomeListaCard( card, listas )
{
	var nomeLista = undefined;
	
	for( indiceLista = 0; indiceLista < listas.length; ++indiceLista )
	{
		var lista = listas[indiceLista];
		
		if( lista['id'] == card.idList )
		{
			nomeLista = lista['name'];
			
			break;
		}
	}
	
	return nomeLista;
}

function stringToBoolean( booleanString )
{
	var result = undefined;
	
	if( booleanString == 'true' )
	{
		result = true;
	}
	else if( booleanString == 'false' )
	{
		result = false;
	}
	
	return result;
}

function obterObjetoCardRelatorio( card, listas, camposPersonalizadosBoard )
{
	var cardRelatorio = 
	{
		id: undefined,
		url: undefined,
		numero: undefined,
		titulo: undefined,
		lista: undefined,
		etiqueta: undefined,
		projeto: undefined,
		ticketNumber: undefined,
		funcional: undefined,
		moduloFuncional: undefined,
		horasABAP: undefined,
		limiteConstrucao: undefined,
		dataRelease: undefined,
		dataEF: undefined,
		ABAP: undefined,
		inicioConstrucao: undefined,
		fimConstrucao: undefined,
		projectCriado: undefined,
		projectPlanejado: undefined
	};
	
	// ID (Não exibido no Relatório)
	cardRelatorio.id = card['id'];
	
	// URL (Não exibido no Relatório)
	cardRelatorio.url = card['url'];
	
	// Número
	cardRelatorio.numero = card['idShort'];

	// Título
	cardRelatorio.titulo = card['name'];
	
	// Lista
	cardRelatorio.lista = obterNomeListaCard( card, listas );
	
	// Etiqueta
	cardRelatorio.etiqueta = obterLabelCard( card );
	
	var itensCamposPersonalizadosCard = card['customFieldItems'];
	
	// Projeto
	var idCampoPersonalizadoProjeto = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_PROJETO, camposPersonalizadosBoard );
	var valorCampoPersonalizadoProjeto = obterValorCampoPersonalizadoCard( idCampoPersonalizadoProjeto, itensCamposPersonalizadosCard, camposPersonalizadosBoard );
	if( valorCampoPersonalizadoProjeto != undefined )
	{
		cardRelatorio.projeto = valorCampoPersonalizadoProjeto['text'];
	}
	
	// Ticket Number
	var idCampoPersonalizadoTicketNumber = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_TICKET_NUMBER, camposPersonalizadosBoard );
	var valorCampoPersonalizadoTicketNumber = obterValorCampoPersonalizadoCard( idCampoPersonalizadoTicketNumber, itensCamposPersonalizadosCard, camposPersonalizadosBoard );
	if( valorCampoPersonalizadoTicketNumber != undefined )
	{
		cardRelatorio.ticketNumber = valorCampoPersonalizadoTicketNumber['text'];
	}
	
	// Funcional
	var idCampoPersonalizadoFuncional = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_FUNCIONAL, camposPersonalizadosBoard );
	var valorCampoPersonalizadoFuncional = obterValorCampoPersonalizadoCard( idCampoPersonalizadoFuncional, itensCamposPersonalizadosCard, camposPersonalizadosBoard );
	if( valorCampoPersonalizadoFuncional != undefined )
	{
		cardRelatorio.funcional = valorCampoPersonalizadoFuncional['text'];
	}
	
	// Módulo Funcional
	var idCampoPersonalizadoModuloFuncional = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_MODULO_FUNCIONAL, camposPersonalizadosBoard );
	var valorCampoPersonalizadoModuloFuncional = obterValorCampoPersonalizadoCard( idCampoPersonalizadoModuloFuncional, itensCamposPersonalizadosCard, camposPersonalizadosBoard );
	if( valorCampoPersonalizadoModuloFuncional != undefined )
	{
		cardRelatorio.moduloFuncional = valorCampoPersonalizadoModuloFuncional['text'];
	}
	
	// Horas ABAP
	var idCampoPersonalizadoHorasABAP = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_HORAS_ABAP, camposPersonalizadosBoard );
	var valorCampoPersonalizadoHorasABAP = obterValorCampoPersonalizadoCard( idCampoPersonalizadoHorasABAP, itensCamposPersonalizadosCard, camposPersonalizadosBoard );
	if( valorCampoPersonalizadoHorasABAP != undefined )
	{
		cardRelatorio.horasABAP = valorCampoPersonalizadoHorasABAP['number'];
	}

	// Limite Construção
	var idCampoPersonalizadoLimiteConstrucao = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_LIMITE_CONSTRUCAO, camposPersonalizadosBoard );
	var valorCampoPersonalizadoLimiteConstrucao = obterValorCampoPersonalizadoCard( idCampoPersonalizadoLimiteConstrucao, itensCamposPersonalizadosCard, camposPersonalizadosBoard );			
	if( valorCampoPersonalizadoLimiteConstrucao != undefined )
	{
		var dataLimiteConstrucao = new Date( valorCampoPersonalizadoLimiteConstrucao['date'] );
		
		cardRelatorio.limiteConstrucao = obterStringDataObjetoDate( dataLimiteConstrucao, '/' );
	}
	
	// Data Release
	var idCampoPersonalizadoDataRelease = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_DATA_RELEASE, camposPersonalizadosBoard );
	var valorCampoPersonalizadoDataRelease = obterValorCampoPersonalizadoCard( idCampoPersonalizadoDataRelease, itensCamposPersonalizadosCard, camposPersonalizadosBoard );			
	if( valorCampoPersonalizadoDataRelease != undefined )
	{
		var dataRelease = new Date( valorCampoPersonalizadoDataRelease['date'] );
		
		cardRelatorio.dataRelease = obterStringDataObjetoDate( dataRelease, '/' );
	}
	
	// Data EF
	var idCampoPersonalizadoDataEF = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_DATA_EF, camposPersonalizadosBoard );
	var valorCampoPersonalizadoDataEF = obterValorCampoPersonalizadoCard( idCampoPersonalizadoDataEF, itensCamposPersonalizadosCard, camposPersonalizadosBoard );			
	if( valorCampoPersonalizadoDataEF != undefined )
	{
		var dataEF = new Date( valorCampoPersonalizadoDataEF['date'] );
		
		cardRelatorio.dataEF = obterStringDataObjetoDate( dataEF, '/' );
	}
	
	// ABAP
	var idCampoPersonalizadoABAP = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_ABAP, camposPersonalizadosBoard );
	var valorCampoPersonalizadoABAP = obterValorCampoPersonalizadoCard( idCampoPersonalizadoABAP, itensCamposPersonalizadosCard, camposPersonalizadosBoard );
	if( valorCampoPersonalizadoABAP != undefined )
	{
		cardRelatorio.ABAP = valorCampoPersonalizadoABAP['text'];
	}	
	
	// Início Construção
	var idCampoPersonalizadoInicioConstrucao = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_INICIO_CONSTRUCAO, camposPersonalizadosBoard );
	var valorCampoPersonalizadoInicioConstrucao = obterValorCampoPersonalizadoCard( idCampoPersonalizadoInicioConstrucao, itensCamposPersonalizadosCard, camposPersonalizadosBoard );			
	if( valorCampoPersonalizadoInicioConstrucao != undefined )
	{
		var dataInicioConstrucao = new Date( valorCampoPersonalizadoInicioConstrucao['date'] );
		
		cardRelatorio.inicioConstrucao = obterStringDataObjetoDate( dataInicioConstrucao, '/' );
	}
	
	// Fim Construção
	var idCampoPersonalizadoFimConstrucao = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_FIM_CONSTRUCAO, camposPersonalizadosBoard );
	var valorCampoPersonalizadoFimConstrucao = obterValorCampoPersonalizadoCard( idCampoPersonalizadoFimConstrucao, itensCamposPersonalizadosCard, camposPersonalizadosBoard );			
	if( valorCampoPersonalizadoFimConstrucao != undefined )
	{
		var dataFimConstrucao = new Date( valorCampoPersonalizadoFimConstrucao['date'] );
		
		cardRelatorio.fimConstrucao = obterStringDataObjetoDate( dataFimConstrucao, '/' );
	}
	
	// Project - Criado
	var idCampoPersonalizadoProjectCriado = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_PROJECT_CRIADO, camposPersonalizadosBoard );
	var valorCampoPersonalizadoProjectCriado = obterValorCampoPersonalizadoCard( idCampoPersonalizadoProjectCriado, itensCamposPersonalizadosCard, camposPersonalizadosBoard );			
	if( valorCampoPersonalizadoProjectCriado != undefined )
	{
		cardRelatorio.projectCriado = stringToBoolean( valorCampoPersonalizadoProjectCriado['checked'] );
	}
	
	// Project - Planejado
	var idCampoPersonalizadoProjectPlanejado = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_PROJECT_PLANEJADO, camposPersonalizadosBoard );
	var valorCampoPersonalizadoProjectPlanejado = obterValorCampoPersonalizadoCard( idCampoPersonalizadoProjectPlanejado, itensCamposPersonalizadosCard, camposPersonalizadosBoard );			
	if( valorCampoPersonalizadoProjectPlanejado != undefined )
	{
		cardRelatorio.projectPlanejado = stringToBoolean( valorCampoPersonalizadoProjectPlanejado['checked'] );
	}
	
	return cardRelatorio;
}

function obterObjetosCardsRelatorio( cards, listas, camposPersonalizadosBoard )
{
	var cardsRelatorio = [];
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard];
		
		var nomeCard = card['name'];
		
		if
		(
			nomeCard != NOME_CARD_TICKET_EXEMPLO
			&& nomeCard != NOME_CARD_SIR_EXEMPLO
		)
		{
			var cardRelatorio = obterObjetoCardRelatorio( card, listas, camposPersonalizadosBoard );
		
			cardsRelatorio.push( cardRelatorio );
		}
	}
	
	return cardsRelatorio;
}

function obterTextoCampoTabelaRelatorio( campo )
{
	var textoCampo = '';
	
	if( campo == undefined )
	{
		textoCampo = 'N/D';
	}
	else
	{
		textoCampo = campo.toString();
	}
	
	return textoCampo;
}

function obterCardsRelatorioBuscadosComFiltro( cardsRelatorio, campoFiltro, valorFiltro )
{
	var cardsRelatorioComFiltro = [];
	
	if
	( 
		valorFiltro != undefined
		&& valorFiltro != ''
	)
	{
		var valorFiltroString = valorFiltro.toString(); 
		
		for( indiceCardRelatorio = 0; indiceCardRelatorio < cardsRelatorio.length; ++indiceCardRelatorio )
		{
			var cardRelatorio = cardsRelatorio[indiceCardRelatorio];
			
			var valorCampoFiltradoCard = cardRelatorio[campoFiltro];
			
			if( valorCampoFiltradoCard != undefined )
			{
				var valorCampoFiltradoCardString = valorCampoFiltradoCard.toString();
				
				if( valorCampoFiltradoCardString.toUpperCase().includes( valorFiltroString.toUpperCase().trim() ) )
				{
					cardsRelatorioComFiltro.push( cardRelatorio );
				}
			}
		}		
	}
	else
	{
		cardsRelatorioComFiltro = cardsRelatorio;
	}
	
	return cardsRelatorioComFiltro;
}

function obterCardsRelatorioBuscadosComFiltroBooleano( cardsRelatorio, campoFiltro, valorFiltro )
{
	var cardsRelatorioComFiltro = [];
	
	if( valorFiltro == OPCAO_FILTRO_BOOLEANO_MARCADO )
	{
		for( indiceCardRelatorio = 0; indiceCardRelatorio < cardsRelatorio.length; ++indiceCardRelatorio )
		{
			var cardRelatorio = cardsRelatorio[indiceCardRelatorio];
			
			var valorCampoFiltradoCard = cardRelatorio[campoFiltro];
			
			if
			(
				valorCampoFiltradoCard != undefined
				&& valorCampoFiltradoCard
			)
			{
				cardsRelatorioComFiltro.push( cardRelatorio );
			}
		}
	}
	else if( valorFiltro == OPCAO_FILTRO_BOOLEANO_DESMARCADO )
	{
		for( indiceCardRelatorio = 0; indiceCardRelatorio < cardsRelatorio.length; ++indiceCardRelatorio )
		{
			var cardRelatorio = cardsRelatorio[indiceCardRelatorio];
			
			var valorCampoFiltradoCard = cardRelatorio[campoFiltro];
			
			if
			(
				valorCampoFiltradoCard == undefined
				|| !valorCampoFiltradoCard
			)
			{
				cardsRelatorioComFiltro.push( cardRelatorio );
			}
		}		
	}
	else
	{
		cardsRelatorioComFiltro = cardsRelatorio;
	}
	
	return cardsRelatorioComFiltro;
}

function obterCardsRelatorioBuscadosComFiltroOption( cardsRelatorio, campoFiltro, valorFiltro )
{
	var cardsRelatorioComFiltro = [];
	
	if( valorFiltro != OPCAO_FILTRO_TODOS )
	{
		var valorFiltroString = valorFiltro.toString(); 
		
		for( indiceCardRelatorio = 0; indiceCardRelatorio < cardsRelatorio.length; ++indiceCardRelatorio )
		{
			var cardRelatorio = cardsRelatorio[indiceCardRelatorio];
			
			var valorCampoFiltradoCard = cardRelatorio[campoFiltro];
			
			if( valorCampoFiltradoCard == undefined )
			{
				if( valorFiltro == OPCAO_FILTRO_NAO_DEFINIDO )
				{
					cardsRelatorioComFiltro.push( cardRelatorio );
				}
			}
			else if( valorFiltro != OPCAO_FILTRO_NAO_DEFINIDO )
			{
				var valorCampoFiltradoCardString = valorCampoFiltradoCard.toString();
				
				if( valorCampoFiltradoCardString.toUpperCase() == valorFiltroString.toUpperCase() )
				{
					cardsRelatorioComFiltro.push( cardRelatorio );
				}
			}
		}		
	}
	else
	{
		cardsRelatorioComFiltro = cardsRelatorio;
	}
	
	return cardsRelatorioComFiltro;
}

function obterCardsRelatorioBuscadosComFiltros( cardsRelatorio )
{
	var cardsRelatorioComFiltros = cardsRelatorio;
	
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_NUMERO, buscarNumero.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltroOption( cardsRelatorioComFiltros, CAMPO_FILTRO_LISTA, buscarLista.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_TITULO, buscarTitulo.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltroOption( cardsRelatorioComFiltros, CAMPO_FILTRO_ETIQUETA, buscarEtiqueta.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltroOption( cardsRelatorioComFiltros, CAMPO_FILTRO_PROJETO, buscarProjeto.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_TICKET_NUMBER, buscarTicketNumber.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltroOption( cardsRelatorioComFiltros, CAMPO_FILTRO_FUNCIONAL, buscarFuncional.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltroOption( cardsRelatorioComFiltros, CAMPO_FILTRO_MODULO_FUNCIONAL, buscarModuloFuncional.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_HORAS_ABAP, buscarHorasABAP.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_LIMITE_CONSTRUCAO, buscarLimiteConstrucao.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltroOption( cardsRelatorioComFiltros, CAMPO_FILTRO_DATA_RELEASE, buscarDataRelease.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_DATA_EF, buscarDataEF.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltroOption( cardsRelatorioComFiltros, CAMPO_FILTRO_ABAP, buscarABAP.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_INICIO_CONSTRUCAO, buscarInicioConstrucao.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_FIM_CONSTRUCAO, buscarFimConstrucao.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltroBooleano( cardsRelatorioComFiltros, CAMPO_FILTRO_PROJECT_CRIADO, buscarProjectCriado.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltroBooleano( cardsRelatorioComFiltros, CAMPO_FILTRO_PROJECT_PLANEJADO, buscarProjectPlanejado.val() );
	
	return cardsRelatorioComFiltros;
}

function obterTextoCampoTitulo( titulo )
{
	var textoTitulo = '';
	
	textoTitulo = obterTextoCampoTabelaRelatorio( titulo );
	
	if( textoTitulo.length > TAMANHO_MAXIMO_TEXTO_TITULO )
	{
		textoTitulo = textoTitulo.substr( 0, TAMANHO_MAXIMO_TEXTO_TITULO ).trim() + '...';
	}
	
	return textoTitulo;
}

function enviarAtualizacaoCampoPersonalizadoCardBooleano( idCard, idCampoPersonalizado )
{
	var checkboxModificado = $( '#' + idCard + '_' + idCampoPersonalizado );
	
	var marcacaoCheckboxModificado = checkboxModificado.prop( 'checked' );
	
	var valorCampoPersonalizadoCard =
	{
		value: { checked: marcacaoCheckboxModificado.toString() }
	};
	
	enviarAssincCampoPersonalizadoCard( idCard, idCampoPersonalizado, valorCampoPersonalizadoCard );
}

function obterCheckboxCampoTabelaRelatorio( campo, idCard, idCampoPersonalizado )
{
	var checkboxCampo = '';
	
	var cbox = $( '#' + idCard + '_' + idCampoPersonalizado );
	
	if
	(
		cbox != undefined
		&& cbox.length > 0
	)
	{
		var cboxMarcado = cbox.prop( 'checked' );
		
		if( campo != cboxMarcado )
		{
			campo = cboxMarcado;
		}
	}
	
	if
	(
		campo == undefined
		|| !campo
	)
	{
		checkboxCampo = '<input id="' + idCard + '_' + idCampoPersonalizado + '" type="checkbox" oninput="' + "enviarAtualizacaoCampoPersonalizadoCardBooleano( '" + idCard + "', '" + idCampoPersonalizado + "'" + ' )" />';
	}
	else
	{
		checkboxCampo = '<input id="' + idCard + '_' + idCampoPersonalizado + '" type="checkbox" oninput="' + "enviarAtualizacaoCampoPersonalizadoCardBooleano( '" + idCard + "', '" + idCampoPersonalizado + "'" + ' )" checked />';
	}
	
	return checkboxCampo;
}

function obterTextoCampoTabelaRelatorioComLink( campo, urlLink )
{
	var textoCampoComLink = '';
	
	var textoCampo = obterTextoCampoTabelaRelatorio( campo );
	
	textoCampoComLink = '<a href="' + urlLink + '">' + textoCampo + '</a>';
	
	return textoCampoComLink;	
}

function obterTextoCorpoTabelaRelatorio( cards, listas, camposPersonalizadosBoard )
{
	var textoCorpoTabelaRelatorio = '';
	
	var cardsRelatorio = obterObjetosCardsRelatorio( cards, listas, camposPersonalizadosBoard );
	
	var idCampoPersonalizadoProjectCriado = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_PROJECT_CRIADO, camposPersonalizadosBoard );
	var idCampoPersonalizadoProjectPlanejado = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_PROJECT_PLANEJADO, camposPersonalizadosBoard );
	
	cardsRelatorio = obterCardsRelatorioBuscadosComFiltros( cardsRelatorio );
	
	for( indiceCardRelatorio = 0; indiceCardRelatorio < cardsRelatorio.length; ++indiceCardRelatorio )
	{
		var cardRelatorio = cardsRelatorio[indiceCardRelatorio];
		
		textoCorpoTabelaRelatorio += '<tr>' +
									 '<td>' + obterTextoCampoTabelaRelatorioComLink( cardRelatorio.numero, cardRelatorio.url ) + '</td>' +
									 '<td>' + obterTextoCampoTabelaRelatorio( cardRelatorio.lista ) + '</td>' +
									 '<td class="td-titulo-card">' + obterTextoCampoTitulo( cardRelatorio.titulo ) + '</td>' +
									 '<td>' + obterTextoCampoTabelaRelatorio( cardRelatorio.etiqueta ) + '</td>' +
									 '<td>' + obterTextoCampoTabelaRelatorio( cardRelatorio.projeto ) + '</td>' +
									 '<td>' + obterTextoCampoTabelaRelatorio( cardRelatorio.ticketNumber ) + '</td>' +
									 '<td>' + obterTextoCampoTabelaRelatorio( cardRelatorio.funcional ) + '</td>' +
									 '<td>' + obterTextoCampoTabelaRelatorio( cardRelatorio.moduloFuncional ) + '</td>' +
									 '<td>' + obterTextoCampoTabelaRelatorio( cardRelatorio.horasABAP ) + '</td>' +
									 '<td>' + obterTextoCampoTabelaRelatorio( cardRelatorio.limiteConstrucao ) + '</td>' +
									 '<td>' + obterTextoCampoTabelaRelatorio( cardRelatorio.dataRelease ) + '</td>' +
									 '<td>' + obterTextoCampoTabelaRelatorio( cardRelatorio.dataEF ) + '</td>' +
									 '<td>' + obterTextoCampoTabelaRelatorio( cardRelatorio.ABAP ) + '</td>' +
									 '<td>' + obterTextoCampoTabelaRelatorio( cardRelatorio.inicioConstrucao ) + '</td>' +
									 '<td>' + obterTextoCampoTabelaRelatorio( cardRelatorio.fimConstrucao ) + '</td>' +
									 '<td>' + obterCheckboxCampoTabelaRelatorio( cardRelatorio.projectCriado, cardRelatorio.id, idCampoPersonalizadoProjectCriado ) + '</td>' +
									 '<td>' + obterCheckboxCampoTabelaRelatorio( cardRelatorio.projectPlanejado, cardRelatorio.id, idCampoPersonalizadoProjectPlanejado ) + '</td>' +
									 '</tr>';
	}
	
	return textoCorpoTabelaRelatorio;
}

function obterNomeArquivoTXT()
{
	var nomeArquivoTXT = '';
	
	var dataHora = new Date();
	
	nomeArquivoTXT = TEMPLATE_NOME_ARQUIVO_TXT.replace( '[ano]',  dataHora.getFullYear() )
											  .replace( '[mes]',  obterStringNumeroZerosEsquerda( dataHora.getMonth() + 1, 1 ) )
											  .replace( '[dia]',  obterStringNumeroZerosEsquerda( dataHora.getDate(), 1 ) )
											  .replace( '[hora]', obterStringNumeroZerosEsquerda( dataHora.getHours(), 1 ) )
											  .replace( '[min]',  obterStringNumeroZerosEsquerda( dataHora.getMinutes(), 1 ) )
											  .replace( '[seg]',  obterStringNumeroZerosEsquerda( dataHora.getSeconds(), 1 ) );
	
	return nomeArquivoTXT;
}

function downloadArquivo( dados, nomeArquivo, tipoMIME )
{
    var arquivo = new Blob( [dados], { type: tipoMIME } );
	
    if( window.navigator.msSaveOrOpenBlob ) // IE10+
	{
        window.navigator.msSaveOrOpenBlob( arquivo, nomeArquivo );
	}
    else // Outros navegadores
	{ 
        var a = document.createElement( 'a' );
        
		var url = URL.createObjectURL( arquivo );
				
        a.href = url;
		
        a.download = nomeArquivo;
		
        document.body.appendChild( a );
		
        a.click();
		
        setTimeout
		(
			function()
			{
				document.body.removeChild( a );
				window.URL.revokeObjectURL( url );  
			},
			0
		);
    }
}

function obterMarcacaoCampoTabelaRelatorio( campo )
{
	var textoCampo = '';
	
	if( campo )
	{
		textoCampo = 'X';
	}
	
	return textoCampo;
}

function obterConteudoRelatorioTXT( cardsRelatorio )
{
	var conteudoRelatorioTXT = 'Número;Lista;Título;Etiqueta;Projeto;Ticket Number;Funcional;Módulo Funcional;Horas ABAP;Limite Construção;Data Release;Data EF;ABAP;Início Construção;Fim Construção;Project - Criado;Project - Planejado;\n';
	
	for( indiceCardRelatorio = 0; indiceCardRelatorio < cardsRelatorio.length; ++indiceCardRelatorio )
	{
		cardRelatorio = cardsRelatorio[indiceCardRelatorio];
		
		conteudoRelatorioTXT += obterTextoCampoTabelaRelatorio( cardRelatorio.numero )		   	 	+ ';' +
							    obterTextoCampoTabelaRelatorio( cardRelatorio.lista )		   	 	+ ';' +
								obterTextoCampoTabelaRelatorio( cardRelatorio.titulo ) 		   	 	+ ';' +
							    obterTextoCampoTabelaRelatorio( cardRelatorio.etiqueta ) 		 	+ ';' +
								obterTextoCampoTabelaRelatorio( cardRelatorio.projeto ) 		 	+ ';' +
							    obterTextoCampoTabelaRelatorio( cardRelatorio.ticketNumber ) 	 	+ ';' +
								obterTextoCampoTabelaRelatorio( cardRelatorio.funcional ) 	   	 	+ ';' +
							    obterTextoCampoTabelaRelatorio( cardRelatorio.moduloFuncional )  	+ ';' +
								obterTextoCampoTabelaRelatorio( cardRelatorio.horasABAP ) 	   	 	+ ';' +
							    obterTextoCampoTabelaRelatorio( cardRelatorio.limiteConstrucao ) 	+ ';' +
								obterTextoCampoTabelaRelatorio( cardRelatorio.dataRelease ) 	 	+ ';' +
							    obterTextoCampoTabelaRelatorio( cardRelatorio.dataEF ) 		   	 	+ ';' +
								obterTextoCampoTabelaRelatorio( cardRelatorio.ABAP ) 			 	+ ';' +
							    obterTextoCampoTabelaRelatorio( cardRelatorio.inicioConstrucao ) 	+ ';' +
								obterTextoCampoTabelaRelatorio( cardRelatorio.fimConstrucao )    	+ ';' + 
							    obterMarcacaoCampoTabelaRelatorio( cardRelatorio.projectCriado ) 	+ ';' +
								obterMarcacaoCampoTabelaRelatorio( cardRelatorio.projectPlanejado ) + ';\n';
	}
	
	return conteudoRelatorioTXT;
}

function exportarRelatorioTXT()
{
	var nomeArquivoTXT = obterNomeArquivoTXT();
	
	var cardsRelatorio = obterObjetosCardsRelatorio( cardsCarregados, listasCarregadas, camposPersonalizadosCarregados );
	
	cardsRelatorio = obterCardsRelatorioBuscadosComFiltros( cardsRelatorio );	
	
	var conteudoRelatorioTXT = obterConteudoRelatorioTXT( cardsRelatorio );
	
	downloadArquivo( conteudoRelatorioTXT, nomeArquivoTXT, MIME_TYPE_TEXT_PLAIN );
}

function obterValoresOpcoesCampoPersonalizado( nomeCampoPersonalizado, camposPersonalizadosBoard )
{
	var valoresOpcoesCampoPersonalizado = [];
	
	var idCampoPersonalizado = obterIDCampoPersonalizado( nomeCampoPersonalizado, camposPersonalizadosBoard );
	
	var campoPersonalizado = obterCampoPersonalizadoPeloID( idCampoPersonalizado, camposPersonalizadosBoard );
	
	var opcoesCampoPersonalizado = campoPersonalizado['options'];
	
	for( indiceOpcaoCampoPersonalizado = 0; indiceOpcaoCampoPersonalizado < opcoesCampoPersonalizado.length; ++indiceOpcaoCampoPersonalizado )
	{
		var opcaoCampoPersonalizado = opcoesCampoPersonalizado[indiceOpcaoCampoPersonalizado];
		
		valoresOpcoesCampoPersonalizado.push( opcaoCampoPersonalizado['value']['text'] );
	}
	
	return valoresOpcoesCampoPersonalizado;
}

function obterOpcoesParaFiltro( nomeCampoPersonalizado, camposPersonalizadosBoard )
{
	var opcoes = '<option value="' + OPCAO_FILTRO_TODOS + '">Todos</option><option value="' + OPCAO_FILTRO_NAO_DEFINIDO + '">N/D</option>';
	
	var valoresOpcoes = obterValoresOpcoesCampoPersonalizado( nomeCampoPersonalizado, camposPersonalizadosBoard );
	
	for( indiceValorOpcaoProjeto = 0; indiceValorOpcaoProjeto < valoresOpcoes.length; ++indiceValorOpcaoProjeto )
	{
		var valorOpcao = valoresOpcoes[indiceValorOpcaoProjeto];
		
		opcoes += '<option value="' + valorOpcao + '">' + valorOpcao + '</option>';
	}
	
	return opcoes;
}

function obterDataSemTempo( dataComTempo )
{
	var dataSemTempo = undefined;
	
	dataSemTempo = new Date
	(
		dataComTempo.getFullYear(),
		dataComTempo.getMonth(),
		dataComTempo.getDate()
	);
	
	return dataSemTempo;
}

function collectDatas( datas )
{
	var datasColetadas = [];
	
	for( indiceData = 0; indiceData < datas.length; ++indiceData )
	{
		var data = datas[indiceData];
		
		var dataJaAdicionada = false;
		
		for( indiceDataColetada = 0; indiceDataColetada < datasColetadas.length; ++indiceDataColetada )
		{
			var dataColetada = datasColetadas[indiceDataColetada];
			
			if( dataColetada.getTime() == data.getTime() )
			{
				dataJaAdicionada = true;
				
				break;
			}
		}
		
		if( !dataJaAdicionada )
		{
			datasColetadas.push( data );
		}
	}
	
	return datasColetadas;
}

function funcaoComparacaoObjetosDate( objetoDateA, objetoDateB )
{
	return ( objetoDateA.getTime() > objetoDateB.getTime() ) -
		   ( objetoDateA.getTime() < objetoDateB.getTime() );
}

function obterDatasRelease( cards, camposPersonalizadosBoard )
{
	var datasRelease = [];
	
	var idCampoPersonalizadoDataRelease = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_DATA_RELEASE, camposPersonalizadosBoard );
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard];
		
		var itensCamposPersonalizadosCard = card['customFieldItems'];
				
		var valorCampoPersonalizadoDataRelease = obterValorCampoPersonalizadoCard( idCampoPersonalizadoDataRelease, itensCamposPersonalizadosCard, camposPersonalizadosBoard );
		
		if( valorCampoPersonalizadoDataRelease != undefined )
		{
			var dataRelease = new Date( valorCampoPersonalizadoDataRelease['date'] );
			
			datasRelease.push( obterDataSemTempo( dataRelease ) );
		}
	}
	
	datasRelease = collectDatas( datasRelease );
	
	datasRelease.sort( funcaoComparacaoObjetosDate );
	
	return datasRelease;
}

function obterReleasesParaFiltro( cards, camposPersonalizadosBoard )
{
	var opcoesReleases = '<option value="' + OPCAO_FILTRO_TODOS + '">Todas</option><option value="' + OPCAO_FILTRO_NAO_DEFINIDO + '">N/D</option>';
	
	var datasRelease = obterDatasRelease( cards, camposPersonalizadosBoard );
	
	for( indiceDataRelease = 0; indiceDataRelease < datasRelease.length; ++indiceDataRelease )
	{
		var dataRelease = datasRelease[indiceDataRelease];
		
		var stringDataRelease = obterStringDataObjetoDate( dataRelease, '/' );
		
		opcoesReleases += '<option value="' + stringDataRelease + '">' + stringDataRelease + '</option>';
	}
	
	return opcoesReleases;
}

function obterOpcoesParaFiltroLista( listas )
{
	var opcoesListas = '<option value="' + OPCAO_FILTRO_TODOS + '">Todas</option>';
	
	for( indiceLista = 0; indiceLista < listas.length; ++indiceLista )
	{
		var lista = listas[indiceLista];
		
		opcoesListas += '<option value="' + lista.name + '">' + lista.name + '</option>';
	}
	
	return opcoesListas;	
}

function obterOpcoesParaFiltroEtiqueta( etiquetasCarregadas )
{
	var opcoesEtiquetas = '<option value="' + OPCAO_FILTRO_TODOS + '">Todas</option><option value="' + OPCAO_FILTRO_NAO_DEFINIDO + '">N/D</option>';
	
	for( indiceLista = 0; indiceLista < etiquetasCarregadas.length; ++indiceLista )
	{
		var etiqueta = etiquetasCarregadas[indiceLista];
		
		opcoesEtiquetas += '<option value="' + etiqueta.name + '">' + etiqueta.name + '</option>';
	}
	
	return opcoesEtiquetas;
}
