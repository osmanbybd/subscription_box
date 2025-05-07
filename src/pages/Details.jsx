
import { useLoaderData, useParams } from 'react-router';

const Details = () => {

    const {id} = useParams()
    const deitalsData = useLoaderData()

    const allData = deitalsData.find(data => data.id == id)
    console.log(allData)

    console.log(deitalsData.name)
    
   


    return (
        <div>
            
        </div>
    );
};

export default Details;