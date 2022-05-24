import React from "react";
import ResponsiveImage from "../ResponsiveImage";
import { Columns, H1, H2, H3, Ul, Paragraph, StyledImage } from "./styles";
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
import Container from "../Container";

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
        <StyledImage src={imgHero} />
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
        <H3>Mas o que seria NFT?</H3>
        <Paragraph>Segundo pesquisas descobri que NFT é:</Paragraph>
        <Paragraph>
          A sigla para o termo non fungible token, ou “token não fungível”. Eles
          são tokens, ou seja, códigos numéricos com registro de transferência
          digital que garantem autenticidade aos seus donos. Na prática, eles
          funcionam como itens colecionáveis, que não podem ser reproduzidos,
          mas sim transferidos. Diferente das criptomoedas, como o Bitcoin, e
          vários tokens utilitários, os NFTs não são mutuamente intercambiáveis.
          O token não fungível representa algo específico e individual, com
          cartão de &#34;autenticidade&#34; e que não pode ser substituído. Por
          exemplo, um bitcoin é fungível - troque um por outro bitcoin e você
          terá exatamente a mesma coisa.
        </Paragraph>
        <Paragraph>
          Os NFTs são projetados para dar a você algo que não pode ser copiado:
          propriedade da obra (embora o artista ainda possa reter os direitos
          autorais e de reprodução da obra física). Essa relação entre dados e
          valores – realizada pela NFT – é possível por causa de uma tecnologia
          chamada Blockchain. Esta é uma base de dados descentralizada que ficou
          famosa por servir de fundamento para as criptomoedas, como a Bitcoin e
          também a Ethereum. É um sistema onde é possível rastrear o recebimento
          e envio de determinados tipos de informações. Todas as transações
          ficam registradas em um tipo de documento oficial que pode ser
          acessado por qualquer usuário. A maioria dos NFTs faz parte do
          Blockchain Ethereum. Os NFTs são armazenados em carteiras digitais
          (embora seja importante notar que a carteira precisa ser
          especificamente compatível com NFT).
        </Paragraph>
        <Paragraph spaced>
          fonte:
          <a
            target="_blank"
            href="https://mundoconectado.com.br/artigos/v/21538/nft-o-que-e-e-como-funciona-a-tecnologia-que-da-milhoes-de-dolares-por-arte-digital."
            rel="noreferrer"
          >
            https://mundoconectado.com.br/artigos/v/21538/nft-o-que-e-e-como-funciona-a-tecnologia-que-da-milhoes-de-dolares-por-arte-digital.
          </a>
        </Paragraph>
        <Paragraph spaced>Saiba mais em:</Paragraph>
        <Ul>
          <li>
            <a
              target="_blank"
              href="https://valor.globo.com/financas/noticia/2021/12/21/o-que-e-nft-como-funciona-essa-tecnologia-posso-criar-um-veja-perguntas-e-respostas.ghtml"
              rel="noreferrer"
            >
              O que é NFT e como funciona essa tecnologia?
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://forbes.com.br/forbes-tech/2022/02/afinal-o-que-e-nft-e-como-criar-e-vender/"
              rel="noreferrer"
            >
              A final o que é NFT e como criar e vender?
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.techtudo.com.br/noticias/2021/03/o-que-e-nft-entenda-como-funciona-a-tecnologia-do-token.ghtml"
              rel="noreferrer"
            >
              Entenda como funciona a tecnologia do token
            </a>
          </li>
        </Ul>

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
        <StyledImage src={imgProject} />
        <H3>Wireframe</H3>
        <Paragraph>
          Primeiro passo do processo foi a criação da ideia e o que iria ser
          desenvolvido no fluxo
        </Paragraph>
        <StyledImage src={imgWireframe} />
        <H3>Alta fidelidade</H3>
        <Paragraph>
          Primeiro passo do processo foi a criação da ideia e o que iria ser
          desenvolvido no fluxo
        </Paragraph>
        <StyledImage src={imgCrypto1} />
        <StyledImage src={imgCrypto2} />
        <H3>Style Guide</H3>
        <Paragraph>
          Primeiro passo do processo foi a criação da ideia e o que iria ser
          desenvolvido no fluxo
        </Paragraph>
        <StyledImage src={imgStyleGuide} />
        <StyledImage src={imgFont} />
        <StyledImage src={imgColors} />
        <Columns>
          <ResponsiveImage src={imgButtons} />
          <ResponsiveImage src={imgIcons} />
        </Columns>
        <H3>Proximos Passos</H3>
        <Paragraph spaced>
          Termino esse trabalho, deixando sempre em aberto a modificações, pois
          o portifólio é o “cartão de boas vindas” do seu criador, logo está
          sujeito sempre a modificações e melhoramento, novas experiencias e
          conhecimentos levam a esse melhoramento, sempre estamos aprendendo
          coisas novas e o portifolio participa integralmente dessa mudança e
          aprendizado. Agradeço a todos que participaram, direta e indiretamente
          da elaboração desse trabalho (fotografia, testando prototipo, dando
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

export default Crypto;
