const wsUrl = "wss://ws.ifelse.io//";
const [inp] = document.getElementsByTagName("input");
const btnSend = document.querySelector(".btn__send");
const btnGeo = document.querySelector(".btn__geo");
const out = document.querySelector(".div__out");

let websocket;
let webOp = false;
let mapLink;

function pageLoaded() {
	if (webOp == false) {
		websocket = new WebSocket(wsUrl);
	}

	btnSend.onclick = function () {
		const inpMes = inp.value;
		if (inpMes && webOp) {
			websocket.send(inpMes);
			wrt(inpMes, "send");
			console.log(inpMes);
			inp.value = "";
		}
	};
	websocket.onmessage = function (evt) {
		wrt(evt.data, "get");
		console.log(evt.data);
	};

	websocket.onopen = () => {
		webOp = true;
	};

	btnGeo.onclick = function () {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(function (position) {
				const { coords } = position;
				console.log(coords.latitude, coords.longitude);
				mapLink = document.createElement("a");
				mapLink.href = `https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}`;
				mapLink.textContent = "Гео-локация";
				wrt(mapLink, "geo");
			});
		}
	};
}

function wrt(mes, dir) {
	let pre = document.createElement("p");
	if (dir != "geo") {
		pre.innerHTML = mes;
	} else {
		pre = mes;
	}
	pre.className = dir + " mess";
	console.log(mes);
	console.log(pre);
	out.append(pre);
}

window.onunload = function () {
	websocket.close();
	webOp = false;
};

document.addEventListener("DOMContentLoaded", pageLoaded);