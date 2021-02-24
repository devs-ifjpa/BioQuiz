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
      "answer": 0,
      "wrong": "As principais funções do caule são: sustentação da planta, transporte da seiva e serve como suporte em caso de plantas trepadeiras."

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
      "answer": 2,
      "wrong": "As flores são os órgãos reprodutores das plantas angiospermas."
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
      "answer": 1,
      "wrong": "As folhas são estruturas de suma importância para a maioria das espécies de plantas, dentre suas funções, podemos destacar a fotossíntese, a respiração e a transpiração."
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
      "answer": 1,
      "wrong": "A principal função do fruto é de proteger as sementes, assim como também facilitar a sua dispersão."
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
      "answer": 3,
      "wrong": "A raiz das plantas é o órgão responsável pela sustentação e fixação no solo ou onde ela esteja inserida."
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
      "answer": 0,
      "wrong": "A coifa é uma estrutura que serve como uma espécie de capacete natural para as raízes protegendo e permitindo o crescimento e penetração no solo sem danos."

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
      "answer": 3,
      "wrong": "A seiva bruta é proveniente das raízes e contém água e sais minerais, sendo utilizada posteriormente pelas folhas no processo da fotossíntese, formando assim os açúcares."
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
      "answer": 1,
      "wrong": "A seiva elaborada é proveniente das folhas sendo composta por água, sais minerais e açúcares e transportada pelo floema nas plantas vasculares."
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
      "answer": 0,
      "wrong": "A floema é o conjunto de vasos condutores que é responsável pelo transporte da seiva elaborada direcionando-as das folhas para todos os órgãos da planta."
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
      "answer": 2,
      "wrong": "A xilema é o conjunto de vasos condutores que é responsável pelo transporte da seiva bruta que são os sais minerais e a água."
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
      "answer": 3,
      "wrong": "Existem diversos tipos de frutos de acordo com a grande variedade de espécies de plantas no ambiente, como os frutos secos temos exemplo da vagem do feijão e fruto com semente: a maçã, fruto sem semente a banana e fruto carnoso a uva."
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
      "answer": 0,
      "wrong": "A dispersão das sementes pode ser dada de inúmeras maneiras, através do ar, como o dente de leão, da água, como as sementes das árvores do manguezal, e por meio de animais. Quando os animais se alimentam dos frutos alguns engolem as sementes que são liberadas nas fezes que acabam ficando em um ambiente muito rico em nutrientes e germinam."
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
      "answer": 3,
      "wrong": "Os frutos sem sementes são aqueles que as flores não foram fecundadas, assim não gerando a semente (embrião), sendo muito comum à banana."
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
      "answer": 1,
      "wrong": "Os frutos secos não apresentam polpa, tampouco são macios ou suculentos, são rígidos e não possuem água em seu interior, na sua grande maioria não são comestíveis."
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
      "answer": 2,
      "wrong": "O fruto nada mais é que o desenvolvimento do ovário da planta, este por sua vez possui sementes (embrião fecundado) em seu interior."
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
      "answer": 3,
      "wrong": "Os pelos absorventes presentes nas raízes auxiliam na sucção da água e de nutrientes."

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
      "answer": 0,
      "wrong": "A principal função do fruto é de proteger as sementes, como também facilitar a sua dispersão, eles são compostos por um acúmulo de substâncias nutritivas e um envoltório rígido externo, como a maçã."
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
      "answer": 2,
      "wrong": "Nas flores estão inseridos os grãos de pólen e a partir destes se formam os gametas masculinos, que após fecundados darão origem aos frutos da planta."
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
      "answer": 3,
      "wrong": "Após o processo de polinização inicia-se então a fecundação das flores. Os grãos de pólen que alcançam o estigma da mesma espécie se transformam em um tubo que se prolonga do estigma até o ovário. O estigma é uma estrutura receptora em formato de haste podendo ser pegajosos, assim sendo sua principal função a recepção pólen para induzi-lo até o ovário da flor para que ocorra a fecundação."
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
      "answer": 3,
      "wrong": "A coifa é uma estrutura que serve como uma espécie de capacete natural para a raízes protegendo e permitindo o crescimento e penetração no solo sem danos."
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
      "answer": 0,
      "wrong": "Durante o processo de dormência a semente se mantém estável até que possua o estímulo externo necessário para quebrar o seu adormecimento dando início ao ciclo de germinação originando assim, uma nova planta."

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
      "answer": 2,
      "wrong": "Em algumas plantas as flores também passam por um processo de desenvolvimento, fazendo com que surjam os frutos falsos, estes por sua vez também possuem função de dispersão das sementes, como o morango ou caju."
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
      "answer": 1,
      "wrong": "As sementes são dispersadas na água da maré, pois estas árvores ficam próximas dos leitos dos estuários ou em áreas um pouco mais distantes, mas que alagam."
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
      "answer": 2,
      "wrong": "São consideradas raízes aéreas aquelas que possuem múltiplas funções além de sustentação auxiliar na respiração da planta e na obtenção do gás oxigênio (O2) como as plantas de mangue, consideradas raízes respiratórias."
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
      "answer": 1,
      "wrong": "São consideradas raízes aquáticas as que ficam completamente submergidas em baixo d’água, como a vitória-régia. Estas absorvem o oxigênio dissolvido na água."
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
      "answer": 0,
      "wrong": "Os cactos são plantas que habitam regiões áridas, como o deserto e a caatinga e, geralmente, apresentam folhas reduzidas e modificadas em espinhos, assim evitando a perda d’água desnecessária."

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
      "answer": 1,
      "wrong": "A fotossíntese ou síntese da luz é o processo que ocorre como obtenção de energia e alimento pelas plantas, sendo necessário para acontecer a água, dióxido de carbono (CO2) e a luz solar, assim como produto final se é liberado outros gases como o oxigênio (O)."
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
      "answer": 1,
      "wrong": "Fase 2: A segunda etapa pode ser entendida pela seguinte equação: O gás carbônico (CO2) + água H2O + Energia Química resultando em → Compostos Orgânicos + Oxigênio O2."
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
      "answer": 1,
      "wrong": "A quimiossíntese é a produção de energia através da oxidação de matéria orgânica geralmente ocasionada por ação bacteriana, sem recorrer à luz solar."
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
      "answer": 1,
      "wrong": "Gavinha é um órgão presente nas plantas trepadeiras. São estruturas simples ou bifurcadas na extremidade com a função de agarrar ramos, galhos, folhas, ou qualquer outro objeto que sirva de apoio para a planta em crescimento."
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
      "answer": 0,
      "wrong": "O pulmão é um órgão que compõe o sistema respiratório, sendo responsável pelas trocas gasosas entre o ambiente e o sangue. A sua principal função é oxigenar o sangue e eliminar o dióxido de carbono (CO2)."
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
      "answer": 3,
      "wrong": "O sistema respiratório é o conjunto de órgãos responsáveis pelas trocas gasosas entre o organismo dos animais e o meio ambiente, ou seja, a hematose pulmonar, possibilitando a respiração celular."
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
      "answer": 1,
      "wrong": "A pleura é uma membrana fina e transparente composta por duas camadas que revestem os pulmões e o interior da parede torácica."
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
      "answer": 0,
      "wrong": "A epiglote, é uma camada cartilaginosa fina e móvel. No processo de deglutição (ato de engolir) ela fecha a entrada da laringe o que impede a passagem de alimentos pelas vias respiratórias."
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
      "answer": 3,
      "wrong": "As pregas vocais é um tecido muscular localizadas no interior da laringe. Ao expulsar do ar por elas é produzida uma vibração cujos os sons cujo os usamos para nos comunicar."
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
      "answer": 0,
      "wrong": "O estômago é um órgão participante do sistema digestório, responsável pela pré digestão e esterilização, para que o bolo alimentar siga para o intestino, onde são absorvidos os nutrientes."
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
      "answer": 0,
      "wrong": "O bolo alimentar é o nome dado ao alimento mastigado e misturado à saliva."
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
      "answer": 2,
      "wrong": "O pâncreas é uma glândula participante do sistema digestório e endócrino, responsável pela produção de hormônios de suma importância, dentre elas a insulina, e sua função se baseia na metabolização da glicose."
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
      "answer": 1,
      "wrong": "A inspiração, ocorre pela contração da musculatura do diafragma e dos músculos intercostais. Já a expiração dá-se pelo relaxamento da musculatura do diafragma e dos músculos intercostais."
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
      "answer": 0,
      "wrong": "A epiglote está no início da laringe possuindo a função de uma lâmina que se encontra por detrás da língua e serve para fechar a ligação da faringe com a glote durante a deglutição."
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
      "answer": 1,
      "wrong": "Os ossos possuem a função de sustentação e proteção dos órgãos, além de serem capazes de armazenar certos tipos de nutrientes e minerais importantes."
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
      "answer": 1,
      "wrong": "Sangue venoso é o sangue pobre em oxigênio e rico em dióxido de carbono."
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
      "answer": 0,
      "wrong": "As artérias são canais de maior espessura, responsáveis pelo deslocamento do sangue do coração para o pulmão, retornando ao coração e seguindo para o corpo inteiro rico em oxigênio."
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 14",
      "title": "São consideradas artérias, os vasos sanguíneos que levam o sangue de volta ao coração",
      "alternatives": [
        "Verdadeiro",
        "Falso",
      ],
      "answer": 1,
      "wrong": "As artérias são canais de maior espessura, responsáveis pelo deslocamento do sangue do coração para o pulmão, sendo as veias responsáveis por levarem o sangue de volta ao coração."
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
      "answer": 0,
      "wrong": "O esqueleto humano é formado pelos ossos e tem como função principal a proteção de órgãos vitais para o ser vivo, como o as costelas que protegem alguns órgãos vitais como o coração e os pulmões assim como o crânio que protege o cérebro."
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
      "answer": 2,
      "wrong": "O Sistema urinário é composto por dois rins e pelas vias urinárias, formada por dois ureteres, a bexiga urinária e a uretra. 17. Qual é a articulação presente no corpo humano que é considerada imóvel?"
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
      "answer": 0,
      "wrong": "As articulações imóveis são as articulações que que possuem tecido cartilaginoso e/ou fibroso, impedindo quase completamente o movimento."
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 18",
      "title": "O sistema nervoso está diretamente ligado a nossa percepção",
      "alternatives": [
        "Verdadeiro",
        "Falso"
      ],
      "answer": 0,
      "wrong": "O sistema nervoso é responsável por funções voluntárias e involuntárias do ser vivo, como a locomoção, raciocínio, memória e funcionamento de órgãos vitais como o bombeamento do sangue e a respiração."
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 19",
      "title": "O sistema nervoso pode desempenhar inúmeras funções ao mesmo tempo",
      "alternatives": [
        "Verdadeiro",
        "Falso"
      ],
      "answer": 0,
      "wrong": "O sistema nervoso humano coordena e regula todas as atividades corporais, das mais simples as mais complexas como o bombeamento de sangue até mesmo o bocejar."
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 20",
      "title": "Qual das seguintes estruturas NÃO faz parte das flores?",
      "alternatives": [
        "Estigma.",
        "Cálice.",
        "Pólen.",
        "Coifa."
      ],
      "answer": 3,
      "wrong": "A célula animal é eucariótica e constituída basicamente de membrana celular, citoplasma e núcleo."
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 21",
      "title": "O que é a “dormência” nas sementes?",
      "alternatives": [
        "Período que ela aguarda as condições ideias para germinação.",
        "Período que ela está se maturando para germinação.",
        "Período que ela ainda será dispersada no ambiente.",
        "Período que ela está dentro do fruto."
      ],
      "answer": 0,
      "wrong": "Os centríolos organelas responsáveis pela divisão celular possuem a capacidade de duplicação durante seu ciclo, organizando o fuso acromático."
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 22",
      "title": "O que é pseudofruto?",
      "alternatives": [
        "É quando a semente e o fruto se originam na mesma região.",
        "É quando não ocorre a formação da semente.",
        "É quando partes da flor além do ovário se desenvolvem.",
        "É quando ocorre a formação do fruto seco."
      ],
      "answer": 2,
      "wrong": "Os vacúolos são estruturas celulares que podem ser facilmente encontradas nas células vegetais, entretanto não são tão facilmente encontradas nas células animais."
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 23",
      "title": "A semente do mangue é dispersada através:",
      "alternatives": [
        "Vento.",
        "Dos agentes polinizadores (animais).",
        "Água.",
        "Fruto."
      ],
      "answer": 2,
      "wrong": "O ácido clorídrico ou suco gástrico é responsável pela digestão dos alimentos e diminuição de suas partículas para melhor absorção dos nutrientes."
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 24",
      "title": "As raízes aéreas podem ser encontradas em qual local?",
      "alternatives": [
        "Nos lagos.",
        "Nos rios.",
        "No estuário.",
        "Nos oceanos."
      ],
      "answer": 2,
      "wrong": "A pepsina possui a função de mudar a forma física das proteínas as transformando em partículas menores para serem melhores absorvidas pelo intestino."
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 25",
      "title": "Em algumas raízes aquáticas é permitido o armazenamento de um gás, qual?",
      "alternatives": [
        "Carbônico (CO2).",
        "Oxigênio (O2).",
        "Nitrato (NO3-).",
        "Nenhum tipo de gás pode ser armazenado."
      ],
      "answer": 1,
      "wrong": "Todo sangue que chega ao coração é sangue venoso. O sangue rico em oxigênio é o arterial. Todo vaso que chega ao coração é veia. Todo vaso que sai do coração é artéria."
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 26",
      "title": "O espinho presente nos cactos faz parte de qual estrutura modificada das plantas?",
      "alternatives": [
        "Folha.",
        "Fruto.",
        "Caule.",
        "Semente."
      ],
      "answer": 0,
      "wrong": "O pâncreas é uma importante glândula do corpo humano, sendo responsável pela produção de hormônios e enzimas digestivas."
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 27",
      "title": "Qual das alternativas abaixo representa um produto final da fotossíntese?",
      "alternatives": [
        "Oxigênio (O2) e nitrito (HNO2).",
        "Oxigênio (O2) e Gás Carbônico (CO2).",
        "Gás Carbônico (CO2) e nitrito (HNO2).",
        "Nitrito (HNO2) e Nitrato (NO3-)."
      ],
      "answer": 1,
      "wrong": "A produção de insulina em humanos e em outros mamíferos ocorre em células betas que se localizam no pâncreas, sendo de suma importância para síntese de açucares."
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 28",
      "title": "Qual etapa da quimiossíntese que não utiliza a água (H2O)?",
      "alternatives": [
        "Fase I.",
        "Fase II.",
        "Fase I e II.",
        "Fase I, II e na fotossíntese."
      ],
      "answer": 1,
      "wrong": "A cartilagem possui função essencial nas articulações ósseas, promovendo lubrificação e amortecimento dos ossos."
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 29",
      "title": "Qual é o nome do processo que as plantas passam e que não utiliza a luz solar?",
      "alternatives": [
        "Fotossíntese.",
        "Quimiossíntese.",
        "Gutação.",
        "Todas as alternativas."
      ],
      "answer": 1,
      "wrong": "Os rins são órgãos responsáveis pela filtração da água do nosso corpo, ou seja, através dele é repassado ao organismo os nutrientes necessários e quando detectado os excesso e componentes que são tóxicos ao corpo humano são excretados."
    },
    {
    "Categoria": "anatomia",
      "Question" : "Questão 30",
      "title": "Que tipo de estrutura da planta é a gavinha?",
      "alternatives": [
        "Caule.",
        "Folha.",
        "Fruto.",
        "Raiz."
      ],
      "answer": 1,
      "wrong": "As demais alternativas não podem ser consideradas órgãos pois são outros componentes do corpo humano como veias, artérias e os ossos."
    },
    ],
    [
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 1",
      "title": "Qual das alternativas abaixo NÃO representa um processo onde o sol participa?",
      "alternatives": [
        "Respiração.",
        "Alimentação.",
        "Produção de glicose.",
        "Condução da seiva bruta."
      ],
      "answer": 3,
      "wrong": "A seiva bruta é proveniente das raízes e contém água e sais minerais sendo utilizada, posteriormente, pelas folhas no processo da fotossíntese formando assim os açúcares."

    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 2",
      "title": "Qual o tipo de vegetação que se e encontrada no Cerrado?",
      "alternatives": [
        "Árvores baixas e retorcidas.",
        "Árvores altas e retas.",
        "Plantas áquaticas e de pequeno porte.",
        "Plantas que armazenam água em seu interior."
      ],
      "answer": 0,
      "wrong": "A flora típica do cerrado é composta por árvores espaçadas, baixas e retorcidas, além de possuir vegetação rasteira semelhante ao capim."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 3",
      "title": "Qual dos animais abaixo é somente encontrado no cerrado?",
      "alternatives": [
        "Arara-Azul.",
        "Lobo Guará.",
        "Onça pintada.",
        "Elefante."
      ],
      "answer": 1,
      "wrong": "A fauna deste ambiente pode ser facilmente ilustrada com animais como: lobo-guará, tamanduá-bandeira, veado-campeiro e diversas serpentes."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 4",
      "title": "As queimadas são benéficas para apenas um bioma, qual?",
      "alternatives": [
        "Amazônia.",
        "Mata atlântica.",
        "Cerrado.",
        "Caatinga."
      ],
      "answer": 3,
      "wrong": "O cerrado tem um período médio de 6 meses de seca entre abril e agosto em que acontecem as queimadas naturais por conta da vegetação seca e dos raios solares fortes, contudo as queimadas são benéficas ao ambiente, pois permitem o processo de germinação de sementes que estão em dormência."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 5",
      "title": "Qual é a planta caracteristica do Cerrado?",
      "alternatives": [
        "Pau-brasil.",
        "Araucária.",
        "Cacto.",
        "Ipê."
      ],
      "answer": 2,
      "wrong": "As plantas mais abundantes do cerrado podem ser facilmente lembradas pelos cactos, dentre eles podemos destacar: o mandacaru, xiquexique e a palma."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 6",
      "title": "Qual é a principal ameaça humana que ocorre no bioma Caatinga?",
      "alternatives": [
        "Queimadas clandestinas.",
        "Tráfico ilegal de plantas e animais.",
        "Destamatamento para criação de animais.",
        "Poluição de rios."
      ],
      "answer": 2,
      "wrong": "Na caatinga, assim como em diversos outros biomas brasileiros, ocorrem ameaças causadas por humanos como o desmatamento para a criação de bovinos, por exemplo."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 7",
      "title": "Qual é a principal ameaça humana que ocorre no bioma Cerrado?",
      "alternatives": [
        "Queimadas clandestinas.",
        "Tráfico ilegal de plantas e animais.",
        "Destamatamento para criação de animais.",
        "Poluição de rios."
      ],
      "answer": 0,
      "wrong": "O cerrado sofre drasticamente com queimadas criminosas provocadas por humanos, assim causando desequilíbrio na sua fauna e flora."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 8",
      "title": "Em qual dos biomas abaixo podemos encontrar o tatu?",
      "alternatives": [
        "Floresta amazônica.",
        "Mata atlântica.",
        "Pantanal.",
        "Caatinga."
      ],
      "answer": 3,
      "wrong": "A fauna do bioma caatinga é constituída por mamíferos, répteis, aves e anfíbios, dentre eles podemos destacar o tatú, a jararaca, o preá, e o carcará."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 9",
      "title": "Qual dos biomas que é composto pela vegetação de outros biomas?",
      "alternatives": [
        "Floresta amazônica.",
        "Pantanal.",
        "Cerrado.",
        "Caatinga."
      ],
      "answer": 1,
      "wrong": "A vegetação do bioma pantanal é muito variada, principalmente em função da inundação e do solo. A flora do bioma Pantanal é geralmente distribuída em mosaico, sendo composta com características de outros biomas como o Cerrado, Caatinga, Mata Atlântica, e Floresta Amazônica."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 10",
      "title": "Qual dos animais abaixo pode ser encontrado no Pantanal?",
      "alternatives": [
        "Jacaré.",
        "Arara-azul.",
        "Tatu.",
        "Cobra."
      ],
      "answer": 0,
      "wrong": "A fauna do bioma pantanal é composta por anfíbios, repteis, aves, mamíferos e peixes. Pode-se destacar dentre estes: sapos, jacarés, tuiuiú, capivara e piranha."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 11",
      "title": "Qual dos ecossistemas costeiros é considerado o berçário da vida?",
      "alternatives": [
        "Praia.",
        "Mangue.",
        "Restinga.",
        "Rios."
      ],
      "answer": 1,
      "wrong": "Os manguezais podem ser facilmente considerados como berçários naturais da vida marinha, sendo muito procurados por crustáceos e aves que encontram neste lugar alimento e segurança para os seus filhotes indefesos."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 12",
      "title": "Qual é o bioma que fica com sua vegetação esverdeada somente na epóca das chuvas?",
      "alternatives": [
        "Cerrado.",
        "Caatinga.",
        "Pantanal.",
        "Mata atlântica."
      ],
      "answer": 1,
      "wrong": "Não chove na caatinga em maior parte do ano, o que mantém seu aspecto cinzento por causa das cascas de árvore e alaranjado pela terra seca."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 13",
      "title": "No cerrado existem plantas denominadas xerofitas, qual é um exemplo destas plantas?",
      "alternatives": [
        "Vitoria-Régia.",
        "Palmeiras.",
        "Videiras.",
        "Xique-xique."
      ],
      "answer": 3,
      "wrong": "As plantas xerófitas são consideradas plantas adaptadas a ambientes de clima semiárido e desértico, ou seja, com pouca ou quase nenhuma água disponível."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 14",
      "title": "Existe uma estrutura que reduz a perca d’água em um ambiente extremamente seco. Que estrutra é esta?",
      "alternatives": [
        "Caule.",
        "Influorescência.",
        "Espinhos.",
        "Fruto seco."
      ],
      "answer": 2,
      "wrong": "Os espinhos presentes em algumas espécies de vegetais têm a função de reduzir a superfície de contato e, com isso, impedir que a folha perca água."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 15",
      "title": "A caatinga é um bioma que possui espécies que somente são encontradas lá. Qual destas plantas não é encontrado em nenhum outro bioma?",
      "alternatives": [
        "Mandacaru.",
        "Vitória-régia.",
        "Araucária.",
        "Epífitas."
      ],
      "answer": 0,
      "wrong": "Por ser uma planta adaptada a ambientes de clima seco e com pouca abundância de água, as cactáceas dentre elas o mandacaru é uma planta nativa da Caatinga."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 16",
      "title": "O pantanal abrage alguns estados brasileiros, assim como dois outros países. Quem são eles?",
      "alternatives": [
        "Acre, Rondônia, Bolívia e Peru.",
        "Mato Grosso, Mato Grosso do Sul, Paraguai e Bolívia.",
        "Amazonas, Pará, Colombia, Venezuela.",
        "Roraima, Amapa, Venezuela, Guiana."
      ],
      "answer": 1,
      "wrong": "O Pantanal localiza-se nos estados do Mato Grosso e Mato Grosso do Sul além de se estender entre os países da Bolívia e Paraguai."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 17",
      "title": "O pantanal sofre com a interferência humana, causando desmatamento para criação de animais, qual é a outra ameaça enfrentada por este bioma?",
      "alternatives": [
        "Impacto do turismo.",
        "Queimadas clandestinas.",
        "Tráfico ilegal de plantas e animais."
      ],
      "answer": 0,
      "wrong": "A principal ameaça que o Pantanal sofre é a pesca predatória, esta por sua vez acaba tirando a fonte de alimento dos jacarés e aves da região além de muitas vezes interferir diretamente na reprodução dos peixes."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 18",
      "title": "Qual dos animais abaixo podem ser encontrados nos manguezais?",
      "alternatives": [
        "Jacaré.",
        "Jabuti.",
        "Caranguejo.",
        "Pombo."
      ],
      "answer": 2,
      "wrong": "O manguezal é um ecossistema de transição entre o ambiente terrestre e o marinho, localizados entre as margens dos rios e a foz. O solo dos manguezais por sua vez é bastante rico em nutrientes assim favorecendo a instalação de crustáceos como o caranguejo."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 19",
      "title": "A mistura da água doce dos rios e a água salgada do mar é chamada de:",
      "alternatives": [
        "Água suja.",
        "Água salobra.",
        "Água translucida.",
        "Água agridoce."
      ],
      "answer": 1,
      "wrong": "A água salobra é a união entre as concentrações salinas da água doce dos rios e a água salgada do mar, assim sendo considera mais salgada que a água doce, porém com menos concentração de sais do que na água do mar."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 20",
      "title": "O derramamento de petróleo no mar pode interferir diretamente na vida de outros animais de que forma?",
      "alternatives": [
        "Causando a morte de todos os animais no ambiente marinho.",
        "Causando a morte apenas de peixes.",
        "Causando a morte apenas de aves.",
        "Causando a morte de frutos do mar, peixes e aves que entraram em contato com o petróleo."
      ],
      "answer": 3,
      "wrong": "O petróleo é um componente químico tóxico, não fazendo parte da alimentação de nenhum ser vivo e que causa a morte quando ingerido."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 21",
      "title": "As plantas dos manguezais, possuem estruturas bastante caracteristicas. Como é chamada as raízes dos manguezais?",
      "alternatives": [
        "Raízes tabulares.",
        "Raízes de suporte.",
        "Raízes aquáticas.",
        "Raízes sugadoras."
      ],
      "answer": 1,
      "wrong": "São consideradas raízes-suporte aquelas que auxiliam diretamente na sustentação da planta, como ocorre no mangue."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 22",
      "title": "Uma das maiores ameaçadas dos ambientes aquáticos pode ser considerada:",
      "alternatives": [
        "O lixo descartado em locais incorretos.",
        "Saneamento básico corrreto.",
        "Descarte correto do lixo.",
        "O ambiente aquático não sofre nenhuma ameaça."
      ],
      "answer": 0,
      "wrong": "Podemos obtê-la para beber através dos rios, poços ou lençóis freáticos, porém a maior concentração de água está nos oceanos."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 23",
      "title": "Qual é o tipo de solo que pode ser encontrado nos mangues?",
      "alternatives": [
        "Profundos, permeáveis, bem drenados.",
        "Seco, arenoso, rico em nutrinetes.",
        "Arenoso, pobre em nutrientes e bastante úmido.",
        "Úmido, salgado, lodoso, pobre em oxigênio e muito rico em nutrientes."
      ],
      "answer": 3,
      "wrong": "O solo dos manguezais possui características como ser úmido, pobre em oxigênio, rico em nutrientes por conta da decomposição de matéria orgânica e salgado."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 24",
      "title": "Vegetação típica de regiões costeiras, sendo uma área de encontro das águas do mar com as águas doces dos rios. Que bioma e este?",
      "alternatives": [
        "Pantanal.",
        "Caatinga.",
        "Cerrrado.",
        "Mangue."
      ],
      "answer": 3,
      "wrong": "O manguezal é um ecossistema de transição entre o ambiente terrestre e marinho, localizados entre as margens dos rios e a foz."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 25",
      "title": "Compondo a vegetação dos estados de Mato Grosso e Mato Grosso do Sul é um tipo de bioma que se caracteriza por ser uma das maiores planícies ________ do planeta.",
      "alternatives": [
        "Deserticas.",
        "Inundáveis.",
        "Áridas.",
        "Secas."
      ],
      "answer": 1,
      "wrong": "Durante sete meses corridos ocorrem chuvas constantes neste local, fazendo com que algumas áreas de terra firme se alguém."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 26",
      "title": "Vegetação típica das regiões costeiras onde ocorre o encontro do mar com orio, nesta veretação é comum a presença de carangueijo, a qual bioma serefere?",
      "alternatives": [
        "Pantanal.",
        "Mangue.",
        "Cerrado.",
        "Caatinga."
      ],
      "answer": 1,
      "wrong": "O manguezal é um ecossistema de transição entre o ambiente terrestre e marinho, localizados entre as margens dos rios e a foz."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 27",
      "title": "Qual o impacto causado na costa brasileira pela presença de petróleo e outroscomponentes descartados incorretamente pelo homem?",
      "alternatives": [
        "O meio ambiente possui recursos renováveis e ilimitados, portanto em nada se modifica.",
        "A vida marinha tal como a conhecemos, também é fruto de componentespresentes no petróleo, pois o mesmo é extraído do mar.",
        "O derramamento de óleo que atingiu o litoral brasileiro não impactoudiretamente o meio ambiente, pois o mesmo já foi recolhido.",
        "O derramento de óleo bruto e o descarte de lixo impactam diretamente navida marinha e destóem o equilíbrio do ecossistema."
      ],
      "answer": 3,
      "wrong": "O petróleo derramado em alto mar é facilmente fixado nas mais diversas superfícies, podendo causar contaminação por ser um agente tóxico, e interferir na fotossíntese de algumas espécies."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 28",
      "title": "Em qual dos biomas abaixo, podemos encontrar a maior volume de água aparente?",
      "alternatives": [
        "Caatinga.",
        "Cerrado.",
        "Pantanal.",
        "Pampas."
      ],
      "answer": 2,
      "wrong": "Durante sete meses corridos ocorrem chuvas constantes neste local, fazendo com que oscile o nível das águas, é neste período também que os rios e lagos costumam transbordar, podendo alagar até metade de todo o território do Pantanal."
    },
    {
      "Categoria": "Ecologia",
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
      "answer": 0,
      "wrong": "O cerrado é o bioma que mais prevalece na região norte do Brasil, assim a afirmativa um está incorreta."
    },
    {
      "Categoria": "Ecologia",
      "Question" : "Questão 30",
      "title": "Qual dos biomas abaixo vem sofrendo desmatamento e tendo suas áreas utilizadas para pecuária e produção agrícola, desde a década de 60?",
      "alternatives": [
        "Cerrado.",
        "Caatinga.",
        "Pantanal.",
        "Pampas."
      ],
      "answer": 0,
      "wrong": "O cerrado vem sofrendo desmatamento com suas áreas utilizadas para pecuária e produção agrícola, destacando a criação de bovinos e plantações de soja."
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
      "answer": 3,
      "wrong": "Os animais herbívoros alimentam-se apenas de plantas ou algas. Estes possuem uma alimentação que varia de acordo com a espécie. Exemplo: girafa, elefante e hipopótamo."
  
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
      "answer": 1,
      "wrong": "Os animais carnívoros são aqueles que se alimentam exclusivamente de outros animais. Exemplo: leão, lobo-guará, cobra e crocodilo."
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
      "answer": 0,
      "wrong": "Os insetívoros são aqueles animais que se alimentam de insetos. Exemplo: sapo."
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
      "answer": 3,
      "wrong": "Os animais carnívoros são aqueles que se alimentam exclusivamente de outros animais. Exemplo: leão, lobo-guará, cobra e crocodilo."
  
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
      "answer": 1,
      "wrong": "A cadeia alimentar é uma representação de uma sequência unilateral onde um ser vivo serve de alimento para outro, através disso é repassada matéria orgânica e energia para todo o ecossistema, além de manter as relações harmônicas populacionais."
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
      "answer": 2,
      "wrong": "As plantas carnívoras são plantas especializadas na captura de presas, assim podendo atrair animais de pequeno porte como insetos, aracnídeos e anfíbios afim de complementar a sua dieta de nutrientes."
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
      "answer": 0,
      "wrong": "Os produtores são os organismos que conseguem produzir seu próprio alimento, ou seja, não dependem de outro ser para se alimentar, ocupando o primeiro nível da cadeira."
  
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
      "answer": 1,
      "wrong": "Os anfíbios podem ser encontrados em todos os continentes do mundo, exceto na Antártida, sendo majoritariamente encontrados nas zonas de clima mais quente do planeta. Existe uma imensa diversidade de anfíbios. Exemplo: sapos, salamandras e cobra cega."
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
      "answer": 2,
      "wrong": "Animais frugívoros são aqueles que se alimentam de frutas, tanto exclusivamente quanto parcialmente. Exemplo: esquilo e tucano."
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
      "answer": 0,
      "wrong": "Os animais granívoros são aqueles que tem como alimento principal ou exclusivo as sementes de plantas ou grãos."
  
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
      "answer": 0,
      "wrong": "Os animais detritívoros, são aqueles que se alimentam de plantas ou animais que estão em estado de decomposição inicial ou avançada. Exemplo: mosca."
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
      "answer": 2,
      "wrong": "Os animais herbívoros alimentam-se apenas de plantas ou algas, estes possuem uma alimentação que varia de acordo com a espécie. Exemplo: girafa, elefante e hipopótamo."
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
    "answer": 0,
    "wrong": "Os répteis não conseguem produzir calor suficiente para manter uma constância na sua temperatura como os mamíferos, assim são considerados como seres ectodérmicos."
  
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
      "answer": 3,
      "wrong": "O ciclo de vida de muitos anfíbios inclui uma fase larval aquática e uma fase adulta terrestre. Assim estes animais passam por um processo de metamorfose que consiste em mudanças durante seu desenvolvimento. Exemplo: sapo. Uma exceção seria a cobra cega."
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
      "answer": 2,
      "wrong": "Os mamíferos são animais vertebrados e endotérmicos, ou seja, possuem coluna vertebral e conseguem regular sua temperatura interna, sendo facilmente reconhecidos pelo seu revestimento corporal e glândulas mamárias nas fêmeas."
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
      "answer": 3,
      "wrong": "Alguns mamíferos podem ser encontrados nos mais diferentes ambientes como o aquático, nele temos as baleias; também podemos encontrá-los no ambiente aéreo como os morcegos."
  
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
      "answer": 0,
      "wrong": "Os répteis representam o grupo que possui uma imensa diversidade de animais, assim ocorrendo uma subclassificação dos grupos sendo estes: quelônios, crocodilianos e escamados. Sendo uma característica comum a todos o nascimento por meio de ovos."
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
      "answer": 1,
      "wrong": "A reprodução dos anfíbios é externa, sendo assim são produzidos ovos que são dispersados em locais úmidos, podendo ocorrer também a reprodução interna como nas cecílias que são conhecidas popularmente como cobras cegas."
    },  
    {
      "Categoria": "zoologia",
      "Question" : "Questão 19",
      "title": "Os sapos quando filhotes possuem uma calda.",
      "alternatives": [
        "Verdadeiro.",
        "Falso."
    ],
    "answer": 0,
    "wrong": "Os anfíbios passam por um processo chamado metamorfose que consiste em mudanças durante seu desenvolvimento, como a perda da calda, das nadadeiras e das brânquias e adquirem características terrestres como as pernas e os pulmões."
  
    },
    {
      "Categoria": "zoologia",
      "Question" : "Questão 20",
      "title": "Os pinguins não podem voar, porém, são excelentes nadadores.  ",
      "alternatives": [
        "Verdadeiro.",
       "Falso."
    ],
    "answer": 0,
    "wrong": "Algumas aves mesmo possuindo asas não podem voar, a exemplo dos pinguins que são excelentes nadadores."
    },
    {
      "Categoria": "zoologia",
     "Question" : "Questão 21",
     "title": "Os jacarés são considerados mamíferos, mesmo seus filhotes nascendo de ovos.",
     "alternatives": [
        "Verdadeiro.",
       "Falso."
    ],
    "answer": 1,
    "wrong": "Os jacarés são considerados répteis formando um subgrupo denominado crocodilianos, que é composto por animais que possuem um focinho alongado, boca repleta de dentes e placas rígidas dispersas por todo o corpo."
    },
      
    {
      "Categoria": "zoologia",
      "Question" : "Questão 22",
     "title": "As aves podem controlar sua temperatura térmica assim como os mamíferos.",
     "alternatives": [
       "Verdadeiro.",
       "Falso."
    ],
    "answer": 0,
    "wrong": "As aves assim como os mamíferos são animais endotérmicos, ou seja, conseguem regular a temperatura do seu corpo internamente e a mantêm constante."
  
    },
    {
      "Categoria": "zoologia",
     "Question" : "Questão 23",
     "title": "As aves podem apenas voar e andar.",
     "alternatives": [
       "Verdadeiro.",
        "Falso."
    ],
    "answer": 1,
    "wrong": "As aves possuem diferentes formas de locomoção, como a habilidade de voar, nadar e também caminhar sobre a terra, esta variedade se dá pela adaptação das espécies ao ambiente."
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
    "answer": 1,
    "wrong": "Os consumidores primários ocupam a segunda posição na cadeia alimentar, alimentando-se essencialmente dos produtores. Estes animais não conseguem produzir seu próprio alimento."
    },  
    {
      "Categoria": "zoologia",
      "Question" : "Questão 25",
      "title": "Como é denominado os animais que conseguem regular sua temperatura interna sem auxílio do ambiente externo:",
     "alternatives": [
       "Ectodérmicos",
        "Endodérmicos"
    ],
    "answer": 0,
    "wrong": "Os animais ectodérmicos como as cobras e jacarés não são capazes de regular a temperatura tampouco manter uma constância na sua temperatura assim necessitando fontes externas de calor para ajustar a temperatura corporal."
  
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
    "answer": 0,
    "wrong": "Os escamados são animais que possuem escamas em todo seu corpo. Exemplo: Lagartos e serpentes."
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
    "answer": 0,
    "wrong": "O ciclo de vida de muitos anfíbios inclui uma fase larval aquática e sua fase adulta terrestre. Assim estes animais passam por um processo de metamorfose que consiste em mudanças durante seu desenvolvimento como a perda da calda, nadadeiras e brânquias."
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
    "answer": 1,
    "wrong": "Animais ovíparos são aqueles que possuem o desenvolvimento inicial interno na mãe, porém são depositados em ovos no ambiente externo para a finalização do seu desenvolvimento e nascimento."
  
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
    "answer": 2,
    "wrong": "As aves possuem diferentes adaptações aos meios onde vivem, assim as aves aquáticas possuem glândulas de secreção de óleo, que com o auxílio do seu bico impermeabilizam suas penas para facilitar a sua flutuação e secagem."
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
    "answer": 3,
    "wrong": "Salamandra é o nome dado a um subgrupo de anfíbios que possuem características o corpo alongado, cauda, pele lisa, fina e não possuem escamas."
    }
  ]];