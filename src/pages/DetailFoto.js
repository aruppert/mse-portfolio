import React, { useEffect } from "react";
import styled from "@emotion/styled";
import SliderDetail from "../components/SliderDetail";
import Photography from "../graphics/Photography";

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

export default function DetailFoto() {
  const fashion = [
    {
      id: 1,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596807864/Webseite/Work/Photography/Fasion/01_Fashion_Square_capc2y.jpg",
    },
    {
      id: 2,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596731715/Webseite/Work/Photography/02_Fashion_Square_acccg8.jpg",
    },
    {
      id: 3,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596731712/Webseite/Work/Photography/Fasion/03_Fashion_gwipkx.jpg",
    },
    {
      id: 4,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596731711/Webseite/Work/Photography/Fasion/04_Fashion_ziis4y.jpg",
    },
    {
      id: 5,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596731714/Webseite/Work/Photography/Fasion/05_Fashion_p6dp5a.jpg",
    },
    {
      id: 6,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596731720/Webseite/Work/Photography/Fasion/06_Fashion_xblzy1.jpg",
    },
    {
      id: 7,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596731718/Webseite/Work/Photography/Fasion/07_Fashion_mshze5.jpg",
    },
    {
      id: 8,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596731717/Webseite/Work/Photography/Fasion/08_Fashion_acyjqr.jpg",
    },
    {
      id: 9,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596731718/Webseite/Work/Photography/Fasion/09_Fashion_tphzqo.jpg",
    },
    {
      id: 10,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596731721/Webseite/Work/Photography/Fasion/10_Fashion_cgxcom.jpg",
    },
    {
      id: 11,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596731721/Webseite/Work/Photography/Fasion/11_Fashion_z52umn.jpg",
    },
  ];
  const lightPainting = [
    {
      id: 1,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596731936/Webseite/Work/Photography/%27LightPainting/01_Lightpeinting_Bauklotz_square_dcj6hm.jpg",
    },
    {
      id: 2,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596731961/Webseite/Work/Photography/%27LightPainting/02_Lightpeinting_Betongold_mhpwfr.jpg",
    },
    {
      id: 3,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596731986/Webseite/Work/Photography/%27LightPainting/03_Lightpeinting_Geldwaechshaus_square_moajk7.jpg",
    },
    {
      id: 4,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596731964/Webseite/Work/Photography/%27LightPainting/04_Lightpeinting_Landstrich_2_chuh48.jpg",
    },
    {
      id: 5,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596731993/Webseite/Work/Photography/%27LightPainting/05_Lightpeinting_Leerraum_square_qjlqzw.jpg",
    },
    {
      id: 6,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596731962/Webseite/Work/Photography/%27LightPainting/06_Lightpeinting_Luftschloss_square_kgragy.jpg",
    },
    {
      id: 7,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596732064/Webseite/Work/Photography/%27LightPainting/07_Lightpeinting_Ruhestand_square_rq8kxg.jpg",
    },
    {
      id: 8,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596732079/Webseite/Work/Photography/%27LightPainting/08_Lightpeinting_Stundenhotel_square_be4g7k.jpg",
    },
  ];
  const urbanChoreo = [
    {
      id: 1,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596732141/Webseite/Work/Photography/Urban/001_Urban_Choreography_i0dqwi.jpg",
    },
    {
      id: 2,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596732107/Webseite/Work/Photography/Urban/002_Urban_Choreography_kb21vg.jpg",
    },
    {
      id: 3,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596732121/Webseite/Work/Photography/Urban/003_Urban_Choreography_tdv3ew.jpg",
    },
    {
      id: 4,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596732112/Webseite/Work/Photography/Urban/004_Urban_Choreography_upxbc6.jpg",
    },
    {
      id: 5,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596732137/Webseite/Work/Photography/Urban/005_Urban_Choreography_uzl3qq.jpg",
    },
    {
      id: 6,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596732122/Webseite/Work/Photography/Urban/006_Urban_Choreography_nszzgs.jpg",
    },
    {
      id: 7,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596732140/Webseite/Work/Photography/Urban/007_Urban_Choreography_njihco.jpg",
    },
    {
      id: 8,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596732132/Webseite/Work/Photography/Urban/008_Urban_Choreography_vrkwfq.jpg",
    },
  ];
  const CTG = [
    {
      id: 1,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596733624/Webseite/Work/Photography/CTG/01_CTG-Doc_ltnl4a.jpg",
    },
    {
      id: 2,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596733662/Webseite/Work/Photography/CTG/02_CTG-Doc.jpg_nfxihp.jpg",
    },
    {
      id: 3,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596733623/Webseite/Work/Photography/CTG/03_CTG-Doc.jpg_thx0pf.jpg",
    },
    {
      id: 4,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596733931/Webseite/Work/Photography/CTG/04_CTG-Doc.jpg_dpmatv.jpg",
    },
    // {
    //   id: 5,
    //   src:
    //     "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596733931/Webseite/Work/Photography/CTG/04_CTG-Doc.jpg_dpmatv.jpg",
    // },
    {
      id: 6,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596733879/Webseite/Work/Photography/CTG/06_CTG-Doc.jpg_nrhrac.jpg",
    },
    {
      id: 7,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596733866/Webseite/Work/Photography/CTG/07_CTG-Doc.jpg_wyvohp.jpg",
    },
    {
      id: 8,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596733905/Webseite/Work/Photography/CTG/08_CTG-Doc.jpg_surt9o.jpg",
    },
    {
      id: 9,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596733910/Webseite/Work/Photography/CTG/09_CTG-Doc.jpg_qdyozf.jpg",
    },
    {
      id: 10,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1596733890/Webseite/Work/Photography/CTG/10_CTG-Doc.jpg_decycd.jpg",
    },
  ];

  const misc = [
    {
      id: 1,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1599561536/Webseite/Work/Photography/Misc/01_Misc_Photo_zmscq2.jpg",
    },
    {
      id: 2,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1599561545/Webseite/Work/Photography/Misc/02_Misc_Photo_jxhfw5.jpg",
    },
    {
      id: 3,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1599561539/Webseite/Work/Photography/Misc/03_Misc_Photo_mexlji.jpg",
    },
    {
      id: 4,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1599561545/Webseite/Work/Photography/Misc/04_Misc_Photo_Square_un6qad.jpg",
    },
    {
      id: 5,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1599561536/Webseite/Work/Photography/Misc/05_Misc_Photo_qiyqr3.jpg",
    },
    {
      id: 6,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1599561546/Webseite/Work/Photography/Misc/06_Misc_Photo_rjugnq.jpg",
    },
    {
      id: 7,
      src:
        "https://res.cloudinary.com/dkjkkarud/image/upload/c_fill,g_face:auto,q_100,w_450/v1599561545/Webseite/Work/Photography/Misc/07_Misc_Photo_xfes87.jpg",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <SVGWrapper>
        <Photography />
      </SVGWrapper>
      <Teaser>
        "If your pictures aren't good enough, you're not close enough." -{" "}
        <i>Robert Capa</i>
      </Teaser>
      <SliderDetail
        title="Fashion Photography"
        subtitle="Concept. Photography. Lighting. Color Grading."
        year="2013"
        data={fashion}
      />
      <Description>
        During my work with Stu Shapiro in Cape Town we arranged fashion shoots
        for models to top upgrade their portfolios.
      </Description>
      <SliderDetail
        title="Light Painting Photography"
        subtitle="Concept. Location Scouting. Photography. Light painting. Directing (Choreography). Color Grading."
        year="2013"
        data={lightPainting}
      />
      <Description>
        These pictures were taken during a project at KISD. Using light painting
        we protested against the housing and gentrification problems in major
        German cities.
      </Description>
      <SliderDetail
        title="Urban Choreography"
        subtitle="Concept. Photography. Color Grading."
        year="2013"
        data={urbanChoreo}
      />
      <Description>
        This project at KISD was about capturing moments in Colognes daily
        street life and unite them in a series.
      </Description>
      <SliderDetail
        title='"Come To Gather"-Project (Documentation)'
        subtitle="Photography. Social Design."
        year="2013"
        data={CTG}
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
        part of town no matter if they have a roof over their head or not..
        These pictures document our journey.
      </Description>
      <SliderDetail
        title="Miscellaneous Photography"
        subtitle="Photography. Color Grading. Picture Editing."
        year="on going"
        data={misc}
      />
      <Description>
        Here you find some selected pictures from my street and travel
        photography.
      </Description>
    </Container>
  );
}
