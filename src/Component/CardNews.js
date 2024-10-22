class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        componentRoot.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("contet");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        
        const cardRight = document.createElement("div");
        componentRoot.setAttribute("class", "card__right");
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/foto-default.jpg";
        newsImage.alt = "Foto da notícia";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 100%;
                border: 1px solid gray;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                -webkit-box-shadow: 8px 9px 25px 4px rgba(0,0,0,0.75);
                -moz-box-shadow: 8px 9px 25px 4px rgba(0,0,0,0.75);
                box-shadow: 8px 9px 25px 4px rgba(0,0,0,0.75);
            }

            .card__left, .card__right{
                border: 1px solid blue;
            }

            .card__left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }

            .card__left > span {
                font-weight: 400;
            }

            .card__left > h1 {
                margin-top: 15px;
                font-size: 25px;
            }

            .card__left > p {
                color: gray;
            }

            .card__right > img {
                width: 50%;
                height: 80%;
            }

        `
        return style;
    }
}

customElements.define("card-news", CardNews)