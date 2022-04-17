import React from "react";
import ResponsiveImage from "../ResponsiveImage";
import {
  H1,
  H2,
  H3,
  SkillList,
  ImageWrapper,
  Paragraph,
  Wrapper,
  HardSkillsWrapper,
  SoftSkillsWrapper,
  HardSkillText,
} from "./styles.jsx";
import about1 from "../../public/img/about-me/about-1.png";
import about2 from "../../public/img/about-me/about-2.png";
import about3 from "../../public/img/about-me/about-3.png";
import imgHardSkill from "../../public/img/about-me/hard-skills.png";
import imgSoftSkill from "../../public/img/about-me/soft-skills.png";

const AboutText = () => (
  <Wrapper>
    <Paragraph>
      Sou apaixonado por conhecer e aprender coisas novas, sou prestativo,
      proativo e descontraido, em momentos de lazer, gosto de estudar, ler,
      curtir minha família e amigos, games, board games, séries, filmes fazem
      parte da minha rotina, adoro assistir e praticar (esporadicamente)
      esportes, prefiro principalmente os esportes em equipe, gosto de competir
      e tentar sempre me superar.
    </Paragraph>
    <Paragraph>
      Minha formação começou em História, o que me ajudou a desenvolver vontade
      por ajudar e ensinar as pessoas, sempre tive interesse por Design a vida
      toda, mas a vida me levou sempre a caminhos diferentes. Após formado tive
      pouca experiência em sala de aula e com pesquisa. Fui convidado a
      trabalhar na Tesouraria da Prefeitura Municipal de Maricá, onde ocupei o
      cargo de Tesoureiro do Município ao longo de 6 anos, tendo a incível
      experiencia em liderar essa equipe, sempre procurando aprender, me
      aperfeiçoar e compreender o trabalho dos outros.
    </Paragraph>
    <Paragraph>
      Contudo, a vontade por me desafiar, a inquietação de conhecimento e a
      vontade adormecida por tecnologia desde jovem, me levou a conhecer UX
      Design. Por intermédio de um amigo, comecei a conhecer melhor o universo
      de UX e tudo encaixou perfeitamente, união de tecnologia com Design,
      descobri o que realmente deveria ter estudado anteriormente. Após tantos
      anos trabalhando em áreas distintas, era isso que eu sempre quis, conforme
      fui estudando e aprofundando o conhecimento fui me identificando e cada
      vez mais e buscando informações. Hoje estou me aventurando nessa área e
      buscando oportunidades para aprender e experimentar novas e diferentes
      experiencias.
    </Paragraph>
    <ImageWrapper>
      <ResponsiveImage src={about1} />
      <ResponsiveImage src={about2} />
      <ResponsiveImage src={about3} />
    </ImageWrapper>
    <H1>Habilidades</H1>
    <HardSkillsWrapper>
      <ResponsiveImage src={imgHardSkill} />
      <div>
        <H2>Hard Skills</H2>
        <HardSkillText>
          <div>
            <H3>Conhecimentos</H3>
            <SkillList>
              <li>Design Thinking</li>
              <li>Pesquisas</li>
              <li>Bechmarking</li>
              <li>Teste de Usabilidade</li>
              <li>Metodologia agil</li>
              <li>Arquitetura de Informação</li>
              <li>Escrita em UX</li>
              <li>Comunicação Visual</li>
              <li>Prototipagem</li>
              <li>Wireframing</li>
              <li>Desenho a mão livre</li>
              <li>Inglês Instrumental (em desenvolvimento)</li>
            </SkillList>
          </div>
          <div>
            <H3>Softwares</H3>
            <SkillList>
              <li>Figma</li>
              <li>Sketch</li>
              <li>Adobe XD</li>
              <li>Photoshop</li>
              <li>Adobe Premiere</li>
              <li>Wordpress</li>
              <li>Javascript</li>
              <li>HTML5 e CSS3</li>
              <li>Miro</li>
            </SkillList>
          </div>
        </HardSkillText>
      </div>
    </HardSkillsWrapper>
    <SoftSkillsWrapper>
      <div>
        <H2>Soft Skills</H2>
        <SkillList>
          <li>
            Resiliência (para lidar com situações de maneira adaptável e
            colaborativa)
          </li>
          <li>Proatividade</li>
          <li>Colaboração / trabalho em equipe</li>
          <li>Prestativo</li>
          <li>Empatia ao problema do outro</li>
          <li>Vontade de aprender sempre</li>
          <li>Persistência</li>
        </SkillList>
      </div>
      <ResponsiveImage src={imgSoftSkill} />
    </SoftSkillsWrapper>
  </Wrapper>
);

export default AboutText;
