function CreatePlayer() {
    return (
    <>
        <div>
        <h1>ini halaman form create player</h1> 
        <br/>
        USERNAME <input></input>
        <br/>
        EMAIL <input></input>
        <br/>
        PASSWORD <input></input>
        </div>
        
        <a href="http://localhost:3000/api/v1/players">
        <button>BACK DHASBOARD</button>
        <button>SUBMIT</button>
      </a>
    </>
    );
  }
  
  export default CreatePlayer;