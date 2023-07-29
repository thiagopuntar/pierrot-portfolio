import Image from "next/image";
import imgGrow from "../../../public/img/companies/grow.png";
import imgIdip from "../../../public/img/companies/idip.png";
import imgMeit from "../../../public/img/companies/meit.png";
import imgMentorCycle from "../../../public/img/companies/mentor-cycle.png";
import imgZallpy from "../../../public/img/companies/zallpy.png";
import imgRedeDor from "../../../public/img/companies/rede-dor.png";
import imgTke from "../../../public/img/companies/tke.png";
import imgIeci from "../../../public/img/companies/ieci.png";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { CompaniesWrapper } from "./styles";
const Companies = () => {
  return (
    <>
      <section>
        <SectionTitle>Empresas que Trabalhei</SectionTitle>
        <CompaniesWrapper>
          <li>
            <Image src={imgIdip} />
          </li>
          <li>
            <Image src={imgMeit} />
          </li>
          <li>
            <Image src={imgZallpy} />
          </li>
          <li>
            <Image src={imgMentorCycle} />
          </li>
          <li>
            <Image src={imgGrow} />
          </li>
        </CompaniesWrapper>
      </section>
      <section>
        <SectionTitle>Alguns Clientes</SectionTitle>
        <CompaniesWrapper>
          <li>
            <Image src={imgRedeDor} />
          </li>
          <li>
            <Image src={imgTke} />
          </li>
          <li>
            <Image src={imgIeci} />
          </li>
        </CompaniesWrapper>
      </section>
    </>
  );
};

export default Companies;
