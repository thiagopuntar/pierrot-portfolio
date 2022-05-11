import React from "react";
import ResponsiveImage from "../ResponsiveImage";
import { Columns, H1, H2, H3, Paragraph, StyledImage } from "./styles";
import imgHero from "../../public/img/jobs/crypto/hero.png";
import imgProject from "../../public/img/jobs/crypto/project.png";
import imgWireframe from "../../public/img/jobs/crypto/wireframe.png";
import imgCrypto1 from "../../public/img/jobs/crypto/crypto-1.png";
import imgCrypto2 from "../../public/img/jobs/crypto/crypto-2.png";
import imgButtons from "../../public/img/jobs/crypto/buttons.png";
import imgColors from "../../public/img/jobs/crypto/colors.png";
import imgFont from "../../public/img/jobs/crypto/font.png";
import imgIcons from "../../public/img/jobs/crypto/icons.png";
import imgStyleGuide from "../../public/img/jobs/crypto/style-guide.png";
import { Container } from "../Container";

const Crypto = () => {
  return (
    <main>
      <Container>
        <H1>Cyber Crypto: Criação de aplicativo de NFT</H1>
        <H2>
          Durante um período de estudo no desenvolvimento e aperfeiçoamento das
          minhas habilidades com a ferramenta FIgma, desenvolvi fluxo de um
          aplicativo de NFT.
        </H2>
        <StyledImage>
          <ResponsiveImage src={imgHero} />
        </StyledImage>
        <H3>O desafio</H3>
        <Paragraph>
          Durante um período de estudo no desenvolvimento e aperfeiçoamento das
          minhas habilidades com a ferramenta FIgma, desenvolvi fluxo de um
          aplicativo de NFT. Como esse trabalho foi voltado para aperfeiçoamento
          da ferramenta Figma, não explorei muito o problema, já que a solução
          já tinha uma proposta pronta. Porém ao desenvolver todo o fluxo
          utilizei de boas práticas de usabilidade e aplicando Heuristicas para
          propor um melhor aproveitamento do desafio proposto e conceitos
          aplicados de UX para o bom uso do aplicativo.
        </Paragraph>
        <H3>Objetivo do projeto</H3>
        <Paragraph>
          Tornar o meu portifólio simples e de fácil acesso para qualquer
          usuário que visite, que todos consigam extrair e encontrar o que
          procuram em navegando por ele.
        </Paragraph>
        <H3>Usuários</H3>
        <Paragraph>
          Analisando o perfil de um grupo de usuários, usuários de NFT, tendo
          uma conversa mais livre, sem roteiro e mais informal, observei que
          algumas coisas eram de comum acordo entre eles:
          <ul>
            <li>
              Mencionaram sobre uma proposta para NFT para mobile que fosse
              menos complexa para uso, já que a questão envolvia dinheiro e o
              usuário além do cadastro na plataforma do jogo, tinha que ter
              cadastrado uma carteira, que para criação e manutenção é algo
              complexo (encontrando nesse momento um apossibilidade de um bom
              problema para terntar encontrar uma solução futuramente);
            </li>
          </ul>
        </Paragraph>
        <StyledImage>
          <ResponsiveImage src={imgProject} />
        </StyledImage>
        <H3>Wireframe</H3>
        <Paragraph>
          Primeiro passo do processo foi a criação da ideia e o que iria ser
          desenvolvido no fluxo
        </Paragraph>
        <StyledImage>
          <ResponsiveImage src={imgWireframe} />
        </StyledImage>
        <H3>Alta fidelidade</H3>
        <Paragraph>
          Primeiro passo do processo foi a criação da ideia e o que iria ser
          desenvolvido no fluxo
        </Paragraph>
        <StyledImage>
          <ResponsiveImage src={imgCrypto1} />
        </StyledImage>
        <StyledImage>
          <ResponsiveImage src={imgCrypto2} />
        </StyledImage>
        <H3>Style Guide</H3>
        <Paragraph>
          Primeiro passo do processo foi a criação da ideia e o que iria ser
          desenvolvido no fluxo
        </Paragraph>
        <StyledImage>
          <ResponsiveImage src={imgStyleGuide} />
        </StyledImage>
        <StyledImage>
          <ResponsiveImage src={imgFont} />
        </StyledImage>
        <StyledImage>
          <ResponsiveImage src={imgColors} />
        </StyledImage>
        <Columns>
          <ResponsiveImage src={imgButtons} />
          <ResponsiveImage src={imgIcons} />
        </Columns>
        <H3>Proximos Passos</H3>
        <Paragraph>
          Termino esse trabalho, deixando sempre em aberto a modificações, pois
          o portifólio é o “cartão de boas vindas” do seu criador, logo está
          sujeito sempre a modificações e melhoramento, novas experiencias e
          conhecimentos levam a esse melhoramento, sempre estamos aprendendo
          coisas novas e o portifolio participa integralmente dessa mudança e
          aprendizado. Agradeço a todos que participaram, direta e indiretamente
          da elaboração desse trabalho (fotografia, testando prototipo, dando
          feedback e auxiliando no desenvolvimento e criação).
        </Paragraph>
      </Container>
    </main>
  );
};

export default Crypto;