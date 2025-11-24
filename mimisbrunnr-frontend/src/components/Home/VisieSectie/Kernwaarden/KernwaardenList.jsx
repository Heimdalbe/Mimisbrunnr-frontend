import Kernwaarde from './Kernwaarde';

const KernwaardenList = ({ kernwaarden }) => {
  return (
    <div className='kernwaarden-list'>
      {
        kernwaarden.map((k) => (
          <Kernwaarde key={k.id} nr={k.id} waarde={k.waarde} />
        ))
      }
    </div>
  )
}

export default KernwaardenList;