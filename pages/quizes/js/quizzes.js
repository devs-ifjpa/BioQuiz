const questions = [
    [
    {
      "Categoria": "botanica",
      "Question" : "Questão 1",
      "title": "Qual a função do caule?",
      "alternatives": [
        "Sustentação.",
        "Suporte.",
        "Transporte de nutrientes.",
        "Polinização."
      ],
      "answer": 0

    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 2",
      "title": "Qual a função das flores?",
      "alternatives": [
        "Transporte de nutrientes.",
        "Sustentação.",
        "Reprodução das plantas.",
        "Polinização."
      ],
      "answer": 2
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 3",
      "title": "Qual a função das folhas?",
      "alternatives": [
        "Fixação no solo.",
        "Fotossíntese.",
        "Polinização.",
        "Atração de polinizadores."
      ],
      "answer": 1
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 4",
      "title": "Qual a função do fruto?",
      "alternatives": [
        "Fixação no solo.",
        "Dispersão da semente.",
        "Polinização.",
        "Fotossíntese."
      ],
      "answer": 1
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 5",
      "title": "Qual a função da raíz?",
      "alternatives": [
        "Dispersão da semente.",
        "Polinização.",
        "Fotossíntese.",
        "Fixação do solo."
      ],
      "answer": 3
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 6",
      "title": "Qual é a função da coifa?",
      "alternatives": [
        "Proteger a raíz no seu processo de crescimento.",
        "Proteger a folha no seu processo de crescimento.",
        "Porteger o caule no seu processo de crescimento.",
        "Proteger a flor no seu processo de crescimento."
      ],
      "answer": 0

    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 7",
      "title": "O que é seiva bruta?",
      "alternatives": [
        "É uma solução aquosa composta por sais minerais e açúcares.",
        "É somente uma solução aquosa absorvida pelas raízes.",
        "É uma solucação aquosa composta por açucares.",
        "É uma solução aquosa composta de sais minerais."
      ],
      "answer": 3
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 8",
      "title": "O que é seiva elabora?",
      "alternatives": [
        "É uma solução aquosa, composta principalmente por açucares e sais minerais.",
        "É uma solução aquosa, composta principalmente por açúcares.",
        "É uma solução formada somente na folha.",
        "É uma solução formada pelas flores."
      ],
      "answer": 1
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 9",
      "title": "Qual a função da floema?",
      "alternatives": [
        "Transporte da seiva elaborada.",
        "Transporte da seiva bruta.",
        "Transporte das seiva elaborada e bruta.",
        "Transporte de sais minerais."
      ],
      "answer": 0
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 10",
      "title": "Qual a função da xilema?",
      "alternatives": [
        "Transporte da seiva elaborada.",
        "Transporte das seiva elaborada e bruta.",
        "Transporte da seiva bruta.",
        "Transporte de sais minerais."
      ],
      "answer": 2
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 11",
      "title": "Quais são os tipos de fruto?",
      "alternatives": [
        "Fruto carnoso, fruto seco e fruto com semente.",
        "Fruto sem semente e fruto com semente.",
        "Fruto seco e fruto carnoso.",
        "Fruto seco, fruto com semente, fruto sem semente e fruto carnoso."
      ],
      "answer": 3
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 12",
      "title": "Como pode ser feita a dispersão das sementes?",
      "alternatives": [
        "Atráves do ar, da água e pelos agentes polinizadores (animais).",
        "Somente pelos polinizadores e pela água.",
        "Somente pelo ar e pela água.",
        "Somente pelos polinizadores."
      ],
      "answer": 0
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 13",
      "title": "Qual dos frutos abaixo pode NÃO possuir semente",
      "alternatives": [
        "Maçã e laranja.",
        "Banana e abacate.",
        "Laranja e morango.",
        "Laranja e banana."
      ],
      "answer": 3
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 14",
      "title": "Qual dos frutos abaixos é considerado FRUTO SECO?",
      "alternatives": [
        "Maçã.",
        "Noz .",
        "Uva.",
        "Marácuja."
      ],
      "answer": 1
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 15",
      "title": "Qual é uma das funções do fruto?",
      "alternatives": [
        "Auxiliar na polinização.",
        "Fixação da semente no solo.",
        "Proteção da semente.",
        "Nutrir a semente."
      ],
      "answer": 2
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 16",
      "title": "Qual a função dos pelos absorventes das raízes?",
      "alternatives": [
        "Retira a água do solo.",
        "Fixa a plata ao solo.",
        "Devolve ao solo água em excesso.",
        "Retira a água e sais minerais do solo."
      ],
      "answer": 3

    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 17",
      "title": "Os frutos além de protegerem a semente também...",
      "alternatives": [
        "Auxiliam na sua dispersão.",
        "Auxilia na fixação da semente no solo.",
        "Serve de nutrição para semente.",
        "Auxilia na quebra da dormência."
      ],
      "answer": 0
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 18",
      "title": "Qual estrutura da planta e responsável pela formação do fruto?",
      "alternatives": [
        "Folha.",
        "Caule.",
        "Flor.",
        "Semente."
      ],
      "answer": 2
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 19",
      "title": "Qual das seguintes estruras NÃO faz parte da raíz?",
      "alternatives": [
        "Coifa.",
        "Ramo principal.",
        "Pelos absorventes.",
        "Pelos absorventes."
      ],
      "answer": 3
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 20",
      "title": "Qual das seguintes estruturas NÃO faz parte das flores?",
      "alternatives": [
        "Estigma.",
        "Cálice.",
        "Pólen.",
        "Coifa."
      ],
      "answer": 3
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 21",
      "title": "O que é a “dormência” nas sementes?",
      "alternatives": [
        "Período que ela aguarda as condições ideias para germinação.",
        "Periodo que ela esta se maturando para germinação.",
        "Período que ela ainda será dispersada no ambiente.",
        "Período que ela esta dentro do fruto."
      ],
      "answer": 0

    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 22",
      "title": "O que é pseudofruto?",
      "alternatives": [
        "É quando a semente e o fruto se origiam na mesma região.",
        "É quando não ocorre a formação da semente.",
        "É quando partes da flor além do ovário se desenvolvem.",
        "É quando ocorre a formação do fruto seco."
      ],
      "answer": 2
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 23",
      "title": "A semente do mague é dispersada atráves:",
      "alternatives": [
        "Vento.",
        "Dos agentes polinizadores (animais).",
        "Água.",
        "Fruto."
      ],
      "answer": 1
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 24",
      "title": "As raizes aéreas podem ser encontradas em qual local?",
      "alternatives": [
        "Nos lagos.",
        "Nos rios.",
        "No estuário.",
        "Nos oceanos."
      ],
      "answer": 2
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 25",
      "title": "Em algumas raízes áquaticas é permitido o armazenamento de um gás, qual?",
      "alternatives": [
        "Carbonico (CO2).",
        "Oxigênio (O2).",
        "Nitrato (NO3-).",
        "Nenhum tipo de gás pode ser armazenado."
      ],
      "answer": 1
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 26",
      "title": "Os espinhos presentes nos cactos é qual estrutura modificada das plantas?",
      "alternatives": [
        "Folha.",
        "Fruto.",
        "Caule.",
        "Semente."
      ],
      "answer": 0

    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 27",
      "title": "Quais são os gases que participam da fotossíntese?",
      "alternatives": [
        "Oxigênio (O2) e nitrito (HNO2).",
        "Oxigênio (O2) e Gás Carbonico (CO2).",
        "Gás Carbonico (CO2) e nitrito (HNO2).",
        "Nitrito (HNO2) e Nitrato (NO3-)."
      ],
      "answer": 1
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 28",
      "title": "Qual etapa da quimiosíntese que não ultiliza a água (H2O)?",
      "alternatives": [
        "Fase I",
        "Fase II",
        "Fase I e II",
        "Fase I, II e na fotossíntese"
      ],
      "answer": 1
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 29",
      "title": "Qual é o nome do processo pelas plantas que não ultiliza a luz solar?",
      "alternatives": [
        "Fotossíntese",
        "Quimiossíntese",
        "Glutação",
        "Todas as alternativas"
      ],
      "answer": 1
    },
    {
      "Categoria": "botanica",
      "Question" : "Questão 30",
      "title": "Que tipo de estrutura da planta é a gavinha?",
      "alternatives": [
        "Caule",
        "Folha",
        "Fruto",
        "Raíz"
      ],
      "answer": 1
    }
    ],
    [
    {
      "Categoria": "anatomia",
      "Question" : "Questão 1",
      "title": "Qual a função do pulmão para o corpo humano?",
      "alternatives": [
        "Respiração",
        "Digestão",
        "Circulação do sangue",
        "Envio de informações",
      ],
      "answer": 0
    },
      {
      "Categoria": "anatomia",
      "Question" : "Questão 2",
      "title": "O pulmão participa de qual sistema do corpo humano??",
      "alternatives": [
        "Sistema cardiaco",
        "Sistema digestório",
        "Sistema nervoso",
        "Sistema respiratório",
      ],
      "answer": 3
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 3",
      "title": "Qual é o nome da membrana que reveste o pulmão?",
      "alternatives": [
        "Neurônios",
        "Pleura",
        "Alvéolos",
        "Faringe",
      ],
      "answer": 1
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 4",
      "title": "Qual a função da epiglote?",
      "alternatives": [
        "Impede que o alimento passe para as vias respiratórias",
        "Impede que o alimento siga para o estômago",
        "Permite que os nutrientes sigam para a corrente sanguínea",
        "Permite que o alimento siga para o intestino grosso"
      ],
      "answer": 0
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 5",
      "title": "Qual o nome da estrutura que permite a produção da fala?",
      "alternatives": [
        "Traqueia",
        "Faringe",
        "Laringe",
        "Cordas Vocais"
      ],
      "answer": 3
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 6",
      "title": "Qual a função do estômago no corpo humano?",
      "alternatives": [
        "Pré digestão e esterlização do alimento",
        "Digestão do alimento",
        "Controle da passagem do bolo alimentar",
        "Absorção da gordura"
      ],
      "answer": 0
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 7",
      "title": "O que é bolo alimentar?",
      "alternatives": [
        "É o alimento mastigado e misturado à saliva",
        "É o alimento antes de ser consumido",
        "É o alimento quando chega ao intestino",
        "É o ácido presente no estômago"
      ],
      "answer": 0
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 8",
      "title": "Qual a função do pâncreas?",
      "alternatives": [
        "Produzir ácidos para o corpo humano",
        "Produzir bactérias para o estômago",
        "Produzir hormônios ligados a digestão",
        "Produzir..."
      ],
      "answer": 2
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 9",
      "title": "Quando ____ o ar entra no nosso corpo e quando ____ o ar sai do nosso corpo",
      "alternatives": [
        "Espiranis e inspiramos",
        "Inspiramos e expiramos",
        "Respiramos e inspiramos",
        "Inspiramos e espiramos"
      ],
      "answer": 1
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 10",
      "title": "A ____ é capaz de fechar a ____ impedindo a passagem de alimento",
      "alternatives": [
        "Epiglote, laringe",
        "Faringe, laringe",
        "Traqueia, Faringe",
        "Cavidade nasal, faringe"
      ],
      "answer": 0
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 11",
      "title": "O pulmão é revestido por uma membrana dupla chamada:",
      "alternatives": [
        "Neura",
        "Pleura",
        "Alvéolos",
        "Brônquios"
      ],
      "answer": 1
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 12",
      "title": "O sangue considerado VENOSO é rico em qual gás?",
      "alternatives": [
        "Oxigênio(O2)",
        "Gás carbônico(CO2)",
        "Hidrogênio(H)",
        "O sangue não possui nenhum tipo de gás"
      ],
      "answer": 1
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 13",
      "title": "O sangue considerado ARTERIAL é rico em qual gás?",
      "alternatives": [
        "Oxigênio(O2)",
        "Gás carbônico(CO2)",
        "Hidrogênio(H)",
        "O sangue não possui nenhum tipo de gás"
      ],
      "answer": 0
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 14",
      "title": "São consideradas artérias, os vasos sanguíneos que levam o sangue de volta ao coração",
      "alternatives": [
        "Verdadeiro",
        "Falso",
      ],
      "answer": 1
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 15",
      "title": "Qual a função do esqueleto no corpo humano?",
      "alternatives": [
        "Proteção dos órgãos",
        "Auxílio na respiração",
        "Repasse de informações",
        "Circulação do sangue"
      ],
      "answer": 0
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 16",
      "title": "Os rins fazem parte de qual sistema do corpo humano?",
      "alternatives": [
        "Sistema disgestório",
        "Sistema respiratório",
        "Sistema urinário",
        "Sistema nervoso"
      ],
      "answer": 2
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 17",
      "title": "Qual é a articulação presente no corpo humano que é considerada imóvel?",
      "alternatives": [
        "Ossos do crânio",
        "Ossos dos dedos",
        "Ossos das vertebras",
        "Ossos do joelho"
      ],
      "answer": 0
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 18",
      "title": "O sistema nervoso está diretamente ligado a nossa percepção",
      "alternatives": [
        "Verdadeiro",
        "Falso"
      ],
      "answer": 0
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 19",
      "title": "O sistema nervoso pode desempenhar inúmeras funções ao mesmo tempo",
      "alternatives": [
        "Verdadeiro",
        "Falso"
      ],
      "answer": 0
    },
    ],
    [
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 1",
      "title": "Qual das alternativas abaixo NÃO representa um processo onde o sol participa?",
      "alternatives": [
        "Respiração.",
        "Alimentação.",
        "Produção de glicose.",
        "Condução da seiva bruta."
      ],
      "answer": 3

    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 2",
      "title": "Qual o tipo de vegetação que se e encontrada no Cerrado?",
      "alternatives": [
        "Árvores baixas e retorcidas.",
        "Árvores altas e retas.",
        "Plantas áquaticas e de pequeno porte.",
        "Plantas que armazenam água em seu interior."
      ],
      "answer": 0
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 3",
      "title": "Qual dos animais abaixo é somente encontrado no cerrado?",
      "alternatives": [
        "Arara-Azul.",
        "Lobo Guará.",
        "Onça pintada.",
        "Elefante."
      ],
      "answer": 1
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 4",
      "title": "As queimadas são benéficas para apenas um bioma, qual?",
      "alternatives": [
        "Amazônia.",
        "Mata atlântica.",
        "Cerrado.",
        "Caatinga."
      ],
      "answer": 3
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 5",
      "title": "Qual é a planta caracteristica do Cerrado?",
      "alternatives": [
        "Pau-brasil.",
        "Araucária.",
        "Cacto.",
        "Ipê."
      ],
      "answer": 2
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 6",
      "title": "Qual é a principal ameaça humana que ocorre no bioma Caatinga?",
      "alternatives": [
        "Queimadas clandestinas.",
        "Tráfico ilegal de plantas e animais.",
        "Destamatamento para criação de animais.",
        "Poluição de rios."
      ],
      "answer": 2
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 7",
      "title": "Qual é a principal ameaça humana que ocorre no bioma Cerrado?",
      "alternatives": [
        "Queimadas clandestinas.",
        "Tráfico ilegal de plantas e animais.",
        "Destamatamento para criação de animais.",
        "Poluição de rios."
      ],
      "answer": 0
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 8",
      "title": "Em qual dos biomas abaixo podemos encontrar o tatu?",
      "alternatives": [
        "Floresta amazônica.",
        "Mata atlântica.",
        "Pantanal.",
        "Caatinga."
      ],
      "answer": 3
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 9",
      "title": "Qual dos biomas que é composto pela vegetação de outros biomas?",
      "alternatives": [
        "Floresta amazônica.",
        "Pantanal.",
        "Cerrado.",
        "Caatinga."
      ],
      "answer": 1
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 10",
      "title": "Qual dos animais abaixo pode ser encontrado no Pantanal?",
      "alternatives": [
        "Jacaré.",
        "Arara-azul.",
        "Tatu.",
        "Cobra."
      ],
      "answer": 0
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 11",
      "title": "Qual dos ecossistemas costeiros é considerado o berçário da vida?",
      "alternatives": [
        "Praia.",
        "Mangue.",
        "Restinga.",
        "Rios."
      ],
      "answer": 1
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 12",
      "title": "Qual é o bioma que fica com sua vegetação esverdeada somente na epóca das chuvas?",
      "alternatives": [
        "Cerrado.",
        "Caatinga.",
        "Pantanal.",
        "Mata atlântica."
      ],
      "answer": 1
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 13",
      "title": "No cerrado existem plantas denominadas xerofitas, qual é um exemplo destas plantas?",
      "alternatives": [
        "Vitoria-Régia.",
        "Palmeiras.",
        "Videiras.",
        "Xique-xique."
      ],
      "answer": 3
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 14",
      "title": "Existe uma estrutura que reduz a perca d’água em um ambiente extremamente seco. Que estrutra é esta?",
      "alternatives": [
        "Caule.",
        "Influorescência.",
        "Espinhos.",
        "Fruto seco."
      ],
      "answer": 2
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 15",
      "title": "A caatinga é um bioma que possui espécies que somente são encontradas lá. Qual destas plantas não é encontrado em nenhum outro bioma?",
      "alternatives": [
        "Mandacaru.",
        "Vitória-régia.",
        "Araucária.",
        "Epífitas."
      ],
      "answer": 0
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 16",
      "title": "O pantanal abrage alguns estados brasileiros, assim como dois outros países. Quem são eles?",
      "alternatives": [
        "Acre, Rondônia, Bolívia e Peru.",
        "Mato Grosso, Mato Grosso do Sul, Paraguai e Bolívia.",
        "Amazonas, Pará, Colombia, Venezuela.",
        "Roraima, Amapa, Venezuela, Guiana."
      ],
      "answer": 1
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 17",
      "title": "O pantanal sofre com a interferência humana, causando desmatamento para criação de animais, qual é a outra ameaça enfrentada por este bioma?",
      "alternatives": [
        "Impacto do turismo.",
        "Queimadas clandestinas.",
        "Tráfico ilegal de plantas e animais."
      ],
      "answer": 0
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 18",
      "title": "Qual dos animais abaixo podem ser encontrados nos manguezais?",
      "alternatives": [
        "Jacaré.",
        "Jabuti.",
        "Caranguejo.",
        "Pombo."
      ],
      "answer": 2
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 19",
      "title": "A mistura da água doce dos rios e a água salgada do mar é chamada de:",
      "alternatives": [
        "Água suja.",
        "Água salobra.",
        "Água translucida.",
        "Água agridoce."
      ],
      "answer": 1
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 20",
      "title": "O derramamento de petróleo no mar pode interferir diretamente na vida de outros animais de que forma?",
      "alternatives": [
        "Causando a morte de todos os animais no ambiente marinho.",
        "Causando a morte apenas de peixes.",
        "Causando a morte apenas de aves.",
        "Causando a morte de frutos do mar, peixes e aves que entraram em contato com o petróleo."
      ],
      "answer": 3
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 21",
      "title": "As plantas dos manguezais, possuem estruturas bastante caracteristicas. Como é chamada as raízes dos manguezais?",
      "alternatives": [
        "Raízes tabulares.",
        "Raízes de suporte.",
        "Raízes aquáticas.",
        "Raízes sugadoras."
      ],
      "answer": 1
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 22",
      "title": "Uma das maiores ameaçadas dos ambientes aquáticos pode ser considerada:",
      "alternatives": [
        "O lixo descartado em locais incorretos.",
        "Saneamento básico corrreto.",
        "Descarte correto do lixo.",
        "O ambiente aquático não sofre nenhuma ameaça."
      ],
      "answer": 0
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 23",
      "title": "Qual é o tipo de solo que pode ser encontrado nos mangues?",
      "alternatives": [
        "Profundos, permeáveis, bem drenados.",
        "Seco, arenoso, rico em nutrinetes.",
        "Arenoso, pobre em nutrientes e bastante úmido.",
        "Úmido, salgado, lodoso, pobre em oxigênio e muito rico em nutrientes."
      ],
      "answer": 3
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 24",
      "title": "Vegetação típica de regiões costeiras, sendo uma área de encontro das águas do mar com as águas doces dos rios. Que bioma e este?",
      "alternatives": [
        "Pantanal.",
        "Caatinga.",
        "Cerrrado.",
        "Mangue."
      ],
      "answer": 3
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 25",
      "title": "Compondo a vegetação dos estados de Mato Grosso e Mato Grosso do Sul é um tipo de bioma que se caracteriza por ser uma das maiores planícies ________ do planeta.",
      "alternatives": [
        "Deserticas.",
        "Inundáveis.",
        "Áridas.",
        "Secas."
      ],
      "answer": 1
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 26",
      "title": "Vegetação típica das regiões costeiras onde ocorre o encontro do mar com orio, nesta veretação é comum a presença de carangueijo, a qual bioma serefere?",
      "alternatives": [
        "Pantanal.",
        "Mangue.",
        "Cerrado.",
        "Caatinga."
      ],
      "answer": 1
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 27",
      "title": "Qual o impacto causado na costa brasileira pela presença de petróleo e outroscomponentes descartados incorretamente pelo homem?",
      "alternatives": [
        "O meio ambiente possui recursos renováveis e ilimitados, portanto em nada se modifica.",
        "A vida marinha tal como a conhecemos, também é fruto de componentespresentes no petróleo, pois o mesmo é extraído do mar.",
        "O derramamento de óleo que atingiu o litoral brasileiro não impactoudiretamente o meio ambiente, pois o mesmo já foi recolhido.",
        "O derramento de óleo bruto e o descarte de lixo impactam diretamente navida marinha e destóem o equilíbrio do ecossistema."
      ],
      "answer": 3
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 28",
      "title": "Em qual dos biomas abaixo, podemos encontrar a maior volume de água aparente?",
      "alternatives": [
        "Caatinga.",
        "Cerrado.",
        "Pantanal.",
        "Pampas."
      ],
      "answer": 2
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 29",
      "title": `De acordo com as afirmativas abaixo, marque (V) para verdadeiro e (F) para falso.
      <br>( ) A Caatinga é o bioma que mais prevalece na região norte.
      <br>( ) A vegetação típica do Cerrado é composta por árvores espaçadas, baixas e
      retorcidas, além de possuir vegetação rasteira semelhante ao capim.
      <br>( ) Durante sete meses corridos ocorrem chuvas constantes no bioma denominado
      Pantanal.`,
      "alternatives": [
        "F, V, V.",
        "V, F, V.",
        "F, F, V.",
        "V, V, V."
      ],
      "answer": 0
    },
    {
      "Categoria": "meioAmbiente",
      "Question" : "Questão 30",
      "title": "Qual dos biomas abaixo vem sofrendo desmatamento e tendo suas áreas utilizadas para pecuária e produção agrícola, desde a década de 60?",
      "alternatives": [
        "Cerrado.",
        "Caatinga.",
        "Pantanal.",
        "Pampas."
      ],
      "answer": 0
    }
    ],
    [
    {
        "Categoria": "zoologia",
      "Question" : "Questão 1",
      "title": "O que são animais herbivoros?",
      "alternatives": [
        "São seres que produzem seu próprio alimento.",
        "São animais que se alimentam de outros animais.",
        "São animais que se alimentam de outros animais e plantas.",
        "São animais que se alimentam apenas de plantas ou de suas partes.",
      ],
      "answer": 3
  
    },
    {
      "Categoria": "zoologia",
      "Question" : "Questão 2",
      "title": "O que são animais carnivoros?",
      "alternatives": [
        "São seres que produzem seu próprio alimento.",
        "São animais que se alimentam apenas de outros animais.",
        "São animais que se alimentam de outros animais e plantas.",
        "São animais que se alimentam apenas de plantas ou de suas partes."
      ],
      "answer": 1
    },
    {
      "Categoria": "zoologia",
      "Question" : "Questão 3",
      "title": "Qual dos animais abaixo, pode ser considerado insetivoro:",
      "alternatives": [
        "Sapo.",
        "Mosca.",
        "Abelha.",
        "Hipopótamo."
      ],
      "answer": 0
    },
  
    
    {
      "Categoria": "zoologia",
      "Question" : "Questão 4",
      "title": "Qual dos animais abaixo pode ser considerado carnivoro:",
      "alternatives": [
        "Hipopótamo.",
        "Elefante.",
        "Girafa.",
        "Leão."
      ],
      "answer": 3
  
    },
    {
      "Categoria": "zoologia",
      "Question" : "Questão 5",
      "title": "Na sequência a seguir: flor, abelha, _______. Qual animal compõe esta cadeia alimentar?",
      "alternatives": [
        "Girafa.",
        "Sapo.",
        "Jabuti.",
        "Pinguin."
      ],
      "answer": 1
    },
    {
      "Categoria": "zoologia",
      "Question" : "Questão 6",
      "title": "Existe uma planta que além de produzir seu próprio alimento, ela pode obter outros nutrientes de outros seres vivos. Que planta é está?",
      "alternatives": [
        "Cacto.",
        "b) Araúcária.",
        "c) Planta carnívora.",
        "d) Não existe uma planta que possa fazer isto."
      ],
      "answer": 2
    },
    
    
    {
      "Categoria": "zoologia",
      "Question" : "Questão 7",
      "title": "Na cadeia alimentar as plantas sempre ocupam o lugar de:",
      "alternatives": [
        "Produtor.",
        "Consumidor primario.",
        "Consumidor secundário.",
        "Consumidor terciário."
      ],
      "answer": 0
  
    },
    {
      "Categoria": "zoologia",
      "Question" : "Questão 8",
      "title": "O sapos são classificados como:",
      "alternatives": [
        "Mamífero.",
        "Anfíbio.",
        "Réptil",
        "Ave."
      ],
      "answer": 1
    },
    {
      "Categoria": "zoologia",
      "Question" : "Questão 9",
      "title": "São considerados animais frugívoros...",
      "alternatives": [
        "Animais que se alimentam apenas de folhas.",
        "Animais que se alimentam apenas de flores.",
        "Animais que se alimentam apenas de frutas.",
        "Animais que se alimentam de todas as partes da planta."
      ],
      "answer": 2
    },
  
    
    {
      "Categoria": "zoologia",
      "Question" : "Questão 10",
      "title": "São considerados animais granivoros...",
      "alternatives": [
        "Animais que se alimentam apenas de sementes.",
        "Animais que se alimentam de sementes e frutos.",
        "Animais que se alimentam de folhas e sementes.",
        "d) Animais que se alimentam apenas de frutos."
      ],
      "answer": 0
  
    },
    {
      "Categoria": "zoologia",
      "Question" : "Questão 11",
      "title": "O que são animais dentritívoros:",
      "alternatives": [
        "São animais que se alimentam de matéria orgânica em decomposição de origem animal ou vegetal.",
        "São animais que se alimentam APENAS de matéria orgânica animal em decomposição.",
        "São animais que se alimentam APENAS de matéria orgânica vegetal em decomposição.",
        "São animais que NÃO se alimentam de matéria orgânica em decomposição."
      ],
      "answer": 0
    },
    {
      "Categoria": "zoologia",
      "Question" : "Questão 12",
      "title": "Qual dos animais abaixo podem ser considerados herbivoros?",
      "alternatives": [
        "a) Jabuti.",
        "Mosca.",
        "Elefante.",
        "Leão."
      ],
      "answer": 2
    },
    
    {
      "Categoria": "zoologia",
      "Question" : "Questão 13",
      "title": "Os répteis são animais que não conseguem regular...",
      "alternatives": [
        "A temperatura do seu corpo.",
        "A sua respiração.",
        "A sua velocidade.",
        "Os seus movimentos."
    ],
    "answer": 0
  
    },
    {
      "Categoria": "zoologia",
      "Question" : "Questão 14",
      "title": "Os anfibios possuem duas fases no seu ciclo de vida, que são:",
      "alternatives": [
        "Uma aquática e uma terrestre.",
        "Uma aquática e outra aerea.",
        "Uma aerea e outra terreste.",
        "Uma aquática e outra terrestre podendo haver exeções."
      ],
      "answer": 3
    },
    {
      "Categoria": "zoologia",
      "Question" : "Questão 15",
      "title": "Os mamiferos são animais que podem ser...",
      "alternatives": [
        "Somente terrestres.",
        "Somente aquáticos.",
        "Aquáticos e terrestres.",
        "Aquáticos e aereos."
      ],
      "answer": 2
    },
      
    {
      "Categoria": "zoologia",
      "Question" : "Questão 16",
      "title": "A baleia é um animal caracterizado como:",
      "alternatives": [
        "Anfíbio.",
        "Peixe.",
        "Réptil.",
        "Mamífero."
      ],
      "answer": 3
  
    },
    {
      "Categoria": "zoologia",
      "Question" : "Questão 17",
      "title": "O grupo dos répteis é bastante diverso, qual característica é comum a todos?",
      "alternatives": [
        "Todos os filhotes nascem de ovos.",
        "Todos os filhoes possuem cuidado parental.",
        "Todos os filhotes nascem do ventre das suas mães.",
        "Todos os filhotes nascem em ovos liquidos que ficm na água."
      ],
      "answer": 0
    },
    {
      "Categoria": "zoologia",
      "Question" : "Questão 18",
      "title": "A maioria dos anfíbios depositam seus ovos na _____ até que seus filhotes nasçam.",
      "alternatives": [
        "Água salgada.",
        "Água doce.",
        "Água salgada.",
        "Terra."
      ],
      "answer": 1
    },  
    {
      "Categoria": "zoologia",
      "Question" : "Questão 19",
      "title": "Os sapos quando filhotes possuem uma calda.",
      "alternatives": [
        "Verdadeiro.",
        "Falso."
    ],
    "answer": 0
  
    },
    {
      "Categoria": "zoologia",
      "Question" : "Questão 20",
      "title": "Os pinguins não podem voar, porém, são excelentes nadadores.  ",
      "alternatives": [
        "Verdadeiro.",
       "Falso."
    ],
    "answer": 0
    },
    {
      "Categoria": "zoologia",
     "Question" : "Questão 21",
     "title": "Os jacarés são considerados mamíferos, mesmo seus filhotes nascendo de ovos.",
     "alternatives": [
        "Verdadeiro.",
       "Falso."
    ],
    "answer": 1
    },
      
    {
      "Categoria": "zoologia",
      "Question" : "Questão 22",
     "title": "As aves podem controlar sua temperatura térmica assim como os mamíferos.",
     "alternatives": [
       "Verdadeiro.",
       "Falso."
    ],
    "answer": 0
  
    },
    {
      "Categoria": "zoologia",
     "Question" : "Questão 23",
     "title": "As aves podem apenas voar e andar.",
     "alternatives": [
       "Verdadeiro.",
        "Falso."
    ],
    "answer": 1
    },
    {
      "Categoria": "zoologia",
     "Question" : "Questão 24",
     "title": "Em qual das alternativas abaixo expressa um consumidor primário?",
     "alternatives": [
        "Plantas.",
        "Lagarta.",
       "Leão.",
        "Sapo."
    ],
    "answer": 1
    },  
    {
      "Categoria": "zoologia",
      "Question" : "Questão 25",
      "title": "Como é denominado os animais que conseguem regular sua temperatura interna sem auxílio do ambiente externo:",
     "alternatives": [
       "Ectodérmicos",
        "Endodérmicos"
    ],
    "answer": 0
  
    },
    {
      "Categoria": "zoologia",
     "Question" : "Questão 26",
     "title": "É considerado réptil escamado:",
      "alternatives": [
       "Cobra.",
        "Jacaré.",
       "Jabuti.",
       "Crocodilo."
    ],
    "answer": 0
    },
    {
      "Categoria": "zoologia",
      "Question" : "Questão 27",
      "title": "São animais que durante seu desenvolvimento passam por um processo de metamorfose:",
      "alternatives": [
        "Sapos, Rãs e Pererecas.",
        "Jacarés, crocodilos e gaviais.",
        "Serpentes.",
        "Salamandras."
    ],
    "answer": 0
    },
      
    {
      "Categoria": "zoologia",
      "Question" : "Questão 28",
      "title": "São considerados ovíparos:",
      "alternatives": [
        "Animais que reproduzem-se por meio de ovos e apresentam fecundação externa.",
        "Animais que reproduzem-se por meio de ovos e apresentam fecundação interna.",
        "Animais que reproduzem-se por meio da placenta apresentam fecundação interna.",
        "Animais que não podem se reproduzir."
    ],
    "answer": 1
  
    },
    {
      "Categoria": "zoologia",
      "Question" : "Questão 29",
      "title": "Algumas aves possuem uma glândula que produz uma secreção óleosa, esta serve para:",
      "alternatives": [
        "Manter as penas hidratadas.",
        "b) Apenas impermeabilizar as penas.",
        "c) Impermeabilizar as penas, facilitando a flutuação e secagema.",
        "d) Fortalece e ajuda no crescimento das penas, além de deixálas mais brilhosas."
    ],
    "answer": 2
    },
    {
      "Categoria": "zoologia",
      "Question" : "Questão 30",
      "title": "Qual deste animais NÃO é um mamífero?",
      "alternatives": [
        "Baleia.",
        "Esquilo.",
        "Morcego.",
        "Salamandra."
    ],
    "answer": 3
    }
  ]];