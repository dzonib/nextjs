export default ({statusCode}) => (
       <>
            <h1>Error!!</h1>

            {statusCode ? <p>Could not get your user data, status code : {statusCode}</p> : <p>Couldn't get get that page, sry bruh</p> }
            
       </>
)