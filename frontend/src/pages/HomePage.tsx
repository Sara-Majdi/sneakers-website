import landingImage from "../assets/landing.png"
import appDownloadImage from "../assets/appDownload.png"

const HomePage = () => {


    return(
        <div>
            {/*adding flex box, elements in the page to be in col, add gap of 12 between elements*/}
            <div className="flex flex-col gap-12 my-12">
                {/* create css grid(default: single col), medium screen: 2 cols, */}
                <div className="grid md:grid-cols-2 gap-2" >
                    <img src={landingImage}/>
                    {/*elements in 2nd col to be in a col, center & justify everything, gap btween elements*/}
                    <div className="flex flex-col items-center justify-center gap-4 text-center">
                        {/* tracking-tighter: spacing for space between chars */}
                        <span className="font-bold text-3xl tracking-tighter">
                            Shop anywhere, anytime!
                        </span>
                        <span>
                            Enhance your shopping experience with our mobile app. 
                            Available for download!
                        </span>
                            <img src={appDownloadImage} />
                    </div>
                </div>
            </div>

        </div>
        

    )
}

export default HomePage;