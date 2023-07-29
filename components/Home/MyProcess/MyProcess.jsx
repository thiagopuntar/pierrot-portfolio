import SectionTitle from "../../shared/SectionTitle";
import ResponsiveImage from "../../ResponsiveImage";
import myProcessImg from "../../../public/img/my-process.jpeg";

const MyProcess = () => {
  return (
    <section>
      <SectionTitle>Meu Processo</SectionTitle>
      <ResponsiveImage src={myProcessImg} alt="Como funciona meu processo" />
    </section>
  );
};

export default MyProcess;
