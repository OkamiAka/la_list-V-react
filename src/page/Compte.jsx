import pop from "../data/pop";

function Compte({ utilisateur, id }) {
  return (
    <figure className="utilisateur">
      <img src={utilisateur.avatar} alt={utilisateur.nom} />
      <h3>
        {utilisateur.nom} {utilisateur.prenom} id={id}
      </h3>
      <p>{pop.length} figurine</p>
      <p>{0} pop</p>
      <p>{0} mug</p>
    </figure>
  );
}
export default Compte;
