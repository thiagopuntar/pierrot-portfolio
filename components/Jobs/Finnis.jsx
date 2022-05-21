import React from "react";
import Container from "../Container";
import { H1, H2, H3, H4, Ol, Paragraph, StyledImage } from "./styles";
import imgCover from "../../public/img/jobs/finni/cover.png";
import img1 from "../../public/img/jobs/finni/img1.png";
import imgPersona from "../../public/img/jobs/finni/persona.png";
import imgButtons from "../../public/img/jobs/finni/buttons.png";
import imgColors from "../../public/img/jobs/finni/colors.png";
import imgDiagram from "../../public/img/jobs/finni/diagrama.png";
import imgFonts from "../../public/img/jobs/finni/fonts.png";
import imgForm from "../../public/img/jobs/finni/form.png";
import imgIdeacao from "../../public/img/jobs/finni/ideacao.png";
import imgMapaCalor from "../../public/img/jobs/finni/mapa-calor.png";
import imgMapaSite from "../../public/img/jobs/finni/mapa-site.png";
import imgMatrizCsd from "../../public/img/jobs/finni/matriz-csd.png";
import imgPriorizacao from "../../public/img/jobs/finni/priorizacao.png";
import imgPrototipo from "../../public/img/jobs/finni/prototipo.png";
import imgQualitativa from "../../public/img/jobs/finni/qualitativa.png";
import imgQuantitativa1 from "../../public/img/jobs/finni/quantitativa-1.png";
import imgQuantitativa2 from "../../public/img/jobs/finni/quantitativa-2.png";
import imgQuantitativa3 from "../../public/img/jobs/finni/quantitativa-3.png";
import imgRabisco from "../../public/img/jobs/finni/rabiscoframe.png";
import imgUsabilidade from "../../public/img/jobs/finni/usabilidade.png";
import imgWireframe from "../../public/img/jobs/finni/wireframe.png";

const Finnis = () => {
  return (
    <Container>
      <H1>
        FINNI$: Ajudando correntistas do banco Neon a alcançar seus objetivos
        através da gestão financeira
      </H1>
      <H2>
        Como utilizamos UX Design para ajudar os correntistas do Banco Neon a
        gerenciar suas finanças, compreendendo seus hábitos financeiros e
        atingindo seus objetivos.
      </H2>
      <StyledImage src={imgCover} alt="Finni" />
      <H3>O desafio</H3>
      <Paragraph>
        Em um briefing, um influente acionista de um banco tem uma ideia que
        considera interessante: criar um aplicativo integrado a um banco que
        ajudará os correntistas a economizar de acordo com seus hábitos
        financeiros . Funcionaria da seguinte forma: De acordo com os requisitos
        frequentados pelo usuário o aplicativo recomendaria local similar, de
        menor valor mas com avaliação similar. Contudo, ao anuma lisar dores dos
        usuários percebemos que para solucionar a questão de forma mais
        adequada, deveríamos focar em outro aspecto : Uma motivação.
      </Paragraph>
      <H3>O cenário atual</H3>
      <Paragraph>
        Em um contexto de pandemia do covid-19 como ações adotadas na tentativa
        de conter a propagação do vírus tiveram grandes impactos na economia
        nacional. Segundo pesquisa, oito em cada dez entrevistados fizeram
        cortes no orçamento em 2020, principalmente para redirecionar o valor ao
        pagamento de contas básicas do dia a dia, para conseguir guardar
        dinheiro ou para o pagamento de contas em atraso.
      </Paragraph>
      <StyledImage src={img1} alt="Dinheiro" />
      <Paragraph>
        Além disso, a situação financeira pessoal piorou para 45% dos
        entrevistados. O principal motivo seria o não acompanhamento dos
        salários em relação ao aumento dos preços dos produtos, seguido da
        redução da renda familiar e do desemprego de um ou mais membros da
        família. Os efeitos afetados principalmente na compra de itens de
        calçado e vestuário, refeições delivery e fora de casa, idas a bares e
        casas noturnas.
      </Paragraph>
      <Paragraph spaced>
        <strong>
          Com relação aos projetos para 2020 que envolviam planejamento
          financeiro. Os mais citados foram o pagamento de dívidas atrasadas, a
          realização de algum tratamento médico e a formação de uma reserva
          financeira. Apesar disso, 89% não conseguiram realizar todos os
          projetos planejados para o último ano.
        </strong>
      </Paragraph>
      <Paragraph>
        O Banco Neon disponibiliza o recurso “Objetivos” em seu aplicativo e
        materiais educativos em seu blog, com o objetivo de incentivar os
        correntistas para controlar suas finanças e poupar mais. Apesar dessas
        vantagens, o banco encontra dificuldades com o engajamento dos clientes,
        por não serem automatizadas e unificadas.
      </Paragraph>
      <H3>Objetivo do projeto</H3>
      <Paragraph>
        Espera a falta de disciplina no gerenciamento financeiro, os
        correntistas não conseguem guardar dinheiro para suas realizações
        pessoais , isso causa frustração para o cliente e menos investimento ao
        Neon.
      </Paragraph>
      <Paragraph>
        Tendo em vista as dores apontadas, idealizamos uma solução, para ajudar
        15% dos correntistas do Banco Neon, a entrarem no grupo de pessoas que
        poupam no mínimo 10% de seus salários, sem período de um ano.
      </Paragraph>
      <H3>Usuários</H3>
      <Paragraph spaced>
        <em>Perfil dos usuários</em>
      </Paragraph>
      <Paragraph>
        Validadas como suposições e dúvidas, com base nas pesquisas realizadas,
        elaboramos a jornada do usuário. Nesta etapa é muito importante
        compreender como os correntistas agem, pensam e sentem em cada estágio
        de sua experiência, assim, descobrindo novas possibilidades de
        oportunidades de negócio que resolver como suas dores e proporcionar uma
        experiência otimizada.
      </Paragraph>
      <StyledImage src={imgPersona} alt="Persona" />
      <H3>Thiago Almeida</H3>
      <Paragraph>
        Era uma vez Thiago Almeida, ele tem 28 anos, adora séries de fantasia e
        não dispensa se reunir com os amigos para jogar RPG. <br />
        Fã da saga Harry Potter, todo ano ele acredita que finalmente vai
        conseguir guardar grana para conhecer o Castelo de Hogwarts, no parque
        temático Universal&#39;s Islands of Adventure em Orlando mas de vez em
        quando aparece uma emergência e ele gasta tudo ou quase tudo, que tinha
        guardado. <br /> Por causa disso, já tentou controlar suas finanças
        através de planilhas no excel, planejadores financeiros e até
        aplicativos no celular, mas sempre acabava esquecendo de anotar algo.
        <br />
        Por isso, Thiago vive fazendo contas mentais, estressado e frustrado sem
        saber como economizando e empurrando pra frente os seus sonhos. <br />
        Até que finalmente, através da indicação de amigos decidiu abrir uma
        conta no Banco Neon, pois contaram para ele, que existia um aplicativo
        vinculado ao banco que o ajudaria a se organizar com as despesas e ao
        mesmo tempo se divertir com um sistema gamificado de metas para realizar
        algum sonho ou ter um melhor aproveitamento de seu dinheiro. <br />
        Thiago Almeida está usando o Finni$ a 6 meses vê uma diferença na sua
        postura financeira e já conseguiu guardar 60% do total que precisa para
        realizar sua viagem.
      </Paragraph>
      <H3>Primeira etapa de validação</H3>
      <Paragraph>
        Nesta etapa, em conjunto, registramos tudo que já tínhamos certeza,
        nossas suposições, e as dúvidas que gostaríamos de sanar acerca dos
        usuários de bancos digitais. Distribuímos essas informações na Matriz
        CSD, ferramenta que tem como propósito auxiliar na elaboração de
        projetos, organizando os dados de forma visual.
      </Paragraph>
      <StyledImage src={imgMatrizCsd} alt="Matriz CSD" />
      <Paragraph>
        Em seguida, com o intuito de priorizar o que era mais relevante entender
        sobre o usuário de acordo com o nosso objetivo de pesquisa, distribuímos
        as nossas suposições e dúvidas na matriz impacto x conhecimento. Através
        desse processo selecionamos como hipóteses e perguntas que fazem parte
        da nossa pesquisa.
      </Paragraph>
      <StyledImage src={imgDiagram} alt="Diagrama" />
      <H3>Pesquisa quantitativa</H3>
      <Paragraph>
        Nossa pesquisa quantitativa foi elaborada no Google Forms, canalizado em
        grupos no Facebook referente a bancos e no Whatsapp, tendo sido
        respondida por 65 pessoas. Nossos maiores aprendizados foram:
      </Paragraph>
      <StyledImage src={imgQuantitativa1} alt="Pesquisa quantitativa 1" />
      <StyledImage src={imgQuantitativa2} alt="Pesquisa quantitativa 2" />
      <StyledImage src={imgQuantitativa3} alt="Pesquisa quantitativa 3" />
      <Paragraph>
        Em consequência dos dados encontrados, se tornado evidente melhor quais
        como reais dores dos usuários em relação a sua vida financeira, entendre
        seus hábitos, seus hobbies, em que momento profissional se encontravam,
        e quais dificuldades enfrentam ao tentar alcançar um objetivo
        financeiro.
      </Paragraph>
      <H3>Pesquisa qualitativa</H3>
      <Paragraph>
        Para entender melhor os pontos elencados acima realizamos uma pesquisa
        semi-estruturada com 5 usuários do banco Neon, nossos maiores
        aprendizados foram:
      </Paragraph>
      <StyledImage src={imgQualitativa} alt="Pesquisa qualitativa" />
      <H3>Priorização</H3>
      <Paragraph>
        Nesta etapa, utilizamos uma matriz Impacto x Esforço para definir as
        soluções desenvolvidas imediatamente, buscando o maior impacto com o
        menor esforço possível. Considere como maior impacto, as qualidades que
        têm potencial para trazer retorno mais rapidamente, com base em nossas
        métricas. Acreditamos que menor esforço, se refere a implementação mais
        rápida e eficiente para chegar ao MVP em menor tempo.
      </Paragraph>
      <StyledImage src={imgPriorizacao} alt="Diagrama de priorização" />
      <H3>Ideação</H3>
      <Paragraph>
        Nesta etapa, utilizamos a técnica dos crazy 8&#39;s para estimular a
        equipe na geração de representações possíveis das funcionalidades e
        layout do aplicativo.
      </Paragraph>
      <StyledImage src={imgIdeacao} alt="Ideação" />
      <H3>Rabiscoframe</H3>
      <Paragraph>
        Após a técnica dos crazy 8&#39;s, compilamos as ideias de layout em um
        rabisco mais completo e que expressasse um norte para a criação de
        nossas telas.
      </Paragraph>
      <StyledImage src={imgRabisco} alt="Rabisco Frame" />
      <H3>Wireframe</H3>
      <StyledImage src={imgWireframe} alt="Wireframe" />
      <H3>Teste de usabilidade do Wireframe</H3>
      <Paragraph>
        Realizamos the test through the platform Maze and not were moderados.
        Nosso objetivo foi identificar o fluxo de usuário no aplicativo e
        possíveis dificuldades dos usuários na realização de tarefas. Os
        usuários foram capazes de realizar três tarefas. Optamos por estas,
        pois, achamos que elas se completavam e que causariam demais o feedback
        para o nosso estudo. Essas tarefas foram:
      </Paragraph>
      <Ol>
        <li>
          Cadastrar uma despesa paga no seu controle financeiro, em espécie, que
          acabou de ter no mercado.
        </li>
        <li>
          Criar um objetivo que irá auxiliá-lo economizar, e consequentemente,
          alcançar esse objetivo.
        </li>
        <li>
          Acompanhar o progresso do objetivo de fazer uma viagem, mas voltado
          para visualizar a tarefa executada acima .
        </li>
      </Ol>
      <Paragraph>Com esse teste tivemos os seguintes aprendizados:</Paragraph>
      <Ol>
        <li>
          A maioria dos usuários teve dificuldade em realizar a tarefa de
          adicionar um gasto e objetivo, pois o botão, não permitido intuitivo,
          e não estava tanto em destaque da forma que precisaria.
        </li>
        <li>
          Precisamos de ajuste sem escrita (microcopia), principalmente
          referindo aos botões, mais especificamente aos CTA&#39;s (Call to
          action) e algumas informações na interface.
        </li>
      </Ol>
      <StyledImage src={imgMapaCalor} alt="Mapa de calor" />
      <H3>Guia de estilos</H3>
      <Paragraph>
        Por ser uma solução atrelada ao Banco Neon, no guia de estilos,
        procuramos ser o mais fiel possível ao padrão usado pela empresa. Porém,
        tivemos dificuldade em achar um documento ou repositório que
        concentrasse essas informações. Para consegui-las, buscamos tirar a
        impressão das páginas do site e algumas telas do app para catalogar e
        reproduzir mais possíveis semelhantes com componentes gráficos. Além
        disso, utilizamos como medicamentos Whatfont, ColorZilla e Eye Dropper
        como ferramentas.
      </Paragraph>
      <H4>Núcleos</H4>
      <Paragraph>
        Seus principais núcleos possuem tom de azul e verde transmitindo
        responsabilidade e estabilidade aos correntistas. Os tons em amarelo são
        utilizados pontualmente para chamar mais atenção para as ações
        principais. Apesar de tentarmos manter um padrão de telas e cores,
        observamos que as cores verdade e azul, somados ao gradiente, não
        ajudavam muito com a acessibilidade e na visualização de ações. Então
        decidimos definidos por fundos brancos e deixar esses núcleos padrões do
        Neon nos dados em destaque, o que facilitou a visualização e melhorou o
        grau de acessibilidade, além de dar mais destaque como informações
        necessárias.
      </Paragraph>
      <StyledImage src={imgColors} alt="Cores" />
      <H4>Tipografia</H4>
      <Paragraph>
        A fonte utilizada foi a Averta, sem serifa e com personalidade simples.
        As aberturas e seus traços de baixo sucesso conseguem expressar um tom
        direto, capaz em uma fonte moderna, neutra e amigável.
      </Paragraph>
      <StyledImage src={imgFonts} alt="Tipografia" />
      <H4>Botões</H4>
      <Paragraph>
        Nos botões, mantivemos os padrões do Neon e percebemos que eles possuiam
        como bordas bem arredondadas que utilizam o azul como ação primária,
        tons de branco e cinza como desabilitado e o amarelo para os CTA&#39;s.
        Após alguns testes, chegamos também em botões de sucesso e erro, todos
        sendo bem cuidados para ajudar na parte visual dando contraste para uma
        melhor acessibilidade da ação.
      </Paragraph>
      <StyledImage src={imgButtons} alt="Botões" />
      <H4>Componentes de formulário</H4>
      <Paragraph>
        Identificamos dois tipos de rótulos utilizados pelo Neon. Um com o campo
        de texto mais estreito descrição e outro mais largo para valores.
        Seguindo uma proposta, criamos alguns botões switch durante o
        preenchimento dos formulários.
      </Paragraph>
      <StyledImage src={imgForm} alt="Componentes de formulário" />
      <H3>Protótipo de Alta Fidelidade</H3>
      <StyledImage src={imgPrototipo} alt="Protótipo de Alta Fidelidade" />
      <Paragraph>
        <em>
          Ou navegue em nosso protótipo atraves do <a>link.</a>
        </em>
      </Paragraph>
      <H3>Mapa do site</H3>
      <StyledImage src={imgMapaSite} alt="Mapa do site" />
      <H3>Teste de Usabilidade do Protótipo de Alta Fidelidade</H3>
      <Paragraph>
        Após ajustar os problemas identificados com o primeiro teste, realizar
        uma nova rodada de testes, dessa vez, já com o protótipo mais fiel à
        realidade da solução buscada. O novo teste foi realizado também na
        plataforma Maze com 18 usuários. Alguns testículos foram moderados.
      </Paragraph>
      <Paragraph spaced>Nossos principais aprendizados foram:</Paragraph>
      <Ol>
        <li>
          Ao mudar o estilo do botão e o texto, aumentamos a taxa de sucesso o
          que levou aos usuários, a conseguirem identificar com mais precisão o
          que deveria ser estabelecido;
        </li>
        <li>
          O botão para “adicionar objetivo” precisa ter mais visibilidade na
          tela, sem necessidade de scrollar para encontrar-lo, identificamos um
          grande problema nessa parte, pois nem todos os usuários “scrollavam”
          para encontrar o botão, pensamos em possivelmente diminuir ou retirar
          alguma informação secundária, o que daria mais visibilidade a essa
          ação.
        </li>
      </Ol>
      <StyledImage src={imgUsabilidade} alt="Mapa do site" />
      <H3>Próximos passos</H3>
      <Paragraph>
        Após implantado o MVP, deverão ser analisadas as seguintes métricas para
        avaliar o desempenho do aplicativo:
        <ul>
          <br />
          <li>
            Growth Rate: Medir a quantidade de usuários ativos do app, ou seja,
            usuários que acessam o app. Esta métrica nos aponta se o aplicativo
            está sendo relevante para o usuário, pois um alto crescimento indica
            que poucas pessoas estão parando de usá-lo, ao passo que novos
            usuários estão aderindo.
          </li>
          <br />
          <li>
            Engagement: Acompanhar a liberação de cupons de descontos feitas
            pelo app, quantificando o engajamento do usuário, de forma a
            entender se sua interação com o aplicativo está satisfatória.
          </li>
        </ul>
      </Paragraph>
      <H3>Conclusão e aprendizados</H3>
      <Paragraph>
        Durante a elaboração deste case nosso maior aprendizado foi sem dúvidas
        a importância da etapa de pesquisa. Durante essa etapa muitas das nossas
        suposições foram invalidadas e a ideia do briefing inicial precisou ser
        reformulada. Sem a pesquisa, provavelmente estaríamos investindo os
        nossos esforços e tempo em um projeto fadado ao fracasso.
      </Paragraph>
      <Paragraph spaced>
        Após avaliação e mapeamento de todas as necessidades e dores dos
        usuários, decidimos optar primordialmente por uma solução em que
        controlasse e informasse os ganhos e gastos do usuário assim como um
        recurso que incentivasse os usuários a poupar parte dos seus recursos
        para futuras metas/sonhos, como por exemplo executar uma viagem ou
        comprar um celular novo…
      </Paragraph>
      <Paragraph spaced>
        Pretendemos no futuro acrescentar algumas oportunidades encontradas
        durante o mapeamento da jornada, e não priorizadas na matriz esforço x
        impacto, como:
      </Paragraph>
      <Paragraph>
        <ul>
          <li>Mapeamento e personalização de hábitos financeiros;</li>
          <li>Sugestão de produtos e serviços mais em conta;</li>
          <li>Dicas e fórum de educação financeira;</li>
          <li>Indicação de investimentos.</li>
        </ul>
      </Paragraph>
      <H3>Obrigado por ler até aqui!</H3>
      <Paragraph>Equipe:</Paragraph>
      <ul>
        <li>Allan Lima: aln.sl@hotmail.com</li>
        <li>Mathaus Silva: mathaus.silva.ramos@gmail.com</li>
        <li>Thaís Monteiro: Thaisrmo@gmail.com</li>
        <li>Thiago Castro da Cruz: thiagodesignerux@gmail.com</li>
      </ul>
    </Container>
  );
};

export default Finnis;
