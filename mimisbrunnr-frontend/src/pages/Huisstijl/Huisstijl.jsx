import './Huisstijl.css';

const Huisstijl = () => {
  return (
    <div>
      <div>
        <h1>H1 Dit is een titel</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia eos laboriosam culpa rerum aliquam expedita quae earum excepturi minus, iusto in quasi doloremque aperiam blanditiis doloribus fuga quas provident numquam.</p>
        <h2>H2 Dit is een tussentitel</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi eveniet incidunt in modi quam rerum voluptatibus magni repudiandae accusantium. Earum ratione incidunt amet nulla dolorem illum dolores distinctio odit.</p>
        <h3>H3 Dit is een tussentitel in tekst</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae ab debitis illo tempora recusandae exercitationem totam sed cupiditate nesciunt nemo, iusto omnis iste voluptatum dolore! Fuga eos provident aliquam!</p>
      </div>
      <div>
        <h1>H1 Dit is een titel op mobile</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae ab debitis illo tempora recusandae exercitationem totam sed cupiditate nesciunt nemo, iusto omnis iste voluptatum dolore! Fuga eos provident aliquam!</p>
        <h2>H2 Dit is een tussentitel in tekst</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae ab debitis illo tempora recusandae exercitationem totam sed cupiditate nesciunt nemo, iusto omnis iste voluptatum dolore! Fuga eos provident aliquam!</p>
        <h3>H3 Dit is een tussentitel in tekst</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae ab debitis illo tempora recusandae exercitationem totam sed cupiditate nesciunt nemo, iusto omnis iste voluptatum dolore! Fuga eos provident aliquam!</p>
      </div>
      <div>
        <button className='button-light'>Ik ben een button</button>
        <button className='button-light' disabled>Ik ben disabled</button>
      </div>
      <div className="dark-buttons">
        <button className='button-dark'>Ik ben een button</button>
        <button className='button-dark' disabled>Ik ben disabled</button>
      </div>
    </div>
  )
}

export default Huisstijl;