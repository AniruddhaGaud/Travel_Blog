import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/4.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
        />

        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Malaysia is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions: Peninsular Malaysia and Borneo's East Malaysia."
        />

        <TripData
          image={Trip3}
          heading="Trip in France"
          text="France, officially the French Republic, is a country located primarily in Western Europe. It also includes overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans, giving it one of the largest discontiguous exclusive economic zones in the world."
        />
      </div>
    </div>
  );
};

export default Trip;
