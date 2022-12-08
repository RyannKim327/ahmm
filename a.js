class id{
	constructor(name, classname){
		this.myID = document.getElementById(name)
		this.myID.classList = classname
		this.classname = classname
	}
	setText(str){
		this.myID.textContent = str
	}
	setHTML(html){
		this.myID.innerHTML = html
	}
	onClick(action){
		this.myID.onclick = () => {
			action()
		}
	}
	setStyles(styles){
		const obj = Object.keys(styles)
		obj.forEach(e => {
			this.myID.style[e] = styles[e]
		});
	}
	getID(){
		return this.myID
	}
	hide(){
		this.myID.style.height = 0
		this.myID.style.padding = 0
	}
	getHTML(){
		return this.myID.innerHTML
	}
	getText(){
		return this.myID.textContent
	}
}

const toggle = (show, html) => {
	if(show.getID().style.height == 0 || show.getID().style.height == "0px"){
		show.setStyles({
			height: "15.25em"
		})
		show.setHTML(html)
	}else{
		if(show.getHTML() != html){
			setTimeout(() => {
				show.setStyles({
					height: "15.25em",
					padding: "var(--mar)",
				})
				show.setHTML(html)
			}, 1750)
		}
		show.hide()
	}
}

document.body.onload = () => {
	const class_ = "clicker"
	const tech = new id("tech", class_)
	const web = new id("web", class_)
	const android = new id("android", class_)
	const backend = new id("backend", class_)
	const frontend = new id("frontend", class_)
	const github = "https://github.com/RyannKim327/"
	
	tech.setText("Technologies")
	web.setText("Web Development")
	android.setText("Android Application Development")
	backend.setText("Backend Development")
	frontend.setText("Front-end Development")

	tech.onClick(() => {
		const show = new id("hide", "hide")
		const html = `
		<span id="html">
			<svg height="24px" width="24px">
				<path d="M12,17.56 L16.07,16.43 L16.02,10.33 H9.38 L9.2,8.3 H16.8 L17,6.31 H7 L7.56,12.32 H14.45 L14.22,14.9 L12,15.5 L9.78,14.9 L9.64,13.24 H7.64 L7.93,16.43 L12,17.56 M4.07,3 H19.93 L18.5,19.2 L12,21 L5.5,19.2 L4.07, 3Z" fill="orange">
			</svg>
		</span>
		`
		toggle(show, html)
	})

	web.onClick(() => {
		const show = new id("hide", "hide")
		const html = `
			<p>Lists of my Web projects released</p>
			<ul class="list">
				<li><a href="${github}"></a></li>
				<li><a href="${github}"></a></li>
				<li><a href="${github}"></a></li>
				<li><a href="${github}"></a></li>
				<li><a href="${github}"></a></li>

			</ul>
		`
		toggle(show, html)
	})

	android.onClick(() => {
		const show = new id("hide", "hide")
		const html = `
			<p>Lists of my Android Application projects released</p>
			<ul class="list">
				<li><a href="${github}"></a></li>
				<li><a href="${github}"></a></li>
				<li><a href="${github}"></a></li>
				<li><a href="${github}"></a></li>
				<li><a href="${github}"></a></li>

			</ul>
		`
		toggle(show, html)
	})

	backend.onClick(() => {
		const show = new id("hide", "hide")
		const html = `
			<p>Lists of my Backend (Mostly web and android based related) projects released</p>
			<ul class="list">
				<li><a href="${github}"></a></li>
				<li><a href="${github}"></a></li>
				<li><a href="${github}"></a></li>
				<li><a href="${github}"></a></li>
				<li><a href="${github}"></a></li>

			</ul>
		`
		toggle(show, html)
	})

	frontend.onClick(() => {
		const show = new id("hide", "hide")
		const html = `
			<p>Lists of my Front-end (mostly copied version and some animations) projects released</p>
			<ul class="list">
				<li><a href="${github}"></a></li>
				<li><a href="${github}"></a></li>
				<li><a href="${github}"></a></li>
				<li><a href="${github}"></a></li>
				<li><a href="${github}"></a></li>

			</ul>
		`
		toggle(show, html)
	})
}