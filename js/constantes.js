const API_KEY = '0de440ba54e6508dc14e6475784d3c6a';

const TOKEN = '91f423c958d2a819f90a871bfb54bcd87a128b7c5612ef2014097947b2f110b9';

const ID_BOARD_GESTAO_DEMANDAS_NATURA = '5b688404339eca3b994948c1';
const ID_BOARD_QUADRO_TESTES_DASHBOARD_NATURA = '5beb929f5c13a07903fd5df0';

const TEMPLATE_URL_BOARD_ACTIONS = 'https://api.trello.com/1/boards/[BOARD_ID]/actions/?key=' + API_KEY + '&token=' + TOKEN;
const TEMPLATE_URL_CARD_ACTIONS = 'https://api.trello.com/1/cards/[CARD_ID]/actions?limit=1000&key=' + API_KEY + '&token=' + TOKEN;
const TEMPLATE_URL_BOARD_CAMPOS_PERSONALIZADOS = 'https://api.trello.com/1/boards/[BOARD_ID]/customFields?key=' + API_KEY + '&token=' + TOKEN;
const TEMPLATE_URL_CARDS = 'https://api.trello.com/1/boards/[BOARD_ID]/cards?customFieldItems=true&attachments=true&actions=all&key=' + API_KEY + '&token=' + TOKEN;
const TEMPLATE_URL_LISTAS = 'https://api.trello.com/1/boards/[BOARD_ID]/lists?cards=all&card_fields=all&filter=open&fields=all&key=' + API_KEY + '&token=' + TOKEN;
const TEMPLATE_URL_CAMPOS_PERSONALIZADOS_CARD = 'https://api.trello.com/1/card/[CARD_ID]/?fields=name&customFieldItems=true&key=' + API_KEY + '&token=' + TOKEN;
const TEMPLATE_URL_ANEXOS_CARD = 'https://api.trello.com/1/cards/[CARD_ID]/attachments?key=' + API_KEY + '&token=' + TOKEN;

const TIPO_REQ_AJAX_GET = 'get';

const TIPO_DADO_AJAX_JSON = 'json';

//const INTERVALO_TEMPO_REQUISICOES_ASSINC = 60000;  // Milissegundos;
const TEMPO_PRIMEIRA_ATUALIZACAO_CARROSSEL_PENDENCIAS = 15000;  // Milissegundos;

const TEXTO_CARROSSEL_PENDENCIAS_VAZIO = '<div class="carousel-item active">Não há Pendências.</div>';

const NOME_LABEL_CCM = 'CCM';
const NOME_LABEL_DEBUG = 'Debug';
const NOME_LABEL_FD = 'FD';
const NOME_LABEL_SMALL_ENHANCEMENT = 'Small Enhancement';
const NOME_LABEL_ESTIMATIVA = 'Estimativa';
const NOME_LABEL_SIR_FM = 'SIR FM';
const NOME_LABEL_FM = 'FM';
const NOME_LABEL_SIR_ERRO = 'SIR ERRO';

const NOME_CARD_TICKET_EXEMPLO = 'Ticket Exemplo';
const NOME_CARD_SIR_EXEMPLO = 'SIR-[NXX] - WPYY';

const INICIO_NOME_ANEXO_EF = 'EF_';

const NOME_LISTA_BACKLOG_DEMANDAS = 'Backlog Demandas';
const NOME_LISTA_BACKLOG_SIR = 'Backlog SIR';
const NOME_LISTA_EM_ATENDIMENTO = 'Em Atendimento';
const NOME_LISTA_PENDENCIAS_REPROVADOS = 'Pendências / Reprovados';
const NOME_LISTA_EM_REVISAO = 'Em Revisão';
const NOME_LISTA_ENTREGUE = 'Entregue';

const NOME_CAMPO_PERSONALIZADO_FIM_CONSTRUCAO = 'Fim Construção';
const NOME_CAMPO_PERSONALIZADO_DATA_EF = 'Data EF';
const NOME_CAMPO_PERSONALIZADO_ABAP = 'ABAP';
const NOME_CAMPO_PERSONALIZADO_HORAS_ABAP = 'Horas ABAP';
const NOME_CAMPO_PERSONALIZADO_TICKET_NUMBER = 'Ticket Number';
const NOME_CAMPO_PERSONALIZADO_PROJETO = 'Projeto';
const NOME_CAMPO_PERSONALIZADO_DATA_RELEASE = 'Data Release';
const NOME_CAMPO_PERSONALIZADO_FUNCIONAL = 'Funcional';
const NOME_CAMPO_PERSONALIZADO_MODULO_FUNCIONAL = 'Módulo Funcional';
const NOME_CAMPO_PERSONALIZADO_INICIO_CONSTRUCAO = 'Início Construção';
const NOME_CAMPO_PERSONALIZADO_LIMITE_CONSTRUCAO = 'Limite Construção';

const TIPO_ACTION_COMMENT_CARD = 'commentCard';
const TIPO_ACTION_UPDATE_CARD = 'updateCard';

const QUANTIDADE_PENDENCIAS_POR_SLIDE = 16;

const TAMANHO_MAXIMO_COMENTARIO_PENDENCIA = 40;

const TIPO_CONTEXT_2D = '2d';

const TIPO_GRAFICO_BAR = 'bar';
const TIPO_GRAFICO_DOUGHNUT = 'doughnut';
const TIPO_GRAFICO_PIE = 'pie';

const TITULO_GRAFICO_PERCENTUAL_CARTOES_POR_FASE = 'Percentual de Cartões em cada fase';
const TITULO_GRAFICO_PERCENTUAL_CARTOES_POR_ETIQUETA = 'Percentual de Cartões de cada Etiqueta';

const CORES_GRAFICO_PERCENTUAL_CARTOES_POR_FASE =
[
	'rgb(255,   0,   0)', // Vermelho
	'rgb(  0, 255,   0)', // Verde
	'rgb(  0,   0, 255)', // Azul
	'rgb(255, 255,   0)', // Amarelo
	'rgb(  0, 255, 255)', // 
	'rgb(255,   0, 255)'  // 
];
const CORES_GRAFICO_PERCENTUAL_CARTOES_POR_ETIQUETA =
[
	'rgb(97,  189,  79)', // 
	'rgb(242, 214,   0)', // 
	'rgb(255, 159,  26)', // 
	'rgb(235,  90,  70)', // 
	'rgb(195, 119, 224)', // 
	'rgb(  0, 121, 191)', // 
	'rgb(  0, 194, 224)', // 
	'rgb( 53,  82,  99)'  // 
];

const POSICAO_LEGENDA_GRAFICO_TOPO = 'top';
const POSICAO_LEGENDA_GRAFICO_ESQUERDA = 'left';

const OPCAO_FILTRO_TODOS = 'Todos';

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
