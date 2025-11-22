const Huisstijl = () => {
  return (
    <div>
      <div className='container'>
        <div>
          <h1>H1 Dit is een titel</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia eos laboriosam culpa rerum aliquam expedita quae earum excepturi minus, iusto in quasi doloremque aperiam blanditiis doloribus fuga quas provident numquam.</p>
        </div>
        <div>
          <h2>H2 Dit is een tussentitel</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi eveniet incidunt in modi quam rerum voluptatibus magni repudiandae accusantium. Earum ratione incidunt amet nulla dolorem illum dolores distinctio odit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi eveniet incidunt in modi quam rerum voluptatibus magni repudiandae accusantium. Earum ratione incidunt amet nulla dolorem illum dolores distinctio odit.</p>
        </div>
        <div>
          <h3>H3 Dit is een tussentitel in tekst</h3>
          <p>Lorem ipsum <a href='#'>dolor sit amet...</a> consectetur adipisicing elit. Sit molestiae ab debitis illo tempora recusandae exercitationem totam sed cupiditate nesciunt nemo, iusto omnis iste voluptatum dolore! Fuga eos provident aliquam!</p>
          <p className='footnote'>Dit is een footnote</p>
        </div>
        <div className="button-wrapper">
          <button className='primary-button'>Ik ben een button</button>
          <button className='primary-button' disabled>Ik ben disabled</button>
        </div>
        
      </div>
      <div className='dark-bg'>
        <div className="container">
          <div className="button-wrapper">
            <button className='primary-button-dark'>Ik ben een button</button>
            <button className='primary-button-dark' disabled>Ik ben disabled</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Huisstijl;