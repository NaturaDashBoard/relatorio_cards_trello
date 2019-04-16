const API_KEY = '0de440ba54e6508dc14e6475784d3c6a';

const TOKEN = '91f423c958d2a819f90a871bfb54bcd87a128b7c5612ef2014097947b2f110b9';

const ID_BOARD_GESTAO_DEMANDAS_NATURA = '5b688404339eca3b994948c1';
const ID_BOARD_QUADRO_TESTES_DASHBOARD_NATURA = '5beb929f5c13a07903fd5df0';

const TEMPLATE_URL_BOARD_CAMPOS_PERSONALIZADOS = 'https://api.trello.com/1/boards/[BOARD_ID]/customFields?key=' + API_KEY + '&token=' + TOKEN;
const TEMPLATE_URL_CARDS = 'https://api.trello.com/1/boards/[BOARD_ID]/cards?customFieldItems=true&key=' + API_KEY + '&token=' + TOKEN;
const TEMPLATE_URL_LISTAS = 'https://api.trello.com/1/boards/[BOARD_ID]/lists?filter=open&key=' + API_KEY + '&token=' + TOKEN;
const TEMPLATE_URL_ETIQUETAS = 'https://api.trello.com/1//boards/[BOARD_ID]/labels?fields=all&limit=0&key=' + API_KEY + '&token=' + TOKEN;
const TEMPLATE_URL_ATUALIZAR_CAMPO_PERSONALIZADO_CARD = 'https://api.trello.com/1/cards/[CARD_ID]/customField/[CUSTOM_FIELD_ID]/item?key=' + API_KEY + '&token=' + TOKEN;

const TEMPLATE_NOME_ARQUIVO_TXT = 'relatorio_[ano]_[mes]_[dia]_[hora]_[min]_[seg].txt';

const TIPO_REQ_AJAX_GET = 'GET';
const TIPO_REQ_AJAX_PUT = 'PUT';

const TIPO_DADO_AJAX_JSON = 'JSON';

const NOME_CARD_TICKET_EXEMPLO = 'Ticket Exemplo';
const NOME_CARD_SIR_EXEMPLO    = 'SIR-NXX';

const NOME_CAMPO_PERSONALIZADO_FIM_CONSTRUCAO 	 = 'Fim Construção';
const NOME_CAMPO_PERSONALIZADO_DATA_EF 			 = 'Data EF';
const NOME_CAMPO_PERSONALIZADO_ABAP 			 = 'ABAP';
const NOME_CAMPO_PERSONALIZADO_HORAS_ABAP 		 = 'Horas ABAP';
const NOME_CAMPO_PERSONALIZADO_TICKET_NUMBER 	 = 'Ticket Number';
const NOME_CAMPO_PERSONALIZADO_PROJETO 			 = 'Projeto';
const NOME_CAMPO_PERSONALIZADO_DATA_RELEASE 	 = 'Data Release';
const NOME_CAMPO_PERSONALIZADO_FUNCIONAL 		 = 'Funcional';
const NOME_CAMPO_PERSONALIZADO_MODULO_FUNCIONAL  = 'Módulo Funcional';
const NOME_CAMPO_PERSONALIZADO_INICIO_CONSTRUCAO = 'Início Construção';
const NOME_CAMPO_PERSONALIZADO_LIMITE_CONSTRUCAO = 'Limite Construção';
const NOME_CAMPO_PERSONALIZADO_PROJECT_CRIADO 	 = 'Project - Criado';
const NOME_CAMPO_PERSONALIZADO_PROJECT_PLANEJADO = 'Project - Planejado';

const CAMPO_FILTRO_NUMERO   	 	 = 'numero';
const CAMPO_FILTRO_TITULO   	 	 = 'titulo';
const CAMPO_FILTRO_LISTA    	 	 = 'lista';
const CAMPO_FILTRO_ETIQUETA 	 	 = 'etiqueta';
const CAMPO_FILTRO_PROJETO       	 = 'projeto';
const CAMPO_FILTRO_TICKET_NUMBER 	 = 'ticketNumber';
const CAMPO_FILTRO_FUNCIONAL 		 = 'funcional';
const CAMPO_FILTRO_MODULO_FUNCIONAL  = 'moduloFuncional';
const CAMPO_FILTRO_HORAS_ABAP 		 = 'horasABAP';
const CAMPO_FILTRO_LIMITE_CONSTRUCAO = 'limiteConstrucao';
const CAMPO_FILTRO_DATA_RELEASE 	 = 'dataRelease';
const CAMPO_FILTRO_DATA_EF 			 = 'dataEF';
const CAMPO_FILTRO_ABAP 			 = 'ABAP';
const CAMPO_FILTRO_INICIO_CONSTRUCAO = 'inicioConstrucao';
const CAMPO_FILTRO_FIM_CONSTRUCAO    = 'fimConstrucao';
const CAMPO_FILTRO_PROJECT_CRIADO 	 = 'projectCriado';
const CAMPO_FILTRO_PROJECT_PLANEJADO = 'projectPlanejado';

const OPCAO_FILTRO_TODOS 				= 'Todos';
const OPCAO_FILTRO_NAO_DEFINIDO			= 'N/D';
const OPCAO_FILTRO_BOOLEANO_MARCADO 	= 'Marcado';
const OPCAO_FILTRO_BOOLEANO_DESMARCADO  = 'Desmarcado';

const TAMANHO_MAXIMO_TEXTO_TITULO = 33;

const MIME_TYPE_TEXT_PLAIN = 'text/plain';
