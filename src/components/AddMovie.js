import React , {useState}from 'react';

const AddMovie = ({movie,setMovie}) => {
    const [newmovie, setNewmovie]=  useState({
        title:'',
        description:'',
        posterURL:'',
        rating:'',
    });
    const handleChange = (event) => {
        setNewmovie({ ...newmovie, [event.target.name]: event.target.value });
        event.preventDefault();
    };
  

  return (
    <div className='AddMovie-container'>
      <h1>Add New Movie</h1>
        <form>
<input name='title' type="text" placeholder='Type title...'
onChange={handleChange} />
<input name='description' type="text" placeholder='Type description...'
onChange={handleChange} />
<input name='posterURL' type="text" placeholder='Type poster...'
onChange={handleChange} />
<input name='rating' type="text" placeholder='Type rating...'
onChange={handleChange} />
<button 
onClick={(event) => {event.preventDefault();
setMovie([...movie, newmovie])} } > Add Movie </button>
</form>

    </div>
  )
}

export default AddMovie