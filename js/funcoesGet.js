function obterURLBoardActions( idBoard )
{
	return TEMPLATE_URL_BOARD_ACTIONS.replace( '[BOARD_ID]', idBoard );
}

function obterURLCardsComBoardID( idBoard )
{
	return TEMPLATE_URL_CARDS.replace( '[BOARD_ID]', idBoard );
}

function obterURLCamposPersonalizadosComBoardID( idBoard )
{
	return TEMPLATE_URL_BOARD_CAMPOS_PERSONALIZADOS.replace( '[BOARD_ID]', idBoard );
}

function obterURLCardActions( idCard )
{
	return TEMPLATE_URL_CARD_ACTIONS.replace( '[CARD_ID]', idCard );
}

function obterURLListasComBoardID( idBoard )
{
	return TEMPLATE_URL_LISTAS.replace( '[BOARD_ID]', idBoard );
}

function obterURLCamposPersonalizadosCard( idCard )
{
	return TEMPLATE_URL_CAMPOS_PERSONALIZADOS_CARD.replace( '[CARD_ID]', idCard );
}

function obterURLAnexosCard( idCard )
{
	return TEMPLATE_URL_ANEXOS_CARD.replace( '[CARD_ID]', idCard );
}

function obterQuantidadeSIRsErro( cards )
{
	var quantidadeSIRsErro = 0;
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		if( cards[indiceCard]['name'] != NOME_CARD_SIR_EXEMPLO )
		{
			var labels = cards[indiceCard]['labels'];
			
			for( indiceLabel = 0; indiceLabel < labels.length; ++indiceLabel )
			{
				if( labels[indiceLabel]['name'] == NOME_LABEL_SIR_ERRO )
				{
					++quantidadeSIRsErro;
				}
			}
		}
	}
	
	return quantidadeSIRsErro;
}

function obterQuantidadeSIRsFM( cards )
{
	var quantidadeSIRsFM = 0;
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		if( cards[indiceCard]['name'] != NOME_CARD_SIR_EXEMPLO )
		{
			var labels = cards[indiceCard]['labels'];
			
			for( indiceLabel = 0; indiceLabel < labels.length; ++indiceLabel )
			{
				if( labels[indiceLabel]['name'] == NOME_LABEL_SIR_FM )
				{
					++quantidadeSIRsFM;
				}
			}
		}
	}
	
	return quantidadeSIRsFM;
}

function obterIDLista( nomeLista, listas )
{
	var idLista = undefined;
	
	for( indiceLista = 0; indiceLista < listas.length; ++indiceLista )
	{
		if( listas[indiceLista]['name'] == nomeLista )
		{
			idLista = listas[indiceLista]['id'];
			
			break;
		}
	}
	
	return idLista;
}

function obterQuantidadeCardsLista( idLista, cards )
{
	var quantidadeCards = 0;
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard];
		
		if
		(
			card['idList'] == idLista
			&& card['name'] != NOME_CARD_TICKET_EXEMPLO
			&& card['name'] != NOME_CARD_SIR_EXEMPLO
		)
		{
			++quantidadeCards;
		}
	}
	
	return quantidadeCards;
}

function obterPercentual( quantidade, total )
{
	if( total == 0 )
	{
		return 0;
	}
	return ( quantidade / total ) * 100;
}

function obterPercentualCards( quantidadeCards, cards )
{
	var totalCard = 0;
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard];
		
		if
		(
			card['name'] != NOME_CARD_TICKET_EXEMPLO
			&& card['name'] != NOME_CARD_SIR_EXEMPLO
		)
		{
			++totalCard;
		}
	}
	
	return obterPercentual( quantidadeCards, totalCard );
}

function roundNumber( num, scale )
{
	if( !( '' + num ).includes( 'e' ) )
	{
		return +( Math.round( num + 'e+' + scale )  + 'e-' + scale );
	}
	
	var arr = ( '' + num ).split( 'e' );
	var sig = '';
	if( +arr[1] + scale > 0 )
	{
		sig = '+';
	}
	
    return +( Math.round( +arr[0] + 'e' + sig + ( +arr[1] + scale ) ) + 'e-' + scale );
}

function obterPercentualCardsLista( nomeLista, listas, cards )
{
	var idLista = obterIDLista( nomeLista, listas );
	
	var quantidadeCardsLista = obterQuantidadeCardsLista( idLista, cards );
	
	var percentualCardsLista = obterPercentualCards( quantidadeCardsLista, cards );
	
	return percentualCardsLista;
}

function validarCardTicket( card )
{
	var labels = card['labels'];
			
	if( labels != null )
	{
		var ticketValido = true;
		
		for( indiceLabel = 0; indiceLabel < labels.length; ++indiceLabel )
		{
			var nomeLabel = labels[indiceLabel]['name'];
			
			if
			(
				nomeLabel == NOME_LABEL_SIR_ERRO
				|| nomeLabel == NOME_LABEL_SIR_FM
			)
			{
				ticketValido = false;
				
				break;
			}
		}
		
		if
		(
			labels.length > 0
			&& ticketValido
		)
		{
			return ticketValido;
		}
	}
	
	return false;
}

function obterQuantidadeTicketsLista( idLista, cards )
{
	var quantidadeTickets = 0;
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard]; 
		
		if
		(
			card['idList'] == idLista
			&& card['name'] != NOME_CARD_TICKET_EXEMPLO
			&& validarCardTicket( card )
		)
		{
			++quantidadeTickets;
		}
	}
	
	return quantidadeTickets;
}

function validarCardTicketFDFM( card )
{
	var labels = card['labels'];
			
	if( labels != null )
	{
		var ticketFDFMValido = true;
		
		for( indiceLabel = 0; indiceLabel < labels.length; ++indiceLabel )
		{
			var nomeLabel = labels[indiceLabel]['name'];
			
			if
			(
				nomeLabel != NOME_LABEL_FD
				&& nomeLabel != NOME_LABEL_FM
			)
			{
				ticketFDFMValido = false;
				
				break;
			}
		}
		
		if
		(
			labels.length > 0
			&& ticketFDFMValido
		)
		{
			return ticketFDFMValido;
		}				
	}
	
	return false;
}

function obterQuantidadeTicketsFDFMLista( idLista, cards )
{
	var quantidadeTicketsFDFM = 0;
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard]; 
		
		if
		(
			card['idList'] == idLista
			&& card['name'] != NOME_CARD_TICKET_EXEMPLO
			&& validarCardTicketFDFM( card )
		)
		{
			++quantidadeTicketsFDFM;
		}
	}
	
	return quantidadeTicketsFDFM;
}

function obterCardsTicketLista( idLista, cards )
{
	var cardsTicket = [];
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard]; 
		
		if
		(
			card['idList'] == idLista
			&& validarCardTicket( card )
		)
		{
			cardsTicket.push( card );
		}
	}
	
	return cardsTicket;
}

function obterCardsTicketFDFMLista( idLista, cards )
{
	var cardsTicketFDFM = [];
	
	var cardsTicketLista = obterCardsTicketLista( idLista, cards );
	
	for( indiceCardTicket = 0; indiceCardTicket < cardsTicketLista.length; ++indiceCardTicket )
	{
		var cardTicket = cardsTicketLista[indiceCardTicket];
		
		if( validarCardTicketFDFM( cardTicket ) )
		{
			cardsTicketFDFM.push( cardTicket );
		}
	}
	
	return cardsTicketFDFM;
}

function validarCardSIR( card )
{
	var labels = card['labels'];
			
	if( labels != null )
	{
		var SIRValida = true;
		
		for( indiceLabel = 0; indiceLabel < labels.length; ++indiceLabel )
		{
			var nomeLabel = labels[indiceLabel]['name'];
			
			if
			(
				nomeLabel != NOME_LABEL_SIR_ERRO
				&& nomeLabel != NOME_LABEL_SIR_FM
			)
			{
				SIRValida = false;
				
				break;
			}
		}
		
		if
		(
			labels.length > 0
			&& SIRValida
		)
		{
			return SIRValida;
		}				
	}
	
	return false;
}

function obterNumeroTicketDaSIR( cardSIR )
{
	var nomeCardSIR = cardSIR['name'];
	
	if( nomeCardSIR != null )
	{
		var indicePrimeiroDigitoNumeroSIR = nomeCardSIR.indexOf( '[N' ) + 2;
		var indiceAposUltimoDigitoNumeroSIR = nomeCardSIR.indexOf( ']' );
		
		if( indicePrimeiroDigitoNumeroSIR < indiceAposUltimoDigitoNumeroSIR )
		{
			var numeroTicketDaSIRString = '';
		
			for( indiceCaractere = indicePrimeiroDigitoNumeroSIR; indiceCaractere < indiceAposUltimoDigitoNumeroSIR; ++indiceCaractere )
			{
				numeroTicketDaSIRString += nomeCardSIR[indiceCaractere];
			}
			
			var numeroTicketDaSIR = Number( numeroTicketDaSIRString );
			
			if( !isNaN( numeroTicketDaSIR ) )
			{
				return numeroTicketDaSIR;
			}
		}
	}
	
	return -1;
}

function obterQuantidadeTicketsComSIRLista( idLista, cards )
{
	var quantidadeTicketsComSIR = 0;
	
	var cardsTicketFDFM = obterCardsTicketFDFMLista( idLista, cards );
	
	for( indiceCardTicket = 0; indiceCardTicket < cardsTicketFDFM.length; ++indiceCardTicket )
	{
		var numeroTicket = cardsTicketFDFM[indiceCardTicket]['idShort'];
		
		for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
		{
			var card = cards[indiceCard];
			
			if
			(
				validarCardSIR( card )
				&& numeroTicket == obterNumeroTicketDaSIR( card )
			)
			{
				++quantidadeTicketsComSIR;
				
				break;
			}
		}
	}
	
	return quantidadeTicketsComSIR;
}

function obterQuantidadeTicketsFTRABAPLista( idLista, cards )
{
	var quantidadeTicketsFDFMLista = obterQuantidadeTicketsFDFMLista( idLista, cards );
	
	var quantidadeTicketsComSIRLista = obterQuantidadeTicketsComSIRLista( idLista, cards );
	
	var quantidadeTicketsFTRABAPLista = quantidadeTicketsFDFMLista - quantidadeTicketsComSIRLista;
	
	return quantidadeTicketsFTRABAPLista;
}

function validarTicketSemFTRFUNC( card )
{
	var idCard = card['id'];
	
	var actionsCard = card['actions'];
	
	for( indiceCardAction = 0; indiceCardAction < actionsCard.length; ++indiceCardAction )
	{
		var cardAction = actionsCard[indiceCardAction];
		
		var dadosCardAction = cardAction['data'];
		
		var nomeListaDestino = undefined;
		
		var listaDestino = dadosCardAction['list'];
		if( listaDestino == undefined )
		{
			listaDestino = dadosCardAction['listAfter'];
		}
		
		
		if( listaDestino != undefined )
		{
			nomeListaDestino = listaDestino['name'];	
		}
		
		if
		(
			cardAction['type'] == TIPO_ACTION_UPDATE_CARD
			&& nomeListaDestino == NOME_LISTA_PENDENCIAS_REPROVADOS
		)
		{
			return true;
		}
	}
	return false;
}

function obterQuantidadeTicketsSemFTRFUNCLista( idLista, cards )
{
	var quantidadeTicketsSemFTRFUNC = 0;
	
	var cardsTicketFDFM = obterCardsTicketFDFMLista( idLista, cards );
	
	for( indiceCardTicket = 0; indiceCardTicket < cardsTicketFDFM.length; ++indiceCardTicket )
	{
		var card = cardsTicketFDFM[indiceCardTicket];
		
		if( validarTicketSemFTRFUNC( card ) )
		{
			++quantidadeTicketsSemFTRFUNC;
		}
	}
	
	return quantidadeTicketsSemFTRFUNC;
}

function obterQuantidadeTicketsFTRFUNCLista( idLista, cards )
{
	var quantidadeTicketsFDFMLista = obterQuantidadeTicketsFDFMLista( idLista, cards );
	
	var quantidadeTicketsSemFTRFUNCLista = obterQuantidadeTicketsSemFTRFUNCLista( idLista, cards );
	
	var quantidadeTicketsFTRFUNCLista = quantidadeTicketsFDFMLista - quantidadeTicketsSemFTRFUNCLista;
	
	return quantidadeTicketsFTRFUNCLista;
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

function validarTicketSemOTDABAP( card, cards, camposPersonalizadosBoard )
{
	var idCard = card['id'];
	
	var idCampoPersonalizadoFimConstrucao = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_FIM_CONSTRUCAO, camposPersonalizadosBoard );
	
	var actionsCard = card['actions'];
	
	for( indiceCardAction = 0; indiceCardAction < actionsCard.length; ++indiceCardAction )
	{
		var cardAction = actionsCard[indiceCardAction];
		
		var dadosCardAction = cardAction['data'];
		
		var nomeListaDestino = undefined;
		
		var listaDestino = dadosCardAction['list'];
		if( listaDestino == undefined )
		{
			listaDestino = dadosCardAction['listAfter'];
		}
		
		
		if( listaDestino != undefined )
		{
			nomeListaDestino = listaDestino['name'];	
		}
		
		if
		(
			cardAction['type'] == TIPO_ACTION_UPDATE_CARD
			&& nomeListaDestino == NOME_LISTA_ENTREGUE
		)
		{
			var itensCamposPersonalizadosCard = card['customFieldItems'];
			
			var valorCampoPersonalizadoFimConstrucao = obterValorCampoPersonalizadoCard( idCampoPersonalizadoFimConstrucao, itensCamposPersonalizadosCard, camposPersonalizadosBoard );
			
			if( valorCampoPersonalizadoFimConstrucao != undefined )
			{
				var dataFimConstrucao = new Date( valorCampoPersonalizadoFimConstrucao['date'] );
				
				var dataFimConstrucaoSemTempo = obterDataSemTempo( dataFimConstrucao );
				
				var dataCriacaoCardAction = new Date( cardAction['date'] )
				
				var dataCriacaoCardActionSemTempo = obterDataSemTempo( dataCriacaoCardAction );
				
				if( dataFimConstrucaoSemTempo.getTime() < dataCriacaoCardActionSemTempo.getTime() )
				{
					return true;
				}
			}
		}
	}
	return false;
}

function obterQuantidadeTicketsSemOTDABAPLista( idLista, cards, camposPersonalizadosBoard )
{
	var quantidadeTicketsSemOTDABAP = 0;
	
	var cardsTicketFDFM = obterCardsTicketFDFMLista( idLista, cards );
	
	for( indiceCardTicket = 0; indiceCardTicket < cardsTicketFDFM.length; ++indiceCardTicket )
	{
		var card = cardsTicketFDFM[indiceCardTicket];
		
		if( validarTicketSemOTDABAP( card, cards, camposPersonalizadosBoard ) )
		{
			++quantidadeTicketsSemOTDABAP;
		}
	}
	
	return quantidadeTicketsSemOTDABAP;
}

function obterQuantidadeTicketsOTDABAPLista( idLista, cards, camposPersonalizadosBoard )
{
	var quantidadeTicketsFDFMLista = obterQuantidadeTicketsFDFMLista( idLista, cards );
	
	var quantidadeTicketsSemOTDABAPLista = obterQuantidadeTicketsSemOTDABAPLista( idLista, cards, camposPersonalizadosBoard );
	
	var quantidadeTicketsOTDABAPLista = quantidadeTicketsFDFMLista - quantidadeTicketsSemOTDABAPLista;
	
	return quantidadeTicketsOTDABAPLista;	
}

function validarTicketSemOTDFUNC( card, cards, camposPersonalizadosBoard )
{
	var resultadoValidacao = false;
	
	var idCard = card['id'];
	
	var anexosCard = card['attachments'];
	
	if
	(
		anexosCard == undefined ||
		anexosCard.length == 0
	)
	{
		resultadoValidacao = true;
		
		return resultadoValidacao;
	}
	
	var idCampoPersonalizadoDataEF = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_DATA_EF, camposPersonalizadosBoard );
	
	var itensCamposPersonalizadosCard = card['customFieldItems'];
	
	var valorCampoPersonalizadoDataEF = obterValorCampoPersonalizadoCard( idCampoPersonalizadoDataEF, itensCamposPersonalizadosCard, camposPersonalizadosBoard );
	
	for( indiceAnexo = 0; indiceAnexo < anexosCard.length; ++indiceAnexo )
	{
		var anexo = anexosCard[indiceAnexo];
		
		if( anexo['name'].startsWith( INICIO_NOME_ANEXO_EF ) )
		{
			if( valorCampoPersonalizadoDataEF['date'] < anexo['date'] )
			{
				resultadoValidacao = true;
			}
			
			break;
		}
	}
	
	return resultadoValidacao;
}

function obterQuantidadeTicketsSemOTDFUNCLista( idLista, cards, camposPersonalizadosBoard )
{
	var quantidadeTicketsSemOTDFUNC = 0;
	
	var cardsTicketFDFM = obterCardsTicketFDFMLista( idLista, cards );
	
	for( indiceCardTicket = 0; indiceCardTicket < cardsTicketFDFM.length; ++indiceCardTicket )
	{
		var card = cardsTicketFDFM[indiceCardTicket];
		
		if( validarTicketSemOTDFUNC( card, cards, camposPersonalizadosBoard ) )
		{
			++quantidadeTicketsSemOTDFUNC;
		}
	}
	
	return quantidadeTicketsSemOTDFUNC;
}

function obterQuantidadeTicketsOTDFUNCLista( idLista, cards, camposPersonalizadosBoard )
{
	var quantidadeTicketsFDFMLista = obterQuantidadeTicketsFDFMLista( idLista, cards );
	
	var quantidadeTicketsSemOTDFUNCLista = obterQuantidadeTicketsSemOTDFUNCLista( idLista, cards, camposPersonalizadosBoard );
	
	var quantidadeTicketsOTDFUNCLista = quantidadeTicketsFDFMLista - quantidadeTicketsSemOTDFUNCLista;
	
	return quantidadeTicketsOTDFUNCLista;		
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

function addDays( date, days )
{
	var result = new Date( date.valueOf() );
	
	result.setDate( result.getDate() + days );
	
	return result;
}

function obterProximaDataDisponibilidadeABAP( nomeABAP, cards, camposPersonalizadosBoard, listas )
{
	var proximaDataDisponibilidadeABAP = { ABAP: nomeABAP, proximaDataDisponibilidade: '' };
	
	var idCampoPersonalizadoFimConstrucao = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_FIM_CONSTRUCAO, camposPersonalizadosBoard );
	var idCampoPersonalizadoABAP = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_ABAP, camposPersonalizadosBoard );
	
	var idListaEntregue = obterIDLista( NOME_LISTA_ENTREGUE, listas );
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard];
		
		var idListCard = card['idList'];
		
		if( idListCard != idListaEntregue )
		{
			var nomeCard = card['name'];
		
			if
			(
				nomeCard != NOME_CARD_TICKET_EXEMPLO
				&& nomeCard != NOME_CARD_SIR_EXEMPLO
			)
			{
				var itensCamposPersonalizadosCard = card['customFieldItems'];
				
				var valorCampoPersonalizadoABAP = obterValorCampoPersonalizadoCard( idCampoPersonalizadoABAP, itensCamposPersonalizadosCard, camposPersonalizadosBoard );
				
				if
				(
					valorCampoPersonalizadoABAP != undefined
					&& valorCampoPersonalizadoABAP['text'] == nomeABAP
				)
				{
					var valorCampoPersonalizadoFimConstrucao = obterValorCampoPersonalizadoCard( idCampoPersonalizadoFimConstrucao, itensCamposPersonalizadosCard, camposPersonalizadosBoard );
					
					if( valorCampoPersonalizadoFimConstrucao != undefined )
					{
						var dataFimConstrucao = new Date( valorCampoPersonalizadoFimConstrucao['date'] );
					
						var umDiaAposDataFimConstrucao = addDays( dataFimConstrucao, 1 );
						
						if
						(
							proximaDataDisponibilidadeABAP.proximaDataDisponibilidade == ''
							|| proximaDataDisponibilidadeABAP.proximaDataDisponibilidade < umDiaAposDataFimConstrucao
						)
						{
							proximaDataDisponibilidadeABAP.proximaDataDisponibilidade = umDiaAposDataFimConstrucao;
						}
					}
				}
			}
		}
	}
	
	var dataHoje = new Date();
	
	var dataHojeSemTemp = obterDataSemTempo( dataHoje );
	
	if
	(
		proximaDataDisponibilidadeABAP.proximaDataDisponibilidade == ''
		|| proximaDataDisponibilidadeABAP.proximaDataDisponibilidade.getTime() < dataHojeSemTemp.getTime()
	)
	{
		proximaDataDisponibilidadeABAP.proximaDataDisponibilidade = dataHojeSemTemp;
	}
	
	return proximaDataDisponibilidadeABAP;
}

function obterProximaDataDisponibilidadeABAPs( nomesABAP, cards, camposPersonalizadosBoard, listas )
{
	var proximaDataDisponibilidadeABAPs = [];
	
	for( indiceNomeABAP = 0; indiceNomeABAP < nomesABAP.length; ++indiceNomeABAP )
	{
		var nomeABAP = nomesABAP[indiceNomeABAP];
		
		proximaDataDisponibilidadeABAPs.push( obterProximaDataDisponibilidadeABAP( nomeABAP, cards, camposPersonalizadosBoard, listas ) );
	}
	
	return proximaDataDisponibilidadeABAPs;
}

function funcaoComparacaoDisponibilidadeABAP( disponibilidadeA, disponibilidadeB )
{
	return ( disponibilidadeA.proximaDataDisponibilidade > disponibilidadeB.proximaDataDisponibilidade ) -
		   ( disponibilidadeA.proximaDataDisponibilidade < disponibilidadeB.proximaDataDisponibilidade );
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

function obterDisponibilidadeTimeABAPPorData( proximaDataDisponibilidadeABAPs )
{
	var disponibilidadeTimeABAPPorData = [];
	
	var datasDisponibilidade = [];
	
	for( indiceProximaDataDisponibilidadeABAP = 0; indiceProximaDataDisponibilidadeABAP < proximaDataDisponibilidadeABAPs.length; ++indiceProximaDataDisponibilidadeABAP )
	{
		var proximaDataDisponibilidadeABAP = proximaDataDisponibilidadeABAPs[indiceProximaDataDisponibilidadeABAP];
		
		var proximaDataDisponibilidadeABAPSomenteData = obterDataSemTempo( proximaDataDisponibilidadeABAP.proximaDataDisponibilidade );
		
		var dataDisponibilidadeJaAdicionada = false;
		
		for( indiceDataDisponibilidade = 0; indiceDataDisponibilidade < datasDisponibilidade.length; ++indiceDataDisponibilidade )
		{
			var dataDisponibilidade = datasDisponibilidade[indiceDataDisponibilidade];
			
			if( dataDisponibilidade.getTime() == proximaDataDisponibilidadeABAPSomenteData.getTime() )
			{
				dataDisponibilidadeJaAdicionada = true;
				
				break;
			}
		}
		
		if( !dataDisponibilidadeJaAdicionada )
		{
			datasDisponibilidade.push( proximaDataDisponibilidadeABAPSomenteData );
		}
	}
	
	for( indiceDataDisponibilidade = 0; indiceDataDisponibilidade < datasDisponibilidade.length; ++indiceDataDisponibilidade )
	{
		var dataDisponibilidade = datasDisponibilidade[indiceDataDisponibilidade];
		
		var ABAPsDisponiveis = [];
			
		for( indiceProximaDataDisponibilidadeABAP = 0; indiceProximaDataDisponibilidadeABAP < proximaDataDisponibilidadeABAPs.length; ++indiceProximaDataDisponibilidadeABAP )
		{
			var proximaDataDisponibilidadeABAP = proximaDataDisponibilidadeABAPs[indiceProximaDataDisponibilidadeABAP];
			
			var proximaDataDisponibilidadeABAPSomenteData = obterDataSemTempo( proximaDataDisponibilidadeABAP.proximaDataDisponibilidade );
			
			if( proximaDataDisponibilidadeABAPSomenteData.getTime() == dataDisponibilidade.getTime() )
			{
				ABAPsDisponiveis.push( proximaDataDisponibilidadeABAP.ABAP );
			}
		}
		
		ABAPsDisponiveis.sort();
		
		var disponibilidadeData = { dataDisponibilidadeABAP: dataDisponibilidade, ABAPsDisponiveisData: ABAPsDisponiveis };
		
		disponibilidadeTimeABAPPorData.push( disponibilidadeData );
	}
	
	return disponibilidadeTimeABAPPorData;
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

function obterTimelineDisponibilidadeTimeABAP( cards, camposPersonalizadosBoard, listas )
{
	var textoDisponibilidadeABAP = '';
	
	var nomesABAP = obterValoresOpcoesCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_ABAP, camposPersonalizadosBoard );
	
	var proximaDataDisponibilidadeABAPs = obterProximaDataDisponibilidadeABAPs( nomesABAP, cards, camposPersonalizadosBoard, listas );
	
	proximaDataDisponibilidadeABAPs.sort( funcaoComparacaoDisponibilidadeABAP );
	
	var disponibilidadeTimeABAPPorData = obterDisponibilidadeTimeABAPPorData( proximaDataDisponibilidadeABAPs );
	
	for( indiceDisponibilidadeTimeABAPPorData = 0; indiceDisponibilidadeTimeABAPPorData < disponibilidadeTimeABAPPorData.length; ++indiceDisponibilidadeTimeABAPPorData )
	{
		var dataDisponibilidadeTimeABAP = disponibilidadeTimeABAPPorData[indiceDisponibilidadeTimeABAPPorData];
		
		var stringDataDisponibilidadeABAP = obterStringDataObjetoDate( dataDisponibilidadeTimeABAP.dataDisponibilidadeABAP, '/' );
		
		var indiceDisponibilidadeTimeABAPPorDataPar = ( indiceDisponibilidadeTimeABAPPorData % 2 ) == 0;
		
		if( indiceDisponibilidadeTimeABAPPorDataPar )
		{
			textoDisponibilidadeABAP += '<div class="timeline-container timeline-container-left">';
		}
		else
		{
			textoDisponibilidadeABAP += '<div class="timeline-container timeline-container-right">';
		}
		
		textoDisponibilidadeABAP += '<div class="timeline-content"><h3>' + stringDataDisponibilidadeABAP + '</h3>';
		
		for( indiceABAPDisponivelData = 0; indiceABAPDisponivelData < dataDisponibilidadeTimeABAP.ABAPsDisponiveisData.length; ++indiceABAPDisponivelData )
		{
			var ABAPDisponivelData = dataDisponibilidadeTimeABAP.ABAPsDisponiveisData[indiceABAPDisponivelData];
			
			textoDisponibilidadeABAP += '<p>' + ABAPDisponivelData + '</p>';
		}
		
		textoDisponibilidadeABAP += '</div></div>';
	}
	
	return textoDisponibilidadeABAP;
}

function obterQuantidadeHorasABAPCards( cards, camposPersonalizadosBoard )
{
	var quantidadeHorasABAP = 0;
	
	var idCampoPersonalizadoHorasABAP = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_HORAS_ABAP, camposPersonalizadosBoard );
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard];
		
		var nomeCard = card['name'];
		
		if( nomeCard != NOME_CARD_TICKET_EXEMPLO )
		{
			var itemsCamposPersonalizadosCard = card['customFieldItems'];
			
			var valorCampoPersonalizadoHorasABAP = obterValorCampoPersonalizadoCard( idCampoPersonalizadoHorasABAP, itemsCamposPersonalizadosCard, camposPersonalizadosBoard );
			
			quantidadeHorasABAP += Number( valorCampoPersonalizadoHorasABAP['number'] );	
		}
	}
	
	return quantidadeHorasABAP;
}

function obterQuantidadeHorasEntregueTicketsFDFM( cards, camposPersonalizadosBoard, listas )
{
	var idListaEntregue = obterIDLista( NOME_LISTA_ENTREGUE, listas );
	
	var cardsTicketFDFMListaEntregue = obterCardsTicketFDFMLista( idListaEntregue, cards );
	
	var quantidadeHorasABAPEntregue = obterQuantidadeHorasABAPCards( cardsTicketFDFMListaEntregue, camposPersonalizadosBoard );
	
	return quantidadeHorasABAPEntregue;	
}

function obterQuantidadeHorasBacklogTicketsFDFM( cards, camposPersonalizadosBoard, listas )
{
	var idListaBacklogDemandas = obterIDLista( NOME_LISTA_BACKLOG_DEMANDAS, listas );
	
	var cardsTicketFDFMListaBacklog = obterCardsTicketFDFMLista( idListaBacklogDemandas, cards );
	
	var quantidadeHorasABAPBacklog = obterQuantidadeHorasABAPCards( cardsTicketFDFMListaBacklog, camposPersonalizadosBoard );
	
	return quantidadeHorasABAPBacklog;	
}

function obterQuantidadeCardsPorEtiqueta( nomeEtiqueta, cards )
{
	var quantidadeCards = 0;
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard];
		
		var labelsCard = card['labels'];
		
		if
		(
			labelsCard != undefined
			&& labelsCard.length > 0
		)
		{
			var nomeCard = card['name'];
			
			var nomeEtiquetaCard = card['labels'][0]['name'];
		
			if
			(
				nomeEtiquetaCard == nomeEtiqueta
				&& nomeCard != NOME_CARD_TICKET_EXEMPLO
				&& nomeCard != NOME_CARD_SIR_EXEMPLO
			)
			{
				++quantidadeCards;
			}
		}
	}
	
	return quantidadeCards;
}

function obterPercentualCardsPorEtiqueta( nomeEtiqueta, cards )
{
	var quantidadeCardsEtiqueta = obterQuantidadeCardsPorEtiqueta( nomeEtiqueta, cards );
	
	var percentualCardsEtiqueta = obterPercentualCards( quantidadeCardsEtiqueta, cards );
	
	return percentualCardsEtiqueta;
}

function obterProjetosParaFiltro( camposPersonalizadosBoard )
{
	var projetos = '<option value="Todos">Todos</option>';
	
	var valoresOpcoesProjeto = obterValoresOpcoesCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_PROJETO, camposPersonalizadosBoard );
	
	for( indiceValorOpcaoProjeto = 0; indiceValorOpcaoProjeto < valoresOpcoesProjeto.length; ++indiceValorOpcaoProjeto )
	{
		var valorOpcaoProjeto = valoresOpcoesProjeto[indiceValorOpcaoProjeto];
		
		projetos += '<option value="' + valorOpcaoProjeto + '">' + valorOpcaoProjeto + '</option>';
	}
	
	return projetos;
}

function obterCardsPorProjeto( nomeProjeto, cards, camposPersonalizadosBoard )
{
	var cardsPorProjeto = [];
	
	if( nomeProjeto == undefined )
	{
		cardsPorProjeto = cards;
		
		return cardsPorProjeto;
	}		
	
	var idCampoPersonalizadoProjeto = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_PROJETO, camposPersonalizadosBoard );
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard];
		
		var itensCamposPersonalizadosCard = card['customFieldItems'];
				
		var valorCampoPersonalizadoProjeto = obterValorCampoPersonalizadoCard( idCampoPersonalizadoProjeto, itensCamposPersonalizadosCard, camposPersonalizadosBoard );
		
		if
		(
			valorCampoPersonalizadoProjeto != undefined
			&& valorCampoPersonalizadoProjeto['text'] == nomeProjeto
		)
		{
			cardsPorProjeto.push( card );
		}
	}
	
	return cardsPorProjeto;
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
	var releases = '<option value="Todos">Todos</option>';
	
	var datasRelease = obterDatasRelease( cards, camposPersonalizadosBoard );
	
	for( indiceDataRelease = 0; indiceDataRelease < datasRelease.length; ++indiceDataRelease )
	{
		var dataRelease = datasRelease[indiceDataRelease];
		
		var stringDataRelease = obterStringDataObjetoDate( dataRelease, '/' );
		
		releases += '<option value="' + stringDataRelease + '">'
					+ stringDataRelease + '</option>';
	}
	
	return releases;
}

function obterObjetoDatePelaData( data, separador )
{
	var objetoDateData = undefined;
	
	var dadosData = data.split( separador );
	
	var dia = Number( dadosData[0] );
	var mes = Number( dadosData[1] );
	var ano = Number( dadosData[2] );
	
	objetoDateData = new Date
	(
		ano,
		mes - 1,
		dia
	);
	
	return objetoDateData;
}

function obterCardsPorRelease( dataRelease, cards, camposPersonalizadosBoard )
{
	var cardsPorRelease = [];
	
	if( dataRelease == undefined )
	{
		cardsPorRelease = cards;
		
		return cardsPorRelease;
	}
	
	var objetoDateDataRelease = obterObjetoDatePelaData( dataRelease, '/' );

	var idCampoPersonalizadoDataRelease = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_DATA_RELEASE, camposPersonalizadosBoard );
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard];
		
		var itensCamposPersonalizadosCard = card['customFieldItems'];
				
		var valorCampoPersonalizadoDataRelease = obterValorCampoPersonalizadoCard( idCampoPersonalizadoDataRelease, itensCamposPersonalizadosCard, camposPersonalizadosBoard );
		
		if( valorCampoPersonalizadoDataRelease != undefined )
		{
			var dataReleaseCard = valorCampoPersonalizadoDataRelease['date'];
			
			var objetoDateDataReleaseCard = new Date( dataReleaseCard );
			
			objetoDateDataReleaseCard = obterDataSemTempo( objetoDateDataReleaseCard );
			
			if( objetoDateDataReleaseCard.getTime() == objetoDateDataRelease.getTime() )
			{
				cardsPorRelease.push( card );
			}
		}
	}
	
	return cardsPorRelease;
}

function obterCardsLista( nomeLista, cards, listas )
{
	var cardsLista = [];
	
	var idLista = obterIDLista( nomeLista, listas );
	
	for( indiceCard = 0; indiceCard < cards.length; ++indiceCard )
	{
		var card = cards[indiceCard];
		
		if
		(
			card['idList'] == idLista
			&& card['name'] != NOME_CARD_TICKET_EXEMPLO
			&& card['name'] != NOME_CARD_SIR_EXEMPLO
		)
		{
			cardsLista.push( card );
		}
	}
	
	return cardsLista;
}

function obterPendencias( cards, listas, camposPersonalizadosBoard )
{
	var pendencias = [];
	
	var idCampoPersonalizadoDataProjeto = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_PROJETO, camposPersonalizadosBoard );
	
	var idCampoPersonalizadoTicketNumber = obterIDCampoPersonalizado( NOME_CAMPO_PERSONALIZADO_TICKET_NUMBER, camposPersonalizadosBoard );
	
	var cardsPendencias = obterCardsLista( NOME_LISTA_PENDENCIAS_REPROVADOS, cards, listas );
	
	for( indiceCardPendencia = 0; indiceCardPendencia < cardsPendencias.length; ++indiceCardPendencia )
	{
		var cardPendencia = cardsPendencias[indiceCardPendencia];
		
		var actionsCardPendencia = cardPendencia['actions'];
		
		for( indiceActionCardPendencia = 0; indiceActionCardPendencia < actionsCardPendencia.length; ++indiceActionCardPendencia )
		{
			var actionCardPendencia = actionsCardPendencia[indiceActionCardPendencia];
			
			if( actionCardPendencia['type'] == TIPO_ACTION_COMMENT_CARD )
			{
				var itensCamposPersonalizadosCard = cardPendencia['customFieldItems'];
				
				var valorCampoPersonalizadoProjeto = obterValorCampoPersonalizadoCard( idCampoPersonalizadoDataProjeto, itensCamposPersonalizadosCard, camposPersonalizadosBoard );
				
				var nomeProjeto = '';
				
				if( valorCampoPersonalizadoProjeto != undefined )
				{
					nomeProjeto = valorCampoPersonalizadoProjeto['text'];
				}
				
				var valorCampoPersonalizadoTicketNumber = obterValorCampoPersonalizadoCard( idCampoPersonalizadoTicketNumber, itensCamposPersonalizadosCard, camposPersonalizadosBoard );
				
				var ticketNumber = '';
				
				if( valorCampoPersonalizadoTicketNumber != undefined )
				{
					ticketNumber = valorCampoPersonalizadoTicketNumber['text'];
				}
				
				var pendencia = 
				{
					idCartao: cardPendencia['idShort'],
					projeto: nomeProjeto,
					wp: ticketNumber,
					textoComentario: actionCardPendencia['data']['text']
				};
				
				pendencias.push( pendencia );
				
				break;
			}
		}
	}
	
	return pendencias;
}

function obterItensCarrosselPendencias( cards, listas, camposPersonalizadosBoard )
{
	var itensCarrosselPendencias = '';
	
	var pendencias = obterPendencias( cards, listas, camposPersonalizadosBoard );
	
	if( pendencias.length > 0 )
	{
		var indicePendencia = 0;
		
		itensCarrosselPendencias += '<div class="carousel-item active"><table class="table"><thead><tr><th>ID</th><th>Projeto</th><th>WP</th><th>Comentário</th></tr></thead><tbody>';	
		
		for
		(
			indiceItemCarrossel = 0;
			indiceItemCarrossel < QUANTIDADE_PENDENCIAS_POR_SLIDE && indicePendencia < pendencias.length;
			++indiceItemCarrossel, ++indicePendencia)
		{
			var pendencia = pendencias[indicePendencia];
			
			itensCarrosselPendencias += '<tr><td>' + pendencia.idCartao + '</td><td>' 
										+ pendencia.projeto + '</td><td>' 
										+ pendencia.wp + '</td><td>' 
										+ pendencia.textoComentario.substr( 0, TAMANHO_MAXIMO_COMENTARIO_PENDENCIA ) + '</td></tr>';	
		}
		
		itensCarrosselPendencias += '</tbody></table></div>';
		
		for( ; indicePendencia < pendencias.length; )
		{
			itensCarrosselPendencias += '<div class="carousel-item"><table class="table"><thead><tr><th>ID</th><th>Projeto</th><th>WP</th><th>Comentário</th></tr></thead><tbody>';
			
			for
			(
				indiceItemCarrossel = 0;
				indiceItemCarrossel < QUANTIDADE_PENDENCIAS_POR_SLIDE && indicePendencia < pendencias.length;
				++indiceItemCarrossel, ++indicePendencia)
			{
				var pendencia = pendencias[indicePendencia];
				
				itensCarrosselPendencias += '<tr><td>' + pendencia.idCartao + '</td><td>' 
											+ pendencia.projeto + '</td><td>' 
											+ pendencia.wp + '</td><td>' 
											+ pendencia.textoComentario.substr( 0, TAMANHO_MAXIMO_COMENTARIO_PENDENCIA ) + '</td></tr>';	
			}
			
			itensCarrosselPendencias += '</tbody></table></div>';
		}
		
		
	}
	
	return itensCarrosselPendencias;
}

function obterNomeProjetoSelecionado()
{
	var nomeProjeto = undefined;
	
	var valorSelecionadoProjeto = selectProjeto.val();
	
	if( valorSelecionadoProjeto != OPCAO_FILTRO_TODOS )
	{
		nomeProjeto = valorSelecionadoProjeto;
	}
	
	return nomeProjeto;
}

function obterDataReleaseSelecionada()
{
	var dataRelease = undefined;
	
	var valorSelecionadoRelease = selectRelease.val();
	
	if( valorSelecionadoRelease != OPCAO_FILTRO_TODOS )
	{
		dataRelease = valorSelecionadoRelease;
	}
	
	return dataRelease;
}

function obterLabelCard( card )
{
	var label = undefined;
	
	var labelsCard = card['labels'];
	
	label = labelsCard[0]['name'];
	
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

function obterObjetoCardRelatorio( card, listas, camposPersonalizadosBoard )
{
	var cardRelatorio = 
	{
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
		fimConstrucao: undefined
	};
	
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
	if( valorCampoPersonalizadoTicketNumber != undefined )
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
				
				if( valorCampoFiltradoCardString.includes( valorFiltroString ) )
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
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_LISTA, buscarLista.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_TITULO, buscarTitulo.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_ETIQUETA, buscarEtiqueta.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_PROJETO, buscarProjeto.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_TICKET_NUMBER, buscarTicketNumber.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_FUNCIONAL, buscarFuncional.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_MODULO_FUNCIONAL, buscarModuloFuncional.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_HORAS_ABAP, buscarHorasABAP.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_LIMITE_CONSTRUCAO, buscarLimiteConstrucao.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_DATA_RELEASE, buscarDataRelease.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_DATA_EF, buscarDataEF.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_ABAP, buscarABAP.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_INICIO_CONSTRUCAO, buscarInicioConstrucao.val() );
	cardsRelatorioComFiltros = obterCardsRelatorioBuscadosComFiltro( cardsRelatorioComFiltros, CAMPO_FILTRO_FIM_CONSTRUCAO, buscarFimConstrucao.val() );
	
	return cardsRelatorioComFiltros;
}

function obterTextoCorpoTabelaRelatorio( cards, listas, camposPersonalizadosBoard )
{
	var textoCorpoTabelaRelatorio = '';
	
	var cardsRelatorio = obterObjetosCardsRelatorio( cards, listas, camposPersonalizadosBoard );
	
	cardsRelatorio = obterCardsRelatorioBuscadosComFiltros( cardsRelatorio );
	
	for( indiceCardRelatorio = 0; indiceCardRelatorio < cardsRelatorio.length; ++indiceCardRelatorio )
	{
		var cardRelatorio = cardsRelatorio[indiceCardRelatorio];
		
		textoCorpoTabelaRelatorio += '<tr>' +
									 '<td>' + obterTextoCampoTabelaRelatorio( cardRelatorio.numero ) + '</td>' +
									 '<td>' + obterTextoCampoTabelaRelatorio( cardRelatorio.lista ) + '</td>' +
									 '<td class="td-titulo-card">' + obterTextoCampoTabelaRelatorio( cardRelatorio.titulo ) + '</td>' +
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
									 '</tr>';
	}
	
	return textoCorpoTabelaRelatorio;
}
