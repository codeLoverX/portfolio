import { FaWpforms } from "react-icons/fa";

export default function Contact() {
  return (
    <div className='py-12 bg-gradient-to-l from-gray-200 to-white-100'>
      <div className='container mx-auto w-9/12 columns-1 text-center lg:w-6/12'>
        <h5 className='text-start font-bold uppercase text-transparent text-xl text-extrabold bg-clip-text bg-gradient-to-r from-blue-400 via-purple-600 to-pink-600'>
          <FaWpforms className='fill-[url(#blue-gradient)] mr-2 inline text-2xl animate-bounce ' />
          Contact Me
        </h5>
        <p className='pt-4 text-2xl font-bold mb-6 text-start'>
          Please check out the relevant work experience, skills and education level.
        </p>
        <form
          name="contact-form"
          method="POST"
          action="contact/?success=true"
        >
          <div className="w-full">
            <input id="name" type="text" name="name" required placeholder="Enter your name..." className="input input-bordered inline w-full lg:w-[50%] mb-2" />
            <input id="email" type="email" name="email" required placeholder="Enter your email..." className="input input-bordered inline w-full lg:w-[50%] mb-2" />
          </div>
          <textarea id="message" name="message" required placeholder="Enter your text please..." className="textarea textarea-bordered w-full" rows={4}></textarea>
          <button className="btn btn-primary mt-4" type="submit">Submit</button>
        </form>
      </div>
    </div >
  );
}

