import Image from "next/image";
import "./globals.css";
import Getstarted from "@/components/getstarted";
import Footer from "@/components/footer";


export default function Home() {

	return (
		<>
		{/*//Hero section*/}
		<section className="hero-section">
			<h1>Welcome to Frameza AI Video Generator</h1>
			<p>Effortlessly generate cool AI videos with Frameza. The only limit is your imagination!</p>
			<Getstarted />
		</section>

		<section className="pro-model-section">
			<h2>Starter Model</h2>
			<div className="video-section">
				<div className="video-container">
					<video preload="auto" muted autoPlay loop playsInline poster="./images/fallback1.jpg">
						<source src="./images/video1.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					<p className="video-prompt">A man in a blue plaid shirt turns his head to look at a woman walking past in a red top. His expression is curious as he glances away from his companion in a light blue sleeveless top. The scene takes place on a busy city street with buildings and pedestrians visible in the background. The natural lighting suggests it's daytime. The camera captures the scene from street level, with the woman in red slightly out of focus in the foreground.</p>
					<p>Generated in 13.1 seconds</p>
				</div>
				<div className="video-container">
					<video preload="auto" muted autoPlay loop playsInline poster="./images/fallback2.jpg">
						<source src="./images/video2.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					<p className="video-prompt">A chef prepares food in a professional kitchen. He has olive skin and dark, close-cropped hair, wearing traditional white chef's attire. Steam rises from the pan he's working with. The kitchen's stainless steel surfaces reflect the bright overhead lighting. The camera follows his hands as he cooks. The scene appears to be real-life footage.</p>
					<p>Generated in 15.4 seconds</p>
				</div>
			</div>
		</section>

		<section className="pro-model-section">
			<h2>Pro Model</h2>
			<div className="video-section">
				<div className="video-container">
					<video preload="auto" muted autoPlay loop playsInline poster="./images/fallback3.jpg">
						<source src="./images/video3.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					<p className="video-prompt">A woman is walking through a busy Tokyo street at night, she is wearing dark sunglasses.</p>
					<p>Generated in 4 minutes 49 seconds</p>
				</div>
				<div className="video-container">
					<video preload="auto" muted autoPlay loop playsInline poster="./images/fallback4.jpg">
						<source src="./images/video4.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
					<p className="video-prompt">A cat walks on the grass, realistic style.</p>
					<p>Generated in 7 minutes 35 seconds</p>
				</div>
			</div>
		</section>

		<section className="hero-section">
			<h2>Generate Videos Worth Sharing </h2>
			<p>Let your imagination run wild and see what hilarious and unexpected videos you can conjure up!</p>
			<Getstarted />
		</section>

		<Footer />
		</>
	);
}
