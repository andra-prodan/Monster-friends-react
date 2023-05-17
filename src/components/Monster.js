import '../styles/styles.css';

function Monster(props) {
  return (
    <div class='monsterBOX'>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <img className='monsterIMG' src={props.src}></img>
    </div>
  );
}


export default Monster;
