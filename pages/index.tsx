import Head from 'next/head';
import Link from 'next/link'


export default function Home(){
  return(
    <>
      <Head>
        <title>
          onlyJobs
        </title>
        <meta
          name="description"
          content="Side Hustle made easier than ever!,We match you with jobs,you get paid immediately after every task,what are you waiting for? join us today!"
          key="desc"
        />

        <meta property="og:title" content="onlyJobs" />
        <meta
          property="og:description"
          content="Get matched with jobs,Get paid immediately after you complete each task"
        />
        <meta
          property="og:image"
          content="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
        />
      </Head>

      <section id="home">
      
        <nav>

          <div className="flex flex-row justify-between container mx-auto p-2">
              <h1 className="font-ubuntu font-bold text-xl">onlyJobs</h1>

            
              <ul className="flex flex-row space-x-20">
                <li className="cursor-pointer hover:underline underline-offset-8 decoration-4">Home</li>
                <li>Services</li>
                <li>About us</li>
              </ul>

              <div className="flex flex-row space-x-20">
                <button>Get Started</button>
                <button>Login</button>
              </div>
             


          </div>
          
        </nav>


      </section>
    </>
 
  )
}