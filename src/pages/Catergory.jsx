import React, { useState } from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';

const Catergory = () => {

    const {id} = useParams()
    const data = useLoaderData()
    // console.log(data)


        const selelctDetails = data.find(service => service.id == id)

    


        // console.log(selelctDetails)
        const {thumbnail,name,features,rating,price,frequency,description,} =selelctDetails;


        const [reviews , setReviews] = useState(selelctDetails.reviews || [])
        const [ratingInput , setRatingInput] = useState('')
        const [commentInput , setCommentInput] = useState('')

        const averageRating = reviews.length
        ? (reviews.reduce((acc , cur) => acc + cur.rating, 0) / reviews.length).toFixed(1)
        : rating ;


        const handleReviewSubmit = ( ) =>{
            if(ratingInput < 1 || ratingInput > 5 || commentInput.trim() == ''){
                alert('Please give a rating between  1-5 and a comment')
                return
            }

            const newReview = {
                rating : parseFloat(ratingInput),
                comment :commentInput
            };

            setReviews([...reviews, newReview]);
            setRatingInput('')
            setCommentInput('')
        }


    return (
       <div>
         <div className="hero h-100 border flex flex-col lg:flex-row gap-6 border-gray-200 rounded-lg lg:shadow-lg container mx-auto mt-3 ">
        <div className="hero-content grid lg:grid-cols-2  ">
          <img
            src={thumbnail}
            className="w-full max-w-xs rounded-lg shadow-2xl"
          />
          <div >
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">
             {description}
            </p>
            <div>
            {
                features.map(feature => <li className='text-lg'>{feature}</li>)
            }
          </div>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between py-4'>
            <h1 className='text-lg-center font-bold'>{price} $</h1>
            <h1 className='text-lg-center font-bold'>{frequency}</h1>
          </div>
          <h1 className='flex items-center  text-lg font-bold gap-2'>{averageRating} <FaStarHalfAlt className='text-yellow-400' size={20} /></h1>
          </div>
         
        </div>
      </div>

      <div className='container mx-auto mt-5 py-10'>
        <h1 className='text-center text-3xl font-bold'>Product Review</h1>

        <input 
        type="number"
        placeholder='Give Rating (1 - 5'
        className='py-4 px-5 my-3 border border-gray-200 rounded-lg shadow-lg'
            value={ratingInput}
            onChange={(e) => setRatingInput(e.target.value)}
        />
        <br />
        <textarea
         placeholder='write your comment '
         className='w-5/6 border border-gray-200 rounded-lg shadow-lg py-3 px-4'
         onChange={(e) => setCommentInput(e.target.value)}
          value={commentInput}
         >
        </textarea>
        <br />
    <button onClick={handleReviewSubmit} className='btn btn-primary'>Submit Review</button>
      </div>


      <div className='container  mx-auto border border-gray-200 shadow-lg rounded-lg py-4 px-5 my-10'>
            <h1 className='text-2xl font-bold'>user review </h1>
          <div>
            {
                reviews.length > 0 ? (
                    reviews.map((review , index) => (
                        <div key={index} className='border border-gray-200 rounded-lg my-3 py-2 px-2'>
                            <h1 className='text-2xl font-bold'>{review.user}</h1>
                            <p className='flex items-center gap-2 text-lg font-bold'><FaStarHalfAlt className='text-yellow-400' size={20} /> {review.rating}</p>
                            <p>{review.comment}</p>
                        </div>

                    ))
                ) : (<p> No reviews yet. Be the first to review!</p>)
            }
          </div>
      </div>
       </div>
      
    );
};

export default Catergory;