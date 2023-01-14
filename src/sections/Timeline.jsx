import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger)

function Timeline() {
	const timelineRef = useRef()

	useLayoutEffect(() => {
		const panels = gsap.utils.toArray(".panel");

		let ctx = gsap.context(() => {
			gsap.to(panels, {
				xPercent: -100 * (panels.length - 1),
				ease: "none",
				scrollTrigger: {
					trigger: timelineRef.current,
					pin: true,
					start: "top top",
					scrub: 1,
					snap: {
						snapTo: 1 / (panels.length - 1),
						inertia: false,
						duration: { min: 0.1, max: 0.1 }
					},
					end: () => "+=" + (timelineRef.current.offsetWidth - innerWidth)
				}
			})
		}, timelineRef);

		return () => ctx.revert()
	}, [])

	return <section className="timeline">
		<h2 className="text-center">Mi proceso</h2>
		<div className="timeline__container" ref={timelineRef}>
			<article id="panel-1" className="panel full-screen">
				<div className="container">
					<h2>Panel 1</h2>
					<p>Lorem Ipsum is simply dummy text</p>
				</div>
			</article>
			<article id="panel-2" className="panel full-screen">
				<div className="container">
					<h2>Panel 2</h2>
					<p>Lorem Ipsum is simply dummy</p>
				</div>
			</article>
			<article id="panel-3" className="panel full-screen">
				<div className="container">
					<h2>Panel 3</h2>
					<p>Lorem Ipsum is simply dummy </p>
				</div>
			</article>
			<article id="panel-4" className="panel full-screen green">
				<div className="container">
					<h2>Panel 4</h2>
					<p>Lorem Ipsum is simply dummy</p>
				</div>
			</article>
			<article id="panel-5" className="panel full-screen">
				<div className="container">
					<h2>Panel 5</h2>
					<p>Lorem Ipsum is simply dummy.</p>
				</div>
			</article>
		</div>
	</section>
}

export default Timeline;
