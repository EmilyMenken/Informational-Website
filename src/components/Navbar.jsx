import footprintImg from "../assets/dinosaur-footprints.png";

export default function Navbar() {

  return (
    <header>
    <nav>

      <div className="topOfNav">

        <img src={footprintImg} alt="Green dinosaur footprints" />
        <span>Dinosaur Facts!</span>
        <img src={footprintImg} alt="Green dinosaur footprints" />
        
        </div>

        <ul>
          <li><a href="#carni">Carnivores</a></li>
          <li><a href="#omni">Omnivores</a></li>
          <li><a href="#herbi">Herbivores</a></li>
        </ul>

    </nav>
    </header>
  );

}
