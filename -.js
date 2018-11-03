<html>

<head>
    <title>Angele &amp; Bec's Super-Legit Dinosaur Registraion Interface</title>
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet">
    <style>
        body{
        background-color: black;
        justify-content: center;
        display: flex;
    }
    h2{
        font-family: 'Abril Fatface', cursive;
        color: #639;
    }
    .wrapper{
        width:80%;
        border:1px dotted #639;
        background-color:white;
        display:flex;
        flex-direction:column;
        flex-wrap: nowrap;
        justify-content: center;
    }
form div{
    flex-basis: auto;
border-bottom:1px dotted #e6e6e6;
padding:10px;
}

.valid-text{
    background-color: #dfe;
}

.invalid-text{
color:#639;
font-style: italic;
}

.highlight{
    background-color: #edf;
}
    </style>
</head>

<body>
    <div class="wrapper">
        <h2>Dinosaur Registration</h2>
        <form action="https://toolbox.test.boldapps.net/front_end/test_api/dinosaur_registration" method="post" enctype="multipart/form-data">
            <div><label for="name_field">Name:</label>
                <input id="name_field" name="name_field" type="text" /></div>
            <div>
                <label for="age_field">Age:</label>
                <input id="age_field" name="age_field" type="number" /></div>
            <div>
                <select name="type" placeholder="Type">
                    <option value="Stegosaurus">Stegosaurus</option>
                    <option value="Triceratops">Triceratops</option>
                    <option value="Velociraptor">Velociraptor</option>
                    <option value="Tyrannosaurus">Tyrannosaurus</option>
                    <option value="Apatosaurus">Apatosaurus</option>
                </select></div>
            <div>
                <label for="eaten_field">Have you ever eaten anybody:</label>
                yes<input class="eaten_field" name="eaten_field" type="radio" value="Yes" /></div>
            <div>
                no <input class="eaten_field" name="eaten_field" type="radio" value="No" />
                <span id="eaten_message" hidden>Well you're no fun! You call yourself a dinosaur?</span></div>
            <div>
                <input type="submit" id="submit_button" disabled value="Submit" /></div>
            <div>
        </form>
    </div>
</body>

</html>
<script>
    var formInputs = document.querySelectorAll("input");
    console.log(formInputs);

    formInputs.forEach(function (inp) {

        inp.addEventListener("blur", isEverythingValid);

    });

    var formInputs = document.querySelectorAll("input:not([type=radio])");
    formInputs.forEach(function (inp) {
        inp.addEventListener("blur", inputValidate);
        inp.addEventListener("blur", isEverythingValid);
    });

    var radioInputs = document.querySelectorAll("input[type=radio]");
    radioInputs.forEach(function (rad) {
        rad.addEventListener("click", inputValidate);
    });

    function inputValidate(i) {
        console.log(i.target.type);

        switch (i.target.type) {
            case "text":
                validateText(i.target);
                break;
            case "number":
                validateNumber(i.target);
                break;
            case "radio":
                validateRadio(i.target);
                break;

        }

        function validateText(input) {
            console.log(input.value);
            if (input.value.length > 2) {
                console.log('valid');
                input.setAttribute('class', 'valid-text');
                document.querySelector('.invalid-text').remove();
            } else {
                console.log('Not valid');
                var warningSpan = document.createElement("span");
                warningSpan.setAttribute('class', 'invalid-text');
                var warningContent = document.createTextNode("Please enter your full name");
                warningSpan.appendChild(warningContent);
                input.parentElement.append(warningSpan);
            }
        }

    }

    function styleForm() {
        var formDivs = document.querySelectorAll("form > div");
        console.log("FormDivs: ", formDivs);

        for (i = 0; i < formDivs.length; i++) {
            if (i % 2 == 0) {
                formDivs[i].setAttribute("class", "highlight");
            }
        }

    }

    function validateRadio(radio) {
        var eaten_message = document.getElementById('eaten_message');
        if (radio.value == "No") {
            eaten_message.style.display = "block";
        } else {
            eaten_message.style.display = "none";
        }
    }

    function validateNumber(number) {
        if (number.value != "" && number.value < 3) {
            alert("You're in luck, dinosaurs under 3 don't have to register!");
        }
    }

    function isEverythingValid() {
        var valid = true;
        var required_elements = document.querySelectorAll('.required_input');
        required_elements.forEach(function (element) {
            if (!element.value) {
                valid = false;
            }
        });
        if (valid) {
            document.getElementById('submit_button').removeAttribute('disabled');
        }
    }
</script>