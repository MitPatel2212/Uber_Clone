import React from "react";

const CaptainSignup = () => {

     const [email,setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
    
        const submitHandler = (e) => {
            e.preventDefault()
            setUserData({
                fullName: {
                    firstName:firstName,
                    lastName:lastName
                },
                email: email,
                password: password
            })
    
            console.log(userData);
            setEmail('')
            setFirstName('')
            setLastName('')
            setPassword('')
        }

    return (
         <div className="p-7 flex flex-col justify-between h-screen">
            
            {/* login part */}

           <div>
                <img className="w-20 mb-3" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <form onSubmit={(e) => {
                submitHandler(e)
            }}>

                <h3 className="text-lg w-full font-medium mb-2 ">what's our captain's name </h3>
                <div className="flex gap-4 mb-6" >
                    <input 
                    required 
                    className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base"
                    type="text" 
                    placeholder="First name" 
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }}
                        >
                    </input>

                    <input 
                    required 
                    className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                    type="text" 
                    placeholder="Last name" 
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value)
                        }}
                        >
                    </input>
                </div>
                <h3 className="text-lg font-medium mb-2 ">what's your captain's Email </h3>
                <input 
                    required 
                    // value={email}
                    // onChange={(e) => {
                    //     setEmail(e.target.value)
                    // }}
                    className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                    type="email" 
                    placeholder="email@examole.com" 
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        >
                    </input>


                  
                
                <h3 className="text-lg font-medium mb-2">Enter Password</h3>
                <input 
                    required
                    // value={password}
                    // onChange={(e) => {
                    //     setPassword(e.target.value)
                    // }}
                    className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm" 
                    type="password" 
                    placeholder="Enter your password" 
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        >
                        </input>
                
                <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-sm">Login</button>

            </form>
            <p className="text-center">Already have an account? <Link to="/captain-login" className='text-blue-600' > Login here </Link> </p>
           </div>


           <div>
              {/* <Link 
               to="/captain-login"
              className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm">
                Sign in as Captain
              </Link> */}

              <p className="text-[6px] leading-tight"  >
                This site is  protected by reCAPTCHA and the <span className="underline"> Google privacy
                policy</span> and <span className="underline"> Terms of service apply</span>.
              </p>
           </div>
        </div>
    );
}
 
export default CaptainSignup ;