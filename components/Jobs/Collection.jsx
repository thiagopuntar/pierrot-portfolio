import React from "react";
import {
  Title,
  Subtitle,
  SectionTitle,
  Paragraph,
  StyledImage,
} from "./styles";
import Container from "../Container";
import imgHero from "../../public/img/jobs/collection/hero.png";
import imgCognitiveSchemata from "../../public/img/jobs/collection/cognitive-schemata.png";
import imgTalk from "../../public/img/jobs/collection/talk.png";
import imgImpactEffort from "../../public/img/jobs/collection/impact_effort.png";
import imgJourneyJulia from "../../public/img/jobs/collection/journey_julia.png";
import imgPersonaJulia from "../../public/img/jobs/collection/persona_julia.png";
import imgDraft from "../../public/img/jobs/collection/draft.png";
import imgWireFrame1 from "../../public/img/jobs/collection/wireframe_01.png";
import imgWireFrame2 from "../../public/img/jobs/collection/wireframe_02.png";
import imgStyleguide from "../../public/img/jobs/collection/styleguide_01.png";
import imgAlta1 from "../../public/img/jobs/collection/alta_01.png";
import imgAlta2 from "../../public/img/jobs/collection/alta_02.png";
import imgAlta3 from "../../public/img/jobs/collection/alta_03.png";

const Collection = () => {
  return (
    <main>
      <Container>
        <Title>Coletânea de trabalhos</Title>
        <Subtitle>
          Coletânea de projetos que eu participei durante o período inicial de
          trabalho na área de inovação
        </Subtitle>
        <StyledImage src={imgHero} />
        <SectionTitle>Proposta</SectionTitle>
        <Paragraph>
          Durante um período de 8 meses em que iniciei minha carreira na área de
          tecnologia e inovação, realizei junto a equipe de Designer da empresa
          em que trabalhava na época, alguns projetos e aperfeiçoamos alguns
          produtos que já estavam sendo utilizados. Então decidi juntar alguns
          aqui, respeitando regras de confidencialidade, e mostrar um pouco
          sobre essas entregas e explicando o objetivo, o propósito do projeto e
          as decisões tomadas.
        </Paragraph>
        <SectionTitle>Escopo dos projetos</SectionTitle>
        <Paragraph>
          Em regra geral, nosso processo de trabalho começava tendo um primeiro
          encontro com o cliente, para entender o problema dele e começar e
          pensar numa solução. As reuniões sempre ia o time de Design todo,
          formado por 3 pessoas e o lider da equipe de desenvolvimento. Todos
          sempre bem atentos a entender sobre a regra no negócio e a extrair
          inicialmente informações e desejos do cliente.
        </Paragraph>
        <Paragraph>
          Após esse conversa inicial, nos reuníamos para discutir sobre a
          percepção de cada um sobre o futuro produto e debater sobre
          viabilidades das ideias sugeridas durante a conversa com o cliente.
          Definido o que seria feito, começava o processo da equipe de design
          para criação da solução.
        </Paragraph>
        <Paragraph>
          Todo projeto sempre começava por mim, onde pesquisava inicialmente
          mais sobre aquele assunto ou área de atuação (um desk research
          simples) para entender o que os usuários da solução do cliente faziam
          de forma geral, infelizmente desse primeiro período da minha vida como
          UX-UI designer não consegui realizar pesquisas, nem entrevistas com o
          usuário final dos projetos que desenvolvemos. Continuando, realizava
          um Bechmarking com os 2 ou 3 principais concorrentes do produto e
          criava proto personas e algumas vezes uma jornada dos usuários, com
          base nas informações pesquisadas e das informações obtidas pelo
          cliente.
        </Paragraph>
        <Paragraph>
          Passando por essa fase inicial, começávamos a rabiscar e criar frames
          com ideias de como poderia ser feito determinada feature, em dois
          casos sugeri, uma dinâmica para extrair soluções, para isso utilizamos
          a técnica do Crazy 8”s e tivemos bons resultados.
        </Paragraph>
        <Paragraph>
          Criávamos os wireframes e após essa criação, validávamos junto ao
          cliente e definíamos nesse momento, detalhes do style guide.
        </Paragraph>
        <Paragraph>
          Com o style guide definido e o wireframe validado, finalizávamos essa
          primeira parte do processo, criando o protótipo de alta fidelidade.
          Então, validávamos novamente com o cliente e deixávamos todas as
          diretrizes para os desenvolvedores seguirem (Pesquisas e
          contextualização inicial, Protótipos de baixa e alta, historias de
          usuário, tipografia, paleta de cores e peso das fontes). Mantínhamos
          uma boa comunicação com a equipe dev’s e todo tipo de ajustes e
          melhorias era realizado em conjunto
        </Paragraph>
        <SectionTitle>Processos de Design</SectionTitle>
        <Paragraph>
          Durante o período que fiquei nessa empresa, me foi solicitado pelos
          gestores da empresa, que também eram nossos lideres, que criasse um
          escopo de passo a passo de como poderíamos conduzir a primeira etapa
          do processo de criação de alguma solução.
        </Paragraph>
        <Paragraph>
          Então, após pensar sobre o assunto, revisitei alguns conhecimentos que
          já tinha adquirido em outra formação (em licenciatura em História) e
          pensando em Piaget (dito como pai da pedagogia moderna) ,me deparei
          que o processo de criação ou pelo menos a parte inicial de criação de
          um produto, se assemelha e pode ser somado aos processos e ferramentas
          já difundidas na criação de produtos, como Doble Diamond, Design
          Thinking...
        </Paragraph>
        <Paragraph>
          Contudo vale apontar, que essa proposta de organização é só um
          paralelo, algo que eu utilizei, pensando sobre um problema que me foi
          proposto, não é nenhuma técnica, nem ideologia ou tese, formulada. Não
          possui nenhum teste nem validação de métodos. Simplesmente é uma forma
          de pensar, que eu adquiri ao longo da vida e utilizo na solução das
          meus projetos.
        </Paragraph>
        <Paragraph>
          Segundo Piaget o processo de construção do conhecimento inicia-se com
          o desequilíbrio entre o sujeito e o conhecimento que está sendo
          aprendido. Ele acredita que todo processo de aprendizado de algum
          conhecimento passa pro três etapas.
        </Paragraph>
        <Paragraph>
          A primeira etapas é a de assimilação, que é a incorporação do
          conhecimento, o entendimento do sujeito, aquele conhecimento. O
          sujeito muitas vezes, usa ou compara, como referencia, algum outro
          conhecimento que possui para facilitar a assimilação daquele novo
          conhecimento.
        </Paragraph>
        <Paragraph>
          A segunda etapa é a acomodação, que seria a tendência do sujeito de
          ajustar-se a um novo conhecimento e assim, alterar e transformar os
          conhecimentos adquiridos, a fim de se adequar ao novo aprendizado
          recém assimilado, ou seja, acomodando o conhecimento.
        </Paragraph>
        <Paragraph>
          Por fim, a terceira etapa que é a adaptação ou ponto de equilíbrio,
          após algum tempo, passando pelas duas fases anteriores, o sujeito,
          passa a dominar o novo conhecimento, assimilado e acomodado, chegando
          a um ponto de equilíbrio, consolidação o aprendizado.
        </Paragraph>
        <Paragraph>
          Bom, dito isso, realizando um paralelo com a os processos para
          desenvolver uma solução, dentro do campo d e tecnologia e inovação,
          esse processo se encaixa perfeitamente, assim como se assemelha aos
          processos que conhecemos, pois primeiramente, conhecemos o problema,
          entendemos ele melhor (assimilamos), depois consolidamos(ou
          acomodamos) os conhecimentos adquiridos sobre o problema (através de
          ferramentas, processos e validações) e finalizamos com uma solução, já
          mais consolidada e dominada, já bem perto do que seria o produto
          final, testando e validando toda a ideia construída (adaptação e ponto
          de equilíbrio de todo o processo).
        </Paragraph>
        <StyledImage src={imgCognitiveSchemata} />
        <Paragraph>
          Após essa explicação, voltemos para o processo de design que
          utilizamos.
        </Paragraph>
        <Paragraph>
          Foi organizado e documentado o processo de design, possuindo as
          seguintes etapas:
        </Paragraph>
        <Paragraph>
          <strong>
            1 – Conversa com cliente e levantamento de ideias e dúvidas
          </strong>
          , nesse primeiro momento, a equipe de design, como ja mencionado
          anteriormente, tinha um primeiro encontro com o cliente onde
          conhecíamos o problema e tentávamos extrair o máximo de informação
          para poder ter subsídios para ter ideias e discutirmos como qual seria
          a melhor solução.
        </Paragraph>
        <StyledImage src={imgTalk} />
        <Paragraph>
          <strong>
            2 – Conversas internas, entre a equipe e criação de personas e
            jornadas
          </strong>
          , pesquisávamos sobre o mercado e o que era feito referente a regra de
          negócio e problema trazido pelo cliente e após isso criávamos uma
          proto persona e proto jornada do usuário (proto porque não tinhamos
          dados totalmente reais dos usuários do nosso cliente, não realizávamos
          pesquisas e testes com eles).
        </Paragraph>
        <StyledImage src={imgImpactEffort} />
        <StyledImage src={imgJourneyJulia} />
        <StyledImage src={imgPersonaJulia} />
        <Paragraph>
          <strong>3 – Criação dos rabiscos e wireframes</strong>, levávamos para
          o cliente eu um novo momento, as ideias que tivemos e como pensamos em
          criar e solucionar os problemas levantados, criávamos para validação,
          um esboço em forma de wireframe de como acreditávamos que a solução
          poderia ser.
        </Paragraph>
        <StyledImage src={imgDraft} />
        <StyledImage src={imgWireFrame1} />
        <StyledImage src={imgWireFrame2} />
        <Paragraph>
          <strong>4 – Aplicação de style guide</strong>, buscávamos as cores da
          marca do cliente, ou alguma identidade que a marca possuía, e
          definíamos após essa avaliação a tipografia, peso da fonte, ícones,
          paleta de cores, botões, inputs e alertas.
        </Paragraph>
        <StyledImage src={imgStyleguide} />
        <Paragraph>
          <strong>
            5 – Consolidação do fluxo de telas e protótipo de alta fidelidade
          </strong>
          , refinávamos os wireframes, acrescentando novas ideias e também as já
          validadas, aplicávamos todo o style guide, criávamos componentes se
          necessário e apresentávamos para o cliente, anotando possíveis
          mudanças e as aprovações para disponibilizar a equipe de
          desenvolvedores.
        </Paragraph>
        <StyledImage src={imgAlta1} />
        <StyledImage src={imgAlta2} />
        <StyledImage src={imgAlta3} />
        <SectionTitle>Considerações finais</SectionTitle>
        <Paragraph>
          Esse era o processo que utilizávamos em todos os projetos que
          realizávamos na equipe de design, ainda estão longe que gostaríamos,
          sabíamos também que não era a forma mais correta de se trabalhar,
          porém, acima de tudo, nos adaptamos e entendemos a dinâmica da
          empresa, e tentávamos o máximo possível, entender e encontrar soluções
          para os problemas trazidos pelos clientes, de forma que trouxesse
          benefícios para a nossa empresa, agradasse o cliente e tivesse boas
          práticas e acima de tudo facilidade para utilização do usuário.
        </Paragraph>
        <Paragraph>
          Espero ter sido o mais claro possível e que não tenha gerado nenhuma
          dúvida, porém caso ocorra de alguma dúvida ou curiosidade sobre o
          processo surgir, estou sempre disposto a tirar ou explicar melhor, só
          entrar em contato comigo no Linkedin ou por e-mail, assim que puder
          responderei com maior prazer.
        </Paragraph>
        <Paragraph>
          <span>Criado por:</span>
          <br />
          <strong>Thiago Castro da Cruz:</strong> castro.thiagoux@gmail.com |
          LinkedIn
        </Paragraph>
      </Container>
    </main>
  );
};

export default Collection;
