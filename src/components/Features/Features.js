import "./Features.scss";
import Feature from "./Feature";

function Features() {
  const featureData = [
    {
      icon: "icon-global",
      title: "World best luxury homes",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.",
    },
    {
      icon: "icon-trophy",
      title: "Only the best properties",
      text: "Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.",
    },
    {
      icon: "icon-map-pin",
      title: "All homes in top locations",
      text: "Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.",
    },
    {
      icon: "icon-key",
      title: "New home in one week",
      text: "Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: "icon-presentation",
      title: "Top 1% realtors",
      text: "Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.",
    },
    {
      icon: "icon-lock",
      title: "Secure payments on next",
      text: "Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.",
    },
  ];

  return (
    <section className="features">
      <Feature data={featureData[0]} />
      <Feature data={featureData[1]} />
      <Feature data={featureData[2]} />
      <Feature data={featureData[3]} />
      <Feature data={featureData[4]} />
      <Feature data={featureData[5]} />
    </section>
  );
}

export default Features;
