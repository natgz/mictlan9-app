import './imagesSkullElements.css';

export default function Images({ imgObject, size }) {

  const imgArray = Object.keys(imgObject)
  
  .filter(v=>{
      try{
        return require(`../../app/images/${v}/${imgObject[v]}.png`);
      }catch(e){
        return false;
      }
    })
    .map(e=>{
      return require(`../../app/images/${e}/${imgObject[e]}.png`)});

  return (
    <div className="img-box" style={{ width: size }}>
      { imgArray.map((img, i)=>{
        const s = img.default.src;
        return (
          <img className="calavera-img" key={i} src={s} alt="not found" />
          );
        })}
    </div>
  );
}