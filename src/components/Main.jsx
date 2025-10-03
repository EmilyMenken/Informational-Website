import carnivoreImg from "../assets/carnivore.jpg";
import omnivoreImg from "../assets/omnivore.jpg";
import herbivoreImg from "../assets/herbivore.jpg";

import carcharImg from "../assets/carcharodontosaurus.jpg";
import gigaImg from "../assets/giganotosaurus.jpg";
import deinoImg from "../assets/deinonychus.jpg";

import oviImg from "../assets/oviraptor.jpg";
import trooImg from "../assets/troodon.jpg";
import ornImg from "../assets/ornithomimus.jpg";


export default function Main() {

  return (

<main>

  <div id="carni">

    <section className="dinosaurType">
      <img src={carnivoreImg} alt="Various meats" />
      <h1 id="carnivores"> Carnivores </h1>
    </section>

    <section className="facts">

    <div className="dinos">

    <img src={carcharImg} alt="an illustration of Carcharodontosaurus" />
      <h3>Carcharodontosaurus</h3>
      <h5>“kar-KAR-oh-don-toe-SOR-us”</h5>
      <h4>Sharp-Toothed Lizard</h4>
      <p className="factParagraph">The Carcharodontosaurus is named after the genus Carcharodon, which means sharp, or jagged toothed. 
        Some sharks, such as the Great White Shark are from this genus (Carcharodon carcharias), which is why Carcharodontosaurus is sometimes called the Shark-Toothed lizard. 
        Although it's brain was average size for non-avian reptiles, it had a large optic nerve and it's inner ear is built like that of modern reptiles, rather than birds like most other theropods.
        It's been estimated to reach about 13.3 meters (44 ft) in length and weigh about 15.1 metric tons. </p>

    </div>

    <div className="dinos">

      <img src={gigaImg} alt="an illustration of Giganotosaurus" />
      <h3>Giganotosaurus</h3>
      <h5>“JIG-a-no-toe-saurus”</h5>
      <h4>Giant Southern Lizard</h4>
      <p className="factParagraph">The Giganotosaurus had crests above each eye, along with small elongated neural spines from it's neck to it's tail.
        It has been described as a larger version of Allosaurus mostly due to it having a similar build, though they are part of the same broad Allosauroidea superfamily. 
        It had a fairly light weight build as it was built more for speed than strength when compared to other large theropods.
        It's been estimated to reach about 12.5 meters (41 feet) in length and weigh about 6-8 metric tons. </p>

    </div>

    <div className="dinos">

      <img src={deinoImg} alt="an illustration of Deinonychus" />
      <h3>Deinonychus</h3>
      <h5>“DYE-noh-nye-kus”</h5>
      <h4>Terrible Claw</h4>
      <p className="factParagraph"> The Deinonychus is a raptor, like its relative Velociraptor, although it was a bit bigger.
        It's part of the Dromaeosauridae family, which means running lizards.
        Although its not confirmed for this specific species, it most likely had feathers. This is due to the fact that dinosaurs it was related to, like Velociraptor, had them.
        It's name means terrible claw, but it is thought to have also used it's stocky, robust skull along with it's sickle claw when hunting.
        It's been estimated to reach about 3.3-3.4 meters (10.8-11.2 ft) in length and weigh about 100 kg (220 lb). </p>

    </div>


    </section>

  </div>


  <div id="omni">

    <section className="dinosaurType">
      <img src={omnivoreImg} alt="Various meats and vegetables" />
      <h1 id="omnivores"> Omnivores </h1>
    </section>

    <section className="facts">

    <div className="dinos">

      <img src={oviImg} alt="an illustration of Oviraptor" />
      <h3>Oviraptor</h3>
      <h5>“OH-vee-RAP-tor”</h5>
      <h4>Egg Thief</h4>
      <p className="factParagraph">The Oviraptor, despite it's name meaning egg thief, was only named that as a fossil had been found on a nest of eggs. 
        Further research revealed that the eggs were actually it's own, meaning the dinosaur had most likely died protecting it's eggs. 
        There have been multiple other fossils also finding Oviraptor on, or near eggs or juvenile Oviraptors.
        Oviraptor had long hindlimbs with 4 toes on each foot, developed arms with curved claws, was covered in feathers, a large beak on its skull and possibly crests as well. 
        Its been estimated to reach about 1.6-2 meters (5.2-6.6 ft) in length and weigh about 33-40 kg (73-88 lb). </p>
    </div>

    <div className="dinos">

      <img src={trooImg} alt="an illustration of Troodon" />
      <h3>Troodon</h3>
      <h5>“TROH-oh-don”</h5>
      <h4>Wounding Tooth</h4>
      <p className="factParagraph">The Troodon was discovered all the way back in 1855, though it was thought to be a lizard until 1877. 
        Its teeth are serrated but also very fine, the fineness of the teeth being similar to herbivorous dinosaurs. 
        Troodon also had one of the largest brain to body ratio amongst dinosaurs, it's brain being being about 0.05% of it's body weight compared to other dinosaurs which only had a ratio of about 0.01-0.03%.
        Troodon had communal nesting, where multiple individuals would all lay eggs together in a single nest- like ostriches.
        Its been estimated to reach about 2 meters (6.5 ft) in length and weigh about 50 kg(110 lb). </p>
    </div>

    <div className="dinos">

      <img src={ornImg} alt="an illustration of Ornithomimus" /> 
      <h3>Ornithomimus</h3>
      <h5>“OR-ni-tho-MY-mus”</h5>
      <h4>Bird Mimic</h4>
      <p className="factParagraph">The Ornithomimus was named due to its feet, as they are very similar to modern birds. 
        It had a long neck, a beak, a fairly large brain and eyes, feathers similar to that of an ostrich and is thought to have been an excellent runner due to its hollow bones and long limbs.
        It likely didn't have any feathers on its legs, as a skin impression shows it was fairly close to an ostrich in feather placement.
        It is thought that it used the feathers on it's arms as a mating display.
        Its been estimated to reach about 3.8 meters (12 ft) in length and weigh about 170 kg (370 lb).</p>
    </div>


    </section>

  </div>

  <div id="herbi">

    <section className="dinosaurType">
      <img src={herbivoreImg} alt="Various vegetables" />
      <h1 id="herbivores"> Herbivores </h1>
    </section>

    <section className="facts">

    <div className="dinos">
      <h3>Therizinosaurus</h3>
      <h5>pronounce</h5>
      <h4>Scythe Lizard</h4>
      <p className="factParagraph">The Therizinosaurus get its name from the claws on its forelimbs, which were 50 cm (20 in) in length- the longest of any land animal.
        The claws are only curved at the ends, and due to its long neck and beak it was most certainly an herbivore despite the menacing claws.
        It was bipedal, and to help with its large body it had a very robust tibia, with around 3 meter (9.8 ft) length legs. 
        Its forearms were longer than the average human is tall, 
        Its been estimated to reach about 9-10 meters (30-33 ft) in length and weigh about 6.6 tons or more.
      </p>
    </div>
      
    <div className="dinos">
      <h3>dino</h3>
      <h5>pronounce</h5>
      <h4>translations</h4>
      <p className="factParagraph">facts</p>
    </div>
      
    <div className="dinos">
      <h3>dino</h3>
      <h5>pronounce</h5>
      <h4>translations</h4>
      <p className="factParagraph">facts</p>
    </div>


    </section>

  </div>





</main>

  );

}
