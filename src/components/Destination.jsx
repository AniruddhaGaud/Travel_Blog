import "./DestinationStyles.css";
import Temple1 from "../assets/1.jpg";
import Temple2 from "../assets/2.jpg";
import Temple3 from "../assets/3.jpg";
import Temple4 from "../assets/5.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>

      <DestinationData
        className="first-des"
        heading="Bali, Indonesia -"
        text="Bali is the only Hindu-majority province in Indonesia, with 86.9% of the population adhering to Balinese Hinduism. It is renowned for its highly developed arts, including traditional and modern dance, sculpture, painting, leather, metalworking, and music. The Indonesian International Film Festival is held every year in Bali. Other international events that have been held in Bali include Miss World 2013, the 2018 Annual Meetings of the International Monetary Fund and the World Bank Group and the 2022 G20 summit. In March 2017, TripAdvisor named Bali as the world's top destination in its Traveller's Choice award, which it also earned in January 2021."
        img1={Temple1}
        img2={Temple2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Eiffel Tower, France -"
        text="The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.The tower is 330 metres (1,083 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest human-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930."
        img1={Temple3}
        img2={Temple4}
      />
    </div>
  );
};

export default Destination;
