import twitterLogo from '../../assets/twitter-logo.png'
import instaLogo from '../../assets/instagram-logo.png'
import tiktokLogo from '../../assets/tiktok-logo.png'
import threadsLogo from '../../assets/threads-logo.png'
import bskyLogo from '../../assets/bsky-logo.png'

export default function Footer() {
    return (
        <footer className="flex flex-wrap justify-center gap-3 xl:gap-6 mt-10 mb-5">

            {/* Instagram Icon */}
            <a
                href="https://www.instagram.com/friskwolfiecustoms"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Frisk Wolfie's Customs' Instagram"
                className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
            >
                <img
                    src={instaLogo} 
                    alt="Instagram" 
                    className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
                />
            </a>

            {/* X (Twitter) Icon */}
            <a
                href="https://x.com/friskwolfie"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Frisk Wolfie's Customs' X (Twitter)"
                className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
            >
                <img
                    src={twitterLogo} 
                    alt="X (Twitter)" 
                    className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
                />
            </a>

            {/* TikTok Icon */}
            <a
                href="https://www.tiktok.com/@friskwolfiecustoms"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Frisk Wolfie's Customs' TikTok"
                className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
            >
                <img
                    src={tiktokLogo} 
                    alt="TikTok" 
                    className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
                />
            </a>

            {/* Threads Icon */}
            <a
                href="https://www.threads.net/@friskwolfiecustoms"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Frisk Wolfie's Customs' Instagram"
                className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
            >
                <img
                    src={threadsLogo} 
                    alt="Threads" 
                    className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
                />
            </a>

            {/* Bluesky Icon */}
            <a
                href="https://bsky.app/profile/friskwolfie.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Frisk Wolfie's Customs' Blue Sky"
                className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
            >
                <img
                    src={bskyLogo} 
                    alt="Blue Sky" 
                    className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
                />
            </a>
        </footer>
    )
}