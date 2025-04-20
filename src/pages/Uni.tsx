import Hero from "../components/common/Hero/Hero";

import university from "../data/pages/university"

function Uni() {
  return (
    <>
      <Hero {...university} />
    </>
  );
}

export default Uni;