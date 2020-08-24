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

        $('#strengthResult').html(

            `
                `
        )

        //======Results Rendering=====================
        if (strength < 21) {
            //red very weak password
            $('#strengthResult').html(
                `
                <h5>Strength Analyses:</h5>
                <h5>${strength}% = Very Weak</h5>                
                <div class="progress" style="height: 40px;">
                    <div class="progress-bar bg-danger" role="progressbar" style="width: ${strength}%" aria-valuenow="${strength}" aria-valuemin="0" aria-valuemax="100"><strong style="font-size: 30px">${strength}%</strong></div>
                </div>`
            )
        } else
            if (strength > 20 && strength < 41) {
                //orange weak password
                $('#strengthResult').html(
                    `
                    <h5>Strength Analyses:</h5>
                    <h5>${strength}% = Weak</h5>                    
                    <div class="progress" style="height: 40px;">
                        <div class="progress-bar bg-warning" role="progressbar" style="width: ${strength}%" aria-valuenow="${strength}" aria-valuemin="0" aria-valuemax="100"><strong style="font-size: 30px">${strength}%</strong></div>
                    </div>`
                )
            } else
                if (strength > 40 && strength < 61) {
                    //medium password
                    $('#strengthResult').html(
                        `
                    <h5>Strength Analyses:</h5>
                    <h5>${strength}% = Medium </h5>                    
                    <div class="progress" style="height: 40px;">
                        <div class="progress-bar bg-secondary" role="progressbar" style="width: ${strength}%" aria-valuenow="${strength}" aria-valuemin="0" aria-valuemax="100"><strong style="font-size: 30px">${strength}%</strong></div>
                    </div>`
                    )
                } else
                    if (strength > 60 && strength < 81) {
                        // strong password
                        $('#strengthResult').html(
                            `
                    <h5>Strength Analyses:</h5>
                    <h5>${strength}% = Strong </h5>
                    <div class="progress" style="height: 40px;">
                        <div class="progress-bar bg-info" role="progressbar" style="width: ${strength}%" aria-valuenow="${strength}" aria-valuemin="0" aria-valuemax="100"><strong style="font-size: 30px">${strength}%</strong></div>
                    </div>`
                        )
                    } else {
                        //very strong password
                        $('#strengthResult').html(
                            `
                <h5>Strength Analyses:</h5>
                <h5>${strength}% = Very Strong </h5>
                <div class="progress" style="height: 40px;">
                        <div class="progress-bar bg-success" role="progressbar" style="width: ${strength}%" aria-valuenow="${strength}" aria-valuemin="0" aria-valuemax="100"><strong style="font-size: 30px">${strength}%</strong></div>
                    </div>`
                        )
                    }
        //======Results Rendering=====================            

        //======Hide the div containing the result====
        if (strength == 0) {

            $('#typepass').addClass('showHidden')

        } else {

            $('#typepass').removeClass('showHidden')

        }

    });

});