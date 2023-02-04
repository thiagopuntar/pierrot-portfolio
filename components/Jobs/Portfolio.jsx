import React from "react";
import {
  Columns,
  Ul,
  Ol,
  Title,
  Subtitle,
  SectionTitle,
  Paragraph,
  StyledImage,
} from "./styles";
import imgButtons from "../../public/img/jobs/portfolio/buttons.png";
import imgColors from "../../public/img/jobs/portfolio/colors.png";
import imgHome from "../../public/img/jobs/portfolio/home.png";
import imgJornada from "../../public/img/jobs/portfolio/jornada.png";
import imgPersona from "../../public/img/jobs/portfolio/persona.png";
import imgRabisco1 from "../../public/img/jobs/portfolio/rabiscoframe-1.png";
import imgRabisco2 from "../../public/img/jobs/portfolio/rabiscoframe-2.png";
import imgStyleguide from "../../public/img/jobs/portfolio/styleguide.png";
import imgTypography from "../../public/img/jobs/portfolio/typography.png";
import imgWireframe from "../../public/img/jobs/portfolio/wireframe.png";
import Container from "../Container";

const Portfolio = () => {
  return (
    <main>
      <Container>
        <Title>
          Portifólio em UI/UX Designer: Desenvolvimento do portifólio
        </Title>
        <Subtitle>
          Como utilizei tecnicas e metodos de UX Design para criar e validar o
          meu portifólio, transformando em um trabalho real todo o processo de
          desenvolvimento
        </Subtitle>
        <StyledImage src={imgHome} alt="Imagem do portifólio" />
        <SectionTitle>O desafio</SectionTitle>
        <Paragraph>
          O desafio Desenvolvendo meu portifólio me deparei com algumas dúvidas
          e caminhos a serem tomados, então decidi transformar todo meu processo
          de criação em um case, um problema de usabilidade a ser resolvido. O
          portifólio de UX /UI Design, normalmente é o primeiro contato que
          empresas e recrutadores tem sobre seu trabalho, ou seja, deve estar
          bem estruturado e de fácil navegação para os usuários. Ele deve conter
          também, a forma como você trabalha e pensa, suas habilidades e
          experiências práticas, além de expressar um pouco sobre quem é você, o
          designer que elaborou aquele trabalho.
        </Paragraph>
        <Paragraph>
          Portanto, desde o momento em que me vi na possibilidade de criar um
          ambiente, no qual iria expor meus trabalhos e como seria a construção
          estrutural desses trabalhos, o famoso “pensamento em design” Decidi
          transformar a criação do meu protifólio em um trabalho, já que nele eu
          pensei em cada detalhe, colocando minhas ideias e “pensamentos de
          design”. Elaborei cada botão, cor e tipografia tendo um objetivo e
          pensando também no meu usuário, que será quem visitar e decidir ver os
          meus trabalhos, pensei e testei todas as interações com pessoas de
          diferentes faixas etárias, buscando um melhor caminho para que o
          usuário do meu portifólio possa navegar por ele sem problemas e
          entendendo e encontrando o que ele quer.
        </Paragraph>
        <SectionTitle>Objetivo do projeto</SectionTitle>
        <Paragraph>
          Tornar o meu portifólio simples e de fácil acesso para qualquer
          usuário que visite, que todos consigam extrair e encontrar o que
          procuram em navegando por ele.
        </Paragraph>
        <SectionTitle>Usuários</SectionTitle>
        <Paragraph>
          Analisando o perfil de um grupo específico de usuários, principalmente
          recrutadores (desk research), através de artigos e vídeos, coletei
          informações sobre,
          <strong>
            o que os recrutadores querem e gostariam que existisse num
            portifólio
          </strong>
          , assim como, tentar buscar na visão de um recrutador
          <strong>“o que um portifólio precisa ter e como o elaborar?”</strong>
          Então elaborei a jornada desse usuário, como também criei um perfil
          (Persona) para ele, com o intuito de compreender como agem, pensam e
          sentem em cada estágio de sua experiência.
        </Paragraph>
        <StyledImage src={imgJornada} alt="Jornada" />
        <StyledImage src={imgPersona} alt="Persona" />
        <SectionTitle>Rabiscoframe e Wireframe</SectionTitle>
        <Paragraph>
          Realizei testes de navegação e usabilidade com algumas pessoas (6
          usuários), de idades e conhecimentos diferentes, utilizando o meu
          protótipo de papel (rabiscoframe), foi pedido para cada usuário
          realizar os seguintes objetivos:
        </Paragraph>
        <Ol>
          <li>
            Navegar pela imagem e clicar no botão para baixar o curriculo;
          </li>
          <li>
            Navegar e ir até as páginas de trabalhos, contatos e sobre mim;
          </li>
        </Ol>
        <Paragraph>
          Após modificar alguns pontos que identifiquei, realizei um novo teste
          (com 5 pessoas), só que dessa vez no wireframe navegável, e solicitei
          que fosse realizado os dois caminhos anteriores e mais 2 caminhos
          novos:
        </Paragraph>
        <Ol>
          <li>
            Navegar pela imagem e clicar no botão para baixar o curriculo;
          </li>
          <li>
            Navegar e ir até as páginas de trabalhos, contatos e sobre mim;{" "}
          </li>
          <li>Entrar no linkedin utilizando os links espalhados pelo site;</li>
          <li>
            sempre voltar para a Home, independente de onde estiverem no site;
          </li>
        </Ol>
        <Paragraph>
          Com esse teste, obtive os seguintes pontos de maior relevância:
        </Paragraph>
        <Paragraph>
          <Ul>
            <li>
              Na tela de home a minha logo deveria levar o usuário para a pagina
              home, independentemente de que pagina ele estivesse, assim como no
              rodapé na palavra “Thiago Castro”. Essas interações foram
              importantes para quando os usuários estivessem navegando em alguma
              outra página, fosse criado um “ponto seguro”, um lugar que ele
              possa voltar sempre que estiver perdido ou confuso;
            </li>
            <li>
              A lista de trabalhos estando como post na home, facilita a procura
              pelo conteúdo, além de deixar claro para o usuário a informação
              principal do portifólio;
            </li>
            <li>
              Diferentes usuários (com vários conhecimentos e idades) tiveram
              percepções distintas quanto a navegação e onde encontrar as
              principais informações. Então, adicionei links e botões em seções
              diferentes da mesma página, que levariam ao mesmos objetivo.
              Porém, sem tornar repetitivo, de uma forma fluida e natural, não
              atrapalhando e confundindo a experiência do usuário;
            </li>
          </Ul>
        </Paragraph>
        <Columns>
          <StyledImage src={imgRabisco1} alt="Rabiscoframe" />
          <StyledImage src={imgRabisco2} alt="Rabiscoframe" />
        </Columns>
        <StyledImage src={imgWireframe} alt="Wireframe" />
        <Paragraph>
          Navegue pelo Wireframe
          <a
            href="https://www.figma.com/proto/qqto5dtwOOtj4ESr54UGxi/Portfolio?page-id=322%3A152&node-id=322%3A153&viewport=241%2C48%2C0.13&scaling=min-zoom&starting-point-node-id=322%3A153"
            target="_blank"
            rel="noreferrer"
          >
            aqui
          </a>
        </Paragraph>
        <SectionTitle>Style Guide</SectionTitle>
        <StyledImage src={imgStyleguide} alt="Style Guide" />
        <SectionTitle>Cores</SectionTitle>
        <Paragraph>
          A escolha das cores foi uma mistura de vontade pessoal, com tendências
          por um background mais clean, que chamasse mais atenção para as
          informações e interações que a página iria oferecer. Escolhi uma
          tonalidade de amarelo e tendo o roxo como cor de auxilio e que
          chamasse a atenção para as mensagem principais da página.
        </Paragraph>
        <StyledImage src={imgColors} alt="Cores" />
        <SectionTitle>Tipografia</SectionTitle>
        <Paragraph>
          A escolha da tipografia, foi para trazer um tom e uma mensagem mais
          parecida com minha personalidade, algo mais divertido e descontraido,
          mas não perdendo o foco e importância da informação que queria
          mostrar.
          <br />A mescla entre a fonte Poppins para o texto e da Playfair
          Display para os títulos iniciais e principais criou um contraste entre
          a chamada para a informação e logo após o texto mais descontraida,
          mais leve para leitura e que combinasse com minha personalidade. Além
          disso, foi utilizado também como layout o padrão de leitura Z, bem
          utilizado em sites na internet, o que levou a usuário a identificar
          por ordem de prioridade as informações e ações que deveriam ser
          tomadas, buscando manter uma hierarquia visual bem definida.
        </Paragraph>
        <StyledImage src={imgTypography} alt="Tipografia" />
        <SectionTitle>Botões</SectionTitle>
        <Paragraph>
          Os botões foram escolhidos dentro da tonalidade das cores propostas
          para a página, roxo e amarelo. Aumentando a intensidade e os
          contrastes entre as cores para sempre guiar o usuário às informações
          principais. Os textos utilizados dentro do botão, foram seguindo boas
          práticas e padrões para uma boa navegação, não gerar dúvida onde e o
          que clicar, para encontrar o que procura.
        </Paragraph>
        <StyledImage src={imgButtons} alt="Botões" />
        <SectionTitle>Conclusão</SectionTitle>
        <Paragraph>
          Concluindo a criação e elaboração do projeto, tive muitos caminhos a
          seguir e, com o auxílio dos testes de navagação realizados, as tomadas
          de decisão foram facilitadas. Facilitando a tomada de decisão e que
          caminho deveria seguir. Mas acima de tudo, tive aprendizados
          importantes, a seguir estão alguns que impactaram diretamente no
          trabalho final:
        </Paragraph>
        <Paragraph>
          <Ul>
            <li>
              Tamanho e texto escolhido nos botões e CTA’s (call to action);
            </li>
            <li>
              Cores mais limpas e suaves e um background mais claro, bem clean,
              para a facilitar a leitura;
            </li>
            <li>
              Indicar e repetir caminhos e informações em mais de uma parte do
              site, ajudou a diferentes “tipos” de usuários (de culturas,
              conhecimento e idades diferentes) a sempre acharem as principais
              informações;
            </li>
            <li>
              O menu fixo, deu um “ar de tranquilidade” aos usuários, pois se
              estivessem perdidos ou em dúvida aonde ir, sempre podiam voltar ao
              menu inicial e recomeçar a tarefa que desejavam;
            </li>
            <li>
              A ideia de uma pagina para leitura com layout em padrão Z (pattern
              Z), fez o usuário identificar e visualizar as principais funções e
              objetivos do site, priorizando visualmente cada item;
            </li>
          </Ul>
        </Paragraph>
        <SectionTitle>Proximos Passos</SectionTitle>
        <Paragraph>
          Termino esse trabalho, deixando sempre em aberto a modificações, pois
          o portifólio é o “cartão de boas vindas” do seu criador, logo está
          sujeito sempre a modificações e melhoramento, novas experiencias e
          conhecimentos levam a esse melhoramento, sempre estamos aprendendo
          coisas novas e o portifolio participa integralmente dessa mudança e
          aprendizado.
        </Paragraph>
        <Paragraph>
          Agradeço a todos que participaram, direta e indiretamente da
          elaboração desse trabalho (fotografia, testando prototipo, dando
          feedback e auxiliando no desenvolvimento e criação).
        </Paragraph>
        <Paragraph>Criado por:</Paragraph>
        <Paragraph>
          <strong>Thiago Castro da Cruz:</strong> castro.thiagoux@gmail.com
        </Paragraph>
      </Container>
    </main>
  );
};

export default Portfolio;
