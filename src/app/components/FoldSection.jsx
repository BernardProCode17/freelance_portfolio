import ButtonLink from "@/app/components/ButtonLinks";
import {FoldLinks} from "@/app/misc/ButtonLinkObj";
import Image from "next/image";
import ImageBG from '@/app/assets/Header-image-bg.png'
import ImageProfile from '@/app/assets/bernard_profile_photo.webp';

export default function FoldSection() {


    return (

        <section className="FP-fold" id="home">

            {/*Fold Content*/}
            <div className="FP-fold-content">

                <p className='FP=fold-title'>Front-end Developer</p>
                <h1 className='FP-fold-name'>Hello, I'm <span>Bernard</span></h1>

                <p className='FP-fold-description'>I am a passionate front-end developer specializing in building
                    responsive and user-friendly web applications with React. With a strong background in JavaScript and
                    modern web technologies, I enjoy creating seamless digital experiences—learn more about my journey
                    on the About page.
                </p>

                <ButtonLink linkObj={FoldLinks} sectionClassName={'fold'}/>
            </div>

            {/*Fold Image*/}
            <div className='FP-fold-image'>
                <Image src={ImageBG} alt={'Blue blob that shape the developer photo in a frame'} width={300}  height={300}/>
                <Image src={ImageProfile} alt={'Photo of Bernard Clarke Smiling, wear a grey hoodie and blue hat with black framed prescription glasses'} width={200}  height={200}/>
            </div>

        </section>
    )
}