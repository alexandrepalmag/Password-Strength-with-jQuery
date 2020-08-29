$(document).ready(function () {

    $('#idPassword').on('keyup', function () {

        let textElement = $(this).val()
        let strength = 0

        //===========Business rules==================
        $('#typepass').find('h4').html(`Your Password: ${textElement}`)

        if (textElement.length > 0) {
            let sizeElements = textElement.length

            if (sizeElements > 10) {

                strength += 30

            } else {
                let calcMath = (sizeElements * 2)

                strength += calcMath

            }

        }

        let lowerCase = new RegExp(/[a-z]/)
        if (lowerCase.test(textElement)) {
            strength += 16
        }

        let upperCase = new RegExp(/[A-Z]/)
        if (upperCase.test(textElement)) {
            strength += 18
        }

        let regularNumber = new RegExp(/[0-9]/i)
        if (regularNumber.test(textElement)) {
            strength += 16
        }

        let specialChars = new RegExp(/[^a-z0-9]/i)
        if (specialChars.test(textElement)) {
            strength += 20
        }
        //============end Business rules==============

        //======Results Rendering=====================
        //Function to render this result
        let renderResult = (strengthData, color) => {
            return $('#strengthResult').html(
                `
            <h5>Strength Analyses:</h5>
            <h5>${strengthData}% = Very Weak</h5>                
            <div class="progress" style="height: 40px;">
                <div class="progress-bar bg-${color}" role="progressbar" style="width: ${strengthData}%" aria-valuenow="${strengthData}" aria-valuemin="0" aria-valuemax="100"><strong style="font-size: 30px">${strength}%</strong></div>
            </div>`
            )
        }

        if (strength < 21) {
            renderResult(strength, 'danger')//red very weak password
        } else
            if (strength > 20 && strength < 41) {
                renderResult(strength, 'warning')//orange weak password
            } else
                if (strength > 40 && strength < 61) {
                    renderResult(strength, 'secondary')//medium password
                } else
                    if (strength > 60 && strength < 81) {
                        renderResult(strength, 'info')// strong password
                    } else {
                        renderResult(strength, 'success')//very strong password
                    }

        //======Hide the div containing the result====
        if (strength == 0) {

            $('#typepass').addClass('showHidden')

        } else {

            $('#typepass').removeClass('showHidden')

        }

    });

});
