import RenderName from '../components/RenderName';
import users from '../users';

export default function Home({currentUser,setCurrentUser}){
  const _setCurrentUser=(user)=>{
    setCurrentUser(user);
    sessionStorage.setItem('user',JSON.stringify(user));
  }
  const logout=()=>{
    setCurrentUser();
    sessionStorage.clear();
  }
    return(
        <div className="App my-5">
          {
            currentUser ? 
            <>
              <RenderName name={currentUser.name} />
              <button onClick={logout} className='btn btn-warning me-3' >Logout</button>
            </>
            :
            <>              
            <h3 className='mb-5'>Login as</h3>
              <div>
              {
                users.map(user=>
                  <button 
                    className='btn btn-primary me-3' 
                    key={user.name}
                    onClick={()=>_setCurrentUser(user)}
                  >
                      {user.name}
                  </button>)
              }
              </div>
            </>

          }
        
    
      </div>
    )

}