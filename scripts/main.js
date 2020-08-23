$(document).ready(function () {

    $('#idPassword').on('keyup', function () {

        let textElement = $(this).val()
        let strength = 0

        $('#typepass').find('h4').html(`Your Password: ${textElement}`)

        if (textElement.length > 6) {
            strength += 25
        }

        let lettreCapitale = new RegExp(/[a-z]/i)
        if (lettreCapitale.test(textElement)) {
            strength += 25
        }

        let regularNumber = new RegExp(/[0-9]/i)
        if (regularNumber.test(textElement)) {
            strength += 25
        }

        let specialChars = new RegExp(/[^a-z0-9]/i)
        if (specialChars.test(textElement)) {
            strength += 25
        }

        $('#strengthResult').html(

            `   <h5>Strength Analyses:</h5>
                <h5>${strength}</h5>
                <br>
                <div class="progress" style="height: 40px;">
                <div class="progress-bar bg-info" role="progressbar" style="width: ${strength}%" aria-valuenow="${strength}" aria-valuemin="0" aria-valuemax="100"><strong style="font-size: 30px">${strength}%</strong></div>
                </div>
                
                `
        )

        if(strength == 0){
            $('#typepass').addClass('showHidden')
        } else {
            $('#typepass').removeClass('showHidden')
        }

    });

});