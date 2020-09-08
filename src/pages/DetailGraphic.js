import React, { useEffect } from "react";
import styled from "@emotion/styled";
import SliderDetail from "../components/SliderDetail";
import GraphicDesign from "../graphics/GraphicDesign";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  justify-content: center;
`;

const Teaser = styled.p`
  font-size: 18px;
  line-height: 20px;
  padding: 0 16%;
  margin: 1rem 0;
  width: 100%;
`;
const Description = styled.p`
  padding: 0 16%;
  margin: 1.5rem 0 0 0;
  padding: 0 1rem;
  width: 100%;
`;

const SVGWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function DetailGraphic() {
  const illustration = [
    {
      id: 1,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1599562668/Webseite/Work/GraphicDesign/01%20Illustrations/01_Illustrations_01_Illustrations_vhhhre.jpg",
    },
    {
      id: 2,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1599562650/Webseite/Work/GraphicDesign/01%20Illustrations/01_Illustrations_02_Illustrations.jpg_vzscuv.jpg",
    },
    {
      id: 3,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1599562667/Webseite/Work/GraphicDesign/01%20Illustrations/01_Illustrations_03_Illustrations.jpg_mjlysy.jpg",
    },
    {
      id: 4,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1599562653/Webseite/Work/GraphicDesign/01%20Illustrations/01_Illustrations_04_Illustrations.jpg_ctbomu.jpg",
    },
    {
      id: 5,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1599562649/Webseite/Work/GraphicDesign/01%20Illustrations/01_Illustrations_05_Illustrations.jpg_ozgkbs.jpg",
    },
    {
      id: 6,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1599562645/Webseite/Work/GraphicDesign/01%20Illustrations/01_Illustrations_06_Illustrations_uuliil.gif",
    },
  ];
  const wheelOfBelieves = [
    {
      id: 1,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1599562698/Webseite/Work/GraphicDesign/03%20Wheel%20of%20Believes%20%28CI%29/03_Wheel_of_Believes_CI_01_Wheel_of_Believes_Kopie_cwkgqy.jpg",
    },
    {
      id: 2,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1599562692/Webseite/Work/GraphicDesign/03%20Wheel%20of%20Believes%20%28CI%29/03_Wheel_of_Believes_CI_02_Wheel_of_Believes.jpg_Kopie_ycpp1h.jpg",
    },
  ];
  const CTGIG = [
    {
      id: 1,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1599562675/Webseite/Work/GraphicDesign/02%20Come%20To%20Gather/02_Come_To_Gather_01_ComeToGather_Campaign_cvywjz.jpg",
    },
    {
      id: 2,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1599562689/Webseite/Work/GraphicDesign/02%20Come%20To%20Gather/02_Come_To_Gather_02_ComeToGather_Campaign_vsqamm.jpg",
    },
    {
      id: 3,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1599562687/Webseite/Work/GraphicDesign/02%20Come%20To%20Gather/02_Come_To_Gather_03_ComeToGather_Campaign_iucooc.jpg",
    },
    {
      id: 4,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1599562681/Webseite/Work/GraphicDesign/02%20Come%20To%20Gather/02_Come_To_Gather_04_ComeToGather_Campaign_l5opdq.jpg",
    },
    {
      id: 5,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1599562692/Webseite/Work/GraphicDesign/02%20Come%20To%20Gather/02_Come_To_Gather_05_ComeToGather_Campaign_v9vuxd.jpg",
    },
    {
      id: 6,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1599562688/Webseite/Work/GraphicDesign/02%20Come%20To%20Gather/02_Come_To_Gather_06_ComeToGather_Campaign_oemj1g.jpg",
    },
    {
      id: 7,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1599562693/Webseite/Work/GraphicDesign/02%20Come%20To%20Gather/02_Come_To_Gather_07_ComeToGather_Campaign_veyhwr.jpg",
    },
    {
      id: 8,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1599562684/Webseite/Work/GraphicDesign/02%20Come%20To%20Gather/02_Come_To_Gather_08_ComeToGather_Campaign_z7hcu5.jpg",
    },
    {
      id: 9,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1599562680/Webseite/Work/GraphicDesign/02%20Come%20To%20Gather/02_Come_To_Gather_09_ComeToGather_Campaign_yoagfm.jpg",
    },
    {
      id: 10,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/v1599562697/Webseite/Work/GraphicDesign/02%20Come%20To%20Gather/02_Come_To_Gather_10_ComeToGather_Campaign_w1s6qa.jpg",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <SVGWrapper>
        <GraphicDesign />
      </SVGWrapper>
      <Teaser>
        “If no one hates it, no one really loves it.” – Jessica Walsh
      </Teaser>

      <SliderDetail
        title="Illustrations for this website"
        subtitle="Illustration."
        year="2020"
        data={illustration}
      />
      <Description>
        I wanted to have an Eye-Catching starting point for this website, so I
        tried out different illustration styles until I selected the curly girl.
      </Description>
      <SliderDetail
        title="The Wheel of Believes (CI)"
        subtitle="Layout. Illustration. CI."
        year="2015"
        data={wheelOfBelieves}
      />
      <Description>
        For my Bachelor Thesis I also designed the logo and graphical elements
        for the fictional website.
      </Description>
      <SliderDetail
        title="Come To Gather (Image Campaign)"
        subtitle="Concept. Photography. Graphic Design."
        year="2013"
        data={CTGIG}
        imagestyle="contain"
      />
      <Description>
        During my time in Cape Town some fellow designers and me started talking
        to a group of homeless people to find about their daily life and their
        every day problems as part of a design research project. Our goal was to
        find social design solutions to help their problems. One of their main
        issues was how they were seen by the people living and working in the
        buildings around them. So we decided to introduce these lovely people
        via postcards to their community. We also organized a
        Claim-your-streets-event to bring together the people living in these
        part of town no matter if they have a roof over their head or not.
      </Description>
    </Container>
  );
}
