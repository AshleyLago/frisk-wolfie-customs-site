import dgClip from '../../../assets/dg-clip.png'

export const AboutPage = () => {
    return (
        <>
            <div className="mx-10">
                <h1 className="text-xl lg:text-2xl xl:text-3xl mb-6 underline" style={{ fontFamily: '"Chewy", serif'}}>About the Artist</h1>
                <div className="">
                    <img className="float-left max-w-full h-auto object-contain w-[40%] lg:w-[30%] xl:w-[20%] min-w-[200px] lg:min-w-[250px] xl:min-w-[300px] mr-7 mb-5"src={dgClip}/>
                    <div className="text-left text-base lg:text-lg xl:text-xl" style={{ fontFamily: '"Quicksand", sans-serif', fontWeight: 400 }}>
                        <p>
                            Hi! I&apos;m Caitlyn!
                        </p>
                        <br />
                        <p className="indent-7">
                            I started making plush at a young age. I made tiny plush that I could keep in my pocket 
                            to make me feel safe and calm at school since I have autism and anxiety. In 2019 I purchased 
                            my first embroidery machine and started on my journey to run my own Etsy store.
                        </p>
                        <br />
                        <p className="indent-7">
                            I absolutely love making plush! I literally spend almost all my time either working on shop 
                            orders or creating new designs. I am so thankful for all my wonderful customers who have 
                            supported my dream of running my own store!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}