
<script>

export default {
    name: "ContactPage",
    components: {
    },
    methods: {
        handleSubmit(event) {
            event.preventDefault();

            const email = 'abdurrahimjamalzada@gmail.com';

            console.log(`E-posta gönderildi: ${email}`);
        }
    }
}
</script>

<template>
    <section>
        <div class="contact-main">
            <div class="title">
                <h2>Əlaqə</h2>
            </div>
            <div class="box">
                <div class="contact form" id="contact-form" style="height: 70%;">
                    <h3>Mesaj</h3>
                    <form action="https://formspree.io/f/xqkvkkwv" method="POST">
                        <div class="form-box">
                            <div class="row50">
                                <div class="input-box">
                                    <span>Ad</span>
                                    <input type="text" placeholder="Kerem" name="Ad" required>
                                </div>
                                <div class="input-box">
                                    <span>Soyadı</span>
                                    <input type="text" placeholder="Veliyev" name="Soyadı" required>
                                </div>
                            </div>
                            <div class="row50">
                                <div class="input-box">
                                    <span>Mail</span>
                                    <input type="text" placeholder="kerem@gmail.com" name="Mail" required>
                                </div>
                                <div class="input-box">
                                    <span>Nömrə</span>
                                    <input type="text" placeholder="+994 555 55 55" name="Nömrə" required>
                                </div>
                            </div>
                            <div class="row100">
                                <div class="input-box">
                                    <span>Mesaj</span>
                                    <textarea name="Mesaj" id="" cols="30" rows="10" placeholder="Mesaj yazın..."
                                        required></textarea>
                                </div>
                            </div>
                            <div class="row100">
                                <div class="input-box">
                                    <input type="submit" value="Göndər">
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
                <div class="contact info" id="contact-info">
                    <h3>Əlaqə</h3>
                    <div class="info-box">
                        <div>
                            <a class="icons" href="https://goo.gl/maps/pB2DNo6jdfY7VCGV7">
                                <font-awesome-icon :icon="['fas', 'location-dot']" /> </a>
                            <span>
                                <a href="https://goo.gl/maps/pB2DNo6jdfY7VCGV7">85 Fətəli Xan Xoyski, Bakı</a>

                            </span>
                        </div>
                        <div>
                            <a class="icons" href="mailto:escado@gmail.com">
                                <font-awesome-icon :icon="['fas', 'envelope']" /> </a>
                            <span>
                                <a href="mailto:escado@gmail.com">escado@gmail.com</a>
                            </span>
                        </div>
                        <div>
                            <a class="icons" href="tel:+994 12 564 43 46">
                                <font-awesome-icon :icon="['fas', 'phone']" /> </a>
                            <span>
                                <a href="tel:+994 12 564 43 46">(012) 564 43 46</a>
                            </span>
                        </div>
                        <ul class="sci">
                            <li><a href="https://www.facebook.com/profile.php?id=100086766889009">
                                    <font-awesome-icon class="social-icons" :icon="['fab', 'facebook']"
                                        style="border-radius: 60%; color: #3b5998;" />
                                </a></li>
                            <li><a href="https://www.instagram.com/nerimanov_tibb_merkezi_/">
                                    <font-awesome-icon class="social-icons" :icon="['fab', 'instagram']"
                                        style=" border-radius: 30%; color: #fc7d63;" />
                                </a></li>
                        </ul>
                    </div>
                </div>
                <div class="contact map" style="padding: 20px;">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.2659996995785!2d49.8621627!3d40.402957699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d452db1dd6b%3A0x8660461c98fa8f44!2s85%20Fatali%20Khan%20Khoyski%2C%20Baku!5e0!3m2!1str!2saz!4v1688571985915!5m2!1str!2saz"
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
:root {
    --bg-color: #1dde812b;
    --box-color: #3f4d468a;
    --second-bg-color: #1dde8189;
    --text-color: #ffff;
    --bg-box-color: #1dde8189;
    --main-color: #fff;
    --free: #1dde8100;

}

.contact-main {
    position: relative;
    width: 100%;
    padding: 40px 100px;
    background-image: url('@/assets/backend.jpeg');
    background-repeat: no-repeat;
    /* Tekrarlamayı engelle */
    background-size: cover;
    /* Resmi bölüm boyutuna uygun şekilde doldur */
    background-attachment: fixed;
    /* Resmin sabitlenmesini sağla */
}

.contact-main .title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
}

.contact-main .title h2 {
    color: var(--text-color);
    font-size: 400;
}

.form {
    grid-area: form;
    border-radius: 90px 30px 90px 30px;
}

.info {
    grid-area: info;
}

.map {
    grid-area: map;
}

.contact {
    padding: 40px;

}


#contact-form {
    background-color: var(--box-color);
}

#contact-info {
    background-color: var(--box-color);
}


.box {
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 5fr 4fr;
    grid-template-areas:
        "form info"
        "form map";
    grid-gap: 20px;
    margin-top: 20px;
}

.contact h3 {
    color: var(--main-color);
    font-weight: 500;
    font-style: 1.4em;
    margin-bottom: 10px;
}

.form-box {
    position: relative;
    width: 100%;
}

.form-box .row50 {
    display: flex;
}

.input-box {
    display: flex;
    flex-direction: column;
    width: 50;
    margin: 3px;
}


.form-box .row100 .input-box {
    width: 100%;
}

.input-box span {
    color: var(--main-color);
    margin-top: 10px;
    margin-bottom: 5px;
    font-weight: 500;
}

.input-box input {
    padding: 10px;
    font-size: 1.1em;
    outline: none;
    border: 1px solid #333;
    background: rgb(180, 180, 212);

}

.input-box textarea {
    background: rgb(215, 247, 219);
    padding: 10px;
    font-size: 1.1em;
    outline: none;
    border: 1px solid #333;
    resize: none;
    min-height: 220px;
    margin-bottom: 10px;
}

.input-box input {
    background: rgb(215, 247, 219);
}

.input-box input[type="submit"] {
    margin-left: 80%;
    font-size: 1.1em;
    max-width: 120px;
    font-weight: 500;
    cursor: pointer;
    padding: 14px 15px;
    background-color: var(--bg-box-color);
    box-shadow: 0 0 0.5rem var(--bg-color);
    color: var(--main-color);
    border-radius: 16px;
}

.input-box input[type="submit"]:hover {
    background-color: var(--bg-color);
    box-shadow: 0 0 1rem var(--second-bg-color);
}

.input-box ::placeholder {
    color: #999;
}

.info h3 {
    color: var(--text-color);
}

.info .info-box div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.info .info-box div .icons {
    min-width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    color: var(--main-color);
    align-items: center;
    font-size: 1.5em;
    border-radius: 50%;
    margin-right: 15px;
    background-color: var(--bg-box-color);
    box-shadow: 0 0 1rem var(--bg-box-color);

}

.info .info-box div .icons:hover {
    background-color: var(--free);
    box-shadow: 0 0 1rem var(--second-bg-color);
}

.info .info-box div p {
    color: var(--text-color);
    font-size: 1.1em;
}

.info .info-box div a {
    color: var(--text-color);
    text-decoration: none;
    font-size: 1.1em;
}

.sci {
    margin-top: 40px;
    display: flex;
}

.sci li {
    list-style: none;
    margin-right: 15px;
    margin-left: 25px;
}

.sci li a {
    color: var(--text-color);
    color: #ccc;
}

.sci li a .social-icons {
    min-width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    margin-right: 15px;
    background-color: var(--free);
    box-shadow: 0 0 1rem var(--bg-color);
    color: var(--main-color);
}

.sci li a .social-icons:hover {
    box-shadow: 0 0 1rem var(--second-bg-color);
}

.sci li a:hover {
    color: #fff;
}

.map {
    padding: 0;
}

.map iframe {
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 768px) {

    .contact-main {
        padding: 0px;
        background-position: center top;
        /* Adjust padding for smaller screens */
    }

    #contact-form,
    #contact-info {
        padding: 20px;
    }

    #contact-form h3,
    #contact-info h3 {
        font-size: 1.8em;
    }

    #contact-form .input-box input,
    #contact-form .input-box textarea,
    #contact-info .info-box div p,
    #contact-info .info-box div a {
        font-size: 1em;
        padding: 8px;
    }

    #contact-form .input-box input[type="submit"] {
        font-size: 1.1em;
        max-width: 100%;
        margin-left: 0;
        padding: 10px;
    }

    #contact-info .info-box div .social-icons {
        min-width: 40px;
        height: 40px;
        font-size: 1.5em;
        margin-right: 10px;
    }

    #contact-info {
        height: 90%;
    }

    #contact-form h3 {
        text-align: center;
    }

    .box {
        grid-template-columns: 1fr;
        /* Change to a single column layout */
        grid-template-areas:
            "form"
            "info"
            "map";
        /* Adjust grid areas for a single column layout */
        grid-gap: 10px;
        display: block;
        /* Reduce grid gap for better spacing on small screens */
    }

    .input-box {
        width: 100%;
        align-items: center;
        /* Dikeyde ortala */
        /* Full width for input boxes on smaller screens */
    }

    .input-box input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 50%;
    }

    .sci li { 
        margin-left: 0; 
    }
    /* Adjust other styles as needed for responsiveness */
    /* For example, you might want to reduce font sizes or change element alignments */
}</style>