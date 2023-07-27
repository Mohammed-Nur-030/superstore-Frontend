import React from 'react'
import { NavLink } from 'react-router-dom';



const removeHTMLTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

const BlogCard = (props) => {
    const { id, date, description, image } = props;
    console.log(image)
   
const newDate = new Date(date);

// Get the day, month, and year from the date object
const day = newDate.getDate();
const month = newDate.getMonth() + 1; // Months are zero-based, so add 1
const year = newDate.getFullYear().toString().slice(-2); // Extract last two digits

// console.log(description)
// Create formatted date string in "dd-mm-yy" format
const formattedDate = `${day.toString().padStart(2, "0")}-${month
  .toString()
  .padStart(2, "0")}-${year}`;

 
  const maxLength = 30; // Maximum number of characters you want to show
  
const reducedText = description.length > maxLength ? description.slice(0, maxLength) + "..." : description;
// const plainText = removeHTMLTags(reducedText);
const textUntilFirstPTag = description.substring(0, description.indexOf("</p>"));
// console.log("textUntilFirstPTag")
// console.log(textUntilFirstPTag)
const final=removeHTMLTags(textUntilFirstPTag)
// console.log(final)


  
    return (
        <div className='blogCard w-[20%] gap-2 shadow-lg h-[50vh]'>
             <NavLink to={`/blog/${id}`} >

            <div className='blog-card h-full w-full'>
                <a href="#" >
                    <div className="product-card h-full w-full rounded-md bg-[#f4f4f4] mx-auto ">

                        <div className="parent h-1/2 rounded-t-md w-full ">
                            
                                <img src={image?(image):('public/images/bg2.jpg')} alt="wishlist" className=' child object-cover h-full w-full rounded-t-md' />
                            
                        </div>  

                        <div className="h-1/3 ">
                            {/* <h6 className="brand">Havels</h6> */}
                            <div className='flex justify-between mx-auto mt-2 px-3'>
                                <span className='text-xs md:text-sm lg:text-base text-gray-900 hover:text-green-500'>By Admin</span>
                                <span className="text-[#dddddd] font-bold">|</span>
                                <span className='text-xs md:text-sm lg:text-base text-gray-600'>{formattedDate}</span>
                                
                            </div>
                            <p className="blog-title  text-xs md:text-sm lg:text-base   leading-6 text-black-700 mt-3 block font-semibold  items-center hover:text-green-500">
                                {final} 
                            </p>

                        </div>

                    </div>
                </a>

            </div>
            </NavLink>


        </div>
    )
}

export default BlogCard
