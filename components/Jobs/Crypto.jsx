import React from "react";
import ResponsiveImage from "../ResponsiveImage";
import { H1, H2, H3, Main, Paragraph } from "./styles";
import imgHero from "../../public/img/jobs/crypto/hero.png";
import imgProject from "../../public/img/jobs/crypto/project.png";

const Crypto = () => {
  return (
    <Main>
      <H1>Cyber Crypto: Criação de aplicativo de NFT</H1>
      <H2>
        Durante um período de estudo no desenvolvimento e aperfeiçoamento das
        minhas habilidades com a ferramenta FIgma, desenvolvi fluxo de um
        aplicativo de NFT.
      </H2>
      <ResponsiveImage src={imgHero} />
      <H3>O desafio</H3>
      <Paragraph>
        Durante um período de estudo no desenvolvimento e aperfeiçoamento das
        minhas habilidades com a ferramenta FIgma, desenvolvi fluxo de um
        aplicativo de NFT. Como esse trabalho foi voltado para aperfeiçoamento
        da ferramenta Figma, não explorei muito o problema, já que a solução já
        tinha uma proposta pronta. Porém ao desenvolver todo o fluxo utilizei de
        boas práticas de usabilidade e aplicando Heuristicas para propor um
        melhor aproveitamento do desafio proposto e conceitos aplicados de UX
        para o bom uso do aplicativo.
      </Paragraph>
      <H3>Objetivo do projeto</H3>
      <Paragraph>
        Tornar o meu portifólio simples e de fácil acesso para qualquer usuário
        que visite, que todos consigam extrair e encontrar o que procuram em
        navegando por ele.
      </Paragraph>
      <H3>Usuários</H3>
      <Paragraph>
        Analisando o perfil de um grupo de usuários, usuários de NFT, tendo uma
        conversa mais livre, sem roteiro e mais informal, observei que algumas
        coisas eram de comum acordo entre eles:
        <ul>
          <li>
            Mencionaram sobre uma proposta para NFT para mobile que fosse menos
            complexa para uso, já que a questão envolvia dinheiro e o usuário
            além do cadastro na plataforma do jogo, tinha que ter cadastrado uma
            carteira, que para criação e manutenção é algo complexo (encontrando
            nesse momento um apossibilidade de um bom problema para terntar
            encontrar uma solução futuramente);
          </li>
        </ul>
      </Paragraph>
      <ResponsiveImage src={imgProject} />
      <H3>Wireframe</H3>
      <Paragraph>
        Primeiro passo do processo foi a criação da ideia e o que iria ser
        desenvolvido no fluxo
      </Paragraph>
    </Main>
  );
};

export default Crypto;
